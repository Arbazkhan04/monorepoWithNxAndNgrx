import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MwnuItemComponent } from './mwnu-item/mwnu-item.component';

@Component({
  standalone: true,
  imports: [RouterModule,MwnuItemComponent],
  selector: 'e-commerence-using-nx-ngrx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e-commerence-using-nx-ngrx';
}
