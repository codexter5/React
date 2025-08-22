import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/layouts/layout";
import Contacts from "./pages/Contacts";

const MyRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contacts/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyRouter
