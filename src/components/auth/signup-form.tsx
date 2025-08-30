"use client";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SignupForm = () => {
  const router = useRouter();
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        placeholder="Digite seu nome"
        value={nameField}
        onChange={setNameField}
      />

      <Input
        placeholder="Digite seu e-mail"
        value={emailField}
        onChange={setEmailField}
        icon={faEnvelope}
      />

      <Input
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={setPasswordField}
        password
      />
      <Button
        label="Criar conta"
        onClick={handleEnterButton}
        size={1}
      />
    </>
  );
};

export default SignupForm;
