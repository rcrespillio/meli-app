import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { HttpClientModule } from '@angular/common/http';

const exportedComponents = [ SearchHeaderComponent ];

@NgModule({
  declarations: [
    ...exportedComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ...exportedComponents
  ]
})
export class SharedModule { }
