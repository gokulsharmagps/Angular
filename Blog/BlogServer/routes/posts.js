var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://gokulsharmagps:prithvi638@ds239009.mlab.com:39009/blogposts', ['posts']);

// Get All posts
router.get('/posts', function(req, res, next){
    db.posts.find(function(err, posts){
        if(err){
            res.send(err);
        }
        res.json(posts);
    });
});

// Get Single post
router.get('/post/:id', function(req, res, next){
    db.posts.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, post){
        if(err){
            res.send(err);
        }
        res.json(post);
    });
});

//Save post
router.post('/post', function(req, res, next){
    var post = req.body;
    if(!post.title || !(post.author + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.posts.save(post, function(err, post){
            if(err){
                res.send(err);
            }
            res.json(post);
        });
    }
});

// Delete post

// Update post

module.exports = router;
