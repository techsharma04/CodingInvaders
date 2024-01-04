class Employee:
    def __init__(self, name, salary, dept):
        self._name = name
        self._salary = salary
        self._dept = dept

    @property
    def salary(self):
        return self._salary

    def show(self):
        print("Name: ", self._name)
        print("Salary: ", self._salary)
        print("Dept: ", self._dept)


# Example usage
employee_name = "Steve Rogers"
employee_salary = 10000
employee_dept = "IT"

# Create an object of the Employee class
employee = Employee(employee_name, employee_salary, employee_dept)

# Access salary using the property method
print("Salary (accessed using method):", employee.salary)

# Call the show method to display employee details
employee.show()
