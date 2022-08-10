import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# !pip install firebase_admin 
# !pip3 install firebase_admin

#한번만 실행
cred = credentials.Certificate("team-a5651-firebase-adminsdk-5hdcl-6902c61bf2.json")
firebase_admin.initialize_app(cred,{
    'databaseURL' : 'https://team-a5651-default-rtdb.firebaseio.com/'
})

#교수님은 이미 저장해둠
ref = db.reference('user')
ref.update({'choijaesung':{'user_pw':402,'user_name':'최재성','user_idNumber':'null','user_mail':'jschoi@sunmoon.ac.kr','user_tell':'010-7195-2358',
                          'user_conTime':'수 6,7,8','user_pOffice':'인문관 402호','user_consultState':'null'}})
ref.update({'gangpilsung':{'user_pw':422,'user_name':'강필성','user_idNumber':'null','user_mail':'pilsungk@sunmoon.ac.kr','user_tell':'010-6231-8326',
                           'user_conTime':'월 4,5 수 6','user_pOffice':'인문관 422호','user_consultState':'null'}})
ref.update({'kinchangjae':{'user_pw':434,'user_name':'김창재','user_idNumber':'null','user_mail':'winchang@sunmoon.ac.kr','user_tell':'010-2431-1234',
                           'user_conTime':'월 6,9 수 7,8','user_pOffice':'인문관 434호','user_consultState':'null'}})
ref.update({'parkyoonyong':{'user_pw':421,'user_name':'박윤용','user_idNumber':'null','user_mail':'yypark@sunmoon.ac.kr','user_tell':'010-8803-2365',
                           'user_conTime':'화 1,2 금 1','user_pOffice':'인문관 421호','user_consultState':'null'}})
ref.update({'leeseongcheol':{'user_pw':420,'user_name':'이성철','user_idNumber':'null','user_mail':'sungchul@sunmoon.ac.kr','user_tell':'010-9444-6531',
                           'user_conTime':'월 7,8 수 7,8','user_pOffice':'인문관 420호','user_consultState':'null'}})
ref.update({'kimjeongdong':{'user_pw':417,'user_name':'김정동','user_idNumber':'null','user_mail':'	kjdvhu@gmail.com','user_tell':'010-8806-2156',
                           'user_conTime':'	화 1,2 목 3','user_pOffice':'인문관 417호','user_consultState':'null'}})
ref.update({'hwangyoungseop':{'user_pw':419,'user_name':'황영섭','user_idNumber':'null','user_mail':'young@sunmoon.ac.kr','user_tell':'010-8800-7648',
                           'user_conTime':'월 4,5','user_pOffice':'인문관 419호','user_consultState':'null'}})
ref.update({'leeseongcheol':{'user_pw':415,'user_name':'이현','user_idNumber':'null','user_mail':'mahyun91@sunmoon.ac.kr','user_tell':'010-5112-0745',
                           'user_conTime':'수 8,9','user_pOffice':'인문관 415호','user_consultState':'null'}})
ref.update({'kimjonghyuk':{'user_pw':415,'user_name':'김종혁','user_idNumber':'null','user_mail':'halfmoonlike@gmail.com','user_tell':'010-9260-6139',
                           'user_conTime':'월 4,5 화 5,6,7','user_pOffice':'인문관 415호','user_consultState':'null'}})
ref.update({'leekyungo':{'user_pw':423,'user_name':'이경오','user_idNumber':'null','user_mail':'leeko@sunmoon.ac.kr','user_tell':'010-3327-7524',
                           'user_conTime':'	월 4,5','user_pOffice':'인문관 423호','user_consultState':'null'}})

 #임의로 데이터 넣어둠
ref=db.reference('consult')
ref.update({'diddus45':{'consult_day':'2022-08-05','consult_conTime':'2교시 A'}})
ref.update({'bohyeon':{'consult_day':'2022-08-05','consult_conTime':'3교시 A'}})
ref.update({'rhj7513':{'consult_day':'2022-08-05','consult_conTime':'2교시 B'}})

for keys,values in ref.get().items():
    print(values.get('consult_day'),end=' / ')
    time = values.get('consult_conTime')
    print(time.split(' ')[0][0],time.split(' ')[1])


print('-----상담 예약현황----')
id=input('아이디:')
for key in ref.get().keys():
    print(key)