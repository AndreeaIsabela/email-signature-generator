import express from 'express';
import cors from 'cors';
import templateRoutes from './routes/templateRoutes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello from TypeScript Express!' });
});

app.use('/templates', templateRoutes);

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});