import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  private movimientos: number = 0;
  private record: number = 0;

  constructor() { }

  setMovimientos(movimientos: number): void {
    this.movimientos = movimientos;
  }

  getMovimientos(): number {
    return this.movimientos;
  }

  setRecord(record: number): void {
    this.record = record;
  }

  getRecord(): number {
    return this.record;
  }
}
