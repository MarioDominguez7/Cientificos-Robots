import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  // Estado de los elementos en cada laboratorio
  lab1Cientificos: number = 3;
  lab1Robots: number = 3;
  lab2Cientificos: number = 0;
  lab2Robots: number = 0;
  movimientos: number = 0;

  // Estado de la cápsula
  capsule: string[] = [];
  isLeftCapsuleOpen: boolean = true;
  isRightCapsuleOpen: boolean = false;

  // Visibilidad de los elementos
  isSendButtonPressed: boolean = false;
  isBackButtonPressed: boolean = false;
  isRegresarButtonPressed: boolean = false;
  leftCapsuleState: string = 'assets/abierto1.png';
  rightCapsuleState: string = 'assets/cerrado2.png';
  isSendCButtonPressed: boolean = false;
  isSendRButtonPressed: boolean = false;
  robot1lab1Visible: boolean = true;
  cient1lab1Visible: boolean = true;
  cient2lab1Visible: boolean = true;
  robot2lab1Visible: boolean = true;
  robot3lab1Visible: boolean = true;
  cient3lab1Visible: boolean = true;
  robot1lab2Visible: boolean = false;
  cient1lab2Visible: boolean = false;
  cient2lab2Visible: boolean = false;
  robot2lab2Visible: boolean = false;
  robot3lab2Visible: boolean = false;
  cient3lab2Visible: boolean = false;
  robot1Cap1Pos1Visible: boolean = false;
  cient1Cap1Pos1Visible: boolean = false;
  cient2Cap1Pos1Visible: boolean = false;
  robot2Cap1Pos1Visible: boolean = false;
  robot3Cap1Pos1Visible: boolean = false;
  cient3Cap1Pos1Visible: boolean = false;
  robot1Cap1Pos2Visible: boolean = false;
  cient1Cap1Pos2Visible: boolean = false;
  cient2Cap1Pos2Visible: boolean = false;
  robot2Cap1Pos2Visible: boolean = false;
  robot3Cap1Pos2Visible: boolean = false;
  cient3Cap1Pos2Visible: boolean = false;
  robot1Cap2Pos1Visible: boolean = false;
  cient1Cap2Pos1Visible: boolean = false;
  cient2Cap2Pos1Visible: boolean = false;
  robot2Cap2Pos1Visible: boolean = false;
  robot3Cap2Pos1Visible: boolean = false;
  cient3Cap2Pos1Visible: boolean = false;
  robot1Cap2Pos2Visible: boolean = false;
  cient1Cap2Pos2Visible: boolean = false;
  cient2Cap2Pos2Visible: boolean = false;
  robot2Cap2Pos2Visible: boolean = false;
  robot3Cap2Pos2Visible: boolean = false;
  cient3Cap2Pos2Visible: boolean = false;

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
      }, 1000);
    }
    if (this.isRightCapsuleOpen) { // Solo permitir si la cápsula derecha está abierta
      this.closeRightCapsule();
      setTimeout(() => {
        this.openLeftCapsule();
      }, 1000);
    }
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

  // Cambios de estado de las cápsulas
  closeLeftCapsule() {
    this.leftCapsuleState = 'assets/entreabierto1.png';
    setTimeout(() => {
      this.leftCapsuleState = 'assets/cerrado1.png';
      this.isLeftCapsuleOpen = false;
    }, 250); // Cambiar a cerrada después de 1 segundo
  }

  openLeftCapsule() {
    this.leftCapsuleState = 'assets/entreabierto1.png';
    setTimeout(() => {
      this.leftCapsuleState = 'assets/abierto1.png';
      this.isLeftCapsuleOpen = true;
    }, 250);
  }

  closeRightCapsule() {
    this.rightCapsuleState = 'assets/entreabierto2.png';
    setTimeout(() => {
      this.rightCapsuleState = 'assets/cerrado2.png';
      this.isRightCapsuleOpen = false;
    }, 250); // Cambiar a cerrada después de 1 segundo
  }

  openRightCapsule() {
    this.rightCapsuleState = 'assets/entreabierto2.png';
    setTimeout(() => {
      this.rightCapsuleState = 'assets/abierto2.png';
      this.isRightCapsuleOpen = true;
    }, 250);
  }

  // Métodos para manejar los estados de los botones
  onSendCButtonMouseDown() {
    this.isSendCButtonPressed = true;
  }

  onSendCButtonMouseUp() {
    this.isSendCButtonPressed = false;
  }

  // Métodos para manejar los estados de los botones
  onSendRButtonMouseDown() {
    this.isSendRButtonPressed = true;
  }

  onSendRButtonMouseUp() {
    this.isSendRButtonPressed = false;
  }


  // Método para reiniciar el juego
  reiniciarJuego() {
    this.lab1Cientificos = 3;
    this.lab1Robots = 3;
    this.lab2Cientificos = 0;
    this.lab2Robots = 0;
    this.capsule = [];
    this.movimientos = 0;

    // Reestablece las visibilidades de los elementos
    this.robot1lab1Visible = true;
    this.cient1lab1Visible = true;
    this.cient2lab1Visible = true;
    this.robot2lab1Visible = true;
    this.robot3lab1Visible = true;
    this.cient3lab1Visible = true;
    this.robot1lab2Visible = false;
    this.cient1lab2Visible = false;
    this.cient2lab2Visible = false;
    this.robot2lab2Visible = false;
    this.robot3lab2Visible = false;
    this.cient3lab2Visible = false;
    this.robot1Cap1Pos1Visible = false;
    this.cient1Cap1Pos1Visible = false;
    this.cient2Cap1Pos1Visible = false;
    this.robot2Cap1Pos1Visible = false;
    this.robot3Cap1Pos1Visible = false;
    this.cient3Cap1Pos1Visible = false;
    this.robot1Cap1Pos2Visible = false;
    this.cient1Cap1Pos2Visible = false;
    this.cient2Cap1Pos2Visible = false;
    this.robot2Cap1Pos2Visible = false;
    this.robot3Cap1Pos2Visible = false;
    this.cient3Cap1Pos2Visible = false;
    this.robot1Cap2Pos1Visible = false;
    this.cient1Cap2Pos1Visible = false;
    this.cient2Cap2Pos1Visible = false;
    this.robot2Cap2Pos1Visible = false;
    this.robot3Cap2Pos1Visible = false;
    this.cient3Cap2Pos1Visible = false;
    this.robot1Cap2Pos2Visible = false;
    this.cient1Cap2Pos2Visible = false;
    this.cient2Cap2Pos2Visible = false;
    this.robot2Cap2Pos2Visible = false;
    this.robot3Cap2Pos2Visible = false;
    this.cient3Cap2Pos2Visible = false;
  }

  moverACapsula(tipo: string) {
    if (this.capsule.length < 2) {
      if (tipo === 'cientifico' && this.lab1Cientificos > 0) {
        this.lab1Cientificos--;
        this.capsule.push('cientifico');
        this.cient1lab1Visible = false; 
        // Actualiza la visibilidad del científico


      } else if (tipo === 'robot' && this.lab1Robots > 0) {
        this.lab1Robots--;
        this.capsule.push('robot');
        this.robot1lab1Visible = false; 
        // Actualiza la visibilidad del robot

      }
    }
  }

  // Método para enviar la cápsula
  enviarCapsula() {
    if (this.capsule.length > 0 && this.validarEnvio()) {
      this.movimientos++;
      if (this.isLeftCapsuleOpen) {
        this.lab2Cientificos += this.capsule.filter(x => x === 'cientifico').length;
        this.lab2Robots += this.capsule.filter(x => x === 'robot').length;
      } else {
        this.lab1Cientificos += this.capsule.filter(x => x === 'cientifico').length;
        this.lab1Robots += this.capsule.filter(x => x === 'robot').length;
      }
      this.capsule = []; // Vacía la cápsula después de enviar
      this.verificarGanador();
    }
  }

  // Método para validar el envío de la cápsula
  validarEnvio(): boolean {
    if (this.capsule.length < 1 || this.capsule.length > 2) {
      return false;
    }
    // Lógica para validar que no haya más robots que científicos en un laboratorio
    // Implementa tu lógica aquí basada en el estado actual
    return true;
  }

  // Método para verificar si el juego ha terminado (ganador o game over)
  verificarGanador() {
    if (this.lab2Cientificos === 3 && this.lab2Robots === 3) {
      // Lógica para mostrar que el jugador ha ganado

    } else if ((this.lab1Cientificos < this.lab1Robots && this.lab1Cientificos > 0) ||
               (this.lab2Cientificos < this.lab2Robots && this.lab2Cientificos > 0)) {
      // Lógica para mostrar que el jugador ha perdido
      
    }
  }
}
  
}
