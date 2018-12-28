import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import styled from 'styled-components'

const Hero = styled.div`
background: url(${props => props.backgroundImage});
`

const IndexPage = ({data}) => {
  const { title, subTitle, backgroundImage, childContentfulHomeScreenDescriptionTextNode, btnTitle } = data.allContentfulHomeScreen.edges[0].node
  return (
    <div>
      <Hero className="Hero" backgroundImage = {backgroundImage}>
        <div className="HeroGroup">
          <h1>{title}</h1>
          <p>{subTitle}</p>
          <span>{childContentfulHomeScreenDescriptionTextNode.description}</span>
          <Link to="/page-2/">{btnTitle}</Link>
          <Wave />
        </div>
      </Hero>
      <div className="Cards">
        <h2>Showcase</h2>
        <div className="CardGroup">
          <Card 
            text="Du Lịch Quá Hot Travel"
            image='https://product.hstatic.net/1000181505/product/01_70b159590a7e4e9fbe3fe1f5057a2615_large.jpg' />
          <Card 
            text="EGA Bách Hóa"
            image='https://product.hstatic.net/1000181505/product/baby_clothes_large.jpg' />
          <Card 
            text="EGA Corporate"
            image='https://product.hstatic.net/1000181505/product/1_large.jpg' />
          <Card 
            text="EGA Fashion Magazine"
            image='https://product.hstatic.net/1000181505/product/the-bag_destop_large.png' />
          <Card 
            text="EGA Kidsland"
            image='https://product.hstatic.net/1000181505/product/01_70b159590a7e4e9fbe3fe1f5057a2615_large.jpg' />
          <Card 
            text="Ega Baby Clothes"
            image='https://product.hstatic.net/1000181505/product/baby_clothes_large.jpg' />
          <Card 
            text="Ega Chíp Đẹp Xinh"
            image='https://product.hstatic.net/1000181505/product/1_large.jpg' />
          <Card 
            text="Ega The Bag"
            image='https://product.hstatic.net/1000181505/product/the-bag_destop_large.png' />
        </div>
      </div>
      
      <Section
        image='http://theme.hstatic.net/1000181505/1000419420/14/call-to-action.jpg'
        logo='/images/logo-react.png'
        title="Think We’d Be a Match?"
        linkTo = "#"
        linkText = "GET STARTED"
       />
    </div>
  )
}

export default IndexPage

export const homeQuery = graphql`
  query HomeScreen {
    allContentfulHomeScreen {
      edges {
        node {
          id
          title
          subTitle
          childContentfulHomeScreenDescriptionTextNode {
            description
          }
          backgroundImage
          btnTitle
        }
      }
    }
  }
`


