import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; 

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';

// Import initial data
import initialTicketsData from './data/tickets.json';

// Utility function to get initial counts
const getInitialCounts = (tickets) => {
  const resolved = tickets.filter(t => t.status === 'Resolved').length;
  return { resolved };
};

function App() {
  const [tickets, setTickets] = useState(initialTicketsData);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]); // <--- New State: For showing resolved tickets in the right panel
  const [resolvedCount, setResolvedCount] = useState(getInitialCounts(initialTicketsData).resolved);

  // Initialize In-Progress tasks (tickets with 'In-Progress' status)
  useEffect(() => {
    // Initial in-progress tasks
    const initialTasks = initialTicketsData.filter(t => t.status === 'In-Progress');
    setInProgressTasks(initialTasks);
    
    // NOTE: If you wanted to preserve resolved state across reloads, 
    // you'd also filter initialTicketsData for 'Resolved' and setResolvedTasks here.
    // For this simple project, we start with an empty resolved list in the panel.

  }, []);

  // Calculate In Progress count for the Banner
  const inProgressCount = inProgressTasks.length;

  /**
   * Adds an Open ticket to the Task Status section and updates its status.
   */
  const handleAddToTaskStatus = (ticketToAdd) => {
    const isAlreadyInProgress = inProgressTasks.some(t => t.id === ticketToAdd.id);

    if (isAlreadyInProgress) {
      toast.warn(`${ticketToAdd.title} is already being worked on!`, { position: 'top-right' });
      return;
    }

    // Update the main tickets list: change status from 'Open' to 'In-Progress'
    setTickets(prevTickets =>
      prevTickets.map(t =>
        t.id === ticketToAdd.id ? { ...t, status: 'In-Progress' } : t
      )
    );

    // Add to the in-progress tasks list for the right panel
    setInProgressTasks(prevTasks => [...prevTasks, ticketToAdd]);

    toast.success(`Ticket added to Task Status: ${ticketToAdd.title}`, { position: 'top-right' });
  };

  /**
   * Completes a ticket, moves it to resolved, and updates counts.
   */
  const handleCompleteTicket = (ticketId) => {
    // 1. Find the completed ticket before removing it
    const completedTicket = inProgressTasks.find(t => t.id === ticketId);
    
    if (!completedTicket) return;

    // 2. Remove from Task Status (inProgressTasks)
    setInProgressTasks(prevTasks =>
      prevTasks.filter(t => t.id !== ticketId)
    );
    
    // 3. Add the ticket to the Resolved Tasks list (for the panel)
    // The status is officially 'Resolved' now.
    setResolvedTasks(prevResolved => [
        { ...completedTicket, status: 'Resolved' }, // Update status and add
        ...prevResolved
    ]);

    // 4. Remove from the main tickets list (Customer Tickets view)
    setTickets(prevTickets =>
      prevTickets.filter(t => t.id !== ticketId)
    );

    // 5. Increase the Resolved count (for the banner)
    setResolvedCount(prevCount => prevCount + 1);

    // 6. Show toast notification
    toast.info(`Ticket Resolved: ${completedTicket.title}`, { position: 'top-right' });
  };

  // Filter tickets to only display 'Open' and 'In-Progress' in the Customer Tickets list
  const customerTickets = tickets.filter(t => t.status === 'Open' || t.status === 'In-Progress');

  return (
    <div className="app">
      <ToastContainer />
      <Navbar />
      <Banner
        inProgressCount={inProgressCount}
        resolvedCount={resolvedCount}
      />
      <main className="main-content">
        <div className="customer-tickets">
          <h2>Customer Tickets</h2>
          <div className="ticket-grid">
            {customerTickets.map(ticket => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onAddToTaskStatus={handleAddToTaskStatus}
              />
            ))}
          </div>
        </div>
        <div className="task-status-sidebar">
          <TaskStatus
            inProgressTickets={inProgressTasks}
            resolvedTasks={resolvedTasks} // <--- New Prop
            onCompleteTicket={handleCompleteTicket}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;