import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // el:ElementRef
  constructor(private el:ElementRef) {
    // this.el = el
  }

  // Property ke liye Host Binding
  @HostBinding("style.backgroundColor")
  bgColor = "red"

  // Event ke liye Host Listeners
  @HostListener("mouseover")
  changeFontSize(){
    this.el.nativeElement.style.fontSize = "50px"
    this.el.nativeElement.innerHTML = "Hello"
    console.log("mouse enter");
    
  }
  @HostListener("mouseleave")
  resetFontSize(){
    this.el.nativeElement.style.fontSize = "30px"
    this.el.nativeElement.innerHTML = "Red"
    console.log("mouse leaving");
  }
}
