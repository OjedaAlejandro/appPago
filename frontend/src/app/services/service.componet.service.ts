import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceComponetService {
  http=inject(HttpClient);
  url="https://tiendaconnodejs.fly.dev"
  constructor() { }
  Comprar(data:any){
    return firstValueFrom(
      this.http.post<any>(this.url+"/create-checkout-session",data)
    )
  }
}
