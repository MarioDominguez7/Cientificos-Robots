import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { RulesComponent } from './rules/rules.component';
import { InicioComponent } from './inicio/inicio.component';
import { GameStateService } from './game-state.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    RulesComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
