codes = []

newcodes = []

print("Bandcamp link generator.")

print("Please put your codes in the codes.txt file, one per line ")

page = input("""enter the name of your band camp page
https://name.bandcamp.com
or just press enter to skip this part.""")

f = open("codes.txt", "r")
for line in f: 
  codes.append(line.strip())  
f.close()

for code in codes:
  if page != "":
    template = f"https://{page}.bandcamp.com/yum?code={code}"
    print(template)
    print()
    newcodes.append(template)
    
  else:
    template = f"https://bandcamp.com/yum?code={code}"
    print(template)
    print()
    newcodes.append(template)
    
f = open("newcodes.txt" , "a+")
for code in newcodes:
  code = f"{code}\n"
  f.write(code)
f.close()
