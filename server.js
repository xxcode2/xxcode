const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Handle directory requests (ending with /)
app.get('*/$', (req, res, next) => {
    const dirPath = req.path.slice(0, -1); // Remove trailing slash
    const indexPath = path.join(__dirname, 'public', dirPath, 'index.html');
    res.sendFile(indexPath, (err) => {
        if (err) next();
    });
});

// Handle requests without file extension
app.get('*', (req, res, next) => {
    if (!req.path.includes('.')) {
        const filePath = path.join(__dirname, 'public', req.path + '.html');
        res.sendFile(filePath, (err) => {
            if (err) next();
        });
    } else {
        next();
    }
});

// Handle all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 
