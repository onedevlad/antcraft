import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import UserNavButton from './UserNavButton'

import userLoginIconNormal from 'images/icons/login-normal.png'
import userLoginIconHover from 'images/icons/login-hover.png'

import cartIconNormal from 'images/icons/cart-normal.png'
import cartIconHover from 'images/icons/cart-hover.png'


const UserNav = () => (
  <Col md={4} mdOffset={1}>
    <Row>
      <UserNavButton imgNormal={userLoginIconNormal} imgHover={userLoginIconHover}>Login</UserNavButton>
      <UserNavButton imgNormal={cartIconNormal} imgHover={cartIconHover}>Cart</UserNavButton>
    </Row>
  </Col>
)

export default UserNav
