const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Example routes
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Your other routes here...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
