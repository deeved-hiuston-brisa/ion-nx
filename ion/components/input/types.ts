import { EventEmitter } from '@angular/core';
import { SafeAny } from '@brisanet/ion/utils';
import { IconDirection } from '@brisanet/ion/components/icon';

export type InputType = 'text' | 'password';

export interface IonInputProps {
  placeholder?: string;
  button?: string;
  iconInput?: string;
  disabled?: boolean;
  iconDirection?: IconDirection;
  valid?: boolean;
  invalid?: boolean;
  inputButton?: boolean;
  inputIconButton?: boolean;
  clickButton?: EventEmitter<SafeAny>;
  value?: string;
  clearButton?: boolean;
  inputType?: InputType;
  valueChange?: EventEmitter<string>;
  maxLength?: string | number | null;
}
