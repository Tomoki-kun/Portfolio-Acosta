import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-foto',
  templateUrl: './edit-foto.component.html',
  styleUrls: ['./edit-foto.component.css']
})

export class EditFotoComponent implements OnInit{
  persona: persona = null;
  imageChangedEvent: any = '';

  constructor(private activatedRoute: ActivatedRoute, private personaService: PersonaService, private router: Router,public imageService: ImageService){}
  
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
    this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar la foto");
      this.router.navigate(['']);
    }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event,name);
  }
  
  onImageSelected($event: any): void {
    this.imageChangedEvent = $event;
  }

  onImageCropped($event: ImageCroppedEvent): void {
    const file = $event.blob;
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage(file, name); 
  }

  dataURLtoBlob(dataURL: string): Blob {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }
}
