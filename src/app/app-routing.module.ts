import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './views/results/results.component';
import { ProductComponent } from './views/product/product.component';


const routes: Routes = [
  {
    path: 'items',
    component: ResultsComponent
  },
  {
    path: 'items/:id',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
