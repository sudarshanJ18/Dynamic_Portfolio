// pages/api/admin/projects/deleteProject.js

import { deleteProjectById } from '../../../controllers/projectController';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query; // Get dynamic ID from the query

  switch (method) {
    case 'DELETE':
      // Delete project by ID
      try {
        const result = await deleteProjectById(id);
        if (!result) {
          return res.status(404).json({ success: false, message: 'Project not found' });
        }
        res.status(200).json({ success: true, message: 'Project deleted' });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
