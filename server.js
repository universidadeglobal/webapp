const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

const variavel = process.env.PAGINA;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, `${variavel}`));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
});