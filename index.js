const express = require('express');
const methodoverride = require('method-override')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const mongodbClient = require('mongodb').MongoClient;

const app = express();

const cors = require('cors');

app.use(cors())
app.use(bodyParser.json());

const connection = 'mongodb+srv://admin:admin@cluster0.edgifwx.mongodb.net/?retryWrites=true&w=majority'

var users;
var login;
var addpro;
var register;
mongodbClient.connect(connection,(err,succ)=>{
    if (err) throw err;
    console.log("db connected")
    users = succ.db('database2').collection('users');
    login = succ.db('database2').collection('login');
    addpro = succ.db('database2').collection('addpro');
    register = succ.db('database2').collection('Register');
})

// app.get("/user1",(req,res)=>{
//     users.insertOne({
//         name:"lkjh"
//     }).then((succ)=>{
//         res.send(succ)
//     })
// })

app.post('/uregist',((req,res)=>{
    console.log(req.body);
    register.findOne({Email:req.body.Email,
        Password:req.body.Password
    }).then((succ)=>{
        console.log(succ);
        res.send(succ);
    })
}))

app.post("/ulogin",(req,res)=>{
    console.log(req.body)
    register.find({Email:req.body.Email,
    Password: req.body.Password
    }).toArray().then((succ)=>{
        res.send(succ);
    })
})

app.post('/uregister',(req,res)=>{
    console.log(req.body);
    register.insertOne(req.body).then((succ)=>{
        console.log(succ);
        res.send('hogya');
    })

})

app.post('/uproduct',(req,res)=>{
    // console.log(req.body);
    var id = new mongodb.ObjectId(req.body.prod);
    // console.log(id);
    addpro.find({ _id:id }).toArray().then((succ)=>{
        // console.log(succ);
        res.send(succ);
    })
})


app.post('/addcart',(req,res)=>{
    // console.log(req.body);
    var id = new mongodb.ObjectId(req.body.prod);
    // console.log(id);
    addpro.find({ _id:id }).toArray().then((succ)=>{
        // console.log(succ);
        res.send(succ);
    })
})




app.get("/getuser",(req,res)=>{
    login.find().toArray().then((succ)=>{
        // console.log(succ)
        res.send(succ)
    })
})

app.post("/addpro",(req,res)=>{
    console.log(req.body)
    addpro.insertOne(req.body).then((succ)=>{
        res.send("data added")
    })
})

app.get("/getpro",(req,res)=>{
    addpro.find().toArray().then((succ)=>{
        res.send(succ)
    })
})

app.post('/addpro2',(req,res)=>{
    // console.log(succ)
    addpro.find().toArray().then((succ)=>{
        res.send(succ)
    })
})

app.listen(1200,(req,res)=>{
    console.log("server started")
})
