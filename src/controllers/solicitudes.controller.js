const SolicitudesService  = require("../services/solicitudes.service");
const AuthService = require("../services/auth.service");
let instance = null;
var mongoose = require("mongoose");
var Solicitudes = mongoose.model("Solicitudes");


class SolicitudesController {
  static getInstance() {
    if (!instance) {
      return new SolicitudesController();
    }
    return instance;
  }

  async getSolicitudes(req, res) {
    try {
      const products = await SolicitudesService.getProducts();
      return res.status(200).json(products);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getProducts",
        message: err,
      });
    }
  }

  async getSolicitudById(req, res) {
    try {
      const id = req.params.id;
      let product = await SolicitudesService.getProductById(id);
      if (!product) {
        return res.status(404).json({
          method: "getProductById",
          message: "Not Found",
        });
      }
      return res.status(200).json(product);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getProductById",
        message: err,
      });
    }
  }

  async  getSolicitudByEmail(req, res) {
    try {
      const usuarioPorfolio = req.params.usuarioPorfolio;
      //console.log(usuarioPorfolio)
      let product = await SolicitudesService.getSolicitudByEmail(usuarioPorfolio);
      if (!product) {
        return res.status(404).json({
          method: "getSolicitudByEmail",
          message: "Not Found",
        });
      }
      console.log(product)
      return res.status(200).json(
        product);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getSolicitudByEmail",
        message: err,
      });
    }
  }

  async getSolicitudByCategory(req, res) {
    try {
      const cat = req.params.cat;
      let product = await SolicitudesService.getProductByCategory(cat);
      return res.status(200).json(product);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getProductByCategory",
        message: err,
      });
    }
  }

  async createSolicitud(req, res) {
    try {
      console.log("PASO2")  
        let newProduct = await SolicitudesService.createSolicitud(req.body);
        return res.status(201).json({
          status: 201,
          message: "Created!",
          product: newProduct,
        });      
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "createSolicitud",
        message: err.message,
      });
    }
  }

  async updateSolicitud(req, res) {
    try {
      let product = await SolicitudesService.getSolicitudById(req.params.id);
      if (!product) {
        return res
          .status(404)
          .json({ method: "updateSolicitud", message: "Not Found" });
      }
      const modifiedProduct = await SolicitudesService.updateSolicitud(
        req.params.id,
        req.body,
        product
      );
      return res.status(200).json(SolicitudesService);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "updateSolicitud",
        message: err,
      });
    }
  }

  async deleteSolicitud(req, res) {
    console.log("BORRO")
    try {
      const usuarioPorfolio = req.params.id;
      console.log("sss: " + usuarioPorfolio)
      let isProduct = await SolicitudesService.getSolicitudById(usuarioPorfolio);
      if (isProduct) {
        await SolicitudesService.deleteSolicitud(req.params.id);
        return res.status(204).json({ message: "No Content" });
      }
      return res.status(404).json({ message: "Not Found" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "deleteProduct",
        message: err,
      });
    }
  }
}

module.exports = new SolicitudesController();
