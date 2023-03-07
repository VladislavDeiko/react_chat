import { useContext } from "react";
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import { AuthContext } from "./context/AuthContext";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import "./style.scss";

function App() {

  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login"/>
    }

    return children
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/">
              <Route index element={
                <ProtectedRoute>
                  <Home/>
                </ProtectedRoute>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
