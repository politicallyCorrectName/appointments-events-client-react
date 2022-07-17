import styled from 'styled-components'
import icon from '../svgs/calendarcheck.svg'
import activeIcon from '../svgs/calendarwarning.svg'
import React, {useState, useEffect, } from 'react'
import { Temporal } from '@js-temporal/polyfill'

const StyledDateContainer = styled.div`
    width: 10cm;
    height: 2.5cm;
    border: 0.02cm black;
    display: flex;
    align-items: center;
`
const StyledBoxItem = styled.div`
    margin: 0.1cm 0.2cm;
    flex-shrink: 0;
    flex-grow: 0;
    width: 6cm;
    height: 1.3cm;
    display: flex;
    align-items: center;
    justify-content: right;
    border: 0.07cm solid ${props => props.isActive ? '#fbf' : '#000'};
    cursor: pointer;
    div{
        height: 100%;
        aspect-ratio: 1 / 1;
        border-left: 0.07cm solid ${props => props.theme.tc};
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    div > img{
        height: 60%;
        aspect-ratio: 1 / 1;
    }
    span{
        width: 70%;
        height: 70%;

    }
`



// idk if this is gonna work





const SingleDate = ({object, id, setAppointmentsToDeleteForParent, appointmentIDsFromParent, parentFunction,  startingDate, finishingDate}) => {

    const componentDate = Temporal.PlainDate.from(object.appointment.date.dateAsString)


    

    useEffect(() => {
        //console.log(`component ${id} has rerendered`)
    })



    return(
        <StyledBoxItem  onClick={() => parentFunction(id)} >
            <span>
                {object.appointment.date.dateAsString} {object.appointment.period.start}
            </span>
            <div>
                <img src={appointmentIDsFromParent.includes(id) ? activeIcon : icon}  />
            </div>
        </StyledBoxItem>
    )

}
export default SingleDate