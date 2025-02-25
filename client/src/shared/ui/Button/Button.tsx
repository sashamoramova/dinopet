import { ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
  text?: string;
  color?: string;
  disabled?: boolean;
  icon?: string;
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
  children?: ReactNode | JSX.Element;
};

export function Button({
  text,
  color,
  disabled,
  icon,
  onClick,
  type = 'button',
  children,
}: Props): JSX.Element {
  return (
    <div onClick={onClick}>
      <button
        type={type}
        // style={{ backgroundColor: `${color}` }}
        className={`${styles.button} ${color ? styles[color] : ''}`}
        disabled={disabled}
      >
        {icon && <img src={icon} width={20} />}
        {text}
        {children}
      </button>
    </div>
  );
}