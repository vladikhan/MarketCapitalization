import React from 'react'
import PropTypes from 'prop-types'
const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1))
    if (number > 4 && number < 15) {
      return 'people will invest in my startup '
    }
    if (lastOne === 1) return 'is  interested in my startup'
    if ([2, 3, 4].indexOf(lastOne) >= 0) return 'guys will invest in my startup'
  }
  return (
    <h2>
      <span className={'badge ' + (length > 0 ? 'bg-primary' : 'bg-danger')}>
        {length > 0
          ? `${length + ' ' + renderPhrase(length)}  `
          : 'Nobody is intersted'}
      </span>
    </h2>
  )
}
SearchStatus.propTypes = {
  length: PropTypes.number,
}

export default SearchStatus
