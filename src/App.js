import { Routes, Route } from "react-router-dom";
import UserContext, { AuthProvider } from "./components/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login";
import Protectedroute from "./pages/ProtectedRoute/ProtectedRoute";
import Signin from "./pages/Signin";
function App() {
   const user = localStorage.getItem("users")
   return (
      <AuthProvider user={user}>
         <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signin" element={<Signin/>} />
            <Protectedroute path="/dashboard">
                  <Dashboard/>
            </Protectedroute>
         </Routes>
      </AuthProvider>
   );
}

export default App;
