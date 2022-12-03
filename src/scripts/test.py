import sys
from datetime import datetime

def printLog(type, message):
    print(f'<[{type}, {datetime.now().hour}:{datetime.now().minute}:{datetime.now().second}]>{message}')

def test(text1, text2):
    printLog(type='log', message='Começo da função')
    try:
        printLog(type='log', message=text1)
        printLogn(type='log', message=text2)
    except Exception as e:
        printLog(type='error', message=e)
    printLog(type='log', message='Fim da função')

test(
    text1=sys.argv[1],
    text2=sys.argv[2],
)