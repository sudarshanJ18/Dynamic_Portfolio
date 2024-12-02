// pages/api/admin/youtube/addYoutube.js

import { addYoutube } from '../../../controllers/youtubeController';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      // Add YouTube video
      try {
        const { title, url, description } = req.body; // Assume these are the parameters passed
        const newYoutube = await addYoutube({ title, url, description });
        res.status(201).json({ success: true, data: newYoutube });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
