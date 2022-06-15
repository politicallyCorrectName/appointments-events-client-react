import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import { Temporal } from '@js-temporal/polyfill'; 
import arrow from '../svgs/arrowup.svg'
import calendarCheck from '../svgs/calendarcheck.svg'
import {AppointmentContext} from '../contexts/AppointmentContext'




const monthNameEN = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}

const StyledFlexContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 67%;
`

const StyledCalendarBox = styled.div`
    width: 8cm;
    height: 9cm;
    border: 0.07cm solid ${props => props.theme.tc};
    margin: 1cm;

`
const StyledCalendarBoxHeader = styled.div`
    height: 1cm;
    border-bottom: 0.07cm solid ${props => props.theme.tc};
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const StyledMonthName = styled.div`
    font-size: 150%;
    font-weight: 500;
    justify-self: left;
    margin-left: 2rem;
`
const StyledArrowWrapper = styled.div`
    width: 3cm;
    height: 0.9cm;
    display: flex;
    justify-content: center;
    align-items: center;


    img{
        height: 80%;
        aspect-ratio: 1 / 1;
        cursor: pointer;
        border-radius: 50%;
        margin: 0.03cm;
        padding: 0.03cm;
    }
    img:hover{
        background-color: rgba(0, 0, 0, 0.3);
    }
    .down{
        transform: rotate(180deg)
    }
`
const StyledDay = styled.div`
    height: 14%;
    aspect-ratio: 1 / 1 ;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 1;
    border-radius: 50%;
    cursor: pointer;
    &:hover{
        background-color: ${props => props.activeColor};
    }
    span{
        font-size: 1rem;
        margin: 0;
    }
`
const StyledCalendarBoxBody = styled.div`
    width: 8cm;
    height: 8cm;
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
    padding: 0.2cm;
`


const StyledAppointment = styled.div`
    height: 1cm;
    width: 80%;
    border: 0.07cm solid ${props => props.theme.tc};
    display: flex;
    align-items: center;
    justify-content: right;
    span{
        width: 5cm;
        height: 1cm;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span > span{
        display: inline;
        font-size: 1.4rem;
    }
    div{
        width: 1cm;
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




const SingleAppointmentBox = ({dateISO}) => {
    
        return(
  
            
            <StyledAppointment>
            <span>
                {dateISO.toString()}
            </span>
            <div>
            <img src={calendarCheck} alt=''/>
            </div>
            </StyledAppointment>
        )
    
}

const AppointmentsBox = ({dateISO}) => {
    


    return(
        <>
            <StyledCalendarBox>
                <StyledCalendarBoxHeader>
                    Available Appointments
                </StyledCalendarBoxHeader>
                <StyledCalendarBoxBody>
                <StyledAppointment></StyledAppointment>
                <SingleAppointmentBox dateISO={dateISO} />
                </StyledCalendarBoxBody>
            </StyledCalendarBox>
        </>
    )
}

const Calendar = () => {

    const now = Temporal.Now.plainDateISO()

    const [date, setDate] = useState(now)
    const [calendarDays, setCalendarDays] = useState([now])

    //appointments is structured as: month
    const [appointments, setAppointments] = useState(useContext(AppointmentContext))

    const incrementMonth = () => {
        setDate(previous => previous.add({months: 1}))
    }


    const decrementMonth = () => {
        //TODO doesn't work if you go ahead by one year
        if(date.month > now.month){
            setDate(previous => previous.subtract({months: 1}))
        }
    }
    const debugSetDate = (newDate) => {
        console.log(date)
        setDate(prev => prev.with({day: newDate}))
    }

    
    useEffect(() => {
        //TODO the last day in the array is 30 even if there are 31 days. [1, ..., 30, 30]
        let arr = []
        //daysInMonth works, meaning something is preventing arr[30] from increasing to the value of 31
        for(let i = 0 ; i < date.daysInMonth ; i +=1){
            arr.push(now.with({day: i + 1}))
        }
        setCalendarDays(arr)        
    },[date.month])

    const getAvailableAppointments = async() => {
        const res = await fetch(`http://localhost:5040/appointment?month=${date.month}`, {
            method: 'GET',
            headers:{
                "Content-Type" : "application/json"
            },
        })
        const rV = await res.json()
        console.log(rV)
        return rV

    };

    
    const [appointmentContextValue, setAppointmentContextValue] = useContext(AppointmentContext)

    //TODO use object.assign to modify the global date-appointment object upon making requests
    useEffect(() => setAppointmentContextValue(prev => getAvailableAppointments(date.month)), [date])

    //this checks when the date changes, what format it is, etc and logs it to the console
    useEffect(() => console.log(date), [date])

    

    return(
        <>
        <StyledFlexContainer>


     
        <StyledCalendarBox>
        <StyledCalendarBoxHeader>
            <StyledMonthName>{`${monthNameEN[date.month]} ${date.year}`}</StyledMonthName>
            <StyledArrowWrapper>
            <img src={arrow} alt='up' onClick={decrementMonth} />
            <img className='down' src={arrow} alt='down' onClick={incrementMonth} />
            </StyledArrowWrapper>
        </StyledCalendarBoxHeader>
        <StyledCalendarBoxBody>
       
        {calendarDays.map(calendarDay => <StyledDay key={calendarDay.day.toString()} onClick={() => setDate(calendarDay)} ><span>{calendarDay.day.toString()}</span></StyledDay>)}
             
        </StyledCalendarBoxBody>
        </StyledCalendarBox>


        <AppointmentsBox dateISO={date}/>


        <StyledCalendarBox>
            <StyledCalendarBoxHeader>
                Book Appointment
            </StyledCalendarBoxHeader>
            <StyledCalendarBoxBody>
            
            </StyledCalendarBoxBody>
        </StyledCalendarBox>

        </StyledFlexContainer>
        </>
    )
}

export {Calendar}