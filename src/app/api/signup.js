// pages/api/createToAccount.js

import axios from "axios";

export default async function handleSignUp(req, res) {
  try {
    const response = await axios.post(
      "https://api-staging.seuseventos.com.br/v1/accounts/signup",
      {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(response.data);

    /* res.status(200).json({ accountId:"" }); */
  } catch (error) {
    console.error("Erro ao criar conta:", error);
    res.status(500).json({ error: "Erro ao criar conta" });
  }
}
