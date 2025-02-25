export const formatarParaReais = (valor: number): string => {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatarTexto = (texto: string): string => {
  return texto.replace(/<br\s*\/?>/g, "\n");
};
