import React from 'react'
import injectSheet from 'react-jss'

import styles from 'styles/Header'
import Icon from './Icon.jsx'
import vkIcon from 'images/icons/vk.png'

class Header extends React.Component {
  render() {
    const { classes } = this.props

    return(
      <div className={classes.header}>
        <Icon iconSrc={vkIcon} />
      </div>
    )
  }
}

export default injectSheet(styles)(Header)
