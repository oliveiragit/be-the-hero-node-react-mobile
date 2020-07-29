const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection("incidents").count();

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "ong_id")
      .limit(5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf",
      ])
      .offset((page - 1) * 5);

    res.header("X-Total-Count", count["count(*)"]);

    return res.json(incidents);
  },

  async create(req, res) {
    const { title, description, value } = req.body;
    const formatValue = String(value).replace(',',('.'))
    
    const ong_id = req.ongId;
    
    const [id] = await connection("incidents").insert({
      title,
      description,
      value: formatValue,
      ong_id,
    }).returning('id');
    
    return res.json(id);
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.ongId;

    try {
      const del = await connection("incidents")
        .where({ id: id, ong_id: ong_id })
        .delete();

      if (del === 0) {
        return res
          .status(400)
          .json({ error: "incident/ong_id not found or not permitted" });
      }

      res.status(204).send();
    } catch (err) {
      return res.status(401).json({ error: "Operation not permitted" });
    }
  },
};
