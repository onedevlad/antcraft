import React from 'react'
import injectSheet from 'react-jss'

import Title from './Title'
import Icons from './Icons'
import fbIcon from 'images/icons/fb.png'


const styles = {
  root: {
    width: '100%',
  },
}

class Header extends React.Component {
  render() {
    const { classes } = this.props

    return(
      <div className={classes.root}>
        <Icons />
        <Title />
      </div>
    )
  }
}

export default injectSheet(styles)(Header)
