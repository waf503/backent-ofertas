const { Router } = require('express')
const router = Router()

const { getLastEstablecimiento ,actualizarEstablecimiento,getEstablecimientos, createEstabliecimiento, deleteEstableimiento } = require('../controllers/index.controller')
const { getCategorias } = require ('../controllers/categoriaController')
const { createCategoriaEstablecimiento  } = require ('../controllers/establecimientoCategoriaController')

router.get('/api/establecimientos', getEstablecimientos)
router.get('/api/last-establecimiento', getLastEstablecimiento)
router.post('/api/establecimiento', createEstabliecimiento)
router.delete('/api/establecimiento/:id', deleteEstableimiento)
router.put('/api/establecimiento/:id', actualizarEstablecimiento)


//Rutas categoría
router.get('/api/categorias', getCategorias)

//Rutas Categoría-Establecimiento
router.post('/api/ingresarEstablecimiento', createCategoriaEstablecimiento)

module.exports = router