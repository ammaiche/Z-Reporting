import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  exports : [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export  class SharedModule{

}
