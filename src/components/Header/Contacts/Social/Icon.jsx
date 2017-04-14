import React from 'react'
import injectSheet from 'react-jss'


const styles = {
  root: {
    margin: '0 0.5em',
    'float': 'left',
  },
  link: {
    cursor: 'pointer',
    display: 'block',
    position: 'relative',
  },
  icon: {
    transition: 'all 0.2s ease-in-out',
  },
  normal: {
    extend: 'icon',
    zIndex: '2',
    position: 'relative',
  },
  hover: {
    extend: 'icon',
    position: 'absolute',
    left: '0',
  },
  normalFaded: {
    extend: 'normal',
    opacity: '0',
  },
  hoverFaded: {
    extend: 'hover',
    opacity: '0',
  },
}

class Icon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hovered: false}
  }

  onMouseOver() {
    this.setState({hovered: true})
  }

  onMouseOut() {
    this.setState({hovered: false})
  }

  render() {
    const { classes, imgNormal, imgHover } = this.props
    const { hovered } = this.state

    return(
      <div className={classes.root}
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}
      >
        <a className={classes.link} href=''>
          <img className={hovered ? classes.normalFaded : classes.normal} src={imgNormal}/>
          <img className={hovered ? classes.hover : classes.hoverFaded} src={imgHover}/>
        </a>
      </div>
    )
  }
}

export default injectSheet(styles)(Icon)
