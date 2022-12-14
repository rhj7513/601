<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Student_main</title>
</head>
<body>
	<%
		String user_id = (String)session.getAttribute("Id");
		System.out.println(user_id);
		if(user_id == null){
		%>	
		<script type="text/javascript">
			location.href = 'login.jsp'
		</script>
		<%
		}
	%>
    <div>
        <input type="text" value="cInput"><br><br> 
    </div>
    <!-- padding은 여백을 주는 역할을 한다 0, 0, 0, 0은 차례대로 위, 오른쪽, 아래, 왼쪽 부분을 담당한다 -->
    <div style ="padding:5px 0px 0px 30px">
        <!-- 부트스트랩에서 가져온 코드이다 -->
        <div class="w-48 p-1">
            <!-- padding은 여백을 주는 역할을 한다. 숫자 하나만 있을 경우 위, 오른쪽, 아래, 왼쪽 전부 다 같은 숫자로 여백을 준다는 뜻이다 -->
            <div style="padding: 50px;">
                <!-- 부트스트랩에서 가져온  코드이다. ??? -->
                <div class="alert alert-dark" role="alert">
                    <!-- 부트스트랩에서 가져온 코드이다. fs는 폰트 크기를 지정해준다. -->
                    <div class="fs-5">
                        <!-- 부트스트랩에서 가져온 코드이다.aling-middle은 가운데로 정렬해주는 기능이다. -->
                        <div class="align-middle">
                            <!-- 부트스트랩에서 가져온 코드이다. text-center는 글자를 중앙으로 정렬해주는 기눙이다. -->
                            <p class="text-center">선문대학교 홈페이지에 오신걸 환영합니다.</p>
                        </div>
                    </div>

            </div>
            <div class="border border-dark">
                <div class="ratio ratio-1x1">
                    <div class="fs-5">
                        <div class="align-middle">
                            <div style="padding: 30px;">
                                <p class="text-center">찾으시는 서비스는 무엇입니까?</p>
                                <div class="position-absolute top-50 start-50 translate-middle">
                                    <button onclick="location.href='SearchConsult.html'" type="button" class="btn btn-outline-secondary" style="padding: 50px;">상담예약</button>
                                    <button onclick="location.href='Empty Lecture.html'" type="button" class="btn btn-outline-secondary" style="padding: 50px;">강의실</button>                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>