import { getUser } from "../controller/User.js";

module.exports = async (req, res) => {
    await connectDatabase();

  if (req.method === "GET") {
    await getUser(req, res);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
