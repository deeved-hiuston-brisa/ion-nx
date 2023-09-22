import { Component } from '@angular/core';
import { BadgeType, IonBadgeComponent } from '@brisanet/ion/components/badge';
import { IonIconComponent } from '@brisanet/ion/components/icon';
import { IonAlertComponent } from '@brisanet/ion/components/alert';

@Component({
  standalone: true,
  imports: [IonBadgeComponent, IonIconComponent, IonAlertComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ion-nx';
  valueBadge = 120;
  typeBadge: BadgeType = 'negative';
}
