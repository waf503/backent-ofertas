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

//Incertar Categoria Establecimiento


const createCategoriaEstablecimiento  = async (req, res) => {
    const { id, id_categoria, id_establecimiento } = req.body;

    const response = await pool.query("INSERT INTO promo_categoria_promo_establecimiento (id,id_categoria,id_establecimiento) VALUES ($1,$2,$3);", [id, id_categoria, id_establecimiento]);
    console.log(response)
    res.send('Establecimiento creado exitosamente')
}

module.exports = {
    createCategoriaEstablecimiento 
}