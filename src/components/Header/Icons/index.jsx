import React from 'react'
import injectSheet from 'react-jss'
import { Col } from 'react-bootstrap'

import Icon from './Icon'
import fbIcon from 'images/icons/fb.png'


const styles = {
  root: {
    position: 'absolute', // Yep. I hate myself as well
    height: '100%',
  }
}


class Icons extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Col md={4} className={classes.root}>
        <Icon src={fbIcon} />
        <Icon src={fbIcon} />
        <Icon src={fbIcon} />
      </Col>
    )
  }
}

export default injectSheet(styles)(Icons)
