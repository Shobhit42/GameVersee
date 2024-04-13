// pages/api/auth/login.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const { db } = await connectToDatabase();

  const user = await db.collection('users').findOne({ email, password });

  if (user) {
    // Authentication successful, create a token (you may want to use a more secure method)
    const token = 'your_generated_token';

    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
}
