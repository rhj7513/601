// /searchPr/ /
var pName;
var pMaj;
var pOff
var pMail;
var pPossible;



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

            var cell_1 = cells[1].firstChild.data;		// 이름

            if(cell_1==searchPr) { //일치하는 교수 이름이 있으면 출력해주기
                
                check++; //일치하는 이름 있으면 1증가
                
                $("#pro").append("<p class='pro1'>"+searchPr+"</p>");
                $("#major").append("<p class='major1'>컴퓨터공학부</p>");
                $("#bt").append("<p class='bt1'><button type='button' onclick=\"location.href=\'possiblePr.html\'\">click</button></p>");
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

//possiblePr
// import {getName} from './searchPr.js';
// console.log(getName());
// console.log(pMaj);
// console.log(pOff);
// console.log(mail);
// console.log(possible);

// function selectInfo(getInput){
//     localStorage.setItem("name",getInput)
//     if(getInput=='박윤용'){
//         window
//     }
// }


function appendResults(response){
    // document.getElementById("pro").innerHTML = response[0].present;
    // if(response[0].present=="박윤용"){
    //     var cell_1 = cells[1].firstChild.data;		// 이름
    //     var cell_2 = cells[2].firstChild.data;      // 전공
    //     var cell_3 = cells[3].firstChild.data;      // 연구실
    // }

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            // ...
            rowNum += 1; 
            if(chileDAta.username == "박윤용"){
                console.log("12345")
                var row = "<tr><td>" + rowNum + "</td><td>" + childData.username + "</td><td>" + "컴퓨터공학부" + "</td><td>" + childData.user_pOffice + "</td><td>" + childData.email + "</td><td>" + childData.user_conTime + "</td></tr>"
            }
            
            $(row).appendTo('#dataTbl');
        })
        }, {
            onlyOnce: true
       });
       
}


function submitToServer(){
    axios.post('http://127.0.0.1:5500/bh/possiblePr.html',{
        pro: localStorage.getItem("pro"),
        major: localStorage.getItem("major"),
        room: localStorage.getItem("room"),
        email: localStorage.getItem("email")
    })
    .then(function(responsne){
        setTimeout(exitLoading,3000);
        appendResults(response.data);
    })
    .catch(function(error){
        console.log(error)
    })
}




