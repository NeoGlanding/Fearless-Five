const Company = require("../models/perusahaanModel");

class Perusahaan {
  static getall = async (req, res, next) => {
    try {
      const company = await Company.find();
      res.status(200).json({
        company,
      });
    } catch (error) {
      next(error);
    }
  };
  static getById = async (req, res, next) => {
    try {
      const { _id } = req.params;
      const company = await Company.findOne({ _id });
      console.log(company);
      res.status(200).json({
        company,
      });
    } catch (error) {
      next({ code: 500, message: err.message });
    }
  };
  static post = async (req, res, next) => {
    try {
      const { name } = req.body;
      const newPerusahaan = {
        name,
      };
      const perusahaan = await Company.create(newPerusahaan);
      console.log(perusahaan);
      res.status(201).json(perusahaan);
    } catch (error) {
      next({ code: 500, message: err.message });
      console.log(error);
    }
  };
  static deleteId = async (req, res, next) => {
    try {
      const { _id } = req.params;
      console.log(_id);
      const company = await Company.remove({ _id });

      res.status(204).json(company);
    } catch (error) {
      next({ code: 500, message: err.message });
    }
  };
}

module.exports = Perusahaan;
