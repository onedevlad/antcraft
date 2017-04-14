import React from 'react'
import {Col} from 'react-flexbox-grid'

import Icon from './Icon'

import fbNormalIcon from 'images/icons/social/fb-normal.png'
import fbHoverIcon from 'images/icons/social/fb-hover.png'

import vkNormalIcon from 'images/icons/social/vk-normal.png'
import vkHoverIcon from 'images/icons/social/vk-hover.png'

import instNormalIcon from 'images/icons/social/inst-normal.png'
import instHoverIcon from 'images/icons/social/inst-hover.png'


const Social = () => (
  <Col xs={6}>
    <Icon imgNormal={fbNormalIcon} imgHover={fbHoverIcon} />
    <Icon imgNormal={vkNormalIcon} imgHover={vkHoverIcon} />
    <Icon imgNormal={instNormalIcon} imgHover={instHoverIcon} />
  </Col>
)

export default Social
