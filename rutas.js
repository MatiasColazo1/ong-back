const router = require("express").Router()
const conexion = require("./config/conexion")

//asignamos todas las rutas
//get elemento
router.get("/",(req, res)=>{
    let sql = "select * from tb_ong"
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
     else {
        res.json(rows)
    }
    })
})

// get un elemento
router.get("/:id",(req, res)=>{
    const {id} = req.params
    let sql = "select * from tb_ong where id_ong = ?"
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
     else {
        res.json(rows)
    }
    })
})

// agregar elemento
router.post("/", (req, res)=>{
    const{nombre,logo} = req.body

    let sql = `insert into tb_ong(nombre, logo) values('${nombre}','${logo}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'elemento agregado'})
        }
    })
})

// eliminar
router.delete("/:id",(req,res)=>{
    const{id}=req.params

    let sql = `delete from tb_ong where id_ong = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'ong eliminado'})
        }
    })
});

//editar
router.put("/:id", (req,res)=>{
    const{id}=req.params
    const{nombre, logo} = req.body

    let sql = `update tb_ong set 
    nombre = '${nombre}',
     logo = '${logo}'
     where id_ong = '${id}'`

     conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'ong editado'})
        }
    })
});

module.exports= router