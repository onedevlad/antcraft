import React from 'react'
import injectSheet from 'react-jss'
import {Col} from 'react-flexbox-grid'


const styles = {
  info: {
    fontSize: '0.875em',
  },
  infoLink: {
    extend: 'info',
    color: '#000',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  infoText: {
    extend: 'info',
    color: '#979797',
  },
}

const Info = ({classes, phoneNumber, workDays}) => (
  <Col xs={6}>
    <a href={`tel:${phoneNumber}`} className = {classes.infoLink}>{phoneNumber}</a>
    <br/>
    <span className = {classes.infoText}>{workDays}</span>
  </Col>
)

export default injectSheet(styles)(Info)
