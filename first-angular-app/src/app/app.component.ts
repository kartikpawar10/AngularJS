import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { User } from './models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,CommonModule],
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
}
