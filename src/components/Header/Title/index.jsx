import React from 'react'
import injectSheet from 'react-jss'


const styles = {
  root: {
    display: 'inline-block',
    width: '33.33%',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
}

class Title extends React.Component {
  render() {
    const { classes } = this.props

    return(
      <div className = {classes.root}>
        <h1>Antcraft</h1>
      </div>
    )
  }
}

export default injectSheet(styles)(Title)
