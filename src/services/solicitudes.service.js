const SolicitudesModel = require("../models/Solicitudes");

class SolicitudesService {
  async getSolicitudes() {
    try {
      const solicitudes = await SolicitudesModel.find();
      return solicitudes;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getSolicitudes Service");
    }
  }

  async getSolicitudById(id) {
    try {
      let solicitud = await SolicitudesModel.findOne({_id:id});
      return solicitud;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getSolicitudById Service");
    }
  }

  async getSolicitudByEmail(usuarioPorfolio) {
    try {          
      
      let solicitud =  await SolicitudesModel.find({"usuarioPorfolio": usuarioPorfolio});     
      return solicitud;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getSolicitudById Service");
    }
  }
  async getSolicitudByCategory(cat) {
    try {
      let solicitud = await SolicitudesModel.find({ categoria: cat });
      return solicitud;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getSolicitudByCategory Service");
    }
  }

  async isSolicitudRegistered(email) {
    try {
      let solicitud = await SolicitudesModel.exists({ email:email });
      if(solicitud){
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getSolicitudByCategory Service");
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

  async updateSolicitud(id, fields, solicitud) {
    try {
      fields.descripcion ? solicitud.descripcion = fields.descripcion : false;
      fields.categoria ? solicitud.categoria = fields.categoria : false;
      fields.precio_unitario ? solicitud.precio_unitario = fields.precio_unitario : false;
      fields.url_img ? solicitud.url_img = fields.url_img : false;

      await SolicitudesModel.findOneAndUpdate({_id:id}, solicitud);
      return solicitud;
    } catch (err) {
      console.error(err);
      throw new Error("Error in updateSolicitud Service");
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
