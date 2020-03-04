const express = require ('express');
const router = express.Router();
const db = require('../data/db');

router.post('/', (req, res, next) => {
    let id = req.body.id;
    let password = req.body.password;
    let login = 'SELECT * FROM login WHERE id=?';
    
    //id password 값 받아와 login process
    db.query(login, [id], (error, result, fields) => {
        if (error) {
            console.log('login error')
            throw error;
        } else {
            if (result.length > 0) {
                if (result[0].password == password) {
                    console.log('login success')
                    req.session.login = true;
                    req.session.user = req.body;
                    res.json({"msg" : "success"})
                } else {
                    console.log('id or password does not match')
                    res.json({"msg" : "fail"})
                }
            } else {
                console.log('data does not exists')
                res.json({"msg" : "fail"})
            }
        }
    })
})

module.exports = router;