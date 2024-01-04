class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def perimeter(self):
        return 2 * (self.length + self.width)

    def area(self):
        return self.length * self.width

    def display(self):
        print("The length of rectangle is:", self.length)
        print("The width of rectangle is:", self.width)
        print("The perimeter of rectangle is:", self.perimeter())
        print("The area of rectangle is:", self.area())


# Get user input for rectangle dimensions
length = float(input("Enter the length of the rectangle: "))
width = float(input("Enter the width of the rectangle: "))

# Create an object of the Rectangle class
rectangle1 = Rectangle(length, width)

# Call the display method to show information about the rectangle
rectangle1.display()
