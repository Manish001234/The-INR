import React, { useContext, useState } from 'react'
import { TicketContext } from './Context'

const Ticket = () => {
    const [Data, setData] = useState("")
    
    const {SetTickets,Tickets} = useContext(TicketContext)
    // const [Tickets,SetTickets] = useContext(TicketContext)

    // console.log(Tickets,"tickets")
    // // Object.keys(Tickets).length=5
    // Tickets.length=5
      
    const handleTicket = (e)=>{
        const val = e.target.value;
        if(Data.length<=5) setData(Data+val)
        else alert("Enter only 6 numbers!")
         console.log(Data);
       }
     
    const handleClear=()=>{
        setData("")
      }

      const randomTicket =()=>{
        setData(Math.floor((Math.random()*1000000)+6))
      
        
      }
  return (
    <div className='container'>
       <div className='box1'>
        <div className='boxshadow'>
       <div className='inputbox'>
       <div>{Data}</div>
       <div>enter 6 digits</div>
        </div>
       <div className='left'>
       
          <button value="7" onClick={handleTicket}>7</button>
          <button value="8" onClick={handleTicket}>8</button>
          <button value="9" onClick={handleTicket}>9</button>
          <button value="4" onClick={handleTicket}>4</button>
          <button value="5" onClick={handleTicket}>5</button>
          <button value="6" onClick={handleTicket}>6</button>
          <button value="1" onClick={handleTicket}>1</button>
          <button value="2" onClick={handleTicket}>2</button>
          <button value="2" onClick={handleTicket}>3</button>
          <button onClick={handleClear}>Clear</button>
          <button value="0" onClick={handleTicket}>0</button>
          <button  onClick={handleClear}>Delete</button>
         
       </div>
       <div >
            <button onClick={()=>{
                SetTickets([...Tickets,Data])
                setData("")
                

            }}  id='addticket' >+  Add Ticket</button>
          </div>
          </div>
       <div className='right'>
             <img onClick={randomTicket} src="https://github.com/mugilmalathi/INR-Assignment/blob/main/inr-assignment/src/wheel.png?raw=true" alt="" height="100%" width="100%" />
       </div>
       </div>
       <p className='p'>Your selected Tickets :</p>
       <div className='box2'>
        

          {Tickets.map((e)=>{
            return (
                <div  >
                     <div className='mapeddata'>{e}</div>
              </div>
            )
          })}

          
       </div>
    </div>
  )
}

export default Ticket