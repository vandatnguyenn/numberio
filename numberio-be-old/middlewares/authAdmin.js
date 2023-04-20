const AccountModel = require("../models/accountModel");
const authAdmin = async (req, res, next) => {
  try {
    const user = await AccountModel.findById(req.user.id);
    if (user.role === 'user')
      return res.status(400).json({ message: "Admin resources access denied" });
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = authAdmin;
