import React from 'react';
import cn from 'classnames';
import styles from './Modal.module.scss';
import { AiOutlineClose } from 'react-icons/ai';

/**
 *
 * @param {object} props - Объект с пропсами для компонента
 * @param {boolean} props.isOpen - Будет ли отображаться модальное окно?
 * @param {function} props.onClose - Коллбек на закрытие окна
 * @param {'small'|'medium'|'large'} props.size - Размер окна
 * @param {boolean} props.dismissible - Будет ли окно закрываться по клику вне модального окна
 * @param {ReactNode} props.children - Контент модального окна
 * @returns {React.JSX.Element}
 * @constructor
 */
const Modal = ({
  isOpen = false,
  onClose = () => {},
  size = 'medium',
  dismissible = true,
  children,
}) => {
  const modalStyles = cn({
    [styles.modal]: true,
    [styles[size]]: true,
  });
  const dismissStyles = cn({
    [styles.dismiss]: true,
    [styles.visible]: isOpen
  });

  const dismiss = () => {
    if (dismissible) {
      onClose();
    }
  };

  return (
    <div className={dismissStyles} onClick={dismiss}>
      <div className={modalStyles}>
        <button type="button" onClick={onClose} className={styles.close}>
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
