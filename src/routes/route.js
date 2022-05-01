const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const authorController= require("../controllers/authorController")
const blogController = require('../controllers/blogController')

const mw = require('../middleware/auth')

router.post("/authors",  authorController.createAuthor)

router.post("/loginAuthor", authorController.loginAuthor)

router.post('/blogs', mw.authentication, blogController.createBlog)

router.get('/blogs' , mw.authentication, blogController.getBlogs)

router.put('/blogs/:blogId', mw.authentication, mw.authorization, blogController.updateBlogs)

router.delete('/blogsById/:blogId', mw.authentication, mw.authorization, blogController.deleteByBlogId)

router.delete('/blogs', mw.authentication, blogController.deleteByQuery)

//router.get('/blogs/get/' , mw.authentication, newBlogController.getBlogs)
module.exports = router;