import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Searchbar from './Searchbar/'
import UserNav from './UserNav'

const Toolbar = () => (
  <Col md={5}>
    <Row>
      <Searchbar/>
      <UserNav/>
    </Row>
  </Col>
)

export default Toolbar
