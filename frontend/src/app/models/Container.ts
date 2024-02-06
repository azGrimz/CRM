
import { Movimentacao } from './Movimentacao';
export interface Container {
  id: number;
  cliente: string;
  identificacao: string;
  tipo: number;
  categoria: string;

  movimentacao: Movimentacao[];
}
