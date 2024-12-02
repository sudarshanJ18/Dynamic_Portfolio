import { isAuthenticated } from "../middlewares/auth.js";
import { updateUser } from "../controller/User.js";

module.exports = async (req, res) => {
  if (req.method === "PUT") {
    await isAuthenticated(req, res, () => updateUser(req, res));
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
