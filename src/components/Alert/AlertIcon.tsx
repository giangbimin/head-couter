import React, { FC } from 'react'
import { AlertStatus } from './context'
import styles from './Alert.styles'

function getIcon(status?: AlertStatus) {
  if (status === 'error') {
    return (
      <svg
        fill="currentColor"
        height="1em"
        viewBox="0 0 20 20"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          fillRule="evenodd"
        />
      </svg>
    )
  }

  if (status === 'success') {
    return (
      <svg
        fill="currentColor"
        height="1em"
        viewBox="0 0 20 20"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          fillRule="evenodd"
        />
      </svg>
    )
  }

  if (status === 'warning') {
    return (
      <svg
        fill="currentColor"
        height="1em"
        viewBox="0 0 20 20"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          fillRule="evenodd"
        />
      </svg>
    )
  }

  return (
    <svg
      fill="currentColor"
      height="1em"
      viewBox="0 0 20 20"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        fillRule="evenodd"
      />
    </svg>
  )
}
interface Props {
  status?: AlertStatus
}
export const AlertIcon: FC<Props> = ({ status }) => {
  return <div className={styles({ status }).icon()}>{getIcon(status)}</div>
}
