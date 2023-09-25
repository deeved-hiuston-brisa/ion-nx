import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonIconComponent } from '@brisanet/ion/components/icon';
import { BreadcrumbItem } from './types';

@Component({
  selector: 'ion-breadcrumb',
  standalone: true,
  imports: [CommonModule, IonIconComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class IonBreadcrumbComponent {
  @Input() breadcrumbs!: Array<BreadcrumbItem>;
  @Output() selected = new EventEmitter<BreadcrumbItem>();

  onSelected(item: BreadcrumbItem): void {
    if (item !== this.breadcrumbs[this.breadcrumbs.length - 1]) {
      this.selected.emit(item);
    }
  }
}
