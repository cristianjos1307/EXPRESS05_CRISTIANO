const express = require('exprtess')
const mysql = require('mysql2')

const mysql_config = require ('./mysql_config')

const app = express()

//subir o servidor
app.listen(3000,()=>{
    console.log("Servidor web em execução")
})

//criar conexão com o BD
const conection = mysql.createConection(mysql_config)

//escrever as rotas
app.get('/',(req,res)=>{
    //criar um objeto result para todos os endpoints da api
    let result = {
        status:'sucesso',
        message:'null',
        data:'null'
    }
})

//executar a conexão 
conection.query("SELECT * FROM tasks",(err,results)=>{
    if(erro){
        result.status = "Erro";
        result.message = "Erro na obtenção das tarefas";
        result.data = [];
        //res.send(result);
        res.json(results);
    } else{
        result.status = "Sucesso";
        result.message = "Tarefas obtidas com sucesso";
        result.data = results;
        //res.send(result);
        res.json(results);
    }
})
