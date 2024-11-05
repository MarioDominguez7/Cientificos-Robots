import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  showRules: boolean = false;

  record: number = 0; // Inicializa el récord

  constructor(private router: Router) {} // Inyecta Router

  startGame() {
    this.router.navigate(['/game']); // Redirige al componente de juego
  }

  // Método para mostrar/ocultar las reglas
  toggleRules() {
    this.showRules = !this.showRules;
  }
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); // Pide pantalla completa
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); // Salir de pantalla completa
      }
    }
  }
}
