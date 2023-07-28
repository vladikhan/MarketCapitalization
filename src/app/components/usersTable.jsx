import React from 'react'
import PropTypes from 'prop-types'
// import User from "./user";
import TableHeader from './tableHeader'
import TableBody from './tableBody'
import BookMark from './bookmark'
import QualitiesList from './qualitiesList'

const UserTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookMark,
  onDelete,
  ...rest
}) => {
  const columns = {
    name: { path: 'name', name: 'Name' },
    company: { path: 'comp', name: 'Company' },

    qualities: {
      name: 'Qualities',
      component: (user) => <QualitiesList qualities={user.qualities} />,
    },
    professions: { path: 'profession.name', name: 'Occupation' },
    capacity: {
      path: 'capacity',
      name: 'Market Capitalization',
    },
    rate: { path: 'rate', name: ' Global ranking' },
    bookmark: {
      path: 'bookmark',
      name: 'Bookmark',
      component: (user) => (
        <BookMark
          status={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      ),
    },
    delete: {
      component: (user) => (
        <button onClick={() => onDelete(user._id)} className="btn btn-danger">
          Delete
        </button>
      ),
    },
  }
  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
      {/* <tbody>
                {users.map((user) => (
                    <User {...rest} {...user} key={user._id} />
                ))}
            </tbody> */}
    </table>
  )
}
UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default UserTable
