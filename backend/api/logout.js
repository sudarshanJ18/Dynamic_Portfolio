import { logout } from "../controller/User.js";

module.exports = async (req, res) => {
  if (req.method === "GET") {
    await logout(req, res);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
