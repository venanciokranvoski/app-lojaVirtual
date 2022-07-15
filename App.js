import Rotas from "./src/rotas";
import { TemaProvider } from "./src/context/TemaContext";

import { AuthProvider } from "./src/context/AutenticContext";

import { ProdutosProvider } from "./src/context/ProdutosContext";

export default function App() {
  return (
    <TemaProvider>
      <AuthProvider>
        <ProdutosProvider>
          <Rotas />
        </ProdutosProvider>
      </AuthProvider>
    </TemaProvider>
    
  );
}