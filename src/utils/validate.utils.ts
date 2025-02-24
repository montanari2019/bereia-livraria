export function isValidPassword(password: string): boolean {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validarCPF(cpf: string): boolean {
  // Remove pontos e hífens
  cpf = cpf.replace(/[^\d]+/g, "");

  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    return false;
  }

  // Verifica se o CPF não é uma sequência de números repetidos (ex: 111.111.111-11)
  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  // Validação do primeiro dígito verificador
  let soma = 0;
  let peso = 10;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * peso;
    peso--;
  }
  let resto = soma % 11;
  let digito1 = resto < 2 ? 0 : 11 - resto;

  // Validação do segundo dígito verificador
  soma = 0;
  peso = 11;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * peso;
    peso--;
  }
  resto = soma % 11;
  let digito2 = resto < 2 ? 0 : 11 - resto;

  // Verifica se os dois dígitos verificadores são válidos
  if (
    parseInt(cpf.charAt(9)) === digito1 &&
    parseInt(cpf.charAt(10)) === digito2
  ) {
    return true;
  }

  return false;
}

export function validarTelefone(telefone: string): boolean {
  // Remove caracteres não numéricos
  telefone = telefone.replace(/[^\d]+/g, "");

  // Verifica se o telefone tem 11 dígitos e começa com 9 após o DDD
  const regex = /^\d{2}9\d{8}$/;

  return regex.test(telefone);
}
