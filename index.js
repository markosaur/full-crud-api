//5 list of users

const users = [
    {
      "id": 1,
      "first_name": "Raul",
      "last_name": "Wynter",
      "email": "rwynter0@google.com"
    },
    {
      "id": 2,
      "first_name": "Demetri",
      "last_name": "Dakin",
      "email": "ddakin1@google.com"
    },
    {
      "id": 3,
      "first_name": "Lira",
      "last_name": "Collishaw",
      "email": "lcollishaw2@google.com"
    },
    {
      "id": 4,
      "first_name": "Jennette",
      "last_name": "O'Brollachain",
      "email": "jobrollachain3@msn.com"
    },
    {
      "id": 5,
      "first_name": "Annaliese",
      "last_name": "Marishenko",
      "email": "amarishenko4@msn.com"
    },
    {
      "id": 6,
      "first_name": "Delano",
      "last_name": "Millins",
      "email": "dmillins5@yahoo.com"
    },
    {
      "id": 7,
      "first_name": "Allister",
      "last_name": "Rizzetti",
      "email": "arizzetti6@yahoo.com"
    },
    {
      "id": 8,
      "first_name": "Yul",
      "last_name": "Slite",
      "email": "yslite7@yahoo.com"
    },
    {
      "id": 9,
      "first_name": "Stu",
      "last_name": "Liveing",
      "email": "sliveing8@devmountain.com"
    },
    {
      "id": 10,
      "first_name": "Carla",
      "last_name": "Gisbye",
      "email": "cgisbye9@devmountain.com"
    }
  ];


// 1
const express = require('express');

const ctrl = require('./controller/crudOperations')
const swapiCtrl = require('./controllers/http')
// 2
const app = express();

app.use(express.json());



// 4 endpoints
app.use(() => console.log('hello im tlm'))

app.get('/users', (req,res) => {
    res.status(200).send(users)
});

app.get('/user/:id', (req,res)=>{
    const{id} = req.params;
    for(let i = 0; i< users.length; i++){
        if(users[i].id === +id){
            res.status(200).send(users[i]);
        }
    }
})
app.get('/user', (req,res) =>{
    //destructyure id from req.params
    const {id} = req.query;
    const foundUser = users.filter((user) =>{
            if(user.id === +id) return user;
    });
    res.status(200).send(foundUser[0])
});

app.post('/user',(req,res) => {
    const newUser ={
        id: users.length + 1,
        first_name:req.body.first_name || "",
        last_name:req.body.last_name || "",
        email:req.body.email || "",
        hobbies: req.body.hobbies || [],
        laptop: req.body.laptop || {}
    }
        users.push(newUser);

        res.status(200).send(users);

});

app.put('/users/:id', (req, response) => {
    const {id} = req.params;
    for(let i=0; i< users.length; i++){
        if(users[i].id === +id){
            users[i].first_name = "Kyle"
        }
    }
    res.status(200).send(users);
})
// 3
app.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => {
        if(user.id !== +id) return user
    })
    res.status(200).send(users)
})
app.listen(8080, ()=> console.log('server runningyo!'))
// best to do port above 3000

