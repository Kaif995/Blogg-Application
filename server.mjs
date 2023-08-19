import express from 'express';
// import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();
const app = express();
app.use(express.json());
// import fileupload from 'express-fileupload';
// import { fileURLToPath } from 'url'; // Import fileURLToPath from url module
// routes
app.get('/', (req, res) => {
    res.sendfile("./public/index.html")
})

app.get('/editor', (req, res) => {
    res.sendfile("./public/editor.html")
})

// app.post('/upload', (req, res) => {
//     let file = req.files.image;
//     let date = new Date();
//     // image name
//     let imagename = date.getDate() + date.getTime() + file.name;
//     // image upload path
//     let path = 'public/uploads/' + imagename;

//     // create upload
//     file.mv(path, (err, result) => {
//         if(err){
//             throw err;
//         } else{
//             // our image upload path
//             res.json(`uploads/${imagename}`)
//         }
//     });
// });

app.get("/:blog", (req, res) => {
    res.sendfile("./public/blog.html")
})
// error handling
// app.use((req, res) => {
//     res.json("404")
// })
app.use("/static", express.static(path.join(__dirname, 'static')))

app.use(express.static(path.join(__dirname, 'public')))
// listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})

// const __filename = fileURLToPath(import.meta.url); // Get the current file's path
// const __dirname = dirname(__filename); // Get the directory name

// let initial_path = join(__dirname, "public");
// // app.use("/static", express.static(path.join(__dirname, 'static')))

// // middleware
// app.use(fileupload());
