class Book:
    def __init__(self, title, author, price):
        self.title = title
        self.author = author
        self.price = price

    def view(self):
        print("Book Title: ->", self.title)
        print("Book Author: ->", self.author)
        print("Book Price: ->", self.price, "$")


# Get user input for book details
title = input("Enter Book Title: ")
author = input("Enter Author's Full Name: ")
price = float(input("Enter Book Price: $"))

# Create an object of the Book class
book1 = Book(title, author, price)

# Call the view method to display information for the current book
book1.view()
