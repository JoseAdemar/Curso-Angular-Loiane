import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.less'
})
export class DataBindingComponent {

    url = "http:loiane.trainning.com.br";
    cursoAngular = true;
    imgCarro = "https://cdn.motor1.com/images/mgl/AkB8vL/s3/fiat-mobi-2023.jpg";
    getValor(): number{
      return 10;
    }

    getCurtir(){
      return true;
    }
}
