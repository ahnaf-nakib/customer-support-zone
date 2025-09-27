import React from 'react';

const TicketCard = ({ ticket, onAddToTaskStatus }) => {
  const isClickable = ticket.status === 'Open';

  const handleClick = () => {
    if (isClickable) {
      onAddToTaskStatus(ticket);
    }
  };

  return (
    // Only 'Open' tickets are click-able for adding to Task Status.
    <div 
      className={`ticket-card ${isClickable ? 'clickable' : ''}`} 
      onClick={handleClick}
    >
      <div className="ticket-header">
        <h3 className="ticket-title">{ticket.title}</h3>
        <span className={`status-pill ${ticket.status.toLowerCase().replace('-', '')}`}>
          {ticket.status}
        </span>
      </div>
      <p className="ticket-description">{ticket.description}</p>
      <div className="ticket-meta">
        <span className="id">{ticket.id}</span>
        <span className={`priority-tag ${ticket.priority.toLowerCase().replace(' ', '-')}`}>
          {ticket.priority}
        </span>
        <span className="customer-date">
          {ticket.customer} | {ticket.createdAt}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;