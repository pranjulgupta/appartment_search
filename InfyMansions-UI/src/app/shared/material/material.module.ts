import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatSidenavModule, MatGridListModule, MatExpansionModule, MatSlideToggleModule, MatChipsModule} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
// import {MatTabsModule} from '@angular/material/tabs'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
// import { SidebarModule } from 'ng-sidebar';
// import { CarouselModule, WavesModule, ButtonsModule, CardsModule,IconsModule} from 'angular-bootstrap-md';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// For MDB Angular Pro
// import { SidenavModule, WavesModule, AccordionModule } from 'ng-uikit-pro-standard'


import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
    imports: [MatTooltipModule,MatMenuModule,MatListModule, MatAutocompleteModule, MatIconModule, ScrollingModule, MatChipsModule, MatSlideToggleModule, MatExpansionModule, MatGridListModule, MatButtonToggleModule, MatSidenavModule, MatTabsModule, MatDividerModule, MatSliderModule, MatSelectModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatTableModule, MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule],
    exports: [MatTooltipModule,MatMenuModule, MatListModule,MatAutocompleteModule, MatIconModule, ScrollingModule, MatChipsModule, MatSlideToggleModule, MatExpansionModule, MatGridListModule, MatButtonToggleModule, MatSidenavModule, MatTabsModule, MatDividerModule, MatSliderModule, MatSelectModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatTableModule, MatTabsModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule],
})
export class MaterialModule { }
