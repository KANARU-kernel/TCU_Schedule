def regroup_data(extracted_data):
    #create a list of 6 lists
    data = [[],[],[],[],[],[]]
    
    #loop through the extracted data
    for row in extracted_data:
        #use row[2] to see which period it is
        #subtract 1 because the list starts at 0
        period = int(row[2]) - 1
        
        #check row[1] to see which day it is
        match(row[1]):
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
               
        #check if list of this period in this day exists
        if len(data[day]) < period + 1:
            #if not, create a list
            data[day].append([])  
            
        data[day][period].append({"Subject": row[6], "Teacher": row[7], "ClassCode": row[8], "Classroom": row[9]})
    
    return data

if __name__ == '__main__':
    import parse_pdf
    table = parse_pdf.parse_pdf("CommonSubject.pdf")
    data = regroup_data(table)
    print(data[0][0][0]['Subject'])
    