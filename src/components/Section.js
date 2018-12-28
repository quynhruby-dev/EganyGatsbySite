import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';
import Link from 'gatsby-link'
import './Section.css'

const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 700px;
    background-size: cover;
    display: grid;
    grid-gap: 20px;
    position: relative;
    align-items: center;
    justify-content: center;

    @media (max-width: 640px) {
        height: 820px;
    }
`


const SectionTitleGroup = styled.div`
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: #333333;
    font-size: 60px;
    font-weight: 400;
    line-height: 1.2;

    @media (max-width: 720px) {
        font-size: 40px;
    }
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

const Section = props => (
	<SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
		<SectionTitleGroup>
			<SectionTitle>{props.title}</SectionTitle>
			<Link className = "SectionLink" to={props.linkTo}>{props.linkText}</Link>
		</SectionTitleGroup>
	</SectionGroup>
)

export default Section