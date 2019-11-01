import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './views/results/results.component';
import { ProductComponent } from './views/product/product.component';
import { ProductResolver } from './shared/itemResolver';


const routes: Routes = [
  {
    path: 'items',
    component: ResultsComponent
  },
  {
    path: 'items/:id',
    component: ProductComponent,
    resolve: {
      product: ProductResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
