import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit{
  persona: persona = null;

  constructor(private activatedRoute: ActivatedRoute, private personaService: PersonaService, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe( data =>{
      this.persona = data;
    },err =>{
      alert(err);
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar la descripción");
      this.router.navigate(['']);
    }
    )
  }

}
