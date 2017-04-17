import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import injectSheet from 'react-jss'

import Link from './Link/'


const styles = {
	root: {
    padding: '1% 0',
    background: '#4C4640',
	 }
}

const Navigation = ({classes}) => (
  <Row className={classes.root}>
    <Col md={8} mdOffset={2}>
      <Row>
        <Link href='' text='аксессуары'/>
        <Link href='' text='ништяки'/>
        <Link href='' text='носимые'/>
        <Link href='' text='для офиса'/>
        <Link href='' text='контакты'/>
        <Link href='' text='блог'/>
      </Row>
    </Col>
  </Row>
)

export default injectSheet(styles)(Navigation)
