import { urlencoded } from "body-parser";
import prisma from "./client";
import { PrismaClient } from '@prisma/client'
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



app.get('/', async (req, res) => {
    //prisma query to check if req cookie matches user in database
    const { username, password } = req.body
    const user = await prisma.users.findUnique({
        where: {
            email: req.body.username,
            password: req.body.password,
        },);

    if (user === req.cookies) {
        res.redirect('/static/dashboard')
    };
    else {
        res.sendFile(__dirname + '/static/login.html');
    }
},




    app.post('/signup', async (req, res) => {
        const { username, password } = req.body
        const user = await prisma.users.create({
            data: {
                email: req.body.username,
                password: req.body.password,
            },
        },)
        res.redirect(__dirname + '/static/failedlogin.html');
    }),

    //post route receiving data 
    app.post('/', async (req, res) => {
        //prisma query to check if user input is valid/existing in database
        const { username, password } = req.body
        const user = await prisma.users.findUnique({
            where: {
                email: req.body.username,
                password: req.body.password,
            },)

        //if users is not in the database rediret to failed login page

        if (!user) {
            res.redirect(__dirname + '/static/failedlogin.html');
        },

        //if prisma query succeeds, assign req data to a user object to be passed in to res.cookie function.
        //res function should update the client with a cookie to preserve user session and redirect to dashboard

        else {
            res.cookie('userId, user.email, { httpOnly: true }')
            res.redirect('/static/dashboard')
        }
    });


// get cookies 
//check for auth cookies 
// if authenticated redirect to dashboard 
//if no then return login page
//on the app.post on success you want to save the cook