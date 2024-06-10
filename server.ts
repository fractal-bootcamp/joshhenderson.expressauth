const express = require('express')
const app = express() //create an express app
const port = 3000
const bodyParser = require('body-parser'); // middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const users = [
    {
        email: "jill@jill.com",
        password: "passwordone"
    },
    {
        email: "josh@gmail.com",
        password: "passwordtwo"
    }
]

console.log("hello world")




// Route to Login
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
});



//post route
app.post('/', (req, res) => {
    // Insert Login Code Here
    const username = req.body.username;
    const password = req.body.password;


    const user = users.find(user => user.email === req.body.username && user.password == req.body.password)

    if (user) {
        res.sendFile(__dirname + '/static/dashboard.html');
    }
    else {
        res.sendFile(__dirname + '/static/failedlogin.html');
    }


});

// get cookies 
//check for auth cookies 
// if authenticated redirect to dashboard 
//if no then return login page
//on the app.post on success you want to save the cook