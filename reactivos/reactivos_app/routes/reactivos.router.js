const express = require ("express")
const router = express.Router()
const reactivosController = require("../controles/reactivos_controles")

router.post("/", reactivosController.create)
router.get("/", reactivosController.find)
router.get("/:id", reactivosController.findOne)
router.put("/:id", reactivosController.update)
router.delete("/:id", reactivosController.remove)
module.exports = router