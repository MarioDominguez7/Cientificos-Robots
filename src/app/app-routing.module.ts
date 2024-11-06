import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { GameComponent } from './game/game.component';
import { RulesComponent } from './rules/rules.component';
import { GameoverComponent } from './gameover/gameover.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'game', component: GameComponent},
  {path: 'win', component: RulesComponent},
  { path: 'gameover', component: GameoverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
