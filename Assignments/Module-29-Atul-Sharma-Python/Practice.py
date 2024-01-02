class BankAccount:
    def __init__(self):
        self.balance = 0

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposit ${amount} Done. New Balance: ${self.balance}")
        else:
            print(f"Invalid deposit amount")

    def withdrawal(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            print(f"Withdrew ${amount}. New balance: ${self.balance}")
        elif amount > self.balance:
            print("Insufficient funds. Withdrawal not possible.")
        else:
            print("Invalid withdrawal amount. Please enter a positive value.")


amount = BankAccount("Atul", 200)
amount.deposit()
