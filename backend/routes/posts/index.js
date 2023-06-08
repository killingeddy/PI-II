const validate = require("./validation");
const pool = require("../../config/db");
const express = require("express");
const utils = require("./utils");
const router = express.Router();

// POSTS ROUTES
router.get("/", async (req, res) => {

    const client = await pool.connect();

    try {
        client.query(utils.getAllPosts()).then((result) => { res.json(result.rows) }).catch((err) => { res.status(400).json(err) });

        client.release();
    } catch (err) {
        res.json(err);
        client.release();
    }

});

router.get("/highlights", async (req, res) => {
    
    const client = await pool.connect();

    try {
        client.query(utils.getHighlightedPosts()).then((result) => { res.json(result.rows) }).catch((err) => { res.status(400).json(err) });

        client.release();
    } catch (err) {
        res.json(err);
        client.release();
    }
    
});

router.get("/:id", async (req, res) => {

    const client = await pool.connect();

    try {
        client.query(utils.getPostById(req.params.id)).then((result) => { res.json(result.rows) }).catch((err) => { res.status(400).json(err) });

        client.release();
    } catch (err) {
        res.json(err);
        client.release();
    }

});

router.post("/", async (req, res) => {

    const client = await pool.connect();

    try {

        const post = req.body;

        const { error } = validate.addPostSchema.validate(post);

        if (error) return res.status(400).json(error.details[0].message);


        client.query(utils.createPost(post)).then((result) => { res.json(result.rows) }).catch((err) => { res.status(400).json(err) });

        client.release();
    } catch (err) {
        res.json(err);
        client.release();
    }

});

router.put("/:id", async (req, res) => {

    const client = await pool.connect();

    try {

        const post = req.body;

        const { error } = validate.editPostSchema.validate(post);

        if (error) return res.status(400).json(error.details[0].message);

        client.query(utils.updatePost(post, req.params.id)).then((result) => { res.json(result.rows) }).catch((err) => { res.status(400).json(err) });

        client.release();
    } catch (err) {
        res.json(err);
        client.release();
    }

});

router.get("/:id/comments", async (req, res) => {

    const client = await pool.connect();

    try {

        client.query(utils.getPostComments(req.params.id)).then((result) => { res.json(result.rows) }).catch((err) => { res.status(400).json(err) });

        client.release();

    } catch (err) {
        res.json(err);
        client.release();
    }

});

// COMMENTS ROUTES
router.post("/:id/comments", async (req, res) => {

    const client = await pool.connect();

    try {
        const comment = req.body;

        const { error } = validate.addCommentSchema.validate(comment);

        if (error) return res.status(400).json(error.details[0].message);

        client.query(utils.createComment(comment, req.params.id)).then((result) => { res.json(result.rows) }).catch((err) => { res.status(400).json(err); });

        client.release();

    } catch (err) {
        res.json(err);
        client.release();
    }

});

// LIKES ROUTES
router.post("/like/:id", async (req, res) => {

    const client = await pool.connect();

    try {

        const like = req.body;

        client.query(utils.createLike(like, req.params.id))
        .then(utils.updateLike(req.params.id, '+1'))
        .then((result) => { res.json(result.rows) })
        .catch((err) => { res.status(400).json(err), console.log(err) });

        client.release();

    } catch (err) {
        res.json(err);
        client.release();
    }

});

module.exports = router;