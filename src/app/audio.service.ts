import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private backgroundMusic: HTMLAudioElement = new Audio('assets/musicadefondo.mp3');
  private winMusic: HTMLAudioElement = new Audio('assets/win.mp3');
  private isPlayingBackgroundMusic: boolean = false;

  constructor() {
    this.backgroundMusic.loop = true;
    this.backgroundMusic.volume = 0.5;
    this.winMusic.loop = false;
    this.winMusic.volume = 1;
  }

  playBackgroundMusic(): void {
    this.stopWinMusic();
    this.backgroundMusic.play();
    this.isPlayingBackgroundMusic = true;
  }

  stopBackgroundMusic(): void {
    this.backgroundMusic.pause();
    this.backgroundMusic.currentTime = 0;
    this.isPlayingBackgroundMusic = false;
  }

  playWinMusic(): void {
    this.stopBackgroundMusic();
    this.winMusic.play();
  }

  stopWinMusic(): void {
    this.winMusic.pause();
    this.winMusic.currentTime = 0;
  }

  isBackgroundMusicPlaying(): boolean {
    return this.isPlayingBackgroundMusic;
  }

  toggleBackgroundMusic(): void {
    if (this.isPlayingBackgroundMusic) {
      this.stopBackgroundMusic();
    } else {
      this.playBackgroundMusic();
    }
  }
}
