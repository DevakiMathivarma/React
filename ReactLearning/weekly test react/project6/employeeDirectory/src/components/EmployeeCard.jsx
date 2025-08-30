import React, { Component } from "react";

class EmployeeCard extends Component {
  render() {
    const { name, designation, department, isActive, onPromote } = this.props;

    return (
      <div className="employee-card">
        <h3>{name}</h3>
        <p>
          <strong>Designation:</strong> {designation}
        </p>
        <p>
          <strong>Department:</strong> {department}
        </p>

        {/* Conditional Rendering */}
        {isActive ? (
          <p className="active">✅ Available</p>
        ) : (
          <p className="inactive">❌ Not Available</p>
        )}

        {/* Callback Prop */}
        {isActive && (
          <button className="btn-promote" onClick={onPromote}>
            Promote
          </button>
        )}
      </div>
    );
  }
}

export default EmployeeCard;
