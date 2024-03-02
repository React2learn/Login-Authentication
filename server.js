import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = process.env.PORT || 8000;

// Load environment variables from .env file
config();

// Middleware
app.use(cors());

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from a directory
app.use(express.static(path.join(__dirname, 'Login-auth')));

// Routes
app.get('/', (req, res) => {
    res.send("hello server is running");
});

app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    console.log('Received username:', username);
    console.log('Received password:', password);

    // Send response
    res.send('Successfully logged in');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
