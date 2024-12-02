import { isAuthenticated } from "../../../middlewares/auth.js";
import { deleteTimeline } from "../../../controller/User.js";

module.exports = async (req, res) => {
  const { id } = req.query;
  if (req.method === "DELETE") {
    await isAuthenticated(req, res, () => deleteTimeline(req, res, id));
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
