import React from 'react'
import injectSheet from 'react-jss'
import { Row } from 'react-flexbox-grid'

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
      <Row>
        <Icons />
        <Title />
      </Row>
    )
  }
}

export default injectSheet(styles)(Header)
