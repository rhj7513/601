import smtplib
from email.mime.text import MIMEText

s=smtplib.SMTP('smtp.gmail.com',587)

s.starttls()

s.login('본인 이메일','앱 비밀번호')

msg=MIMEText('내용:본문 내용 테스트입니다.')

msg['subject']='제목 : 메일 보내기 테스트입니다.'

s.sendmail("보내는 사람","받는 사람",msg.as_string())
s.quit()

