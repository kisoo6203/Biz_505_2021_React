# React Firebase 연동 BBS

## Navigation 구현
- yarn add react-router-dom

## 컴포넌트 생성
- src/comps 폴더 생성
- Header.jsx, MainNav.jsx, BBsMain.jsx 컴포넌트 생성

## firebase 연동
- yarn add firebase 설치
-	2021-09월 현재 설치되는 firebase SDK가 9.0.x 인데 firebase연동하는 과정에서 문제를 일으킨다
-	그래서 구버전 설치해야함
- 9.x 버젼에 문제가 있어서 8.10.0 버전을 설치 !!
- yarn add firebase@8.10.0  /  npm install firebase@8.10.0
- 날짜와 시간 설정을 위한 moment 설치 : yarn add moment