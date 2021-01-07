import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./RegisterForm.scss";

interface IRegisterForm {
  setShowLogin: Function;
}

export default function RegisterForm({ setShowLogin }: IRegisterForm) {
  const formik = useFormik({
    initialValues: initialFormValues(),
    validationSchema: Yup.object({
      name: Yup.string().required("Nombre es obligatorio"),
      username: Yup.string()
        .matches(
          /^[a-zA-Z0-9-]*s/,
          "Nombre del usuario no puede tener espacios"
        )
        .required("Nombre de usuario obligatorio"),
      email: Yup.string()
        .email("El email no es válido")
        .required("el email es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),

      repeatPassword: Yup.string()
        .required("El valor de repetir contraseña es obligatoria")
        .oneOf([Yup.ref("password")], "Las contraseñas no son iguales"),
    }),
    onSubmit: (formValue) => {
      console.log(formValue);
    },
  });

  return (
    <>
      <h2 className="register-form-title">
        Registrate para ver fotos y videos de tus amigos
      </h2>
      <Form className="register-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Nombre y apellidos"
          name="name"
          value={formik.values.name}
          error={!!formik.errors.name}
          onChange={formik.handleChange}
        />
        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          value={formik.values.username}
          error={!!formik.errors.username}
          onChange={formik.handleChange}
        />
        <Form.Input
          type="text"
          placeholder="Correo electrónico"
          name="email"
          value={formik.values.email}
          error={!!formik.errors.email}
          onChange={formik.handleChange}
        />
        <Form.Input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={formik.values.password}
          error={!!formik.errors.password}
          onChange={formik.handleChange}
        />
        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="repeatPassword"
          value={formik.values.repeatPassword}
          error={!!formik.errors.repeatPassword}
          onChange={formik.handleChange}
        />
        <Button type="submit" className="btn-submit">
          Registrarse
        </Button>
        <Button
          type="button"
          className="btn-reset"
          onClick={formik.handleReset}
        >
          Reiniciar formulario
        </Button>
      </Form>
    </>
  );
}

function initialFormValues() {
  return {
    name: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
}
