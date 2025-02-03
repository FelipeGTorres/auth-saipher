import axios from "axios";

export default async function resetPassword(email) {
  const response = await axios.put(
    "https://api-staging.seuseventos.com.br/v1/accounts/change-password",
    {
      headers: {
        "Content-Type": "application/json",
        "apiKey": "qfsADIEV.SRyJlTdYQpEaBx2YZaKQg",
      },
      body: JSON.stringify({ email }),
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao solicitar redefinição de senha.");
  }
}
