let logout = (req, res) => {
  res.clearCookie("admintoken", {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });
  res.status(200).json({ message: "Logged out successfully" });
};

export default logout;
