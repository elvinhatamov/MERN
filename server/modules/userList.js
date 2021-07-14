const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    page: Number,
    per_page: Number,
    total:Number,
    total_pages: Number,
    data:{
    email: String,
    first_name: String,
    last_name:String,
    avatar: String
    }
})

const userList = mongoose.model('userList', postSchema)

export default userList;