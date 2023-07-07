const SolicitudesModel = require("../models/Solicitudes");

class SolicitudesService { 

  async getSolicitudByUsuarioPorfolio(usuarioPorfolio) {
    try {                
      let solicitud =  await SolicitudesModel.find({"usuarioPorfolio": usuarioPorfolio});     
      return solicitud;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getSolicitudById Service");
    }  
  }

  async createSolicitud(solicitud) {
    try {
      let savedSolicitud= await SolicitudesModel.create(solicitud);
      return savedSolicitud;
    
    } catch (err) {
      console.error(err);
      throw new Error("Error in createSolicitud Service",err);
    }
  }

  async deleteSolicitud(id) {
    try {
      await SolicitudesModel.findOneAndDelete({_id:id});
    } catch (err) {
      console.error(err);
      throw new Error("Error in delete Service");
    }
  }
  
}

module.exports = new SolicitudesService();
