import sys

def test(text1, text2):
    print('Começo da função')
    print(text1)
    print(text2)
    print('Fim da função')

test(
    text1=sys.argv[1],
    text2=sys.argv[2],
)