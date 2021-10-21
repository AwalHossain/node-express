const express = require ('express');

const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

const users =[
    {
        "id":0,
        "name":"kajim",
        "job":"students",
        "age":23
    },
    {"id":1, "name":"mabia", "job":"students", "age":23},
    {"id":2, "name":"bashir", "job":"students", "age":23},
    {"id":3, "name":"maklu", "job":"students", "age":23},
    {"id":4, "name":"kolim", "job":"students", "age":23},
    {"id":5, "name":"nobin", "job":"students", "age":23},
]

app.get("/users", (req, res)=>{
    const search = (req.query.search);
    if(search){
        const searchResult = users.filter(user=> user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
})

// app.post('/users', (req, res)=>{
//     console.log('post hitted', req.body)
//     res.send("inside post")
// })
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send('inside post')
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

const wind =(req, res)=>{
    res.send("jello jello jello this is my first node ever and i am becoming bore by this. are you ready ? Hey are you listening? ka-boom kolom ki jhon")
}

app.get('/', wind)
app.get('/users', (req,res)=>{
    res.send(users)
})
// app.get('/users/:id', (req, res)=>{
//     const id = req.params.id;
//     const user = users[id];
//     res.send(user)

// })

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.listen(port, (req)=>{
    console.log("I am listenting through", port);
})