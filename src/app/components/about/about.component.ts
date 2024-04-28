import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: persona = null;
  imagenUrl: string = '';
  imagenPorDefecto: string = '../../../assets/20210823_004151.jpg';
  descripcionUsuario: string = '';
  nombreUser: string = '';
  apellidoUser: string = '';

  constructor(public personaService: PersonaService,private tokenService: TokenService) {
  }
  isLogged = false;

  ngOnInit(): void {
    this.cargaPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  cargaPersona(){
    this.personaService.detail(1).subscribe(data => {
      this.persona = data
      this.descripcionUsuario = data.descripcion;
      this.imagenUrl = data.img;
      this.apellidoUser  = data.apellido;
      this.nombreUser = data.nombre;
    },
    (error) => {
      if (error.status === 404) {
        // Si la persona no existe, crea una nueva
        this.createEmptyPersona();
      }
    }
    )
  }

  createEmptyPersona(): void {
    // Crea una nueva persona con campos vacíos
    const nuevaPersona: persona = {
      nombre: '',
      apellido: '',
      descripcion: '',
      img: '' // Puedes asignar aquí la URL de la imagen por defecto si lo deseas
    };

    // Envía la solicitud para crear la persona al servicio
    this.personaService.save(nuevaPersona).subscribe(
      data => {
        this.persona = data; // Actualiza la persona con la nueva creada
      }
    );
  }
}
