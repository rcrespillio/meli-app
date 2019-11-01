import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHeaderComponent } from './search-header/search-header.component';

const exportedComponents = [ SearchHeaderComponent ];

@NgModule({
  declarations: [
    ...exportedComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...exportedComponents
  ]
})
export class SharedModule { }
