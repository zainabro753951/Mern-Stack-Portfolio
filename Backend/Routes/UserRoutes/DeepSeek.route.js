import { Router } from "express";
import {
  ConversationHistory,
  defaultConversation,
  deletAllConversation,
  getAllConversation,
  newConversation,
  saveMessages,
} from "../../Controller/UserControllers/DeepSeek.controller.js";
import secureUserRoute from "../../middlewares/secureUserRoute.js";
const router = Router();

router.get(
  "/user/deepseek/default_conversation",
  secureUserRoute,
  defaultConversation
);
router.post("/user/deepSeek/send_message", secureUserRoute, saveMessages);

router.get(
  "/user/deepseek/conversation_history",
  secureUserRoute,
  ConversationHistory
);

router.get(
  "/user/deepseek/all_conversations",
  secureUserRoute,
  getAllConversation
);

router.post(
  "/user/deepseek/create_conversation",
  secureUserRoute,
  newConversation
);

router.delete(
  "/user/deepseek/delete_conversation",
  secureUserRoute,
  deletAllConversation
);

export default router;
