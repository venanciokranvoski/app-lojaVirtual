import React, { createContext, useState, useEffect } from "react";

import { salvarProd, pegarProd, Remove } from "../services/request/produtos";

export const ProdutosContext = createContext({})

export function ProdutosProvider({children}){
    const [quantidade, setQuantidade] = useState(0)
    const [carrinho, setCarrinho] = useState([])
    const [ultimosVistos, setUltimosVistos] = useState([])
    const [total, setTotal] = useState(0)


    useEffect(async () => {
        const result = await pegarProd();
        if(result.length > 0){
            setCarrinho(result);
            setQuantidade(result.length);
        }
    },[])


    async function showProd(produto){
        const result = await salvarProd(produto) 

        let newCar = carrinho
        newCar.push(result)
        setCarrinho(newCar)

        let novoUltimoVisto = new Set(ultimosVistos)
        novoUltimoVisto.add(produto)
        setUltimosVistos([...novoUltimoVisto])

        setQuantidade(quantidade+1);

        let precoFinal = total + produto.preco; 
        setTotal(precoFinal)   
    }

    async function Delete_all(){
        try {
            carrinho.forEach(async produto => {
                await Remove(produto);
            })
            setQuantidade(0),
            setTotal(0),
            setCarrinho([]);
            return 'Compra finalizada com Sucesso!'
        } catch (error) {
            return 'Erro ao Finalizar a compra, tente novamente'
        }
    }

    return (
        <ProdutosContext.Provider value={{
         quantidade,
         carrinho,
         ultimosVistos,
         showProd,
         total,
         Delete_all,
        }}>
            {children}
        </ProdutosContext.Provider>
    )

}