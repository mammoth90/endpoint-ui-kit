// import React from 'react'
import cn from 'classnames';
import styles from './Button.module.scss';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Button = ({
  type = 'button',
  iconPosition = 'right',
  onClick,
  isDisabled = false,
  variant = 'primary',
  isLoading = false,
  loadingText = null,
  block = false,
  size = 'nm',
  icon = null,
  onlyIcon = false,
  text = '',
}) => {
  const buttonStyles = cn({
    [styles.button]: true,
    [styles.buttonPrimary]: variant === 'primary',
    [styles.buttonSecondary]: variant === 'secondary',
    [styles.buttonSmall]: !onlyIcon && size === 'sm',
    [styles.buttonLarge]: !onlyIcon && size === 'lg',
    [styles.block]: block,
    [styles.sized]: size,
    [styles.onlyIcon]: onlyIcon,
    [styles.onlyIconSmall]: onlyIcon && size === 'sm',
    [styles.onlyIconLarge]: onlyIcon && size === 'lg',
  });
  const iconStyle = cn({
    [styles.icon]: true,
    [styles.iconPositionRight]: iconPosition === 'right',
    [styles.iconPositionLeft]: iconPosition === 'left',
    [styles.onlyIcon]: onlyIcon,
    [styles.onlyIconLoading]: onlyIcon && isLoading,
  });
  const loadingIconStyle = cn({
    [styles.loading]: isLoading,
  });
  const Icon = icon;
  const buttonText = onlyIcon === true ? '' : text;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={buttonStyles}
    >
      <span className={styles.content}>
        {icon && iconPosition === 'left' && <Icon className={iconStyle} />}
        {loadingText || buttonText}
        {icon && iconPosition === 'right' && <Icon className={iconStyle} />}
      </span>
      {isLoading && <AiOutlineLoading3Quarters className={loadingIconStyle} />}
    </button>
  );
};

export default Button;
