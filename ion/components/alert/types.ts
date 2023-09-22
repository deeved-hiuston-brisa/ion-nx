import { TemplateRef } from '@angular/core';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { StatusType } from '@brisanet/ion/components/core/types';

export interface IonAlertProps {
  message: string | TemplateRef<string>;
  type?: StatusType;
  closable?: boolean;
  hideBackground?: boolean;
}
