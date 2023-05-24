import pdfplumber


def parse_pdf(path):
    table_settings = {
        "vertical_strategy": "lines",
        "horizontal_strategy": "lines",
        "intersection_x_tolerance": 84,
    }

    pdf = pdfplumber.open(path)
    all_table = []
    for page in pdf.pages:
        table = page.extract_table(table_settings)
        #remove the first row
        table.pop(0)
        # remove \n in the string from table and remove empty rows
        for row in table:
            if row[6] == "" and row[7] == "" and row[9] == "":
                table.remove(row)
                continue
            row[6] = row[6].replace("\n", "")
            row[9] = row[9].replace("\n", "")
        # copy value from last row if the value is empty, then store the row into all_table
        for i in range(1, len(table)):
            for j in range(0, 6):
                if table[i][j] == "":
                    table[i][j] = table[i - 1][j]
            all_table.append(table[i])
    
    return all_table


if __name__ == "__main__":
    path = "CommonSubject.pdf"
    table = parse_pdf(path)
    print(len(table))
    # for row in table:
        # print(row)