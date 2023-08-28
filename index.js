const express = require('express');
const multer = require('multer');
const mime = require('mime-types');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs'); 

const app = express();
const port = 3000;

const upload = multer({ dest: 'uploads/' }); // 'uploads/' is the destination directory for uploaded files


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }

    const mimeType = mime.lookup(req.file.originalname);
    if (!mimeType) {
        return res.status(400).json({ error: 'Invalid file format.' });
    }
    

    const fileData = {
        Filename: req.file.originalname,
        Filetype: req.file.mimetype,
        Size: req.file.size,
        fieldname: req.file.fieldname,
    };
    fs.readFile(req.file.path, 'utf8', (err, content) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ error: 'Internal server error.' });
        }

        // Calculate the number of characters and words
        const numCharacters = content.length;
        const numWords = content.split(/\s+/).filter(word => word !== '').length;

        // Add character and word count to the fileData object
        fileData.numCharacters = numCharacters;
        fileData.numWords = numWords;
        // res.json(fileData);
        const queryParams = new URLSearchParams(fileData);
        res.redirect(`/file-data.html?${queryParams.toString()}`);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
