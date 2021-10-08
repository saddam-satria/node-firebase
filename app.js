const express = require('express');
const dotenv = require('dotenv');
const routes = require('./apps/routes/Routes');
const path = require('path');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3030;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'apps/views'));

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`server running on ... ${PORT}`);
});
