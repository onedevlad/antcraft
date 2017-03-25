import React from 'react'
import injectSheet from 'react-jss'

import styles from 'styles/Header'

class Icon extends React.Component {
  render() {
    const { classes, iconSrc } = this.props
    return (
      <div className={classes.iconWrapper}>
        <img className={classes.iconImg} src={iconSrc}/>
      </div>
    )
  }
}

export default injectSheet(styles)(Icon)
