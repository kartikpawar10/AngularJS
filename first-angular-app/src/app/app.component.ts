import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { User } from './models/user';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './joke/joke.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,CommonModule,JokeComponent,AComponent,B1Component,B2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="first-angular-app"
  
  users=[{userName:"Kartik" ,isSingle:true ,salary:10000},
    {userName:"Mukesh", isSingle:false, salary:40000},
    {userName:"Suresh" ,isSingle:true, salary:36000}]

  receivedData(event:User){
    console.log(event)
  }

  clear(){
    this.users = []
  }
}
