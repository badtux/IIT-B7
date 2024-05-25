
const express = require('express');
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('boo');
const db1 = new sqlite3.Database('boo_1');
const path = require('path');

app = express();
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`app started at localhost:${port}`);
});

app.get('/locations', (req, res) => {
    // Simulated data

    const planet = "Earth";
    const locations = [
      { name: 'New York', country: 'USA' },
      { name: 'London', country: 'UK' },
      { name: 'Tokyo', country: 'Japan' },
      { name: 'Sydney', country: 'Australia' }
    ];
    res.json({
        locdata: locations, 
        planet : planet
    });
});








// app.get('/say/hi', (req,res) =>{
//     console.log(req.query.name);
//     console.log(req.query.time);

//     var time = req.query.time;

//     var msg = 'Hello ';

//     if(time == 'm') { msg = 'Good Morning! '+req.query.name; }
//     else { msg += req.query.name; } 

//     db.serialize(() => {
//         db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
        
//         db1.run("CREATE TABLE IF NOT EXISTS greetings (msg TEXT, time TEXT)");
    
//         const stmt1 = db1.prepare("INSERT INTO greetings VALUES (?,?)");
//         stmt1.run(msg, time);
//         stmt1.finalize();

//         const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//         for (let i = 0; i < 10; i++) {
//             stmt.run("Ipsum " + i);
//         }
//         stmt.finalize();
    
//         db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
//             console.log(row.id + ": " + row.info);
//         });
//     });
    
//    // db.close();
    
//     const out = {
//         'msg' : msg,
//         'status': true
//     };

//     res.json(out);
// })