import * as S from "./styles";
import { Button } from "@mui/material";
import { useState } from "react";

const Register = () => {
  const [Company, setCompany] = useState('');
  const [Region, setRegion] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handleCompany = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setCompany(e.target.value)
  }
  const handleRegion = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setRegion(e.target.value)
  }
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value)
  }
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(e.target.value)
  }
  const handleSubmit = () =>{
    console.log(Password);
  }

  return (
    <>
      <S.ContainerBox>
        <S.PrincipalCard>
          <S.SecondaryCard>
            <h1
              style={{
                color: "#ffffff",
              }}
            >
              Registre-se
            </h1>
          </S.SecondaryCard>
          <S.InputCard>
            <h4>Companhia: </h4>
            <S.Inputs onChange={handleCompany} />
            <h4>Região: </h4>
            <S.Inputs onChange={handleRegion} />
            <h4>Email: </h4>
            <S.Inputs onChange={handleEmail} />
            <h4>Senha: </h4>
            <S.Inputs onChange={handlePassword} />
          </S.InputCard>
          <S.SecondaryCard>
            <Button onClick={handleSubmit} variant="contained" size="large">
              ENVIAR
            </Button>
          </S.SecondaryCard>
        </S.PrincipalCard>
      </S.ContainerBox>
    </>
  );
};

export { Register };
