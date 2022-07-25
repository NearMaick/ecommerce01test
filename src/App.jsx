import { Home } from "./pages/Home";
import { Product } from "./pages/Product";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Coaching } from "./pages/Coaching";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/products' element={<Product />} />

          <Route path='/coaching' element={<Coaching />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

