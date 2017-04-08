import React from 'react'
import injectSheet from 'react-jss'
import {Col} from 'react-flexbox-grid'
const styles = {
  root: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
}

class Title extends React.Component {
  render() {
    const { classes } = this.props

    return(
      <Col md={4} className={classes.root}>
        <h1>Antcraft</h1>
      </Col>
    )
  }
}

export default injectSheet(styles)(Title)
