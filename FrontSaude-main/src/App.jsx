import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider, useAuth } from "./ContextoDeAutentificacao/AuthContext";

/* páginas */
import Atestados from "./pages/Atestados";
import CadastroPaciente from "./pages/CadastroPaciente";
import Agenda from "./pages/Agenda";
import Receitas from "./pages/Receitas";
import RelatorioPeriodo from "./pages/RelatorioPeriodo";
import RelatorioUnico from "./pages/RelatorioUnico";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import LogOut from "./pages/LogOut";

/* teste */
/* NavBar */
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AuthContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

const AuthContent = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user && <Header />}
      {user && <NavBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/CadastroPaciente"
          element={
            <PrivateRoute>
              <CadastroPaciente />
            </PrivateRoute>
          }
        />
        <Route
          path="/RelatorioUnico"
          element={
            <PrivateRoute>
              <RelatorioUnico />
            </PrivateRoute>
          }
        />
        <Route
          path="/RelatorioPeriodo"
          element={
            <PrivateRoute>
              <RelatorioPeriodo />
            </PrivateRoute>
          }
        />
        <Route
          path="/Agenda"
          element={
            <PrivateRoute>
              <Agenda />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <LogOut />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
      <footer className="login-footer">
        <p>&copy; 2024 Saúde Connect. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
