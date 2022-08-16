//교수 찾기
function search() {
    var pcheck = document.getElementById("pro").getElementsByTagName("p").length; //p 태그 길이 저장 

    if(pcheck>1){ //p태크 길이가 2개 이상이면 요소 삭제하기 
        document.getElementById("pro").removeChild(document.getElementById("pro").childNodes[pcheck+1]);
        document.getElementById("major").removeChild(document.getElementById("major").childNodes[pcheck+1]);
        document.getElementById("bt").removeChild(document.getElementById("bt").childNodes[pcheck+1]);
    }

    const searchPr = document.getElementById('formGroupExampleInput').value; //사용자가 입력한 찾는 교수님 이름 searchPr변수에 저장
    
    $(document).ready(function() {
        var rows = document.getElementById("dataTbl").getElementsByTagName("tr"); //tr요소 찾기

        var check=0; //일치하는 이름 있는지 체크
        
        // tr만큼 루프돌면서 컬럼값 접근
        for(var r=0; r<rows.length; r++ ){
            var cells = rows[r].getElementsByTagName("td");

            var cell_1 = cells[1].firstChild.data;      // 이름

            if(cell_1==searchPr) { //일치하는 교수 이름이 있으면 출력해주기
                
                check++; //일치하는 이름 있으면 1증가
                
                $("#pro").append("<p class='pro1'>"+searchPr+"</p>");
                $("#major").append("<p class='major1'>컴퓨터공학부</p>");
                $("#bt").append("<p class='bt1'><button id='bt' type='button' onclick=\"location.href=\'possiblePr.html\'\">click</button></p>");

                localStorage.setItem('pName',cell_1);
                localStorage.setItem('pMaj',cells[2].firstChild.data);
                localStorage.setItem('pOff',cells[3].firstChild.data);
                localStorage.setItem('pMail',cells[4].firstChild.data);
                localStorage.setItem('pPossible',cells[5].firstChild.data);
            }
        }
        if(check==0) //check가 0이면 존재하지 않은 이름 출력
        {
            $("#pro").append("<p class='pro1'>X</p>");
            $("#major").append("<p class='major1'>X</p>");
            $("#bt").append("<p class='bt1'>X</p>");
            alert("존재하지 않습니다.")
        }
        
    });
}



//요일 구하는 function
function returnWeek(uDay) {
    if(uDay=='일') return 0;
    else if(uDay=='월') return 1;
    else if(uDay=='화') return 2;
    else if(uDay=='수') return 3;
    else if(uDay=='목') return 4;
    else if(uDay=='금') return 5;
    else if(uDay=='토') return 6;
}

//상담 가능 시간 날짜로 바꾸는 function
function possConsult(uDay) {
    let cac = returnWeek(uDay); //요일을 숫자로 바꿔주는 함수를 호출해 cac 저장
    
    let today = new Date();   

    //상담 가능 기간 동안에서 요일 구하기
    let day = today.getDay();  // 요일(0~6) 일요일0, 월요일1, 토요일6
    let aa = 7-day+cac;

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월(0~11), 1월은 0
    //기간을 현재 날짜에서 일주일 뒤이기 때문에, 7을 더한다.
    let date = today.getDate()+aa;  // 날짜(0~31)

    if (month==1 || month==3 || month==5 || month==7 ||month==8 || month==10 || month==12){
        if (date>31){
            month+=1;
            date-=31;
        }
    }
    if (month==2){
        if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){//윤년이면 29일까지 있고
            if (date>29){
                month+=1;
                date-=29;
            }
        }else{
            if (date>28){
                month+=1;
                date-=28;
            }
        }
    }else{
        if (date>30){
            month+=1;
            date-=30;
        }
    }
    let dbDate = year + '-' + month + '-' + date;

    return dbDate;
}