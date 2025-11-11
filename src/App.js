import { BrowserRouter, Route, Routes} from "react-router-dom";

export default function App(){
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={<div>Hello World</div>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )  
}