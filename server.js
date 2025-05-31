const expreess = require('express');
const cors = require('cors');


require('dotenv').config();
const app = expreess();
app.use(cors());
app.use(expreess.json());

//Rutas

app.use('/api/auth', require('./routes/authRoutes'));


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor Corriendo en puerto : ${PORT}`);
});