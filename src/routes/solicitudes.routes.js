const {Router} = require('express');
const solicitudesController = require('../controllers/solicitudes.controller');
const jwtValidator = require('../middlewares/jwtValidator');
const checkFields = require('../middlewares/validateFields');
const { check } = require("express-validator");

const router = Router();

router.get('/:usuarioPorfolio',[    
    checkFields
],jwtValidator,solicitudesController.getSolicitudByUsuarioPorfolio); //GET SOLICITUDES BY USUARIO

router.post('/',[    
    check('empresa'),
    check('usuarioPorfolio').not().isEmpty(),
    check('nombre').not().isEmpty(),
    check('apellido').not().isEmpty(),
    check('email').not().isEmpty(),
    check('telefono').not().isEmpty(),
    check('mensaje').not().isEmpty(),
    checkFields
],solicitudesController.createSolicitud); //POST SOLICITUDES

/*
router.put('/:id',[
    check('jwt').not().isEmpty(),
    checkFields
],jwtValidator,solicitudesController.updateSolicitud) //PUT SOLICITUDES*/

router.delete('/:id',[       
    check('jwt').not().isEmpty(),
    checkFields
],jwtValidator,solicitudesController.deleteSolicitud) //DELETE SOLICITUDES 

module.exports = router;