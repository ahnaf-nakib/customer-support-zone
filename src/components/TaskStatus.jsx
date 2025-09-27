import React from 'react';

// Added resolvedTasks prop
const TaskStatus = ({ inProgressTickets, resolvedTasks, onCompleteTicket }) => {
  return (
    <div className="task-status-section">
      <h3>Task Status</h3>
      <p className="task-instructions">Select a ticket to add to Task Status.</p>
      
      {/* --- In Progress List --- */}
      <div className="in-progress-list">
        {inProgressTickets.length === 0 ? (
          <p className="no-tasks">No tasks yet.</p>
        ) : (
          inProgressTickets.map(ticket => (
            <div key={ticket.id} className="task-item in-progress-task">
              <span className="task-title">{ticket.title}</span>
              <button 
                className="complete-btn"
                onClick={() => onCompleteTicket(ticket.id)}
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>

      {/* --- Resolved Tasks List --- */}
      <div className="resolved-list-container">
        <h3>Resolved Task</h3>
        <div className="resolved-list">
          {resolvedTasks.length === 0 ? (
            <p className="no-resolved">No resolved tickets yet.</p>
          ) : (
            resolvedTasks.map(ticket => (
              <div key={ticket.id} className="task-item resolved-task-item">
                <span className="resolved-title">{ticket.title}</span>
                <span className="resolved-status-pill">Resolved</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;