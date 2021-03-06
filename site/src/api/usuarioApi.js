import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})


export async function login(logar, senha){
    const r = await api.post('/usuario/login', {
            logar: logar,
            senha: senha
        });

    return r.data;
} 

export async function consultarFoto(usuario){
    const resposta = await api.get(`/usuario/perfil?id=${usuario}`)
    return resposta.data
}

export async function enviarPerfil(id, imagem) {
    const formData = new FormData();
    formData.append('perfil', imagem);

    const resposta = await api.put(`/usuario/${id}/perfil`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });

    return resposta.status;
}