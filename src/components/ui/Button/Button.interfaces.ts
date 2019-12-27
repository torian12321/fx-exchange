export interface IButton {
  children?: any;
  caption?: string;
  alt?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: any;
  type?: "reset" | "submit" | "button";
  form?: string;
}
