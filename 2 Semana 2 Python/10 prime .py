# -*- coding: utf-8 -*-
"""3.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1fe--5tdS527Kjzw6O4frHxwOT-rUDRd4
"""

def primo(numero):
    if numero <=1:
        return False

    for i in range(2,int(numero ** 0.5) +1):
        if numero % i == 0:
            return False
        return True
print("Digite um numero abaixo. ")
inicial = int(input("Digite aqui o numero inicial: "))
final = int(input("Digite aqui o numero final: "))

for numero in range(inicial, final + 1):
    if primo(numero):
        print(numero)

