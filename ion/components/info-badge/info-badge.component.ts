import { Component, Input } from '@angular/core';
import { IconType, IonIconComponent } from '@brisanet/ion/components/icon';
import { InfoBadgeSize, InfoBadgeStatus } from './types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ion-info-badge',
  standalone: true,
  imports: [CommonModule, IonIconComponent],
  templateUrl: './info-badge.component.html',
  styleUrls: ['./info-badge.component.scss'],
})
export class IonInfoBadgeComponent {
  @Input() public variant: InfoBadgeStatus = 'primary';
  @Input() public icon?: IconType;
  @Input() public text?: string;
  @Input() public size?: InfoBadgeSize = 'md';
}
