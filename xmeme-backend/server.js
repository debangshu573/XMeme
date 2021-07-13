import express from 'express';
import mongoose from 'mongoose';
import Posts from './dbPosts.js';
import Pusher from 'pusher';

// app config
const app=express();
const port = process.env.PORT || 8081;

const pusher = new Pusher({
    appId: "1155376",
    key: "14595cfe5a0e3c20edaa",
    secret: "e03bacdab1995c420d34",
    cluster: "eu",
    useTLS: true
});

// middleware
app.use(express.json());

// DB Config


const connection_url='mongodb+srv://admin:12345mern@cluster0.hqyvb.mongodb.net/xmemedb?retryWrites=true&w=majority';
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true
});


// ???
const db = mongoose.connection;

db.once('open' , ()=>{
    console.log("DB Connected");
    const postCollection = db.collection('postcontents');
    const changeStream = postCollection.watch();

    changeStream.on('change', (change)=>{
        console.log(change);
    });
});



// API Routes
app.get('/',(req,res)=> {
    res.status(200).send("hello world");
});

app.post('/memes',(req,res)=>{
    const dbPost =req.body;

    Posts.create(dbPost , (err,data) =>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
});

// Listen
app.listen(port, ()=>console.log(`Listening on localhost: ${port}`));