import { Component } from '@angular/core';
import { IonBadgeComponent } from '@brisanet/ion';
import { BadgeType } from 'ion/src/lib/core/types';

@Component({
  standalone: true,
  imports: [IonBadgeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ion-nx';
  valueBadge = 120;
  typeBadge: BadgeType = 'negative';
}
