exports.logout = (req, res) => {
  // clear cookie to logout 
    res.clearCookie('token').sendStatus(200);
  };
  