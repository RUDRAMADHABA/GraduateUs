const passport = require('passport');
const User = require('../models/userModel');
require('dotenv').config()

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;


const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/user/GoogleSignup/google/callback",
    passReqToCallback   : true,
    scope: ['profile', 'email']
  },
  async function(request, accessToken, refreshToken, profile, done) {

     
          //console.log(profile)

    await User.findOne({email: profile.email}).then((currentUser)=>{
        if(currentUser)
        {
            //already have user in db
            //console.log(profile)
            console.log('user exists');
            done(null,currentUser)
        }
        else
        {

          
             User({
                name: profile.displayName,
                email: profile.email,
                password: 134,
                image: profile.photos[0].value,
              }).save().then((newUser)=>{
                //console.log(profile)
                console.log('new user created '+newUser);
                done(null, newUser);
              })
          
        }
    })
  }
));

//stuffs little info form user profile and put it into cookie
passport.serializeUser((user,done)=>{
 
   console.log(user);
    done(null,user._id); //error , id
})

//get id from cookie
passport.deserializeUser((id,done)=>{

User.findById(id).then((user)=>{
    done(null,user)
})

})

