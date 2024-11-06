import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { GameStateService } from '../game-state.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  showRules: boolean = false;

  record: number = 0; // Inicializa el récord

  constructor(private router: Router, private datosService: GameStateService) {} // Inyecta Router

  ngOnInit() {
    this.recordActual(); // Llama a la función para cargar el récord al inicio
  }

  recordActual(){
    this.record = this.datosService.getRecord();
  }
 

  startGame() {
    this.datosService.setRecord(this.record); 
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
