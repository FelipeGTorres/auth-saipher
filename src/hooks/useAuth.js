import { useState } from "react";

export function useAuth() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function login(email, password) {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Erro desconhecido");
            }

            return data;
        } catch (err) {
            setError(err.message);
            return null;
        } finally {
            setLoading(false);
        }
    }

    return { login, loading, error };
}
