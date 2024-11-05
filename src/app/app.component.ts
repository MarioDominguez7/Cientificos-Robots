import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cientificos-Robots';
  musicPlayer: HTMLAudioElement | null = null;
  musicIcon: string = 'assets/volume.png'; // Ajusta la ruta

  constructor() {
    this.initializeMusicPlayer();
  }

  initializeMusicPlayer(): void {
    if (!this.musicPlayer) {
      this.musicPlayer = new Audio('assets/musicadefondo.mp3'); // Ajusta la ruta
      this.musicPlayer.loop = true;
      this.musicPlayer.volume = 0.5;
      this.musicPlayer.play();
      this.musicIcon = 'assets/volume-up.png'; // Ajusta la ruta
    }
  }

  toggleMusic(): void {
    console.log('Button clicked');
    if (this.musicPlayer) {
      if (this.musicPlayer.paused) {
        this.musicPlayer.play();
        this.musicIcon = 'assets/volume-up.png';
      } else {
        this.musicPlayer.pause();
        this.musicIcon = 'assets/volume.png';
      }
    }
  }
}

