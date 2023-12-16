import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.less'
})
export class InputPropertyComponent {

 @Input('nome') nomeDoCurso = "";

}
