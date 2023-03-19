// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import admin from "firebase-admin";
import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import { adminDb } from "@/firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //getting the properties from request body
  const { prompt, chatId, model, session } = req.body;

  //checking if properties are valid
  if (!prompt) {
    res.status(400).json({ answer: "Please enter a prompt!" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please provide the correct chatId!" });
    return;
  }

  //Query the model

  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "Sorry, I don't know the answer to that question yet!",
    // sender: "ChatGPT",
    createTime: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      image:
        "https://e7.pngegg.com/pngimages/922/865/png-clipart-discord-pepe-the-frog-video-games-pepe.png",
    },
  };

  await adminDb
  .collection("users")
  .doc(session?.user?.email)
  .collection("chats")
  .doc(chatId)
  .collection("messages")
  .add(message);

  res.status(200).json({ answer: message.text });
}
