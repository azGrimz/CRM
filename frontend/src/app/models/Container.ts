

export interface Container {
  id: number;
  cliente: string;
  identificacao: string;
  tipo: number;
  categoria: string;

  movimentacao: Movimentacao[];
}


export interface Movimentacao{
    tipo:string;
    dataInicio: Date;
    dataFim: Date;
    movimentacao_id: number;
}
