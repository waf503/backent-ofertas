const { Pool } = require('pg')
//Conexion
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'ofertasdb',
    port: '5432'
})
//Metodos

//Listar Categorías

const getCategorias = async (req, res) => {
    const consulta = "SELECT * FROM promo_categoria;"    
    const response = await pool.query(consulta)
   res.json(response.rows)
}

module.exports = {
    getCategorias
}