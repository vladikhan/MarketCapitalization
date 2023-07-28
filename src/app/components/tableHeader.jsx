import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc',
      })
    } else onSort({ path: item, order: 'asc' })
  }
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            scope="col"
            role="button"
          >
            {columns[column].name}
          </th>
        ))}
        {/* <th scope="col">Качества</th>
                <th
                    onClick={() => handleSort("profession.name")}
                    scope="col"
                    role="button"
                >
                    Профессия
                </th>
                <th
                    onClick={() => handleSort("completedMeetings")}
                    scope="col"
                    role="button"
                >
                    Встретился, раз
                </th>
                <th
                    onClick={() => handleSort("rate")}
                    scope="col"
                    role="button"
                >
                    Оценка
                </th>
                <th
                    onClick={() => handleSort("bookmark")}
                    scope="col"
                    role="button"
                >
                    Избранное
                </th>
                <th /> */}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
}

export default TableHeader
