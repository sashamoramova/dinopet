const { Dino } = require("../db/models");

class DinoService {
  static async getAll() {
    return await Dino.findAll();
  }

  static async getById(id) {
    return await Dino.findOne({
      where: { id },
    });
  }
}

module.exports = DinoService;
