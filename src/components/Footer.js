import React from 'react'
import styled from 'styled-components'
import staticdata from './../../staticdata.json'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`
const LinkGroup = styled.div`
    width: 1000px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    a {
        transition: 0.8s;
    }

    a:hover {
        color: black;
    }
`

const Footer = () => (
    <FooterGroup>
        <LinkGroup>{staticdata.links.map(link => (
            <a href={link.url}>{link.title}</a>
        ))}
      </LinkGroup>
    </FooterGroup>
)

export default Footer