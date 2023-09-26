import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIconComponent, IconType } from '@brisanet/ion/components/icon';

@Component({
  selector: 'ion-no-data',
  standalone: true,
  imports: [CommonModule, IonIconComponent],
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
})
export class IonNoDataComponent {
  @Input() iconType: IconType = 'exclamation-rounded';
  @Input() label = 'Não há dados';
}
