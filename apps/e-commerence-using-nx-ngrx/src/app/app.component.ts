import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MwnuItemComponent } from './mwnu-item/mwnu-item.component';
import { CatagoryService, getCatagoriesActions } from '@e-commerence-using-nx-ngrx/catagory';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [RouterModule,MwnuItemComponent,CommonModule],
  selector: 'e-commerence-using-nx-ngrx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'e-commerence-using-nx-ngrx';

  constructor(private readonly store:Store){}

  ngOnInit()
 { 
  this.store.dispatch(getCatagoriesActions());
  }

}
