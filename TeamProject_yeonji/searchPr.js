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

// 다음 페이지로 넘어가면 addRow() 함수 호출됨
// 선택한 교수님의 정보와 상담 가능 시간을 자세히 보여줌.
// window.onload=function addRow(){
//     //table element 찾기
//     const table = document.getElementById('proTable');
//     //새 행(row) 추가
//     const newRow = table.insertRow();
//     //새 행(row)에 cell 추가
//     newRow.insertCell(0).innerText=localStorage.getItem('pName');
//     newRow.insertCell(1).innerText=localStorage.getItem('pMaj');
//     newRow.insertCell(2).innerText=localStorage.getItem('pOff');
//     newRow.insertCell(3).innerText=localStorage.getItem('pMail');
//     sessionStorage.setItem('proemail',localStorage.getItem('pMail'));
//     sessionStorage.setItem('proname',localStorage.getItem('pName'));

//     //table element 찾기
//     const table2 = document.getElementById('ConTimeTable');

//     //새 행(row)에 cell 추가    
//     const spl = localStorage.getItem('pPossible').split(' ');
//     //const spl = localStorage.getItem('pPossible') || '';
//     console.log(spl);   
//     for(i=0; i<spl.length; i++)
//     {
//         if(i%2==1)
//         {
//             const spl2 = spl[i].split(',');
            
//             for(j=0; j<spl2.length; j++)
//             {
//                 for(k=0; k<2; k++)
//                 {
//                     //새 행(row) 추가
//                     const newRow2 = table2.insertRow();
//                     newRow2.insertCell(0).innerText=possConsult(spl[i-1]);
//                     newRow2.insertCell(1).innerText=spl2[j]+(String.fromCharCode(65+k));
//                     newRow2.insertCell(2).innerHTML="<input class='btCheck' type='button' value='check'></button>";
//                 }
//             }
//         } 
//     }
// }

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
    let date = today.getDate()+7+aa;  // 날짜(0~31)
    
    let dbDate = year + '-' + month + '-' + date;

    return dbDate;
}