from http import client
import pymongo
import webbrowser
client = pymongo.MongoClient("mongodb://localhost:3000")
mydb = client["myDB"]
mycol = mydb["person"]

stud = []
tbl = "<tr> <td>Surname</td> <td>initials</td> <td>title</td> <td>institution</td> <td>rating_start</td> <td>rating_end</td> <td>primary_field</td> <td>secondary_fields</td> <td>specialisation</td> <td>rating</td> </tr>"
stud.append(tbl)

for y in mycol.find():
    a = "<tr><td>%s</td>"%y['Surname']
    stud.append(a)
    b = "<td>%s</td>"%y['initials']
    stud.append(b)
    c = "<td>%s</td></tr>"%y['title']
    stud.append(c)
    d = "<tr><td>%s</td>"%y['institution']
    stud.append(d)
    e = "<td>%s</td>"%y['rating_start']
    stud.append(e)
    f = "<td>%s</td></tr>"%y['rating_end']
    stud.append(f)
    g = "<tr><td>%s</td>"%y['primary_field']
    stud.append(g)
    h = "<td>%s</td>"%y['secondary_field']
    stud.append(h)
    i = "<td>%s</td></tr>"%y['specialisation']
    stud.append(i)
    j = "<td>%s</td></tr>"%y['rating']
    stud.append(j)

contents = '''<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta content="text/html; charset=ISO-8859-1"
http-equiv="content-type">
<title>Python Webbrowser</title>
</head>
<body>
<table>
%s
</table>
</body>
</html>
'''%(stud)

filename = 'info.html'

def main(contents, filename):
    output = open(filename,"w")
    output.write(contents)
    output.close()

main(contents, filename)    
webbrowser.open(filename)