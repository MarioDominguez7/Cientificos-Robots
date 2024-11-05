import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  // Estado de los botones
  isSendButtonPressed: boolean = false;
  isBackButtonPressed: boolean = false;
  isRegresarButtonPressed: boolean = false;

  constructor(private router: Router) {}

  // Métodos para manejar los eventos de clic
  send() {
    //console.log('Enviar'); // Lógica para enviar
  }

  goBack() {
    this.router.navigate(['/']); // Redirige al componente de inicio
  }

  // Métodos para manejar los estados de los botones
  onSendButtonMouseDown() {
    this.isSendButtonPressed = true;
  }

  onSendButtonMouseUp() {
    this.isSendButtonPressed = false;
    this.send(); // Llama a la función de enviar al soltar el botón
  }

  onBackButtonMouseDown() {
    this.isBackButtonPressed = true;
  }

  onBackButtonMouseUp() {
    this.isBackButtonPressed = false;
    
  }

  onRegresarButtonMouseDown() {
    this.isRegresarButtonPressed = true;
  }

  onRegresarButtonMouseUp() {
    this.isRegresarButtonPressed = false;
    this.goBack(); // Llama a la función de volver al soltar el botón
  }
}
