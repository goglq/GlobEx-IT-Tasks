import React from 'react'

import styles from './EmployeeCard.module.scss'
import { Employee } from 'objects/Employee'
import PhoneIcon from 'components/core/PhoneIcon/PhoneIcon'
import EnvelopeIcon from 'components/core/EnvelopeIcon/EnvelopeIcon'

type EmployeeCardProps = {
  employee: Readonly<Employee>
  onClick?: (employee: Employee) => void
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, onClick }) => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    onClick && onClick(employee)
  }

  return (
    <div className={styles['employee-card']} onClick={handleClick}>
      <h2 className={styles.name}>{employee.name}</h2>
      <div className={styles.details}>
        <div className={styles.property}>
          <PhoneIcon />
          <p>{employee.phone}</p>
        </div>
        <div className={styles.property}>
          <EnvelopeIcon />
          <p>{employee.email}</p>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard
