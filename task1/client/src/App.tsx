import React, { useState } from 'react'

import './App.scss'
import { Employee } from './objects/Employee'
import EmployeeList from './components/features/EmployeeGridList/EmployeeGridList'
import SearchBar from './components/features/SearchBar/SearchBar'
import EmployeeDetailModal from './components/features/EmployeeDetailModal/EmployeeDetailModal'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from 'components/core/ErrorFallback/ErrorFallback'

const App: React.FC = () => {
  const [state, setState] = useState<{
    text: string
    selectedEmployee: Employee | null
  }>({ text: '', selectedEmployee: null })

  const setSelectedEmployee = (employee: Employee | null) => {
    setState((prev) => ({ text: prev.text, selectedEmployee: employee }))
  }

  const setText = (text: string) => {
    setState((prev) => ({
      text: text,
      selectedEmployee: prev.selectedEmployee,
    }))
  }

  return (
    <div className="App">
      <div className="container">
        <SearchBar text={state.text} onChange={(value) => setText(value)} />
        <ErrorBoundary
          onReset={() => setState({ text: '', selectedEmployee: null })}
          fallback={
            <ErrorFallback
              message="Sorry, couldn't load employees..."
              className="flex-center"
            />
          }
        >
          <EmployeeList
            text={state.text}
            setSelectedEmployee={setSelectedEmployee}
          />
        </ErrorBoundary>
        <EmployeeDetailModal
          selectedEmployee={state.selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
        />
      </div>
    </div>
  )
}

export default App
