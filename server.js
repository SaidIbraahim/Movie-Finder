import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config(); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY; 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { movie: null, error: null });
});

app.post('/movies', async (req, res) => {
  const movieName = req.body.movie || 'Inception';
  const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    
    if (data.Response === 'False') {
      throw new Error('No such movie found');
    }
    
    res.render('index', { movie: data, error: null });
  } catch (error) {
    console.error('Failed to fetch movie data:', error.message);
    res.render('index', { movie: null, error: error.message || 'Unable to fetch movie data' });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
