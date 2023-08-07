import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCatagories } from '@e-commerence-using-nx-ngrx/catagory';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'e-commerence-using-nx-ngrx-mwnu-item',
  templateUrl: './mwnu-item.component.html',
  styleUrls: ['./mwnu-item.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule, 
    MatListModule,
    MatIconModule,
    RouterModule
  ]
})
export class MwnuItemComponent {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(private readonly store:Store){}

  catagories$ = this.store.select(selectCatagories)

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
