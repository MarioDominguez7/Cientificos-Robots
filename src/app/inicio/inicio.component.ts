import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  showRules: boolean = false;

  // Método para iniciar el juego
  startGame() {
    // Aquí puedes agregar la lógica para iniciar el juego o navegar a otra vista
    console.log("Juego iniciado");
  }

  // Método para mostrar/ocultar las reglas
  toggleRules() {
    this.showRules = !this.showRules;
  }
}
