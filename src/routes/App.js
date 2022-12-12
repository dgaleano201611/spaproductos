import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navegacion } from "../layouts/Navegacion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductosCreados } from "../pages/ProductosCreados";
import { ProductoDetalles } from "../pages/ProductoDetalles";
import { Signup } from "../pages/Signup";
import { Signin } from "../pages/Signin";
import { CrearProducto } from "../pages/CrearProducto";

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path='/' element={<ProductosCreados />}/>
        <Route path='/:id' element={<ProductoDetalles />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/crearproducto' element={<CrearProducto />}/>
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
