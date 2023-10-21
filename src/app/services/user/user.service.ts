import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.ts'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

   url = "url.com"; 

  constructor(private router: Router) {}; 


  async getUsuario ()
  {
    try {
      const resultado = await fetch(this.url); 
      const listaUsuarios = await resultado.json();
      return listaUsuarios; 
    } catch (error) {
      alert('Error...')
    }
  }

  async postUsuario(usuario: User)
  {
    try{
      const resultado= await fetch(this.url, 
        {method: 'POST',
        body: JSON.stringify(usuario),
        headers: {'Content-type': 'application/json'}
        })
      this.router.navigate(['home'])
    } catch (error)
    {
      console.log(error)
    }
  }

  async deleteUsuario (id: number)
  {
    try{
      const resultado= await fetch(this.url, 
        {method: 'DELETE', 
        body:JSON.stringify(id), 
        headers: {'Content-type': 'application/json'}
      })
      this.router.navigate(['home'])
    } catch(error)
    {
      alert ("Usuario no existe"); 
    }
  }
}
