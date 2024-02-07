
export interface Container {
  id: number;
  cliente: string;
  identificacao: string;
  tipo: number;
  categoria: string;

  movimentacao: Movimentacao[];
}

export interface Movimentacao{
  movimentacao_id: number;
  dataInicio: Date;
  dataFim: Date;
  tipo: String;

}
