import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Outlet />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
