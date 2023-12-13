// Write your solution in this file!

const employee = {
  name: "Wario",
  streetAddress: "Ongata Rongai",
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  const newEmployee = { ...employee, [key]: value };
  return newEmployee;
};

const deleteFromEmployeeByKey = (employee, key) => {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];
  return employee;
};
