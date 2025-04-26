export async function loginMedico({ nome, senha }) {
  const response = await fetch("https://localhost:7080/api/Medico/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, senha }), // Envia o nome e a senha no corpo da requisição
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.message || "Erro ao fazer login");
  }

  return response.json();
}
