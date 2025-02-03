"use client";

import { useState } from "react";
import { Button, Card, Text, TextField } from "@radix-ui/themes";
import resetPassword from "../../api/resetPassword";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      await resetPassword(email);
      setMessage("Um link de redefinição foi enviado para o seu e-mail.");
    } catch {
      setError("Erro ao tentar redefinir a senha. Verifique o e-mail digitado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url(signup.avif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card className="flex-col items-center g-2 w-96 p-6 shadow-lg rounded-2xl bg-gray-600 text-center">
        <form onSubmit={handleSubmit}>
          <Text className="text-2xl font-semibold mb-4">Redefinir Senha</Text>

          <TextField.Root
            type="email"
            placeholder="Digite seu e-mail"
            className="my-4 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit" disabled={loading} className="w-40 mb-3 bg-slate-500">
            {loading ? "Enviando..." : "Enviar Link"}
          </Button>
        </form>

        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="mt-3 text-center text-sm">
          <a href="/signin" className="text-blue-500 hover:underline">
            Voltar para Login
          </a>
        </div>
      </Card>
    </div>
  );
}
