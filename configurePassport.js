const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const usersMap = new Map();

const example = {
	id: "juan",
	username: "juan",
	password: 123
}

usersMap.set(example.username, example)

passport.use(new Strategy(function(username, password, cb) {
	console.log('Strategy', username, password)

	if(usersMap.has(username)){
		const user = usersMap.get(username)
		if(user.password != password){
			return cb(null, false);
		}
		return cb(null, user);
	}else{
		return cb(null, false);
	}
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));


passport.serializeUser(function(user, cb) {
  cb(null, user.username);
});

passport.deserializeUser(function(username, cb) {

  if(usersMap.has(username)){
  	cb(null, usersMap.get(username));
  }else{
  	cb(new Error("User not found"))
  }	
  //db.users.findById(id, function (err, user) {
  //  if (err) { return cb(err); }
  //  cb(null, user);
  //});
});


const configurePassport = (app) =>{
	app.use(require('morgan')('combined'));
	app.use(require('body-parser').urlencoded({ extended: true }));
	app.use(require('express-session')({ secret: 'tacoCat', resave: false, saveUninitialized: false }));
	app.use(passport.initialize());
	app.use(passport.session());
}


module.exports = configurePassport;

