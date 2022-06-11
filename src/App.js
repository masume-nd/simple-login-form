import { Routes, Route } from "react-router-dom";
import AuthProvider from "./components/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login";
function App() {
   return (
      <AuthProvider>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route
               path="/dashboard"
               element={<Dashboard />}
            />
         </Routes>
      </AuthProvider>
   );
}

export default App;
