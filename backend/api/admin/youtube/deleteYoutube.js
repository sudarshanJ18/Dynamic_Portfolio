// pages/api/admin/youtube/deleteYoutube.js

import { deleteYoutubeById } from '../../../controllers/youtubeController';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query; // Get dynamic ID from the query

  switch (method) {
    case 'DELETE':
      // Delete YouTube video by ID
      try {
        const result = await deleteYoutubeById(id);
        if (!result) {
          return res.status(404).json({ success: false, message: 'YouTube video not found' });
        }
        res.status(200).json({ success: true, message: 'YouTube video deleted' });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
