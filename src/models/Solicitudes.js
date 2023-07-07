const mongoose = require('mongoose');

const SolicitudesSchema = new mongoose.Schema({ 
    empresa:String,      
    usuarioPorfolio:String,
    nombre:String,
    apellido:String,    
    email:String,
    telefono:String,
    mensaje:String
});



const Solicitudes = mongoose.model('Solicitudes',SolicitudesSchema);

module.exports = Solicitudes;