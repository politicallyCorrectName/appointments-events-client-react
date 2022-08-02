import styled from "styled-components";


/*

from <Book /> Component

*/

export const StyledFlexContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`
export const StyledPageWrapper = styled.div`
    //display: flex;
    //justify-content: space-evenly;
    //align-items: center;
    padding-bottom: 2cm;
`

export const StyledSectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    h2{
        font-family: inherit;

        span{
            background-color: ${props => props.theme.ic4};
        }
    }
`

export const StyledBoxSmall = styled.div`
    aspect-ratio: 7 / 8;
    height: calc(160px + 26vh);
    border: 0.07cm solid ${props => props.theme.tc};
    gap: 0.1cm;
    margin: 1cm;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
`
export const StyledSmallBoxHeader = styled.div`
    border-bottom: 0.07cm solid ${props => props.theme.tc};
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    background-color: ${props => props.theme.ic4};
    span{
        font-weight: 500;
        font-size: 1.3em;
    }
    
`
export const StyledBoxBody= styled.div`
    width: calc(100% + 2px);
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
    padding: 0.2cm;
`
export const StyledAppointmentContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 0.3cm 0.3cm 0 0.3cm;
    grid-column: 1 / -1;
    grid-row: ${props => props.index + 2} / ${props => props.index + 3};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledItem = styled.div`
    height: 100%;
    width: 100%;
    border: 0.07cm solid ${props => props.theme.tc};
    display: flex;
    align-items: center;
    justify-content: right;
    cursor: pointer;
    background-color: ${props => props.isActive  ? props.theme.hc1 : 'inherit'};

    span{
        width: 5cm;
        height: 1cm;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
    }
    span > span{
        display: inline;
        font-size: 1.4rem;
    }
    div{
        height: 1cm;
        aspect-ratio: 1 / 1;
        border-left: 0.07cm solid ${props => props.theme.tc};
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        height: 60%;
        aspect-ratio: 1 / 1;
    }
`
export const StyledButtonWrapper = styled.div`
    width: ${props => props.theme.boxHeight};
    aspect-ratio: 12 / 5;
    border: ${props => props.theme.bthk};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const StyledCommandsWrapper = styled.div`
    width: 40vw;
    justify-content: center;
    align-items: center;
    display: flex;

`

export const StyledButton = styled.div`
    border: ${props => props.theme.bthn};
    border-radius: 0%;
    background-color: ${props => props.theme.ic9};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    flex-grow: 1;
    max-width: 40%;
    margin: 0 0.4cm;
    padding: 0;
        margin: 0.4cm;
    cursor: pointer;
    width: 14vw;
    height: 6vh;
    span{
        color: ${props => props.theme.c3};
        font-weight: 500;

    }
    &:hover{
        background-color: ${props => props.theme.hc7};
    }
`
export const StyledBoxLarge = styled.div`
    aspect-ratio: 13 / 10;
    height: ${props => props.theme.boxHeight};
    border: 0.07cm solid ${props => props.theme.tc};
    margin: 1cm;
    display: grid;
    grid-template: repeat(7, 1fr) / repeat(9, 1fr);

`
export const StyledBoxHeaderLarge = styled.div`
    border-bottom: 0.07cm solid ${props => props.theme.tc};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.ic4};
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    span{
        font-weight: 500;
        font-size: 1.7em;
    }
`