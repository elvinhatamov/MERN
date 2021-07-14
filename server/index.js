const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const postRoutes = require('./routers/users.js')
const app = require('../client/src/app.js')



app.use('/users', postRoutes)

app.use(express.json({limit: "30mb", extended : true}));
app.use(express.urlencoded({limit: "30mb", extended : true}));
app.use(cors());

const CONNECTION_URL ='mongodb+srv://users:toronto2016@cluster0.joinc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' 
const PORT = process.env.PORT || 5000;




mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`SERVER RUNNING ON PORT: ${PORT}`)))
.catch((error)=>console.log(error.message));


mongoose.set('useFindAndModify',false)


