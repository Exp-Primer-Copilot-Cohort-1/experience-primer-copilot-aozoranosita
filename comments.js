// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for DELETE /comments/:id
// 5. Create a route for PUT /comments/:id
// 6. Create a route for GET /comments/:id
// 7. Create a route for GET /comments/:id/replies

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Reply = require('../models/reply');

// 2. Create a route for GET /comments
router.get('/', (req, res) => {
        Comment.find({}, (err, comments) => {
                if (err) {
                        res.status(500).send
                                return;
                }
                res.status(200).send(comments);
        });
});

// 3. Create a route for POST /comments
router.post('/', (req, res) => {
    const comment = new Comment(req.body);
    comment.save((err, comment) => {
        if (err) {
            res.status(500).send
                return;
        }
        res.status(201).send(comment);
        }
        );
});

// 4. Create a route for DELETE /comments/:id   
router.delete('/:id', (req, res) => {
        Comment.findByIdAndRemove(req.params.id, (err, comment) => {
                if (err) {
                        res.status(500).send
                                return;
                }
                res.status(200).send(comment);
                }
                );
});

// 5. Create a route for PUT /comments/:id
router.put('/:id', (req, res) => {
    Comment.findByIdAndUpdate
        (req.params
                .id, req.body, { new: true }, (err, comment) => {
                    if (err) {
                        res.status(500).send
                            return;
                    }
                    res.status(200).send(comment);
                } 
        );
});


// 6. Create a route for GET /comments/:id
router.get('/:id', (req, res) => {
    Comment.findById(req.params.id, (err, comment) => {
        if (err) {
            res.status(500).send
                return;
        }
        res.status(200).send(comment);
        }
        );
});

// 7. Create a route for GET /comments/:id/replies
router.get('/:id/replies', (req, res) => {
    Reply.find({ commentId: req.params.id }, (err, replies) => {
        if (err) {
            res.status(500).send
                return;
        }
        res.status(200).send(replies);
        }
        );
});

module.exports = router;

// Path: replies.js
// Create web server
// 1. Create a web server
// 2. Create a route for GET /replies