import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeType } from '../core/types';

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
    if (this.value) {
      if (isNaN(this.value)) {
        throw new Error('value is not number!');
      }

      return this.limitValue(this.value);
    }

    if (!this.label) {
      throw new Error('label not found!');
    }

    return this.label;
    // return this.exists(this.value) ? this.limitValue(this.value) : this.label;
  }

  // private exists(value: number): boolean {
  //   return value !== null && !isNaN(value);
  // }

  private limitValue(value: number): string {
    const maxValue = 99;
    if (value > maxValue) {
      return `${maxValue}+`;
    }
    return value.toString();
  }
}
