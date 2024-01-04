class BankAccount:
    def __init__(self, accountNumber, name, balance):
        self.accountNumber = accountNumber
        self.name = name
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited ${amount}. New balance: ${self.balance}")

    def withdrawal(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print(f"Withdrawn ${amount}. New balance: ${self.balance}")
        else:
            print("Insufficient funds. Withdrawal failed.")

    def display(self):
        print("Account Number : ", self.accountNumber)
        print("Account Name : ", self.name)
        print("Account Balance : ", self.balance, "$")


# Example usage
accountNumber = 2178514584
accountHolderName = "Tony"
initialBalance = 29800

# Create an object of the BankAccount class
account = BankAccount(accountNumber, accountHolderName, initialBalance)

# Display initial account details
account.display()

# Perform a deposit
account.deposit(100)

# Perform a withdrawal
account.withdrawal(100)

# Display updated account details
account.display()
