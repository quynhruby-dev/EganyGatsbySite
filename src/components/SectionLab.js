import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';
import './SectionLab.css'

const SectionGroup = styled.div`
    background: ${props => props.background};
    margin: auto;
    height: 700px;
    background-size: cover;
    display: grid;
    grid-template-columns: repeat(2, auto);
    position: relative;
    align-items: center;
    justify-content: center;

    @media (max-width: 640px) {
        height: 820px;
    }
`


const LeftContent = styled.div`
    height: 700px;
    background-color: ${props => props.leftBackground};
    align-items: center;
    justify-content: center;
    align-items: center;
    padding-right: 160px;
    padding-left: 70px;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitleGroup = styled.div`
    display: block;
    top: 50%;
    position: relative;
    transform: translateY(-50%);
`

const SectionTitle = styled.h3`
    color: ${props => props.textColor};
    font-size: 60px;
    margin: 0 0 40px 0;
    font-weight: 400;
    line-height: 1;

    @media (max-width: 720px) {
        font-size: 40px;
    }
`

const SectionContent = styled.p`
    color: ${props => props.textColor};
    font-size: 1em;
    margin-bottom: 30;
    font-weight: 400;
    line-height: 1.7;

    @media (max-width: 720px) {
        font-size: 40px;
    }
`

const SectionLab = props => (
	<SectionGroup background = {props.background}>
		<LeftContent leftBackground = {props.leftBackground}>
            <SectionTitleGroup>
                <SectionTitle textColor = {props.textColor}>{props.title}</SectionTitle>
                <SectionContent textColor = {props.textColor}>{props.content}</SectionContent>
            </SectionTitleGroup>
        </LeftContent>
        <img className = "ImageHolder" src={props.image} />
	</SectionGroup>
)

export default SectionLab