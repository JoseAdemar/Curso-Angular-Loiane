import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.less'
})
export class OutputPropertyComponent {

 @Input() valor = 0;
 @Output() mudouValor = new EventEmitter();

  incrementa(){
    this.valor ++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor --;
    this.mudouValor.emit({novoValor: this.valor});
  }


}
