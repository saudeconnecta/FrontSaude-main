import React, { useState } from "react";
import "./CadastroPaciente.css";

const CadastroPaciente = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  const [cpf, setCpf] = useState("");
  const [tel, setTel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, age, sex, address, cpf, tel);
    // Limpar os campos do formulário
    setName("");
    setAge("");
    setSex("");
    setAddress("");
    setCpf("");
    setTel("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            placeholder="Digite o nome do paciente"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Idade:
          <input
            type="number"
            name="age"
            placeholder="Digite a idade do paciente"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <label>
          Sexo:
          <select
            name="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="prefer-not-to-say">
              Paciente prefere não informar
            </option>
          </select>
        </label>

        <label>
          Endereço:
          <input
            type="text"
            name="address"
            placeholder="Digite o endereço do paciente"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>

        <label>
          Telefone:
          <input
            type="tel"
            name="tel"
            placeholder="Digite o telefone do paciente"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </label>

        <label>
          CPF:
          <input
            type="text" // Alterado para text
            name="cpf"
            placeholder="Digite o CPF do paciente"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>

        <input type="submit" value="Cadastrar paciente" className="button" />
      </form>
    </div>
  );
};

export default CadastroPaciente;
