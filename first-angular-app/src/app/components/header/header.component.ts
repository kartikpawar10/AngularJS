import { AfterViewInit, booleanAttribute, Component, ElementRef, EventEmitter, input, Input, numberAttribute, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';


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
export class HeaderComponent implements OnInit,AfterViewInit{
  constructor(){

    // init properties
    // dependency injections
    // event listener register
    console.log("constructor called", this.name());
    console.log("ngOnInt Called",this.heading?.nativeElement.textContent);
  }
  ngAfterViewInit(): void {
    console.log("After View Init Called",this.heading)
  }
  phoneNo : number = 9826328055

  // @Input({alias:"userName",transform : formatName}) name : string = ""

  name = input("",{
    alias:"userName", // jha use krenge () lagao
  })
  @Input({transform:booleanAttribute}) isSingle!: boolean
  @Input({transform:numberAttribute}) salary !:number
  @Output() myEvent = new EventEmitter<User>()
  sendData(){
    this.myEvent.emit({name:"Hello from SendData",salary:94334})
  }

  @ViewChild("myheading") heading?:ElementRef

  // API CALL WAGERA
  ngOnInit(){
    console.log("ngOnInt Called",this.name());
    console.log("ngOnInt Called",this.heading?.nativeElement.textContent);
  }

  ngOnDestroy(){
    console.log("component destroyed")
  }

  ngOnChanges(changes:SimpleChanges):void{
    console.log("On Changes",changes)
    console.log("ngOnInt Called",this.heading?.nativeElement.textContent);
  }
}
