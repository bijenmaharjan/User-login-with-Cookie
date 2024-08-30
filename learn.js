// const express = require('express');
// const app = express();
// const cookieParser = require('cookie-parser')


// app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.cookie("name", "Bijen");
//   res.send("done");

// })

// app.get('/read', (req, res) => {
//   console.log(req.cookies);
//   res.send("read page")
// })

// app.listen(3000);



const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

app.use(cookieParser());

app.get('/', (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash("bijen", salt, (err, hash) => {
      console.log(hash);
    })

  })
})



app.get('/login', (req, res) => {
  let token = jwt.sign({ email: "harsh@gmail.com" }, "secret");
  res.cookie("token", token);
  res.send("login page");
})

app.get('/read', (req, res) => {
  console.log(req.cookies.token);
  res.send('read');
})

app.get('/verify', (req, res) => {
  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data);
})


app.listen(3000);






