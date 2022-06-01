import { criarConsulta, removerConsulta } from '../repository/consultaRepository.js'

import { Router } from 'express'
const server = Router();

server.post('/agendamento', async (req, resp) => {
    try{
        const novaConsulta = req.body;
       
    if(!novaConsulta.paciente)
        throw new Error ('Nome do paciente obrigatório!');
    if(!novaConsulta.administrador)
        throw new Error ('Número do administrador obrigatório!');
    if(!novaConsulta.nascimento)
        throw new Error ('Data de nascimento do paciente obrigatório!');
    if(!novaConsulta.hora)
        throw new Error ('Hora da consulta obrigatório!');
    if(!novaConsulta.genero)
        throw new Error ('Genero do paciente é obrigatório!');
    if(!novaConsulta.consulta)
        throw new Error ('Data da consulta obrigatório');
                      

        const consulta = await criarConsulta(novaConsulta);

        resp.send(consulta);

    }catch(err){
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.delete('/consulta/:id', async (req, resp) =>{
    try {
        
    
    const { id } = req.params;

    const resposta = await removerConsulta(id);
    if (resposta != 1)
        throw new Error('Consulta não pode ser removida')
        resp.status(204).send(  )
    } catch (err) {
        resp.status(400).send({ 
            erro: err.message
        })
       
    }
})




export default server;