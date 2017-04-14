import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Info from './Info/'
import Social from './Social/'


const Contacts = () => (
  <Col md={5}>
    <Row>
      <Info phoneNumber='+7 (495) 989-20-11' workDays='пн-сб 09:00-18:00'/>
      <Social/>
    </Row>
  </Col>
)

export default Contacts
