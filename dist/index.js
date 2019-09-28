import express from 'express';
import setup from './app';
let app = express();
setup(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app escuchando en puerto ${PORT}`);
});