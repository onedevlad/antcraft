import React from 'react'
import { Col } from 'react-flexbox-grid'
import injectSheet from 'react-jss'


const styles = {
  root: {
    textAlign: 'center',
   },
  link: {
    fontWeight: '20px',
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    letterSpacing: '1.5px',
  },
  linkHovered: {
    extend: 'link',
    textDecoration: 'underline',
  }
}

class Title extends React.Component{
  constructor(props) {
    super(props)
    this.state = {hovered: false}
  }
  handleMouseOver() {
    this.setState({hovered: true})
  }
  handleMouseOut() {
    this.setState({hovered: false})
  }

  render() {
    const {classes} = this.props
    const {hovered} = this.state
    return(
      <Col className={classes.root} md={2} onMouseOver={ () =>{this.handleMouseOver()} } onMouseOut={ () => {this.handleMouseOut()} }>
        <a className={hovered ? classes.linkHovered : classes.link}>Antcraft</a>
      </Col>
    )
  }
}

export default injectSheet(styles)(Title)
