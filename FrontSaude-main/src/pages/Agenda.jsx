import React from "react";
import { useState } from "react";

const Agenda = () => {
  const [agNome, setAgNome] = useState("");
  const [agMot, setAgMot] = useState("");
  const [dataHora, setDataHora] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(agNome, agMot, dataHora);
    // Limpar os campos do formulário
    setAgNome("");
    setAgMot("");
    setDataHora(""); // Certifique-se de que isso redefine o estado corretamente
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Data e hora do agendamento:
          <input
            type="datetime-local"
            name="dataHora"
            placeholder="Escolha a data e horário da próxima consulta"
            onChange={(e) => setDataHora(e.target.value)}
            value={dataHora}
          />
        </label>

        <label>
          Nome do paciente:
          <input
            type="text"
            name="agNome"
            placeholder="Digite o nome do paciente"
            onChange={(e) => setAgNome(e.target.value)}
            value={agNome}
          />
        </label>

        <label>
          Motivo da consulta:
          <textarea
            name="agMot"
            placeholder="Explique o motivo da consulta:"
            onChange={(e) => setAgMot(e.target.value)}
            value={agMot}
            rows="4"
          />
        </label>
        <input type="submit" value="Agendar" className="button" />
      </form>
    </div>
  );
};

export default Agenda;
