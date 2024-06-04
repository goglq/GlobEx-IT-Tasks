import React from 'react'
import cn from 'classnames'

import styles from './ErrorFallback.module.scss'
import { useErrorBoundary } from 'react-error-boundary'

type ErrorFallbackProps = {
  message: string
  className?: string
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  message,
  className,
}) => {
  const { resetBoundary } = useErrorBoundary()

  const handleClick = () => resetBoundary()

  return (
    <div className={cn(styles['error-fallback'], className)}>
      <h1>{message}</h1>
      <button onClick={handleClick}>Reload</button>
    </div>
  )
}

export default ErrorFallback
