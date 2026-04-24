s = 1
x=[]
while s ==1:
    a = int(input("ingrese un numero entero:"))
    x.append(a)
    s = int(input("desea ingresar otro numero? 1 para si, 0 para no:"))
n = len(x)
for i in range(n):
    m=i
    for j in range(i+1,n):
        if x[j] < x[m]:
            m = j
    x[i],x[m] = x[m],x[i]
print(x)