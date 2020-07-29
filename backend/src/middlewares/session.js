const connection = require("../database/connection");

module.exports = async function session(req, res, next) {
  const ongId = req.headers.authorization;
  if (!ongId) {
    return res.status(401).json({ error: "not permmited" });
  }
  const user = await connection.select("id").where({ id: ongId }).from("ongs");

  if (user.length == 0) {
    return res.status(401).json({ error: "not permmited" });
  }
  req.ongId = ongId;
  return next();
};
