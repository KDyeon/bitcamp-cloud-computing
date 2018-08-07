<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>File upload</title>
</head>
<body>
이름 : ${name}<br>
나이 : ${age}<br>
사진 : ${newfilename}<br>
<img src = '../files/${newfilename}'><br>
<img id = 'img1'><br>
</body>
</html>