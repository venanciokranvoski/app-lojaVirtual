import api from "../api";

export async function salvarProd(produto){
    try {
        const result = await api.post('/produtos', produto)
        return result.data;
      
    }catch(error){
     console.log(error);
     return []
    }
}

export async function pegarProd(){
    try {
        const result = await api.get('/produtos')
        return result.data;
      
    }catch(error){
     console.log(error);
     return {}
    }
}

export async function Remove(produto){
    try {
        await api.delete(`/produtos/, ${produto.id}` );
        return 'sucesso'        
    } catch (error) {
        console.log(error);
        return error
    }
}