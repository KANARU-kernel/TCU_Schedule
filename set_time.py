def set_time():
    while True:
        try:
            time = int(input("時限の数字を入力してください:"))
            if 1 <= time <= 5:
                return time - 1
            else:
                print("1から5までのの数字を入力してください。")
        except ValueError:
            print("数字のみ入力してください。")

if __name__ == '__main__':
	set_time()

