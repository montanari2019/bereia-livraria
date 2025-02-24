export function formatarTelefone(telefone: string): string {
  // Remove qualquer caractere não numérico
  const apenasNumeros = telefone.replace(/\D/g, "");

  // Aplica a máscara de telefone enquanto o usuário digita
  if (apenasNumeros.length <= 10) {
    return apenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else {
    return apenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  }
}

export function formatarCPF(cpf: string): string {
  // Remove qualquer caractere não numérico
  cpf = cpf.replace(/[^\d]/g, "");

  // Aplica a máscara
  if (cpf.length <= 3) {
    return cpf;
  } else if (cpf.length <= 6) {
    return `${cpf.substring(0, 3)}.${cpf.substring(3)}`;
  } else if (cpf.length <= 9) {
    return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6)}`;
  } else {
    return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(
      6,
      9
    )}-${cpf.substring(9, 11)}`;
  }
}
