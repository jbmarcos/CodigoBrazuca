# -*- coding: utf-8 -*-
"""0.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1fe--5tdS527Kjzw6O4frHxwOT-rUDRd4
"""

import random
numero = int()
aleatorio = random.randint(1, 100)


while numero != aleatorio:
    numero = int(input("Digite um número: "))
    if numero > aleatorio:
        print(f"O número que você quer encontrar é menor que {numero} ")
    if numero < aleatorio:
        print(f"O número que você quer encontrar é maior que {numero}")

print(f'Parabéns!!! você acertou o número secreto era {aleatorio} ')