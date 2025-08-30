import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      designation: "Junior Developer",
      department: "Engineering",
      isActive: true,
    },
    {
      id: 2,
      name: "Bob Smith",
      designation: "HR Manager",
      department: "Human Resources",
      isActive: false,
    },
    {
      id: 3,
      name: "Charlie Brown",
      designation: "Sales Executive",
      department: "Sales",
      isActive: true,
    },
  ]);

  // Callback → Promote employee
// Promotion hierarchy
const hierarchy = [
  "Intern",
  "Junior Developer",
  "Sales Executive",
  "Mid-level Developer",
  "Senior Developer",
  "Lead Developer",
  "Manager",
  "Director"
];

// Callback → Promote employee
const promoteEmployee = (id) => {
  const updated = employees.map((emp) => {
    if (emp.id === id) {
      // find current index in hierarchy
      const currentIndex = hierarchy.indexOf(emp.designation);

      // if found and not last level → promote to next
      if (currentIndex !== -1 && currentIndex < hierarchy.length - 1) {
        return { ...emp, designation: hierarchy[currentIndex + 1] };
      }
    }
    return emp;
  });
  setEmployees(updated);
};



  return (
    <div className="employee-list">
      {employees.map((emp) => (
        <EmployeeCard
          key={emp.id}
          name={emp.name}
          designation={emp.designation}
          department={emp.department}
          isActive={emp.isActive}
          onPromote={() => promoteEmployee(emp.id)} // callback passed
        />
      ))}
    </div>
  );
};

export default EmployeeList;
