def get_class_list(data, day, period):
    max = len(data[day][period])
    if max != 0:
        for i in range (0, max):
            print(str(i + 1) + "." + data[day][period][i]['Subject'])
        return max
    else:
        return None
        