def grade_converter(gpa):
#  grade = gpa
  if gpa >= 4.0:
    return "A"
  elif gpa >= 3.0 and gpa < 4:
    return "B"
  elif gpa >= 2.0 and gpa < 3:
    return "C"
  elif gpa >= 1.0 and gpa < 2:
    return "D"
  elif gpa >= 0.0 and gpa < 1:
    return "F"
  #else:
    #return gpa

print(grade_converter(4.0))
