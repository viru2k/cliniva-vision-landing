import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicaComponent } from './pages/clinica/clinica.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { EstudiosComponent } from './pages/estudios/estudios.component';
import { PatologiasComponent } from './pages/patologias/patologias.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CatarataComponent } from './pages/patologias/catarata/catarata.component';
import { ChalazionComponent } from './pages/patologias/chalazion/chalazion.component';
import { DesprendimientoretinaComponent } from './pages/patologias/desprendimientoretina/desprendimientoretina.component';
import { EstrabismoComponent } from './pages/patologias/estrabismo/estrabismo.component';
import { GlaucomaComponent } from './pages/patologias/glaucoma/glaucoma.component';
import { MiopiaComponent } from './pages/patologias/miopia/miopia.component';
import { ObstruccionlagrimalComponent } from './pages/patologias/obstruccionlagrimal/obstruccionlagrimal.component';
import { PresbiciaComponent } from './pages/patologias/presbicia/presbicia.component';
import { RetinopatiadiabeticaComponent } from './pages/patologias/retinopatiadiabetica/retinopatiadiabetica.component';
import { ObrasocialComponent } from './pages/obrasocial/obrasocial.component';
import { LenteComponent } from './pages/lente/lente.component';
import { FormapagoComponent } from './pages/formapago/formapago.component';

const routes: Routes = [  
{ path: '', component: InicioComponent },
{ path: 'clinica', component: ClinicaComponent },
{ path: 'medicos', component: MedicosComponent },
{ path: 'estudios', component: EstudiosComponent },
{ path: 'patologia', component: PatologiasComponent },
{ path: 'patologia/catarata', component: CatarataComponent },
{ path: 'patologia/chalazion', component: ChalazionComponent },
{ path: 'patologia/desprendimientoretina', component: DesprendimientoretinaComponent },
{ path: 'patologia/estrabismo', component: EstrabismoComponent },
{ path: 'patologia/glaucoma', component: GlaucomaComponent },
{ path: 'patologia/miopia', component: MiopiaComponent },
{ path: 'patologia/obstruccionlagrimal', component: ObstruccionlagrimalComponent },
{ path: 'patologia/presbicia', component: PresbiciaComponent },
{ path: 'patologia/retinopatiadiabetica', component: RetinopatiadiabeticaComponent },
{ path: 'obrasocial', component: ObrasocialComponent },
{ path: 'lente', component: LenteComponent },
{ path: 'formapago', component: FormapagoComponent },
{ path: 'contacto', component: ContactoComponent },
{ path: '', pathMatch: 'full', redirectTo: '' },
{ path: '**', pathMatch: 'full', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],




exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
