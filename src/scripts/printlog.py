from datetime import datetime

# Types: 
#   'log' => To update the status from a process. Has to identify the row
#   'error' => To any error from any kind

def print_log(type, message, row = 0):
    print(f'<[{type}, {row}, {datetime.now().hour}:{datetime.now().minute}:{datetime.now().second}]>{message}')
