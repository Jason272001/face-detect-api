const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors');
const app = express();
const knex = require('knex');

const signin = require('./controllers/signin');
const signup = require('./controllers/signup');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
    const db=knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',

    user : 'postgres',
    password : 'MeMe1965',
    database : 'smart-brain'
  }
});

app.use(bodyParser.json());
app.use(cors())


app.get('/', (req, res)=> {
    res.send(database.users);
})

app.post('/signin', (req,res)=>{signin.handleSignin(req,res,db,bcrypt)})

app.post('/register',  (req,res)=>{signup.handleSignup(req,res,db,bcrypt)})

app.get('/profile/:id',(req,res)=>{profile.handleProfile(req,res,db)} )

app.put('/image',(req,res)=>{image.handleImage(req,res,db)} )


app.listen(3000, () => {
    console.log('app runing port 3000')
})