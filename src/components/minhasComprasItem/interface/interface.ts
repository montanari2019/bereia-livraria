export interface MinhasComprasItemProps {
  imageUrl: string;
  status: "Em preparação" | "Entregue" | "Devolvido";
  dataPrevistaDevolucao: Date;
  dataEntrega: Date;
}
