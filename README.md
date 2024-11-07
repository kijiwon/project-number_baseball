<div align="center">
  
# ⚾️ 숫자 야구 게임 🎮
<img width="800" alt="게임 메인 페이지" src="https://github.com/user-attachments/assets/80b28791-5766-4bce-b807-3ef31c328858">
<br/>

`배포 링크` : 🔗[숫자야구](https://numberbaseball.web.app/)    
`프로젝트 기간` : 2023.11.22 - 2023.11.25 

</div>
<br/><br/>

## 🌿 프로젝트 소개
랜덤한 4자리 숫자를 9번의 시도 안에 맞히면 홈런! <br/>
Math 내장 객체를 사용해 1-9의 중복되지 않는 네자리 숫자를 만들어 사용자가 숫자를 맞추는 게임 방식이다.
숫자는 게임이 끝나거나 새로고침을 하면 바뀐다.<br/>
총 9번의 기회가 주어지며 각 회당 입력된 숫자와 정답 숫자를 비교해 숫자와 자리가 모두 일치하면 'strike'를, 숫자만 맞다면 'ball'로 표시한다. <br/>
게임에 대한 설명을 모달창으로 구현해 게임중에도 도움말 버튼을 눌러 게임 규칙을 볼 수 있다. <br/>
정답을 맞힌 회마다 점수를 부여해 정답을 맞히면 'homerun'문구와 점수가 표시되고 9회까지 정답을 맞히지 못하면 'gameover'문구와 정답 숫자를 표시한다.<br/>
미디어쿼리로 반응형 웹을 구현해 모바일과 pc 환경에서의 게임 화면을 다르게 설정했다.

(new!)<br />
기존 코드를 TypeScript로 바꾸는 리팩토링을 진행하였다. <br />
배포를 진행한 firebase의 authentication과 realtime database를 사용해 회원가입 및 로그인, 게임 스코어 저장 기능을 구현했다. <br />
유저는 이메일을 사용한 회원가입을 진행하고 로그인 된 상태에서 게임이 끝나면 로그인된 유저의 데이터 베이스에 게임 스코어가 저장된다. <br />
저장된 게임 스코어를 모두 가져와 스코어가 높은 순서대로 정렬해 게임 랭킹을 볼 수 있는 페이지를 추가했다. <br />
<br/><br/>

## 🛠️ Stacks
<div>
    <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
    <img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
    <img src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> 
    <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white"/>
    <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>
    <img src="https://img.shields.io/badge/eslint-4B32C3?style=flat-square&logo=eslint&logoColor=white"/>
    <img src="https://img.shields.io/badge/prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white"/>
    <img src="https://img.shields.io/badge/git pages-F05032?style=flat-square&logo=git&logoColor=white"/>
    <img src="https://img.shields.io/badge/firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"/>
</div>

<br/><br/>
## 🖥️ Service info
|  시작 페이지  |  게임 페이지  |  게임 설명  |  게임 종료  | 정답 |
| :----------: | :----------: | :----------: | :----------: | :----------: |
| <img  width="400" src="https://github.com/kijiwon/project-number_baseball/assets/119961147/5343d052-9542-4d61-b6a7-e298245a7bc5"/> | <img width="400" alt="게임 페이지(데스크탑)" src="https://github.com/user-attachments/assets/81f9f74c-e8f9-44b8-a74b-6bdcd1a6e824"> <img width="300" alt="게임 페이지(모바일)" src="https://github.com/user-attachments/assets/f342c9ee-ad8e-462e-823c-2fefef680b93">| <img width="400" src="https://github.com/kijiwon/project-number_baseball/assets/119961147/34a15a58-5688-4d05-b5ec-fe5dc2d4b694"> | <img width="400" src="https://github.com/kijiwon/project-number_baseball/assets/119961147/bea35b29-cb68-4c6b-bace-b6cdae94c432"> | <img width="400" src="https://github.com/kijiwon/project-number_baseball/assets/119961147/fc790a45-a39f-436f-8e70-a82393c8c513"> |

|  회원가입 페이지  |  로그인 페이지  |  랭킹 페이지 |
| :----------: | :----------: | :----------: |
|  <img width="400" alt="회원가입 페이지" src="https://github.com/user-attachments/assets/b70ce9c4-d298-44dd-b56a-f8adab254614">| <img width="400" alt="로그인 페이지" src="https://github.com/user-attachments/assets/3e815932-8711-4c52-9fa2-1dcbe0e01ece">| <img width="400" alt="랭킹 페이지" src="https://github.com/user-attachments/assets/fa91238a-9cee-4b45-b1ca-6b18bec3dc1b">|
