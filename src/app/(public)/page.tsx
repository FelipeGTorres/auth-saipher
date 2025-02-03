"use client";

import { Button, Card, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import login from "../api/login";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    // Resetando erro antes da nova tentativa
    setLoginError("");

    if (!email || !password) {
      setLoginError("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      const userData = await login({body: {email, password}});
      console.log("Login bem-sucedido:", userData);
      
      // Se precisar armazenar o token ou redirecionar, pode fazer aqui
      setLoading(false);
    } catch {
      setLoginError("Erro ao tentar fazer login. Verifique suas credenciais.");
      setLoading(false);
    }
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url(/signin.avif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card className="flex-col items-center g-2 w-96 p-6 shadow-lg rounded-2xl bg-gray-600 text-center">
        <form onSubmit={handleSubmit}>
          <Text className="text-2xl font-semibold mb-4">Entrar</Text>

          <TextField.Root
            type="email"
            placeholder="E-mail"
            className="my-4 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField.Root
            type="password"
            placeholder="Senha"
            className="mb-4 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" disabled={loading} className="w-40 mb-3 bg-slate-500">
            {loading ? "Entrando..." : "Login"}
          </Button>
        </form>

        {loginError && <p className="text-red-500">{loginError}</p>}

        <div className="my-3 text-center text-sm">
          <a href="/signup" className="text-blue-500 hover:underline">
            Não possui uma conta? Cadastre-se
          </a>
        </div>
        <div>
          <a href="/resetPassword" className="text-rose-500 hover:underline">
            Esqueceu sua senha? Redefinir
          </a>
        </div>
      </Card>
    </div>
  );
}
