const express = require('express'); // Module Express
const app = express(); 
const port = 3000; //Port Server

// Templating Engine
app.set('view engine', 'ejs');

// Url & Menampilkan FIle index.html
app.get('/', (req, res) => {
    res.render('index', { 
        nama: 'Farida Fadilah',
        title: 'Halaman Index'
    }); 
});
// Url /About & Menampilkan File about.html
app.get('/about', (req, res) => {
    res.render('about', { title: 'Halaman About'}); 
});
// Url /contact & Menampilkan File Contact.html
app.get('/contact', (req, res) => {
    // array data
    cont = [
        {
            nama: 'Farida Fadilah',
            email: 'farida@gmail.com'
        },
        {
            nama: 'Tiara Andini',
            email: 'tiara@gmail.com'
        },
        {
            nama: 'Arimbi',
            email: 'arimbi@gmail.com'
        }
    ];
    res.render('contact', { 
        title: 'Halaman Contact',
        cont
    }); 
});
// Url /contact
app.get('/product/:id', (req, res) => {
    // Mengambil parameter id dan query Category
    res.send(`Product Id:  ${req.params.id} <br> ID Category: ${req.query.category}`); 
});
// Url selain diatas
app.use('/', (req, res) => {
    res.status(404);
    res.send('Not Found: 404');
});

// Membuat Server
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});