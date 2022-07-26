var express = require('express')
var router = express.Router()
const Post = require('../models/Post')


router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    }
    catch (e) {
        res.json({ message: e.message })
    }
})

router.post('/', async (req, res) => {
    const post = new Post({ title: req.body.title, content: req.body.content })
    try {
        await post.save()
        console.log(post)

    }
    catch (e) {
        res.json({ message: e.message })
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const posts = await Post.find({"_id": req.params.id});
        res.json(posts)
    }
    catch (e) {
        res.json({ message: e.message })
    }
})

module.exports = router