const person = require("../models/person.model");

const findAll = async (req, res) => {
  try {
    const personas = await person.find();
    return res.json({ personas });
  } catch (e) {
    return res.json({
      msg: "error",
      details: e.message
    });
  };
};

const findOneByName = async (req, res) => {
  try {
    const filter = {
      name: req.params.name
    }
    const personas = await person.find(filter);
    return res.json({ personas });
  } catch (e) {
    return res.json({
      msg: "error",
      details: e.message
    });
  };
};

const save = async (req, res) => {
  try {
    const p = new person(req.body);
    let resultado;

    p.save()
      .then((data) => resultado = data);

    return res.json({
      msg: "persona creada",
      details: resultado
    });

  } catch (error) {
    console.log(error);
    return res.json({
      msg: "error",
      details: error.message
    });
  }
};

const del = async (req, res) => {
  try {
    await person.deleteOne({ name: req.params.name });
    return res.json({
      msg: "Ok!",
      details: `${req.params.name} ha sido borrado`
    });
  } catch (e) {
    console.log(error);
    return res.json({
      msg: "error",
      details: error.message
    });
  }

};

module.exports = {
  findAll,
  findOneByName,
  save,
  del
}