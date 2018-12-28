import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
    console.log('this.props', this.props.data)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className= "HeaderGroup">
          <Link to="/"><img src='https://theme.hstatic.net/1000181505/1000419420/14/logo.png' width="120" /></Link>
          <div className = "HeaderMenuGroup">
            <Link to="#">Home</Link>
            <Link to="#">About</Link>
            <Link to="#">Services</Link>
            <Link to="#">Products</Link>
            <Link to="#">Showcase</Link>
            <Link to="#">SalePage</Link>
            <Link to="#">Blogs</Link>
            <Link to="/labs">Labs</Link>
            <Link to="#">Order Now</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
