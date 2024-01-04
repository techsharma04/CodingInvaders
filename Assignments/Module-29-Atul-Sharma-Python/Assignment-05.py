class Employee:
    def __init__(self, name, salary, dept):
        self.__name = name
        self.__salary = salary
        self.__dept = dept

    def show(self):
        print("Name: ", self.__name)
        print("Salary: ", self.__salary)
        print("Dept: ", self.__dept)


# Example usage
employee_name = "Steve Rogers"
employee_salary = 10000
employee_dept = "IT"

# Create an object of the Employee class
employee = Employee(employee_name, employee_salary, employee_dept)

# Display initial employee details
employee.show()

# Update the name of the employee
employee._Employee__name = "Tony"

# Display updated employee details
employee.show()

# Try to access salary directly (will result in an AttributeError)
try:
    print("Salary (direct access):", employee._Employee__salary)
except AttributeError as e:
    print("AttributeError:", e)
