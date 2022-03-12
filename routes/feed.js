const express = require('express');
const { body } = require('express-validator');
 
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();
 
// localhost://8080/feed/posts
router.get('/posts', isAuth, feedController.getPosts);

router.get('/post/:postId', isAuth, feedController.getPost);

// localhost:8080/feed/post
router.post('/post', isAuth,
[
     body('title')
          .trim()
          .isLength({min: 5}),
     body('content')
          .trim()
          .isLength({min: 5})
] ,feedController.createPost);

// put / patch

router.put('/post/:postId', isAuth,
[
     body('title')
          .trim()
          .isLength({min: 5}),
     body('content')
          .trim()
          .isLength({min: 5})
], feedController.updatePost );

router.delete('/post/:postId', isAuth, feedController.deletePost);
 
module.exports = router;
