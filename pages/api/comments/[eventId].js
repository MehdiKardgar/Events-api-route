//    /api/comments/[eventId].js

function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    // add server-side validation
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = { id: new Date().toISOString(), email, name, text };
    console.log(newComment);
    res.status(201).json({ message: "Added coment.", comment: newComment });
  }

  // if we get a 'GET' request, we want to send back a list of comments.
  if (req.method === "GET") {
    const dummyList = [
      { id: "C1", name: "Max", text: "A first comment!" },
      { id: "C2", name: "Mat", text: "A second comment!" },
    ];

    res.status(200).json({ comment: dummyList });
  }
}

export default handler;
