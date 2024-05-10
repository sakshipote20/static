import express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url';


const app = express();
const PORT = 3005;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.get('/:page', (req,res)=>{
    const page = req.params.page;
    res.sendFile(__dirname + `/public/${page}`)
})

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
});