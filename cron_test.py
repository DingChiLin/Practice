import datetime
print(1)
with open('/Users/arthurlin/Documents/GitHub/Stylish-Data-Engineering/Recommendation/dateInfo.txt','a') as outFile:
    outFile.write('\n' + str(datetime.datetime.now()))