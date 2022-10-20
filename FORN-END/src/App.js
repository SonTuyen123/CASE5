import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { Admins } from "./components/Products/Admins";
import Demo from "./components/UpLoadImg/Demo";
import Register from "./pages/Register";
import Modals from "./components/Products/Demo2";
import { Verify } from "./pages/verify/Verify";
import { Checks } from "./pages/checkVerify/Checks";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admins />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/checkverify" element={<Checks />} />
        <Route path="/register/verify" element={<Verify />} />
        <Route path="/upload" element={<Demo />} />
        <Route path="/demo" element={<Modals />} />
       
      </Routes>
    </div>
  );
}

export default App;
