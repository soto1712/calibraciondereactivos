const express = require ("express")
const router = express.Router()
const usuariosController = require("../controles/usuarios_controles")

router.post("/login", usuariosController.login)

module.exports = router