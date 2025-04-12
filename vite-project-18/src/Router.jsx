import { Route, Routes } from "react-router-dom"
import { LayoutPadrao } from "./layouts"
import { Inicial, PaginaNaoEncontrada, SobreNos } from "./pages"

const Router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
                <Route path="/" element={<Inicial />} /> 
                <Route path="/sobre-nos" element={<SobreNos />} /> 
                <Route path="/*" element={<PaginaNaoEncontrada />} /> 
            </Route>
        </Routes>
    )
}

export { Router }