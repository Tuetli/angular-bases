import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})
export class CounterComponent {

  public counter: number = 10;

  public addCounter(): void {
    this.counter += 1;
  }

  public decreaseCounter(): void {
    this.counter -= 1;
  }

  public resetCounter(): void {
    this.counter = 10;
  }

}
