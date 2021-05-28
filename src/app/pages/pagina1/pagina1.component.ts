import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [],
})
export class Pagina1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  nombre: string = 'Edgar';
  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor() {
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');
    // cuando dejamos de mostrarlo de "destruye" pero de la pantalla, el timer sigue funcionando en la consola
    // al destruirlo ejecutamos "unsubscribe" para detener el timer
  }
  // este se ejecuta lit cuando quitamos un elemento del DOM cuando detecta que algo se quito de la pantalla se ejecuta

  ngOnInit(): void {
    console.log('ngOninit');

    this.timerSubscription = interval(1000).subscribe((i) => {
      this.segundos = i;
    });
  }

  guardar() {}
}
