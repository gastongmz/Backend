const {Router} = require('express');
const solicitudesController = require('../controllers/solicitudes.controller');
const jwtValidator = require('../middlewares/jwtValidator');
const checkFields = require('../middlewares/validateFields');
const { check } = require("express-validator");

const router = Router();
/*
router.get('/',
[
    check('jwt').not().isEmpty(),
    checkFields
],
jwtValidator, solicitudesController.getSolicitudes); //GET PRODUCTOS

router.get('/:id',[
    check('jwt').not().isEmpty(),
    checkFields
],jwtValidator,solicitudesController.getSolicitudById); //GET PRODUCTOS BY ID
*/
router.get('/:usuarioPorfolio',[    
    checkFields
],jwtValidator,solicitudesController.getSolicitudByEmail); //GET PRODUCTOS BY EMAIL


router.post('/',[    
    check('empresa'),
    check('usuarioPorfolio').not().isEmpty(),
    check('nombre').not().isEmpty(),
    check('apellido').not().isEmpty(),
    check('email').not().isEmpty(),
    check('telefono').not().isEmpty(),
    check('mensaje').not().isEmpty(),
    checkFields
],solicitudesController.createSolicitud); //POST PRODUCTOS
/*
router.put('/:id',[
    check('jwt').not().isEmpty(),
    checkFields
],jwtValidator,solicitudesController.updateSolicitud) //PUT PRODUCTOS*/

router.delete('/:id',[       
    check('jwt').not().isEmpty(),
    checkFields
],jwtValidator,solicitudesController.deleteSolicitud) //DELETE PRODUCTOS 

module.exports = router;