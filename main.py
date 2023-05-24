from parse_pdf import parse_pdf
from regroup_data import regroup_data
from set_date import set_date
from set_time import set_time
from get_class_list import get_class_list
from set_class_num import set_class_num

table = parse_pdf("CommonSubject.pdf")

data = regroup_data(table)

day = set_date()
period = set_time()
max = get_class_list(data, day, period)
if max != None:
    class_num = set_class_num(max)
    print(data[day][period][class_num]["Classroom"])
else:
    print("この時間帯の授業がない。")