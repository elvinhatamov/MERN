const express = require('express');

const { getPost,createPost } = require('../controller/users');
const router = express.Router();

// http://localhost:5000/users

router.get('/',getPost )
router.post('/',createPost)

module.exports = router;
