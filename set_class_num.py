def set_class_num(len):
    while True:
        try:
            user_input = int(input("1から{}までの数字を入力してください:".format(len)))
            if 0 <= user_input <= len:
                return user_input - 1
            else:
                print("範囲内の数字を入力してください。")
        except ValueError:
            print("数字のみ入力してください。")
