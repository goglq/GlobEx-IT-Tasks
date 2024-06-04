import React from 'react'

import styles from './EmployeeDetailModal.module.scss'
import { Employee } from 'objects/Employee'
import CrossIcon from 'components/core/CrossIcon/CrossIcon'

type EmployeeDetailModalProps = {
  selectedEmployee: Employee | null
  setSelectedEmployee?: (employee: Employee | null) => void
}

const EmployeeDetailModal: React.FC<EmployeeDetailModalProps> = ({
  selectedEmployee,
  setSelectedEmployee,
}) => {
  const handleCloseClick: React.MouseEventHandler = (e) => {
    e.stopPropagation()
    setSelectedEmployee && setSelectedEmployee(null)
  }

  return (
    selectedEmployee && (
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h2>{selectedEmployee.name}</h2>
            <button onClick={handleCloseClick}>
              <CrossIcon />
            </button>
          </div>
          <table>
            <tr>
              <td>Телефон:</td>
              <td>{selectedEmployee.phone}</td>
            </tr>
            <tr>
              <td>Почта:</td>
              <td>{selectedEmployee.email}</td>
            </tr>
            <tr>
              <td>Дата приема:</td>
              <td>{selectedEmployee.hire_date.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Должность:</td>
              <td>{selectedEmployee.position_name}</td>
            </tr>
            <tr>
              <td>Подразделение:</td>
              <td>{selectedEmployee.department}</td>
            </tr>
          </table>
          <dl>
            <dt>Дополнительная информация:</dt>
            <dd className="small">
              Разработчики используют текст в качестве заполнителя макта
              страницы. Разработчики используют текст в качестве заполнителя
              макта страницы.
            </dd>
          </dl>
        </div>
        <div className={styles.overlay} onClick={handleCloseClick} />
      </div>
    )
  )
}

export default EmployeeDetailModal
