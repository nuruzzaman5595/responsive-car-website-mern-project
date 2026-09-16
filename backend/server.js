import express from 'express';
import cors from 'cors';
import 'dotenv/config';



const PORT =4000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '1mb' }));

//DB


// Routes

app.get('/', (req, res) => {
  res.send('Api is  Working!');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
})