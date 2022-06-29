import { createContext, useState } from "react";

export const TicketContext = createContext();

export const TicketContextProvider = ({ children }) => {
    
    const [Tickets,SetTickets] = useState([])

    return <TicketContext.Provider value={{ Tickets,SetTickets }}>
            {children}
    </TicketContext.Provider>
} 