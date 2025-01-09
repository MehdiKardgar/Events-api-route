// pages/api/newsletter.js

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://new-user-01:C69Hib1gCHCWDAdR@cluster0.yq9lo.mongodb.net/newsletter?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();

    await db.collection("emails").insertOne({ email: userEmail });

    client.close();

    // console.log(userEmail);
    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;

// Pass
// C69Hib1gCHCWDAdR
