import React from "react";
import { Form, Button } from "semantic-ui-react";
import "./RegisterForm.scss";

interface IRegisterForm {
  setShowLogin: Function;
}

export default function RegisterForm({ setShowLogin }: IRegisterForm) {
  const onSubmit = () => {
    console.log("formulario enviado");
  };

  return (
    <>
      <h2 className="register-form-title">
        Registrate para ver fotos y videos de tus amigos
      </h2>
      <Form className="register-form">
        <Form.Input type="text" placeholder="Nombre y apellidos" name="name" />
        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
        />
        <Form.Input type="text" placeholder="Correo electrónico" name="email" />
        <Form.Input type="password" placeholder="Contraseña" name="password" />
        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="repeatPassword"
        />
        <Button className="btn-submit" onClick={onSubmit}>
          Registrarse
        </Button>
      </Form>
    </>
  );
}
