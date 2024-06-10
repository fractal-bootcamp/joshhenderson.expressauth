import { urlencoded } from "body-parser";

const express = require('express')
const app = express() //create an express app
const port = 3000
const bodyParser = require('body-parser'); // middleware
const cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// make sure the app is listening to the port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// app.use {
//     secret: 'Major Key'
// })

// const users = [
//     {
//         email: "jill@jill.com",
//         password: "passwordone"
//     },
//     {
//         email: "josh@gmail.com",
//         password: "passwordtwo"
//     }
// ]

// Route to Login - everyone must authenticate


// if user is authenticated then redirect to dashboard
//if user is not authenticated then they must log in and receive a cookie
//if user has never signed up they are redirected to sign up page 
function isAuthenticated(req: Request, res) {
    const cookie = req.;
    if (cookie === undefined) {
        res.cookie
    }
    // this is only called when there is an authenticated user due to cookie being undefined
    app.get('/', isAuthenticated, function (req, res) {
        res.send(__dirname + '/static/login.html')
    })

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/static/login.html');
    });

};



//post route
app.post('/', (req, res) => {
    // sign in code
    const username = req.body.username;
    const password = req.body.password;


    const user = users.find(user => user.email === req.body.username && user.password == req.body.password)

    if (user) {
        req.session.user = req.body.email
        req.session.regenerate
        req.session.save

        res.redirect('/static/dashboard')
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