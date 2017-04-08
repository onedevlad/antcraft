import React from 'react'
import injectSheet from 'react-jss'
import {Col} from 'react-flexbox-grid'

import Icon from './Icon'
import fbIcon from 'images/icons/fb.png'


const styles = {}

class Icons extends React.Component {
  render() {
    return (
      <Col md={4}>
        <Icon src={fbIcon} />
        <Icon src={fbIcon} />
        <Icon src={fbIcon} />
      </Col>
    )
  }
}

export default injectSheet(styles)(Icons)
