import React from 'react'
import { Row } from 'react-flexbox-grid'
import injectSheet from 'react-jss'

import Contacts from './Contacts/'
import Title from './Title/'
import Toolbar from './Toolbar/'


const styles = {
  root: {
    padding: '1% 5%',
  }
}

const Header = ({classes}) => (
  <Row className={classes.root} middle='md'>
    <Contacts />
    <Title />
    <Toolbar/>
  </Row>
)

export default injectSheet(styles)(Header)
