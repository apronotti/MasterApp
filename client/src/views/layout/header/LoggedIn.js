import React from 'react'
import { Link } from 'react-router-dom'

import { isDefined } from '../../../utils/js-helpers'

export const LoggedIn = props => {
  let { user, auth, openedMenu, toggleMenuOpen, closeAll, bigScreen, mouseLeave } = props
  let displayName = 'No Display Name'

  if (isDefined(user.alias)) {
    displayName = user.alias
  }

  if (isDefined(user.nickname)) {
    displayName = user.nickname
  }

  if (isDefined(user.firstName)) {
    displayName = user.firstName
  }

  if (isDefined(user.firstName) && isDefined(user.lastName)) {
    displayName = user.firstName + ' ' + user.lastName
  }

  return (

    <li
      onMouseEnter={() => toggleMenuOpen(42, bigScreen)}
      onMouseLeave={() => mouseLeave(bigScreen)}
      className={openedMenu === 42 ? 'selected primaryLink hasChildren' : 'primaryLink hasChildren'}
    >
      <Link to='/users/user' onClick={() => toggleMenuOpen(42, true)}> {displayName} </Link>
      <ul className='subMenu'>
        <li><Link to='/users/user' onClick={() => closeAll()}> Profile </Link></li>
        <li><a href='#' onClick={() => auth.logout()}> Logout </a></li>
      </ul>
    </li>
  )
}

export default LoggedIn
