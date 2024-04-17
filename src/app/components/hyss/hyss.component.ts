import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hyss',
  templateUrl: './hyss.component.html',
  styleUrls: ['./hyss.component.css']
})
export class HyssComponent implements OnInit {
  skill: Skills[] = [];

  constructor(private skillsService: SkillsService,  private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void{
    this.cargarSkills();
    if(this.tokenService.getToken())
      {
        this.isLogged = true;
      }
      else{
        this.isLogged = false;
      }
  }

  cargarSkills(): void {
    this.skillsService.lista().subscribe(data =>
      {
        this.skill = data;
      })
    }

    delete(id: number)
    {
      if(id != undefined)
        {
          this.skillsService.delete(id).subscribe(data =>
            {
              this.cargarSkills();
            }, err => {
              alert("No se pudo borrar el skill");
            }
          )
        }
    }
}
