codes = []
print("Bandcamp link generator.")
print("Please put your codes in the codes.txt file, one per line ")
page = input("""enter the name of your band camp page
https://name.bandcamp.com
""")

f = open("codes.txt", "r")
for line in f: 
  codes.append(line.strip())  
f.close()

for code in codes:
  if page != "":
    template = f"https://{page}.bandcamp.com/yum?code={code}"
    print(template)
    print()
  else:
    template = f"https://bandcamp.com/yum?code={code}"
    print(template)
    print()
