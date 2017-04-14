import React from 'react'
import injectSheet from 'react-jss'
import { Col } from 'react-flexbox-grid'


const styles = {
  root: {
    textAlign: 'center',
    position: 'relative',
    cursor: 'pointer',
  },
  icon: {
    left: '50%',
    top: '0',
    width: '1.25em',
    display: 'block',
    transform: 'translate(-50%, 0)',
    transition: 'all 0.2s ease-in-out',
  },
  iconNormal: {
    extend: 'icon',
    position: 'relative',
    zIndex: '2',
  },
  iconHover: {
    extend: 'icon',
    position: 'absolute',
  },
  iconNormalFaded: {
    extend: 'iconNormal',
    opacity: '0',
  },
  iconHoverFaded: {
    extend: 'iconHover',
    opacity: '0',
  },
  text: {
    transition: 'all 0.2s ease-in-out',
    paddingTop: '0.25em',
    display: 'block',
  },
  textHover: {
    extend: 'text',
    color: '#fe8419',
  },
}

class UserNav extends React.Component {
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
    const { classes, children, imgNormal, imgHover } = this.props
    const { hovered } = this.state

    return(
      <Col xs={6} className={classes.root}
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}
      >
        <img className={hovered ? classes.iconNormalFaded : classes.iconNormal} src={imgNormal}/>
        <img className={hovered ? classes.iconHover : classes.iconHoverFaded} src={imgHover}/>
        <span className={hovered ? classes.textHover : classes.text}>{children}</span>
      </Col>
    )
  }
}

export default injectSheet(styles)(UserNav)
