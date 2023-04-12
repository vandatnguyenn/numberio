var crypto = require("crypto");
const User = require("../account/accountModel");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");

const GOOGLE_CLIENT_ID = "671880914125-d98k469qf1dq1cvv69otuaga44i7o31f.apps.googleusercontent.com";
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

async function verifyGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload;
  } catch (err) {
    return { error: err };
  }
}

async function signinWithGoogle(req, res) {
  let { username, email, password, fname, lname } = req.body;
  const verificationResponse = await verifyGoogleToken(req.body.credential);
  if (verificationResponse.error) {
    return res.status(400).json({
      message: verificationResponse.error,
    });
  }
  username = verificationResponse.name;
  email = verificationResponse.email;
  lastName = verificationResponse.given_name;
  firstName = verificationResponse.family_name;
  password = verificationResponse.sub;
  let user = await User.findOne({ email: email });
  if (!user) {
    console.log("create new account");
    //signup
    var salt = crypto.randomBytes(16);
    crypto.pbkdf2(
      password,
      salt,
      310000,
      32,
      "sha256",
      function (err, hashedPassword) {
        if (err) {
          return next(err);
        }
        const newUser = new User({
          username,
          password: hashedPassword,
          email,          
          firstName,
          lastName,
          createAt: Date.now(),
          deleted: 0,
          role: "user",
          activeToken: crypto.randomBytes(20).toString("hex"),
        });
        newUser.save().catch((err) => console.log(err));
        user = newUser;
      }
    );
  }
  //login
//   user = await User.findOne({ email: email });
    const token = jwt.sign({ user: user },"secret" , {
      expiresIn: "1d",
    });
    res.status(200).json({ token: token });
  
}
module.exports = {
  verifyGoogleToken,
  signinWithGoogle,
};
