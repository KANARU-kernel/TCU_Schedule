#曜日の読み取り
def set_date():
    print("月曜日:1\n火曜日:2\n水曜日:3\n木曜日:4\n金曜日:5\n土曜日:6")
    while True:
        try:
            date = int(input("曜日の数字を入力してください:"))
            if 1 <= date <= 6:
                return date - 1
            else:
                print("1から6までのの数字を入力してください。")
        except ValueError:
            print("数字のみ入力してください。")

if __name__ == '__main__':
    print(set_date())
    