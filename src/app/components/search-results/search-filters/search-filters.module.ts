import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from 'app/components/shared/app.shared.module';
import {SearchFiltersComponent} from './search-filters.component';
import {FilterDialogComponent} from '../filter-dialog/filter-dialog.component';
import {ResearchActivityInputComponent} from '../research-activity-input/research-activity-input.component';
import {MatTagsComponent} from '../mat-tags/mat-tags.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SearchFiltersComponent,
    FilterDialogComponent,
    ResearchActivityInputComponent,
    MatTagsComponent
  ],
  exports: [
    SearchFiltersComponent,
    MatTagsComponent,
    FilterDialogComponent
  ]
})
export class SearchFiltersModule {
}
