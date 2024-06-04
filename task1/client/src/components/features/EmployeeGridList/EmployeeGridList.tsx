import React, { useEffect, useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

import { Employee } from 'objects/Employee'
import EmployeeCard from 'components/features/EmployeeCard/EmployeeCard'
import styles from './EmployeeGridList.module.scss'
import { loadEmployees } from 'utils/http'

type EmployeeListProps = {
  text: string
  setSelectedEmployee: (employee: Employee | null) => void
}

const EmployeeList: React.FC<EmployeeListProps> = ({
  text,
  setSelectedEmployee,
}) => {
  const [employees, setEmployees] = useState<Employee[]>([])
  const { showBoundary } = useErrorBoundary()

  useEffect(() => {
    loadEmployees(text)
      .then((data) => setEmployees(data))
      .catch(showBoundary)
  }, [text, setEmployees, showBoundary])

  const onCardClick = (employee: Employee) => {
    setSelectedEmployee(employee)
  }

  return (
    <div className={styles['employee-grid']}>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.name}
          employee={employee}
          onClick={onCardClick}
        />
      ))}
    </div>
  )
}

export default EmployeeList
