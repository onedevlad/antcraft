import React from 'react'
import injectSheet from 'react-jss'

import Icon from './Icon'
import fbIcon from 'images/icons/fb.png'


const styles = {
  root: {
    display: 'inline-block',
    width: '33.33%',
  },
}


class Icons extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Icon src={fbIcon} />
        <Icon src={fbIcon} />
        <Icon src={fbIcon} />
      </div>
    )
  }
}

export default injectSheet(styles)(Icons)
