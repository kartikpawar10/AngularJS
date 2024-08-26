import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { B1Component } from '../b1/b1.component';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [B1Component],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
  constructor(public countService:CounterService){
    // if We create it private then its simple that we need to access with a GetFunction() 
    // But if we create it public then its simple that we can access it using string interpolation
  }
}
