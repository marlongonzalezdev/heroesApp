import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule  
  ],
})
export class MaterialModule {}
