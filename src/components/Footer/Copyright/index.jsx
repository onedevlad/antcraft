import React from 'react'
import { Col } from 'react-flexbox-grid'
import injectSheet from 'react-jss'

const styles = {
  root: {
   color: '#8d8d8d',
   fontSize: '0.8em',
  }
}

const Copyright = ({classes}) => (
  <Col xs={6}>
    <h1 className={classes.root}>© Antcraft 2016. Все права защищенны.</h1>
  </Col>
  )

export default injectSheet(styles)(Copyright)
