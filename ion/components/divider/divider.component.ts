import { Component, Input } from '@angular/core';
import { DirectionType } from '@brisanet/ion/components/core/types';
import { CommonModule } from '@angular/common';
import { DividerType } from './types';

@Component({
  selector: 'ion-divider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class IonDividerComponent {
  @Input() label = '';
  @Input() direction?: DirectionType = 'horizontal';
  @Input() type?: DividerType = 'solid';
  @Input() margin? = false;
}
