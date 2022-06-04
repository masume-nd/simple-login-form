import { Routes, Route } from "react-router-dom";
import UserContext, { AuthProvider } from "./components/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login";
import Protectedroute from "./pages/WithAuthentication";
import Signin from "./pages/Signin";
import WithAuthentication from "./pages/WithAuthentication";
import Users from "./pages/Users";
import { useSelector } from "react-redux";
function App() {
   
   return (
      <AuthProvider>
         <Routes>
            <Route path="/" element={<Users/>} />
            <Route path="/" element={WithAuthentication(<Dashboard />)} />
         </Routes>
      </AuthProvider>
   );
}

export default App;
