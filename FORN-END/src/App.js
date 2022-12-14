import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";
import {Admins} from "./components/Products/Admins";
import Demo from "./components/UpLoadImg/Demo";
import Register from "./pages/Register";
import Modals from "./components/Products/Demo2";
import {Verify} from "./pages/verify/Verify";
import {Checks} from "./pages/checkVerify/Checks";
import ListUser from "./components/Products/ListUser";
import Createmp3 from "./components/Products/Createmp3";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import ListMp3 from "./components/Products/ListMp3";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admins />}>
          <Route path="/admin/list" element={<ListUser />} />
          <Route path="/admin/createmp3" element={<Createmp3 />} />
          <Route path="/admin/listmp3" element={<ListMp3 />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/register/checkverify" element={<Checks />} />
        <Route path="/register/verify" element={<Verify />} />
        <Route path="/upload" element={<Demo />} />
        <Route path="/demo" element={<Modals />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
