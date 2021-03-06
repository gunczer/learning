const express = require('express');
const router = express.Router();
const path = require('path');
const auth = require('http-auth');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator/check');

const Registration = mongoose.model('Registration');
const Games = mongoose.model('Games');

const basic = auth.basic({
    file: path.join(__dirname, '../users.htpasswd')
});

router.get('/', (req, res) => {
    res.render('form', { title: 'Registration form' });
});

router.post(
    '/',
    [
        body('name')
            .isLength({ min: 1})
            .withMessage('Please enter a name'),
        body('email')
            .isLength({ min: 1})
            .withMessage('Please enter an email')
    ],
    (req, res) => {
        console.log('post received body: ', req.body);
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const registration = new Registration(req.body);
            registration.save()
                .then(() => { res.send('Thank you for your registration!') })
                .catch((err) => {
                    res.send('Sorry! Something went wrong.' + err.message)
                })
        } else {
            res.render('form', {
                title: 'Registration form',
                errors: errors.array(),
                data: req.body
            });
        }
    }
);

router.get('/registrations', auth.connect(basic), (req, res) => {
    Registration.find()
        .then((registrations) => {
            res.render('index', { title: 'Listing registrations', registrations });
        })
        .catch(() => { res.send('Sorry! Something went wrong.'); });
});

router.get('/games', auth.connect(basic), (req, res) => {
    Games.find()
        .then((games) => {
            res.render('games', { title: 'Listing games', games });
        })
        .catch(() => { res.send('Sorry! Something went wrong.'); });
});

module.exports = router;