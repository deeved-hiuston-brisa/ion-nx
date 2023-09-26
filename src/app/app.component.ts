import { Component } from '@angular/core';
import { BadgeType, IonBadgeComponent } from '@brisanet/ion/components/badge';
import { IonIconComponent } from '@brisanet/ion/components/icon';
import { IonAlertComponent } from '@brisanet/ion/components/alert';
import {
  BreadcrumbItem,
  IonBreadcrumbComponent,
} from '@brisanet/ion/components/breadcrumb';
import { IonCheckboxComponent } from '@brisanet/ion/components/checkbox';
import { IonDividerComponent } from '@brisanet/ion/components/divider';
import { IonInfoBadgeComponent } from '@brisanet/ion/components/info-badge';
import { IonInputComponent } from '@brisanet/ion/components/input';
import { IonNoDataComponent } from '@brisanet/ion/components/no-data';
@Component({
  standalone: true,
  imports: [
    IonBadgeComponent,
    IonIconComponent,
    IonAlertComponent,
    IonBreadcrumbComponent,
    IonCheckboxComponent,
    IonDividerComponent,
    IonInfoBadgeComponent,
    IonInputComponent,
    IonNoDataComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ion-nx';
  valueBadge = 120;
  typeBadge: BadgeType = 'negative';

  breadcrumbItem: BreadcrumbItem[] = [
    {
      label: 'teste',
      link: './',
    },
    {
      label: 'test2',
      link: './',
    },
  ];
}
