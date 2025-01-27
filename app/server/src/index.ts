import express from 'express';
import templateRoutes from './routes/templateRoutes';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send({ message: 'Hello from TypeScript Express!' });
});

app.use('/templates', templateRoutes);

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});