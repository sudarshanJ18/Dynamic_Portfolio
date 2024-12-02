import connectDB from "../lib/mongodb.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { myProfile } from "../controller/User.js";

module.exports = async (req, res) => {
  await connectDB();  // Ensure DB connection is established

  if (req.method === "GET") {
    await isAuthenticated(req, res, () => myProfile(req, res));
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
