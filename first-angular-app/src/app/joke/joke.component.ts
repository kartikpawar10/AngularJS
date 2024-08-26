import { Component } from '@angular/core';
import { JokeServiceService } from '../services/joke-service.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {
  constructor (private jokeService:JokeServiceService){} // DI

  loading = "Loading..."
  ngOnInit(){
   this.jokeService.getJoke().subscribe((data:any)=>{
      console.log(data)
      this.loading = data.value
    })
  }

  // getAnotherJoke(){
  //   this.jokeService.getJoke().subscribe((data:any)=>{
  //     this.loading = data.value
  //   },(e)=>{
  //     console.log("Error Hai");
  //   })
  // }

  getAnotherJoke(){
    this.jokeService.getJoke().subscribe({
      next:(data:any) => this.loading = data.value,
      error:(error)=>console.log("errr",error)
    })
  }
}
