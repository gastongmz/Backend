let instance = null;
require('dotenv').config();
const jwt = require("jsonwebtoken");
const UsuariosService = require("../services/usuarios.service");
const AuthService = require('../services/auth.service');
var mongoose = require("mongoose");
var Usuarios = mongoose.model("Usuarios");

class UsuariosController {

  static getInstance() {
    if (!instance) {
      return new UsuariosController();
    }
    return instance;
  }

  async getUsuarios(req, res) {
    try {
      const users = await UsuariosService.getUsers();
      return res.status(200).json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getUsers",
        message: err,
      });
    }
  }

  async getUsuarioById(req, res) {
    try {
      const id = req.params.id;
      let user = await UsuariosService.getUserById(id);
      if (!user) {
        return res.status(404).json({
          method: "getUsuarioById",
          message: "Not Found",
        });
      }
      return res.status(200).json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getUsuarioById",
        message: err,
      });
    }
  }

  async createUsuario(req, res) {
    try {
      debugger
      let newUser = await UsuariosService.createUser(req.body);

      return res.status(201).json({
        status: 201,
        message: "Created!",
        usuario: newUser,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "createUsuario",
        message: err.message,
      });
    }
  }

  async login(req, res) {
    try {
      var login = new Usuarios({
         email: req.body.email,
        password: req.body.password,       
      });
      //const login  = req.body;
      console.log("login "+ JSON.stringify(req.body))
      let isUserRegistered = await AuthService.hasValidCredentials(login.email, login.password);
      if (isUserRegistered) {

        const user = await UsuariosService.getUserByEmail(login.email);

        const token = jwt.sign(user.toJSON(), process.env.PRIVATE_KEY, {
          expiresIn: "1d",
        });

        return res.status(200).json({
          status: 200,
          token,
          message: "Token created successfully."
        });

      } else {
        return res.status(401).json({
          status: 401,
          message: "Unauthorized.",
        });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "login",
        message: err.message,
      });
    }
  }
}

module.exports = UsuariosController.getInstance();
