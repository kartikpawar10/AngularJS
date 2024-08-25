import { booleanAttribute, Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { CountryCodePipe } from '../pipes/country-code.pipe';
import { HighlightDirective } from '../directives/highlight.directive';


function formatName(value:string){
  return 'Hi ' + value
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,CountryCodePipe,HighlightDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(){
    console.log("constructor called", this.name);
  }
  phoneNo : number = 9826328055

  @Input({alias:"userName",transform : formatName}) name : string = "";
  @Input({transform:booleanAttribute}) isSingle!: boolean
  @Input({transform:numberAttribute}) salary !:number


  @Output() myEvent = new EventEmitter<User>()
  sendData(){
    this.myEvent.emit({name:"Hello from SendData",salary:94334})
  }

  ngOnInit(){
    console.log("ngOnInt Called");
  }

  ngOnDestroy(){
    console.log("component destroyed")
  }
}
