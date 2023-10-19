import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroManagementComponent } from 'src/app/components/heroes/hero-management/hero-management.component';
import { UpdateSuperheroComponent } from 'src/app/components/heroes/update-superhero/update-superhero.component';

const routes: Routes = [
  {path: "", component: HeroManagementComponent},
  {path: "heroes/:heroId/edit", component: UpdateSuperheroComponent},

  {path: "**", component: HeroManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
