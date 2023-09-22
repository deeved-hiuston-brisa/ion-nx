import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIconComponent, IconType } from '@brisanet/ion/components/icon';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { StatusType } from '@brisanet/ion/components/core/types';

const iconTypes = {
  success: 'check-solid',
  warning: 'exclamation-solid',
  info: 'info-solid',
  negative: 'close-solid',
};

@Component({
  selector: 'ion-alert',
  standalone: true,
  imports: [CommonModule, IonIconComponent],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class IonAlertComponent implements OnInit, OnChanges {
  @Input() message!: string | TemplateRef<string>;
  @Input() type: StatusType = 'success';
  @Input() closable? = false;
  @Input() hideBackground? = false;

  @ViewChild('ionAlert', { static: true }) private ionAlert!: ElementRef;

  public template!: TemplateRef<string>;

  iconType!: IconType;

  hasPlainText = false;

  closeEvent(): void {
    this.ionAlert.nativeElement.remove();
  }

  setIcon(): void {
    this.iconType = iconTypes[this.type];
  }

  ngOnInit(): void {
    if (this.hideBackground) {
      this.closable = false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setIcon();
    if (changes['message']) {
      this.hasPlainText = typeof this.message === 'string';

      if (!this.hasPlainText) {
        this.template = this.message as unknown as TemplateRef<string>;
      }
    }
  }
}
