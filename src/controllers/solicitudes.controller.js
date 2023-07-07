const SolicitudesService  = require("../services/solicitudes.service");
const AuthService = require("../services/auth.service");
let instance = null;

class SolicitudesController {
  static getInstance() {
    if (!instance) {
      return new SolicitudesController();
    }
    return instance;
  }
  async  getSolicitudByUsuarioPorfolio(req, res) {
    try {
      const usuarioPorfolio = req.params.usuarioPorfolio;
      //console.log(usuarioPorfolio)
      let product = await SolicitudesService.getSolicitudByUsuarioPorfolio(usuarioPorfolio);
      if (!product) {
        return res.status(404).json({
          method: "getSolicitudByUsuarioPorfolio",
          message: "Not Found",
        });
      }
      console.log(product)
      return res.status(200).json(
        product);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getSolicitudByUsuarioPorfolio",
        message: err,
      });
    }
  }
  async createSolicitud(req, res) {
    try {  
        let newSolicitud = await SolicitudesService.createSolicitud(req.body);
        return res.status(201).json({
          status: 201,
          message: "Created!",
          product: newSolicitud,
        });      
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "createSolicitud",
        message: err.message,
      });
    }
  } 

  async deleteSolicitud(req, res) {   
    try {
      const usuarioPorfolio = req.params.id;      
      let isSolicicitud = await SolicitudesService.getSolicitudById(usuarioPorfolio);
      if (isSolicicitud) {
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
