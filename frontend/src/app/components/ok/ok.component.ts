import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ok',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ok.component.html',
  styleUrl: './ok.component.css'
})
export class OkComponent {
  router=inject(Router)
Inicio() {
  this.router.navigate([''])
}

}
