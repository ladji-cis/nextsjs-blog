export default function handler(req, res) {
  // http://localhost:3000/api/hello?name=Ladji
  const name = req.query['name'] ?? 'Cis'
  res.status(200).json({ text: 'Hello : ' + name });
}