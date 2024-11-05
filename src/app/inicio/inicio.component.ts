import { Router } from '@angular/router'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  showRules: boolean = false;
  record: number = 0;
  musicPlayer: HTMLAudioElement | null = null;
  musicIcon: string = '/assets/music-off.png'; // Ícono inicial

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inicializa el reproductor de música al cargar el componente
    this.initializeMusicPlayer();
  }

  initializeMusicPlayer(): void {
    if (!this.musicPlayer) {
      this.musicPlayer = new Audio('/assets/musicadefondo.mp3');
      this.musicPlayer.loop = true;
      this.musicPlayer.volume = 0.5;
      this.musicPlayer.play();
      this.musicIcon = '/assets/music.png';
    }
  }

  toggleMusic(): void {
    if (this.musicPlayer) {
      if (this.musicPlayer.paused) {
        this.musicPlayer.play();
        this.musicIcon = '/assets/music.png';
      } else {
        this.musicPlayer.pause();
        this.musicIcon = '/assets/music-off.png';
      }
    }
  }

  startGame(): void {
    this.router.navigate(['/game']);
  }

  toggleRules(): void {
    this.showRules = !this.showRules;
  }

  toggleFullScreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
}