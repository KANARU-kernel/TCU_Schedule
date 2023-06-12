def regroup_data(extracted_data):
    # create a list of 6 lists
    data = [[], [], [], [], [], []]

    # loop through the extracted data
    for row in extracted_data:
        # print(row)

        # check row[1] to see which day it is
        match (row[1]):
            case "月":
                day = 0
            case "火":
                day = 1
            case "水":
                day = 2
            case "木":
                day = 3
            case "金":
                day = 4
            case "土":
                day = 5

        # use row[2] to see which period it is
        # if row[2] is not a number, skip this row
        if not row[2].isdigit():
            continue
        # subtract 1 because the list starts at 0
        period = int(row[2]) - 1
        # check if list of this period in this day exists
        # if not, create it
        while len(data[day]) < period + 1:
            data[day].append([])

        # print(len(data[day]), period)
        data[day][period].append(
            {
                "Semester": row[3],
                "Subject": row[6],
                "Teacher": row[7],
                "ClassCode": row[8],
                "Classroom": row[9],
            }
        )

    return data


if __name__ == "__main__":
    import parse_pdf

    # get all pdf in the pdf folder

    # filename = "IntelligentSystems"
    filename = "ComputerScience"
    # filename = "CommonSubject"

    table = parse_pdf.parse_pdf("pdf/" + filename + ".pdf")
    data = regroup_data(table)
    # save table to a json file with same file name
    import json

    with open("json/" + filename + ".json", "w", encoding="utf-8-sig") as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

    print(data[0][0][0])
