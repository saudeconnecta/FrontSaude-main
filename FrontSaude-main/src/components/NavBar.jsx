import { NavLink } from "react-router-dom";
import "./NavBar.css";

import React from "react";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/CadastroPaciente">Cadastro de Paciente</NavLink>
      <NavLink to="/Agenda">Agenda</NavLink>
      <NavLink to="/RelatorioUnico">Atendimento</NavLink>
      <NavLink to="/RelatorioPeriodo">Histórico de Atendimento</NavLink>
      <NavLink to="/">Sair</NavLink>
    </nav>
  );
};

export default NavBar;
