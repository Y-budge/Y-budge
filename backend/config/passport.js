const TwitterStrategy = require('passport-twitter').Strategy
const mongoose = require('mongoose')

const User = require('../models/log.model')

module.exports = async function (passport) {
    passport.use(new TwitterStrategy({
        consumerKey: process.env.Twitter_API_Key,
        consumerSecret: process.env.Twitter_API_Secret,
        callbackURL: "http://localhost:5000/auth/twitter/callback",
      },
      async (token, tokenSecret, profile, done) => {
        const newUser = {
            twitterId: profile.id,
            displayName: profile.displayName,
            username: profile.username
        }
        console.log(profile);
        try {
            let user = await User.findOne({twitterId: profile.id})
            if (user) {
                done(null, user)
            } else {
                user = await User.create(newUser);
            }
        } catch(error) {
            console.log(error)
        }
      }
    ));

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
}