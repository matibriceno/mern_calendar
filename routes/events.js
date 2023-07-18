const { validarJWT } = require("../middlewares/validar-jwt");
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require("../helpers/isDate");
const { Router } = require("express");
const router = Router();
router.use(validarJWT)

const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");



router.get("/", 
    
    getEventos)

router.post("/", 
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validarCampos,
  ],
  crearEvento);

router.put("/:id", 
  [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
  ],
actualizarEvento);

router.delete("/:id", eliminarEvento);

module.exports = router;
