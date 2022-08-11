<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
<%
	String id = request.getParameter("email");
	String pw = request.getParameter("password");
	
	String checkId = "123";
	
	if(id.equals(checkId)){
		session.setAttribute("Id", id);	// login
		%>	
		<script type="text/javascript">
			location.href = 'StudentMain.jsp'
		</script>
		<%
	}
%>
</body>
</html>