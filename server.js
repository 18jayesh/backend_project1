const app = require('./src/app');
require('dotenv').config();
const connectDB = require('./src/db/db');

connectDB();
let port = 8080;
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});



