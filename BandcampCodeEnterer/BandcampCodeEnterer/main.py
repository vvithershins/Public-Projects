import os

codes = []
changes = []
f = open("codes.txt" , "r")
for code in f:
  codes.append(code.replace("\n",""))
f.close()

g = open("template.html", "r")
temp = g.read()
g.close()

print("")
if len(codes) > 1:
  for code in codes:
    #print(temp.replace("{this}" , code))
    temp2 = temp.replace("\n", "")
    changes.append(temp2.replace("{this}" , code))
    g = open("template.html", "r")
    temp = g.read()
    g.close()
    

h = open("start.html" , "r")
big = h.read()
stuff = ""
for text in changes:
  stuff += text
  
big = big.replace("{this}", stuff)

big = big.replace("\n", "")
big = big.replace("<br>", "\n")
print(big)

i = open("newscript.json","a+")
i.write(big)
i.close()
    
    


