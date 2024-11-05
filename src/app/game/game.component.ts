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
  leftCapsuleState: string = 'assets/abierto1.png';
  rightCapsuleState: string = 'assets/cerrado2.png';
  isLeftCapsuleOpen: boolean = true;
  isRightCapsuleOpen: boolean = false;

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
    if (this.isLeftCapsuleOpen) { // Solo permitir si la cápsula izquierda está abierta
      this.closeLeftCapsule();
      setTimeout(() => {
        this.openRightCapsule();
      }, 2000);
    }
  }

  onBackButtonMouseDown() {
    this.isBackButtonPressed = true;
  }

  onBackButtonMouseUp() {
    this.isBackButtonPressed = false;
    if (this.isRightCapsuleOpen) { // Solo permitir si la cápsula derecha está abierta
      this.closeRightCapsule();
      setTimeout(() => {
        this.openLeftCapsule();
      }, 2000);
    }
  }

  onRegresarButtonMouseDown() {
    this.isRegresarButtonPressed = true;
  }

  onRegresarButtonMouseUp() {
    this.isRegresarButtonPressed = false;
    this.goBack(); // Llama a la función de volver al soltar el botón
  }

  // Cambios de estado de las cápsulas
  closeLeftCapsule() {
    this.leftCapsuleState = 'assets/entreabierto1.png';
    setTimeout(() => {
      this.leftCapsuleState = 'assets/cerrado1.png';
      this.isLeftCapsuleOpen = false;
    }, 1000); // Cambiar a cerrada después de 1 segundo
  }

  openLeftCapsule() {
    this.leftCapsuleState = 'assets/entreabierto1.png';
    setTimeout(() => {
      this.leftCapsuleState = 'assets/abierto1.png';
      this.isLeftCapsuleOpen = true;
    }, 1000);
  }

  closeRightCapsule() {
    this.rightCapsuleState = 'assets/entreabierto2.png';
    setTimeout(() => {
      this.rightCapsuleState = 'assets/cerrado2.png';
      this.isRightCapsuleOpen = false;
    }, 1000); // Cambiar a cerrada después de 1 segundo
  }

  openRightCapsule() {
    this.rightCapsuleState = 'assets/entreabierto2.png';
    setTimeout(() => {
      this.rightCapsuleState = 'assets/abierto2.png';
      this.isRightCapsuleOpen = true;
    }, 1000);
  }
}
