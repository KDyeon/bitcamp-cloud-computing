#powershell costomize 경로 마지막 폴더만 표시 되게끔.
function prompt {
    $host.ui.rawui.WindowTitle = "PS $pwd"
    $p = 'PS: ' + $(($pwd -split '\\')[-1] -join '\') + '> '
    return $p
  }


#bitcamp-web-01 : 웹 프로젝트 폴더 준비.

## 프로젝트 폴더 생성

///
ㅡmkdir bitcamp-web-01
ㅡcd bitcamp-web-01
///

## MAVEN 기본 디렉토리 구조 생성.

1.자바 어플리케이션 프로젝트를 위한 기본 폴더 및 예제 파일 생성.
///
ㅡgradle init --type java-application
 >> 자동으로 파일과 폴더 생성.
///

2.웹관련 폴더 추가.
'''
src/main 폴더에 resources 폴더를 추가.
src/main 폴더에 webapp 폴더를 추가.
'''

## 이클립스 IDE 관련 설정 파일 추가.

build.gradle 설정파일에 eclipse 설정파일 플러그인 추가.
--
plugins{
    id'java'
    id'eclipse-wtp'
    id'war'
}
--

이클립스 설정 파일 만들기.
--
gradle eclipse
///

## 이클립스에서 프로젝트 import
##웹 어플리케이션 테스트 할 톰캣 실행 환경 추가.
    - 서버 추가.

##웹 어플리케이션 배포 및 테스트.