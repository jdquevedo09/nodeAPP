


const isAuth = (req, res, next) => {
    const {userId} = req.session;
    if(!userId){
        res.redirect('/login');
    }

    next()
  }
  
  module.exports = isAuth;