import axios from "axios";

export default async function handleSignIn(req, res) {
  try {
    const response = await axios.post(
      "https://api-staging.seuseventos.com.br/v1/accounts/signin",
      {
        email: req.body.email,
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
