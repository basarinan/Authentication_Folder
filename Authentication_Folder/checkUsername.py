def checklogin(u,p):
    for i in range(len(uNames)):
        if uNames[i]== u and pWords[i]==p:
            return True
        else:
            return False
uNames= ["hi","you","go"]
pWords =["tough", "buddy", "lose"]
print(checklogin("hi","tough"))
print(checklogin("hi","buddy"))