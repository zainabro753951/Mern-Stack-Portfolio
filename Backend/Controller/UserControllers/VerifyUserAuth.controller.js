const verifyUserAuth = (req, res) => {
  try {
    const userData = req.user;
    res.json({ message: "Authenticated", userData });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default verifyUserAuth;
