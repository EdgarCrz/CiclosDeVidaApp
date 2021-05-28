import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [],
})
export class MuestraNombreComponent implements OnInit, OnChanges {
  @Input() nombre!: string;
  // voy a recibir un argunmente mediante @Input este se llama nombre !siempre va a existir ese valor y es de tipo string

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  // al detectar algun cambio en este componente se va a ejecutar, en este caso lo que va a cambiar va ser el
  // valor vacio de "nombre" por "Juan" que es lo que nos estan mandando y que recibimos gracias al @Input

  ngOnInit(): void {}
}
