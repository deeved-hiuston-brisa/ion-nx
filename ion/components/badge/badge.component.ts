import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeType } from './types';

@Component({
  selector: 'ion-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class IonBadgeComponent implements OnChanges, OnInit {
  @Input() label?: string;
  @Input() value?: number;
  @Input() type!: BadgeType;

  valueInBadge!: string;

  ngOnInit(): void {
    this.valueInBadge = this.formatValue();
  }

  ngOnChanges(): void {
    this.valueInBadge = this.formatValue();
  }

  formatValue(): string {
    if (this.value != null && !isNaN(this.value)) {
      return this.value > 99 ? '99+' : this.value.toString();
    }

    if (!this.label) {
      throw new Error('Label not found or value is not number!');
    }

    return this.label;
  }
}
