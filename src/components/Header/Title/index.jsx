import React from 'react'
import { Col } from 'react-flexbox-grid'
import injectSheet from 'react-jss'


const styles = {
  root: {
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
}

const Title = ({classes}) => (
  <Col md={2}>
    <h1 className={classes.root}>Antcraft</h1>
  </Col>
)

export default injectSheet(styles)(Title)
