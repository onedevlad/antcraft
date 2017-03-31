import React from 'react'
import injectSheet from 'react-jss'
import { Row } from 'react-bootstrap'

import Title from './Title'
import Icons from './Icons'


const styles = {
  root: {
    position: 'relative',
    overflow: 'hidden',
  }
}

class Header extends React.Component {
  render() {
    const { classes } = this.props

    return(
      <Row className={`${classes.root} row-eq-height`}>
        <Icons />
        <Title />
      </Row>
    )
  }
}

export default injectSheet(styles)(Header)
