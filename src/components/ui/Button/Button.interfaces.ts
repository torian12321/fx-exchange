export interface IButton {
  children?: any;
  caption?: string;
  alt?: string;
  className?: string;
  outline?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: any;
  type?: "reset" | "submit" | "button";
  form?: string;
}
