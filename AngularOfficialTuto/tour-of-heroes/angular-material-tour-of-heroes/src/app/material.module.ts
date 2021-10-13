import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatToolbarModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }