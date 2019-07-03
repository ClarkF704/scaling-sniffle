const express = require('express');
const app = express();
const cors = require('cors');

// Database

//

// Middleware
app.use(cors());

app.use(express.json({
    extended: false
}))
// 

app.get('/', (req, res) => res.send('API is running'))

// Routes

//

const PORT = process.env.PORT || 5032;

app.listen(PORT, () => console.log(`Backend server is listening tp port ${PORT}`));

