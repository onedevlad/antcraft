import React from 'react'
import { Row, Col} from 'react-flexbox-grid'
import injectSheet from 'react-jss'

import Title from './Title/'
import Copyright from './Copyright/'


const styles = {
  root: {
    marginTop: '2%',
    background: '#4C4640',
    padding: '1% 5%',
  }
}

const Footer = ({classes}) => (
  <Row className={classes.root} middle='md'>
    <Col md={12}>
      <Row>
        <Title />
      </Row>
      <Row center="xs">
        <Copyright />
      </Row>
    </Col>
  </Row>
)

export default injectSheet(styles)(Footer)
