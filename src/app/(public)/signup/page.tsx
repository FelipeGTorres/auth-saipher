"use client";

import { useState, useCallback } from "react";
import { Card, Button, Text, TextField } from "@radix-ui/themes";
import signUp from "../../api/signup";

export default function Signup() {
  // Estados para armazenar os valores dos inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = useCallback(() => {
    signUp({
      body: {
        name,
        email,
        password,
        phone,
      },
    }).then((response) => {
      console.log("Cadastro realizado com sucesso:", response);
    }).catch((error) => {
      console.error("Erro no cadastro:", error);
    });
  }, [name, email, phone, password]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: "url(/signup.avif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card className="w-96 p-6 shadow-lg rounded-2xl bg-none text-center bg-gray-600">
        <Text className="text-2xl font-semibold">Cadastrar</Text>

        <TextField.Root
          type="text"
          placeholder="Nome"
          className="my-3 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField.Root
          type="email"
          placeholder="E-mail"
          className="mb-3 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField.Root
          type="tel"
          placeholder="Telefone"
          className="mb-3 w-full"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextField.Root
          type="password"
          placeholder="Senha"
          className="mb-3 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button className="w-40 mb-3 bg-slate-500" onClick={handleSignUp}>
          Cadastrar
        </Button>

        <div className="text-center text-sm">
          <a href="/signin" className="text-blue-500 hover:underline">
            Já tem uma conta? Entrar
          </a>
        </div>
      </Card>
    </div>
  );
}
