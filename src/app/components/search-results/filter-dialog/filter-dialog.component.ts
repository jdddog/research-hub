import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryId} from 'app/services/options.service';
import { DEFAULT_FILTERS_VALUE } from '../search-filters/search-filters.service';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {

  public filtersForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.filtersForm = data.form;
  }

  clear() {
    this.filtersForm.patchValue(DEFAULT_FILTERS_VALUE);
  }

  done() {
    this.dialogRef.close(this.filtersForm);
  }
}
