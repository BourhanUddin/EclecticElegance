import {} from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-135px]">
        <Outlet>
          <Home></Home>
        </Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
