import { Component, OnInit } from '@angular/core';
import { AudioService } from './audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cientificos-Robots';
  musicIcon: string = 'assets/volume.png';

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.playBackgroundMusic();
    this.updateMusicIcon();
  }

  toggleMusic(): void {
    this.audioService.toggleBackgroundMusic();
    this.updateMusicIcon();
  }

  private updateMusicIcon(): void {
    if (this.audioService.isBackgroundMusicPlaying()) {
      this.musicIcon = 'assets/volume-up.png';
    } else {
      this.musicIcon = 'assets/volume.png';
    }
  }

  playWinMusic(): void {
    this.audioService.playWinMusic();
    this.musicIcon = 'assets/volume-up.png';
  }
}

