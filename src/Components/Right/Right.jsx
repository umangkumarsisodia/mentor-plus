import React, { useEffect, useState } from 'react'
import './Right.css'

function Right() {
    const [date, setdate] = useState([]);
    const [starthour, setstarthour] = useState([6,7]);
    const [endhour, setendhour] = useState([7,8]);
    const getDate = () => {
        fetch('https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json')
        .then(response => response.json())
        .then((data) => {setdate(data)});
    }
    useEffect(() => {
        getDate();
    }, [])
    return (
        <>
            <div className="right-container">
                <div className="right-area">
                    <h1>Book Demo session Slot</h1>
                    <div className="border-area">
                        <div className="border-1"></div>
                        <div className="border-2"></div>
                    </div>
                    <h3>Select Date</h3>
                    <div className="date-area">
                        <button className="date-slot" onClick={()=>{
                            setstarthour([date[0].available[0].hour, date[0].available[0].hour+1]);
                            setendhour([date[0].available[1].hour,date[0].available[1].hour+1])
                            }}>
                            <p>Mon</p>
                            <h4>22</h4>
                            <p>Feb</p>
                        </button>
                        <button className="date-slot" onClick={()=> {
                            setstarthour([date[1].available[0].hour, date[1].available[0].hour+1]);
                            setendhour([date[1].available[1].hour,date[1].available[1].hour+1])
                        }}>
                            <p>Tue</p>
                            <h4>23</h4>
                            <p>Feb</p>
                        </button>
                        <button className="date-slot" onClick={()=> {
                            setstarthour([date[2].available[0].hour, date[2].available[0].hour+1]);
                            setendhour([date[2].available[1].hour,date[2].available[1].hour+1])
                        }}>
                            <p>Wed</p>
                            <h4>24</h4>
                            <p>Feb</p>
                        </button>
                        <button className="date-slot" onClick={()=> {
                            setstarthour([date[3].available[0].hour, date[3].available[0].hour+1]);
                            setendhour([date[3].available[1].hour,date[3].available[1].hour+1])
                        }}>
                            <p>Thu</p>
                            <h4>25</h4>
                            <p>Feb</p>
                        </button>
                        <button className="date-slot" onClick={()=> {
                            setstarthour([date[4].available[0].hour, date[4].available[0].hour+1]);
                            setendhour([date[4].available[1].hour,date[4].available[1].hour+1])
                        }}>
                            <p>Fri</p>
                            <h4>26</h4>
                            <p>Feb</p>
                        </button>
                        <button className="date-slot" onClick={()=> {
                            setstarthour([date[5].available[0].hour, date[5].available[0].hour+1]);
                            setendhour([date[5].available[1].hour,date[5].available[1].hour+1])
                        }}>
                            <p>Sat</p>
                            <h4>27</h4>
                            <p>Feb</p>
                        </button>
                    </div>
                    <div className="slot-booking">
                        <h3>Select Slot</h3>
                        <div className="time-area">
                            <div className="time-slot">
                                <h4>{starthour[0]} PM - {starthour[1]} PM</h4>
                            </div>
                            <div className="time-slot">
                                <h4>{endhour[0]} PM - {endhour[1]} PM</h4>
                            </div>
                        </div>
                    </div>
                    <button className='pay'>Proceed to Pay</button>
                </div>
            </div>
        </>
  )
}

export default Right