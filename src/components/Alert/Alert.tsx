import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import { AlertStatus, AlertProvider } from './context'
import styles from './Alert.styles'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  status?: AlertStatus
  className?: string
  onClose?: () => void
}

export const Alert: React.FC<AlertProps> = ({
  status = 'error',
  className,
  children,
  onClose,
  ...rest
}) => {
  const baseStyles = styles({ status })
  const containerClassName = baseStyles.container()
  const closeClassName = baseStyles.close()

  return (
    <AlertProvider status={status}>
      <div className={cx(containerClassName, className)} {...rest}>
        {children}
        {onClose && (
          <button className={closeClassName} onClick={onClose}>
            <svg
              fill="currentColor"
              height="1em"
              viewBox="0 0 20 20"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </AlertProvider>
  )
}
