import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewSkillComponent } from './components/hyss/new-skill.component';
import { EditSkillComponent } from './components/hyss/edit-skill.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditFotoComponent } from './components/about/perfil/edit-foto/edit-foto.component';
import { EditDatosComponent } from './components/about/perfil/edit-datos/edit-datos.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginFormComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexperiencia/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NewEducacionComponent},
  { path: 'editeducacion/:id', component: EditEducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'editAbout/:id', component: EditAboutComponent},
  { path: 'editFoto/:id', component: EditFotoComponent},
  { path: 'editDatos/:id', component: EditDatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
