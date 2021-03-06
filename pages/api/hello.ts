import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // http://localhost:3000/api/hello?name=Ladji
  const name = req.query['name'] ?? 'Cis'
  res.status(200).json({ text: 'Hello : ' + name });
}