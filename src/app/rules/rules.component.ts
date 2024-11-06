import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {
  movimientos: number = 0;

  constructor(private router: Router, private audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.playWinMusic();
  }


  startGame() {
    this.audioService.playBackgroundMusic();  // Reproduce la música de fondo cuando se regresa al juego
    this.router.navigate(['']); // Redirige al componente de juego
  }
}
