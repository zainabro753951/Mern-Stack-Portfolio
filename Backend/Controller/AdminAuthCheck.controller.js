const adminAuthCheck = (req, res) => {
  try {
    const adminData = req.admin;
    res.json({ message: "Authenticated", adminData });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default adminAuthCheck;
