export type BadgeType = 'primary' | 'secondary' | 'neutral' | 'negative';

export interface BadgeProps {
  label?: string;
  value?: number;
  type: BadgeType;
}
