import { Component, ElementRef, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { iconsPaths } from './svgs/icons';
import { IconType } from '../core/types';

@Component({
  standalone: true,
  selector: 'ion-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IonIconComponent {
  @Input({required: true}) type!: IconType;
  @Input() size = 24;
  @Input() color = '#282b33';

  constructor(private sanitizer: DomSanitizer, private el: ElementRef) {}

  getPath(): SafeHtml {
    if(!iconsPaths[this.type]) {
      throw new Error('path not found or does not exist!')
    }

    const paths = iconsPaths[this.type].split('/>');
    const resultPaths = paths
      .map((path, index) => {
        return path.includes('path')
          ? `${path} id="ion-icon-path-${this.type}-${index}" />`
          : '';
      })
      .join('');
    return this.sanitizer.bypassSecurityTrustHtml(resultPaths);
  }
}
