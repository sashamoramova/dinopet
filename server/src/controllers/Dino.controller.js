const DinoService = require("../services/Dino.service");
const isValidId = require("../utils/isValidId");
const formatResponse = require("../utils/formatResponse");
const reformatId = require("../utils/reformatId");

class DinoController {
  static async getAllDinos(req, res) {
    try {
      const dinos = await DinoService.getAll();

      if (dinos.length === 0) {
        return res.status(200).json(formatResponse(200, "No dinos found", []));
      }

      res.status(200).json(formatResponse(200, "success", dinos));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getDinoById(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid dino ID"));
    }

    try {
      const dino = await DinoService.getById(reformatId(id));

      if (!dino) {
        return res
          .status(404)
          .json(formatResponse(404, `Dino with id ${id} not found`));
      }

      res.status(200).json(formatResponse(200, "success", dino));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = DinoController;
