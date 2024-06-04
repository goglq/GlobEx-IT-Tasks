import React from 'react'

import styles from './SearchBar.module.scss'
import SearchIcon from '../../core/SearchIcon/SearchIcon'

type SearchBarProps = {
  text?: string
  onChange?: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ text = '', onChange }) => {
  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    onChange && onChange(e.currentTarget.value)
  }

  return (
    <div className={styles['search-bar']}>
      <input type="text" value={text} onChange={handleSearchChange} />
      <SearchIcon />
    </div>
  )
}

export default SearchBar
