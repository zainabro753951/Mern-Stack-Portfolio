let logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: false,
    secure: true,
    sameSite: "Strict",
  });
};

export default logout;
