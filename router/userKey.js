const express = require ('express');
const router = express.Router();
const db = require('../data/db');

router.post('/', (req, res, next) => {
    let userKey = req.body.userKey;
    let id = req.session.user.id;
    let check = 'SELECT userKey FROM login WHERE id=?';
    let set = 'UPDATE login SET userKey=? WHERE id=?';

    //check
    // db.query(check, [id], (error, result, fields) => {
    //     if (error) {
    //         throw error;
    //     } else {

    //     }
    // }) 

    //set userKey
    db.query(set, [userKey, id], (error, result, fields) => {
        if (error) {
            throw error;
        } else {
            // res.json({"userKey" : userKey});
            console.log(result)
            console.log('확인되었습니다')
        }
    })
})

module.exports = router;