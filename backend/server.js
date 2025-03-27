const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/project', (req, res) => {
    res.json({
        studentName: "Smith, John",
        projectName: "Weather App",
        projectUrl: "http://10.0.0.1:3000/",
        projectDescription: "This application provides real-time weather updates for any location worldwide."
    });
});

// Start the server **only if it's not in a test environment**
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Export both `app` and `server`
module.exports = { app, server };
