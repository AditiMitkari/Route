import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DefultComponent } from './defult/defult.component';
import { InvalidComponent } from './invalid/invalid.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  {path:'books', component: BooksComponent},
  {path:'technologies', component: TechnologiesComponent},
  {path:'', component: DefultComponent},
  {path:'**',component:InvalidComponent }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routecomponents=[BooksComponent,TechnologiesComponent]
