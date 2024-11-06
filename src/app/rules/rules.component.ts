import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../audio.service';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {
  record: number = 0; 

  constructor(private router: Router, private audioService: AudioService, private datosService: GameStateService) {}

  ngOnInit(): void {
    this.audioService.playWinMusic();
    this.recordActual(); 
  }

  recordActual(){
    this.record = this.datosService.getRecord();
  }
 

  startGame() {
    this.audioService.playBackgroundMusic();  // Reproduce la música de fondo cuando se regresa al juego
    this.router.navigate(['']); // Redirige al componente de juego
  }
}
