import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServiceComponetService } from '../../services/service.componet.service';
import { HttpClientModule } from '@angular/common/http';
import{model} from "../../models/model.component"
import * as AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos CSS de AOS
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  public model?:model
  _Service=inject(ServiceComponetService)
  modelo=[
    new model('CLASES DE MASTER EN JAVASCRIPT','sdsdsd','2700','Mas de 50hs de clases','Consulta con los mejores profesores','Certificado de cursada','Aumentar mucho tus posibilidades laborales'),
    new model('Curso de Ingles','sdsdsd','3000','Aprenderás a comunicarte en ingles básico en forma oral y escrita','gramática','fonética','correcta pronunciación'),
    new model('Master en Python','sdsdsd','2500','Aprender programación desde cero','Ejercitar la lógica de programación','Creación de aplicaciones Web con Django y Python','Certificado de cursada')]
  constructor(){
    AOS.init(); // Inicializa AOS
  }
  

async Pagar(indice:any) {
  console.log(this.modelo)
  const Response= await this._Service.Comprar(this.modelo[indice]);
  console.log(Response.url)
  window.location.href = Response.url;
}


conversion(centavos:any){
   const dolares=centavos/100
   return dolares;
}

}
