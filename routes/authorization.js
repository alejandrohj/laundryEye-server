const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const { isLoggedIn } = require('../helpers/auth-helper');

const UserModel = require('../models/user.model');

router.post('/signup',isLoggedIn, (req, res) => {
  const {userName, firstName, lastName, email, password, userType} = req.body;
  if (!userName) {
    res.status(500)
      .json({
        error: 'Please enter a username'
      });
    return;  
  }

  if (!email) {
    res.status(500)
      .json({
        error: 'Please enter an email'
      });
    return;  
  }

  if (!password) {
    res.status(500)
      .json({
        error: 'Please enter a password'
      });
    return;  
  }

  const emailRegEx = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
  if (!emailRegEx.test(email)) {
    res.status(500)
      .json({
        error: 'Please enter a valid email'
      })
    return;
  }

  const passwordRegEx = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
  if (!passwordRegEx.test(password)) {
    res.status(500)
      .json({
        error: 'Password must contain letter, uppercase letter, number and a special character, and needs to have 8 characters.'
      })
    return;
  }
  bcrypt.genSalt(10)
    .then((salt) => {
      bcrypt.hash(password, salt)
          .then((passwordHash) => {
            UserModel.create({email, userName, firstName,lastName, passwordHash, userType})
              .then((user) => {
                user.passwordHash = "***";
                req.session.loggedInUser = user;
                console.log(req.session)
                res.status(200).json(user);
              })
              .catch((err) => {
                if (err.code === 11000) {
                  res.status(500)
                    .json({
                      error: 'Username or email already exists!'
                    });
                  return;  
                } 
                else {
                  res.status(500)
                    .json({
                      error: 'Something went wrong!'
                    });
                  return; 
                }
              })
          })  
    });

})


router.post('/signin', (req, res) => {
  const {email, password} = req.body;
  if (!email) {
    res.status(500)
      .json({
        error: 'Por favor introduce tu email'
      });
    return;
  }

  if (!password) {
    res.status(500)
      .json({
        error: 'Por favor introduce tu contraseña'
      });
    return;
  }

  const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
      res.status(500)
        .json({
          error: 'Por favor introduce un email valido',
        })
      return;  
    }

    UserModel.findOne({email})
      .then((user) => {
        bcrypt.compare(password, user.passwordHash)
          .then((matches) => {
            if (matches) {
              user.passwordHash = "***";
              req.session.loggedInUser = user;
              console.log('Signin succes!', req.session)
              res.status(200).json(user);
            }
            else {
              res.status(500)
                .json({
                  error: 'La contraseña es incorrecta por favor vuelva a intentarlo'
                })
              return;
            }
          }).catch(() => {
            res.status(500)
              .json({
                error: 'La contraseña no coincide por favor vuelva a intentarlo'
              })
            return;
          });
      }).catch(() => {
        res.status(500).json({
          error: 'El email no existe o no está registrado, por favor vuelva a introducirlo correctamente'
        })
        return;
      });
})

router.post('/logout', (req, res) => {
  req.session.destroy();
  res
  .status(204)
  .send()
  console.log('succes')
})

router.get('/user', isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});

router.get('/user/all', isLoggedIn, (req, res, next) => {
  UserModel.find()
    .populate('complex')
    .then((data)=>{
      res.status(200).json(data)
    }).catch((err) => {
      res.status(500).json({
        error: 'Cannot find any user',
        message: err
      })
      return;
    });
});

router.post('/user/:id/edit', isLoggedIn, (req, res) => {
  console.log('editing',req.body)
  const {name, address} = req.body;
  console.log(name, address, 'name and address')
  UserModel.findByIdAndUpdate(req.params.id, {$set: {name,address}})
    .then((user) => {
      req.session.loggedInUser.name = name;
      req.session.loggedInUser.address = address;
      res.status(200).json(user)
    }).catch((err) => {
      res.status(500).json({
        error: 'Cannot update user',
        message: err
      })
      return;
    });
})

module.exports = router;