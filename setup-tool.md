#프로그래밍 준비
## 개발도구 설치
- openjdk 10.0.1
- eclipsephoton
- visual studio code
- git client
- scoop (package)

###mysql 설정
---
서버에 접속.
> mysql -uroot -p
enter pw : 암호 없기 때문에 그냥 엔터 치기.
---
root 사용자의 암호 설정.
mysql>authentication_string
  update user set authentication_string=password('1111')

    암호 변경 후 권한 갱신 :
    mysql>flush priviliges 

---
    애플리케이션에서 db에 접속 시 사용 할 사용자를 추가한다.
    mysql>  create user 'study'@'localhost'identified by '1111';

    study 사용자가 사용할 db 생성.
    mysql> create database studydb character set utf8 collate utf8_general_ci;
    
    studydb의 사용 권한을 study(사용자)에게 부여한다.
    mysql>grant all privileges on studydb.* to 'study'@'localhost';

    study사용자로 접속.
    mysql> quit / exit
    mysql -ustudy -p
    Enter password:1111

    study 사용자가 사용할 수 있는 데이터베이스 목록 보기 
    show databases;
    사용할 DB 선택.
    mysql> use studydb;
    stud

    bitcamp-sql/pms-dd;/sql 실행/
    mysql> SQL을 복사하여 붙여넣기.

---
#Tomcat 설치
-톰캣 다운로드
    =tomcat.apache.org에서 다운로드
-톰캣 설치
    = C:\apps에 압축 풀기.
---
#####eclipse 설정
---
workspace 설정 
-문자 집합 설정하기. (utf-8로 설정.)
    preference/general/workspace/textfile encoding
-에디터 기본환경 설정.
    general/editors/text editors
     = 탭크기 2-4지정
     = 탭을 space로 표시.
     = 1줄 크기는 80자 정도.(allow editors to override~~~ 체크.)
     = 탭이나 공백에 대해 흐릿하게 표시.
-자바 설정.
    = java/installed JREs : jdk 위치 지정.
    = code style/formatter : 자바 에디터 탭 정보 설정.
    = compiler : 기본 컴파일 버전 설정.
-web 환경 설정.
    = web/ css files, html, jsp : 문자 집합 설정.(utf-8)
-was 서버 환경설정.
    =servers/runtime enviroment : 톰캣 서버 위치 설정.
-에플리케이션 배포하고 테스트할 tomcat 실행환경 설정.
    =servers view에서 
        서버 추가.
---
#####웹프로젝트 폴더 준비
-예제 프로젝트 복사 
    =java106-java-project 를
    bitcamp-cloud-computing 폴더로 복사.
-프로젝트 폴더를 이클립스 프로젝트로 만든다.
    ='gradle eclipse'를 실행하여 이클립스 설정 파일을 생성한다.
    =.project

---

