# -*- coding: utf-8 -*-
"""0.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1fe--5tdS527Kjzw6O4frHxwOT-rUDRd4
"""

def mediap():
    for i in range(3):
        num1 = int(input("Digite a primeira nota que possui peso 2: "))
        num2 = int(input("Digite a primeira nota que possui peso 3: "))
        num3 = int(input("Digite a primeira nota que possui peso 5: "))

        resultado = ((num1 * 2) + (num2 * 3) + (num3 * 5)) / 10

        return resultado

mediap = mediap()
print(f"A sua média foi de {mediap}")