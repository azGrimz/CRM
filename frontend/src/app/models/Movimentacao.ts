import { Container } from './Container';
export interface Movimentacao {
  movimentacao_id: number;
  dataInicio: Date;
  dataFim: Date;
  tipo: String;
  container: number;

  containers: Container[];
}
