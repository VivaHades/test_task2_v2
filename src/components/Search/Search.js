import React from 'react'

export default function Search(props) {
  const { searchText } = props
  function handleSearchChange (e) {
    props.onSearchTextChange(e.target.value)
  }
  return (
    <form action="" className="homepage__search-form">
      <input type="text" value={searchText} onChange={handleSearchChange} placeholder='search...' className="homepage__search-input" />
    </form>
  )
}
