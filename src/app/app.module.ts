import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
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
import { MiopiaComponent } from './pages/patologias/miopia/miopia.component';
import { GlaucomaComponent } from './pages/patologias/glaucoma/glaucoma.component';
import { ObstruccionlagrimalComponent } from './pages/patologias/obstruccionlagrimal/obstruccionlagrimal.component';
import { PresbiciaComponent } from './pages/patologias/presbicia/presbicia.component';
import { RetinopatiadiabeticaComponent } from './pages/patologias/retinopatiadiabetica/retinopatiadiabetica.component';
import { ObrasocialComponent } from './pages/obrasocial/obrasocial.component';
import { LenteComponent } from './pages/lente/lente.component';
import { FormapagoComponent } from './pages/formapago/formapago.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClinicaComponent,
    MedicosComponent,
    EstudiosComponent,
    PatologiasComponent,
    ContactoComponent,
    InicioComponent,
    CatarataComponent,
    ChalazionComponent,
    DesprendimientoretinaComponent,
    EstrabismoComponent,
    MiopiaComponent,
    GlaucomaComponent,
    ObstruccionlagrimalComponent,
    PresbiciaComponent,
    RetinopatiadiabeticaComponent,
    ObrasocialComponent,
    LenteComponent,
    FormapagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
