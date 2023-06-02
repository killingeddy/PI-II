const validate = require("./validation");
const pool = require("../../config/db");
const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");
const utils = require("./utils");
const router = express.Router();

router.post("/register", async (req, res) => {

    const client = await pool.connect();

    try {
        const { email, name, password } = req.body;

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const { error } = validate.registerSchema.validate(req.body);

        client.query(utils.checkEmail(email)).then((result) => {
            if (result.rows.length > 0) {
                res.json({ error: "Email already exists" });
            } else {
                if (error) {
                    return res.status(400).json({ error: error.details[0].message });
                }
        
                client.query(utils.register(email, name, hashedPassword)).then((result) => { res.json(result.rows[0]) }).catch((err) => { res.status(400).json(err) });
            }
        });

        client.release();
    } catch (err) {
        res.json(err);
        client.release();
    }

});

router.post("/login", async (req, res) => {

    const client = await pool.connect();

    try {
        const { email, password } = req.body;

        const { error } = validate.loginSchema.validate(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        client.query(utils.login(email)).then((result) => {
            if (result.rows.length > 0) {
                const user = result.rows[0];
                const isPasswordCorrect = bcrypt.compareSync(password, user.password);
                if (isPasswordCorrect) {
                    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
                    res.json({ token, user });
                } else {
                    res.json({ error: "Password is incorrect" });
                }
            } else {
                res.json({ error: "Email does not exist" });
            }
        }).catch((err) => { res.status(400).json(err), console.log(err); });

        client.release();
    } catch (err) {
        res.json(err);
        client.release();
    }

});

router.put("/edit/:id", async (req, res) => {

    const client = await pool.connect();

    try {
        const { id } = req.params;

        const { email, name, password } = req.body;

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);

        const hashedPassword = bcrypt.hashSync(password, salt);

        const { error } = validate.editSchema.validate(req.body);
        
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        client.query(utils.edit(id, email, name, hashedPassword)).then((result) => { res.json(result.rows[0]) }).catch((err) => { res.status(400).json(err) });

        client.release();
    } catch (err) {
        res.json(err);
        client.release();
    }

});

router.get("/getuser/:id", async (req, res) => {

    const client = await pool.connect();

    try {
        const { id } = req.params;

        client.query(utils.getUser(id)).then((result) => { res.json(result.rows[0]) }).catch((err) => { res.status(400).json(err) });

        client.release();
    } catch (err) {
        res.json(err);
        client.release();
    }

});

module.exports = router;