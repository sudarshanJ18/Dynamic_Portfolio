import { login } from "../controller/User.js";

module.exports = async (req, res) => {
  if (req.method === "POST") {
    await login(req, res);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
