const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const User = require('../models/user');
const DIR = './public/uploaded';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});




router.post('/user-profile', upload.single('profileImg'), async (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        profileImg: url + '/public/uploaded/' + req.file.filename
    });

    try {
        const result = await user.save()
        res.status(201).json({
            message: "Photo uploaded successfully!",
            userCreated: {
                _id: result._id,
                profileImg: result.profileImg
            }
        })
    } catch (err) {
        console.log(err),
            res.status(500).json({
                error: err
            });
    }
})

router.get("/", (req, res, next) => {
    User.find().then(data => {
        res.status(200).json({
            message: "Photo retrieved successfully!",
            users: data
        });
    });
});

module.exports = router;
