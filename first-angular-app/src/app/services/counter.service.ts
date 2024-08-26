import { computed, effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = signal(0) // You Can use it with a function Only so we are getting it using this.count
  doubleCount: Signal<number> = computed(()=>this.count()*2);
  getCounter(){
    return this.count()
  }

  constructor(){
    effect(()=>{
      console.log("count :",this.count(),"double Count",this.doubleCount());
    })
  }

  incrementCounter(){
    // this.count = this.count+1;
    // ------------ Below is for signal -----------------------
    // this.count.set(this.count()+1)
    // this.count.set(this.count()+1)
    // If You Want To Update On Previous Value
    this.count.update((oldValue)=>{
      return oldValue+1
    })

    // this.count.set(6)
  }
}
