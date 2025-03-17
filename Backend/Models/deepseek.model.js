import mongoose, { Schema, model } from "mongoose";

const conversationSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    sessionId: { type: String, required: true, unique: true },
    messages: [
      {
        sender: String, // "user" or "ai"
        message: String, // The actual message
        timestamp: Date, // When the message was sent
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Conversation = model("conversations", conversationSchema);

export default Conversation;
