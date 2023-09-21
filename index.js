// Write your solution in this file!
const employee = {
    name: "Shehab",
    streetAddress: "123 Liberty"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key]= value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const removeEmployee = {...employee}
    removeEmployee[key] = undefined
    return removeEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key] = undefined
    return employee
}