# !pip install selenium #selenium 패키지 설치
# !pip install pandas
# !pip install selenium
# !pip install webdriver_manager


# !apt-get update
# !apt install chromium-chromedriver


import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# !pip install firebase_admin 
# !pip3 install firebase_admin


from selenium import webdriver
from urllib.request import urlopen
from bs4 import BeautifulSoup as bs
from urllib.parse import quote_plus
from selenium.webdriver.common.keys import Keys
import time

import sys    # 시스템
import os     # 시스템
import requests


import pandas as pd    # 판다스 : 데이터분석 라이브러리
import numpy as np     # 넘파이 : 숫자, 행렬 데이터 라이브러리

from bs4 import BeautifulSoup     # html 데이터 전처리
from selenium import webdriver    # 웹 브라우저 자동화
from selenium.webdriver.common.by import By #By모듈 사용
# from selenium.webdriver.common.service import Service
# from webdriver_manager.chrome import ChromeDriverManager


import time                       # 시간 지연
from tqdm import tqdm_notebook    # 진행상황 표시

#한번만 실행
cred = credentials.Certificate("team-a5651-firebase-adminsdk-5hdcl-6902c61bf2.json")
firebase_admin.initialize_app(cred,{
    'databaseURL' : 'https://team-a5651-default-rtdb.firebaseio.com/'
})

# 사이트 주소
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
driver = webdriver.Chrome('chromedriver', chrome_options=chrome_options)

# 사이트 주소
driver.get("https://sws.sunmoon.ac.kr/Login.aspx")
time.sleep(1)

# ID와 PW를 입력
element = driver.find_element(By.ID,"txtID") #f12눌러서 확인
#ID 저장하는 변수 생성
element.send_keys(stuid)
element = driver.find_element(By.ID,"txtPasswd") #f12눌러서 확인
#PW 저장하는 변수 생성
element.send_keys(stupw)
driver.find_element(By.ID,"btnLogin").click()
#element.submit()
time.sleep(1)

# 수강신청 메뉴 클릭
driver.find_element(By.CLASS_NAME,"menuOn").click()
time.sleep(1)

# 수강신청 확인하기 위해서 '정규학기 수강신청' 클릭
driver.find_element(By.LINK_TEXT,"정규학기 수강신청").click()
time.sleep(1)

# '수강신청' 클릭
driver.find_element(By.LINK_TEXT,"수강신청").click()
time.sleep(1)

# '과목조회' 클릭
driver.find_element(By.LINK_TEXT,"과목조회").click()
time.sleep(1)

# '수강신청' 클릭
driver.find_element(By.LINK_TEXT,"수강신청").click()
time.sleep(1)

# '수강신청' 클릭
driver.find_element(By.LINK_TEXT,"수강신청").click()
time.sleep(1)

driver.find_element(By.XPATH,"//select[@name='ddl_hakgwa']/option[text()='컴퓨터공학부']").click()
time.sleep(1)

#'조회' 클릭
driver.find_element(By.ID,"btn_s_search").click()
time.sleep(1)

ref = db.reference('lecture')
ref.update({'lecture_period':'fsfdg'})


for i in range(1,55):
    body=('//*[@id="classList"]/div[2]/table/tbody['+str(i)+']/tr/td[2]')
    tbody=driver.find_element(By.XPATH,'//*[@id="classList"]/div[2]/table/tbody['+str(i)+']/tr/td[2]')
    ref = db.reference('lecture')
    ref.update({i:{tbody.text.split('\n')[2].split('/')[2]:tbody.text.split('\n')[2].split('/')[3]}})


#//*[@id="classList"]/div[2]/table/tbody[1]/tr/td[2]
#classList > div.tbl_line.mnt_only.mgT10 > table > tbody:nth-child(2) > tr > td.alignL


# url = driver.current_url
# r=requests.get(url).text.encode('utf-8')
# r= bs4.BeautifulSoup(url.read(),'html.parser')
# #classList > div.tbl_line.mnt_only.mgT10 > table > tbody:nth-child(2) > tr > td.alignL
# target = r.find_all('tbody')
# print(target)


#soup = bs4.BeautifulSoup(r.text, 'html.parser')
#informations=soup.select('classList > div.tbl_line.mnt_only.mgT10 > table > tbody')
#for infor in informations:
#    i=infor.select_one('tr > td.alignL > span.bold').get_text().strip()
#    print(i)

#classList > div.tbl_line.mnt_only.mgT10 > table > tbody:nth-child(2) > tr > td.alignL > span.bold
#classList > div.tbl_line.mnt_only.mgT10 > table > tbody:nth-child(55) > tr > td.alignL > span.bold


