export interface IButton {
  width?: string;
  onClick: (e?: React.BaseSyntheticEvent | undefined) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  type: 'reset' | 'submit' | 'button';
}
