import { Component } from '@angular/core';
import { FormularioService } from '../services/formulario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:false
})
export class HomePage {
  formData: any = {};
  fields = [
    { label: 'Nombre', name: 'nombre' },
    { label: 'Apellido', name: 'apellido' },
    { label: 'Email', name: 'email' },
    { label: 'Teléfono', name: 'telefono' },
    { label: 'Dirección', name: 'direccion' },
    { label: 'Ciudad', name: 'ciudad' },
    { label: 'Edad', name: 'edad' },
    { label: 'Ocupación', name: 'ocupacion' }
  ];

  constructor(private formularioService: FormularioService) {}

  submitForm() {
    this.formularioService.enviarFormulario(this.formData)
      .then(() => {
        alert('Formulario enviado con éxito');
        this.formData = {};
      })
      .catch(error => {
        console.error('Error al enviar formulario:', error);
      });
  }
}
