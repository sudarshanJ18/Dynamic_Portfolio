// pages/api/admin/projects/addProject.js

import { addProject } from '../../../controllers/projectController';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      // Add new project
      try {
        const { title, description, technologies } = req.body; // Example params
        const newProject = await addProject({ title, description, technologies });
        res.status(201).json({ success: true, data: newProject });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
