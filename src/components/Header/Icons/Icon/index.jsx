import React from 'react'
import injectSheet from 'react-jss'


const styles = {
  root: {
    display: 'inline-block',
    background: '#333',
    width: '1.5em',
    height: '1.5em',
    borderRadius: '50%',
    '&:not(:first-child):not(:last-child)': {
      margin: '0 0.5em',
    },
  },
  iconImg: {
    width: '70%',
    height: '70%',
    margin: '15%',
  },
}

class Icon extends React.Component {
  render() {
    const { classes, src } = this.props
    return (
      <div className={classes.root}>
        <img className={classes.iconImg} src={src}/>
      </div>
    )
  }
}

export default injectSheet(styles)(Icon)
