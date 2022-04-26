const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'ofertasdb',
    port: '5432'
})

//metodos

//listar establecimientos
const getEstablecimientos = async (req, res) => {
    const consulta = "SELECT est.id as id_est, est.nombre as nombre, cate.nombre as categoria, est.activo as estado " 
    + "FROM promo_categoria_promo_establecimiento cat_est " 
    +"INNER JOIN promo_establecimiento est ON est.id = cat_est.id_establecimiento "
    +"INNER JOIN promo_categoria cate ON cate.id = cat_est.id_categoria;"    
   const response = await pool.query(consulta)
   res.json(response.rows)
}

//crear establecimiento
const createEstabliecimiento = async (req, res) => {
    const { nombre, activo } = req.body;
    const response = await pool.query('INSERT INTO promo_establecimiento(nombre, activo) VALUES($1,$2) RETURNING id',[nombre,activo]);

    const { id } = response.rows[0];
    console.log(response)
    
    res.json({
        message: "Establecimiento creado exitosamente",
        userId: {id}
    })
}

//obtener el ultimo establecimiento
const getLastEstablecimiento = async (req, res) => {
    const consulta = "SELECT max(id) FROM promo_establecimiento;"
    const response = await pool.query(consulta)
    res.json(response.rows)
}

//eliminar establecimiento
const deleteEstableimiento = async (req, res) => {
     const id = req.params.id
     const response = await pool.query('DELETE FROM promo_establecimiento WHERE id = $1', [id])
     console.log(response)
     res.json(`Establecimiento ${id} deleted successfully`)

}

//actualizar establecimiento
const actualizarEstablecimiento = async (req, res) => {
    const id = req.params.id
    const { nombre, activo } = req.body
    //consulta
    const response = await pool.query('UPDATE promo_establecimiento SET nombre=$1, activo=$2	WHERE id=$3;',[nombre, activo, id])
    console.log(response)
    res.json('Establecimiento updated successfully')

}

module.exports = {
    getEstablecimientos,
    createEstabliecimiento,
    deleteEstableimiento,
    actualizarEstablecimiento,
    getLastEstablecimiento
}