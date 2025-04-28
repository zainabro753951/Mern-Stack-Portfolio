import axios from "axios";
import OpenAI from "openai";
import { io } from "../../Socket/server.js";
import Conversation from "../../Models/deepseek.model.js";

const openai = new OpenAI({
  baseURL: "https://api.inference.net/v1",
  apiKey: process.env.INFERENCE_API_KEY,
});

export const defaultConversation = async (req, res) => {
  const sessionId = `session_${Date.now()}_${crypto.randomUUID().slice(0, 9)}`;
  res.status(200).json({ sessionId });
};

export const saveMessages = async (req, res) => {
  try {
    const { sessionId, message, sender } = req.body;
    const userId = req.user._id;

    if (!message) {
      return res.status(400).json({ error: "Message is required!" });
    }

    // Find or create conversation
    let conversation = await Conversation.findOne({ sessionId });

    if (!conversation) {
      conversation = new Conversation({
        userId,
        sessionId,
        messages: [],
      });
    }

    // Save user message
    conversation.messages.push({
      sender,
      message,
      timestamp: new Date(),
    });
    await conversation.save();

    io.to(sessionId).emit("user-message", { sender, message });

    // Get AI response
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-v3/fp-8",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      stream: true,
    });

    const response = [];
    for await (const chunk of completion) {
      const deltaContent = chunk.choices[0]?.delta.content;
      if (deltaContent) {
        response.push(deltaContent);
        process.stdout.write(deltaContent);
        io.to(sessionId).emit("ai-realtimeMessage", {
          sender: "ai",
          message: deltaContent,
        });
      }
    }

    const aiResponse = response.join("");

    // Save AI response
    conversation.messages.push({
      sender: "ai",
      message: aiResponse,
      timestamp: new Date(),
    });
    await conversation.save();
    io.to(sessionId).emit("ai-response", { sender: "ai", message: aiResponse });

    res.json(aiResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const newConversation = async (req, res) => {
  console.log("I am running");
  const userId = req.user._id;
  const sessionId = `session_${Date.now()}_${crypto.randomUUID().slice(0, 9)}`;
  console.log(sessionId);
  res.status(200).json({ sessionId });
};

export const ConversationHistory = async (req, res) => {
  const { sessionId } = req.query;
  const userId = req.user._id;

  if (!sessionId) {
    return res.status(400).json({ error: "Session ID is required" });
  }
  const history = await Conversation.find({ sessionId }).sort({
    timestamp: 1,
  });
  res.status(200).json(history);
};

export const getAllConversation = async (req, res) => {
  try {
    const userId = req.user._id;
    const conversations = await Conversation.find({ userId }).sort({
      timestamp: 1,
    });
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500), json("Internal Server Error!");
  }
};

export const deletAllConversation = async (req, res) => {
  try {
    const deleted = await Conversation.deleteMany();
    console.log(deleted);
    
  } catch (error) {
    return res.status(500).json("Internal Server Error!");
  }
};
