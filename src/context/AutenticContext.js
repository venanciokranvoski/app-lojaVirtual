import { createContext, useState } from "react";

export const AutenticContext = createContext({})

export function AuthProvider({children}){

    const [usuario,setUsuario] = useState({})
    
    function login(email, senha){
        if(email == 'venancio@gmail.com' 
        && senha == '123'){
            setUsuario({
                nome:'Venancio',
                email: email,
                endereço: 'Av.Pedro jose',
                telefone: '11 96350-1236'
            })
         return 'ok'
        }
        else{
          return 'EMAIL OU SENHA INCORRETO!' 
        }
        
    }

    return (
        <AutenticContext.Provider value={{
            usuario,
            login,
           
        }}>
            {children}
        </AutenticContext.Provider>
    )

}