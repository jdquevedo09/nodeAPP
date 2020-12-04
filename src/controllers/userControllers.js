const User = require('../models/userModel');
const bcrypt = require('bcrypt')

const signupUser = (req, res) => {
  res.render('user/signupForm')
}

const loginUser = (req, res) => {
  res.render('user/loginForm')
}


const createUser = async (req, res) => {


  //user.password = encrypePassword(password);

  try {
    const { userName, email, password } = req.body;
    const user = new User({ userName, email, password });
    await user.save();
    res.send('user created')
  } catch (error) {
    // send message
    res.redirect('/signup')
    console.log(error)
  }
}

const getUser = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email });
  //Method 1
  //const userPassword= user[0].password
  // const correctPassword = bcrypt.compareSync(password, userPassword);

  if (user) {

    const correctPassword = await user.passwordMatch(password)
    if (correctPassword) {
      req.session.userId = user._id
      res.redirect('/tasks')
    }
    req.flash('errorMessage','User or password incorrect');
    res.redirect('/login')
  } else {
    req.flash('errorMessage', 'User or password incorrect');
    res.redirect('/login')
  }


}



const logoutUser = (req, res) => {
  req.session.userId = null
  res.redirect('/login')
}




// encrypt methodo 1
/*const encrypePassword=(password) =>{
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password,salt);
  return hash
}*/

// TODO: encriptar password utilizando bcrypt
//2. cuando guardo un usuaro nuevo el password de estar encriptado
//3. cuando logeo un user debo desencriptar el password
//* bono crear un middleware que oculte las rutas solo para usuaarios logeados
// cookie-session ->






module.exports = { createUser, loginUser, signupUser, getUser, logoutUser }