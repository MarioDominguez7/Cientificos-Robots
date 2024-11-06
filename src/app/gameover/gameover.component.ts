import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit{

  constructor(private router: Router, private audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.playGameOverMusic();
  }
  
  startGame() {
    this.audioService.playBackgroundMusic();  
    this.router.navigate(['']); 
  }
}
