import random

money = 100

'''
#Write your game of chance functions here
def coin_flip(guess, bet):
  num = random.randint(0, 1)
  money_total = money
  if bet <= 0 or bet > money_total:
    print("Please bet a valid amount between 1 and " + str(money_total) + ".")
    return
  if guess == "Heads" or guess == "Tails":
    print("You chose " + guess + ".");
    if num == 0:
      print("You won, " + str(bet) + " dollars!")
      money_total += (bet)
      print("You have " + str(money_total) + " dollars left.")
    elif num == 1:
      print("You lost, " + str(-bet) + " dollars! :(")
      money_total -= (bet)
      print("You have " + str(money_total) + " dollars left.")
    return money_total
  else:
    print("Please enter 'Heads' or 'Tails'")


def cho_han(guess, bet):
  num1 = random.randint(1, 6)
  num2 = random.randint(1, 6)
  num_add = num1 + num2
  money_total = money
  if bet <= 0 or bet > money_total:
    print("Please bet a valid amount between 1 and " + str(money_total) + ".")
    return
  if guess == "Odd" or guess == "Even":
    print("You chose " + guess + ".");
    if num_add % 2 == 0 and guess == "Even":
      print("You won, " + str(bet) + " dollars!")
      money_total += (bet)
      print("You have " + str(money_total) + " dollars left.")
    elif num_add % 2 == 1 and guess == "Odd":
      print("You won, " + str(bet) + " dollars!")
      money_total += (bet)
      print("You have " + str(money_total) + " dollars left.")
    else:
      print("You lost, " + str(-bet) + " dollars! :(")
      money_total -= (bet)
      print("You have " + str(money_total) + " dollars left.")
    return money_total
  else:
    print("Please enter 'Odd' or 'Even'")

'''
rand_num = random.randint(0, 51)
rand_num2 = random.randint(0, 51)

def high_card(num1, num2, bet):
  num1 = rand_num
  num2 = rand_num2
  full_deck = ["1 of spades", "1 of hearts", "1 of clubs", "1 of diamonds", "2 of spades", "2 of hearts", "2 of clubs", "2 of diamonds", "3 of spades", "3 of hearts", "3 of clubs", "3 of diamonds", "4 of spades", "4 of hearts", "4 of clubs", "4 of diamonds", "5 of spades", "5 of hearts", "5 of clubs", "5 of diamonds", "6 of spades", "6 of hearts", "6 of clubs", "6 of diamonds", "7 of spades", "7 of hearts", "7 of clubs", "7 of diamonds", "8 of spades", "8 of hearts", "8 of clubs", "8 of diamonds", "9 of spades", "9 of hearts", "9 of clubs", "9 of diamonds", "10 of spades", "10 of hearts", "10 of clubs", "10 of diamonds", "Jack of spades", "Jack of hearts", "Jack of clubs", "Jack of diamonds", "Queen of spades", "Queen of hearts", "Queen of clubs", "Queen of  diamonds","King of spades", "King of hearts", "King of clubs", "King of diamonds", "Ace of spades", "Ace of hearts", "Ace of clubs", "Ace of diamonds"]
  money_total = money
  if bet <= 0 or bet > money_total:
    print("Please bet a valid amount between 1 and " + str(money_total) + ".")
    return
    print("Player1 picked " + full_deck[num1] + ".")
    print("Player2 picked " + full_deck[num2] + ".")
    if num1 > num2:
      print("Player 1 wins with the " + full_deck[num1] + " card and receives " + str(bet) + " dollars!")
    elif num2 > num1:
      print("Player 2 wins with the " + full_deck[num1] + " card and receives " + str(bet) + " dollars!")
    else:
      print("It's a tie! Both players get their money back.")


#Call your game of chance functions here
#money = coin_flip("Heads", 5)
#money = cho_han("Odd", 5)
high_card(num1, num2, 5)
