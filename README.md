<p align="center" >
<a href="https://agent-blog.herokuapp.com/" align="center"> <img src="https://user-images.githubusercontent.com/13609011/84003962-c3ecde80-a9a5-11ea-8722-8a7e9d99681f.png" width="250" height="250" align="center"/></a>
</p>
<h1 align="center">
  Hyeonstagram Client </br>  <img alt="React" src="https://img.shields.io/badge/React-16.9.34-red.svg"> <img alt="Hooks" src="https://img.shields.io/badge/Hooks-0.5.0-blueviolet.svg"> <img alt="Apollo" src="https://img.shields.io/badge/React_Apollo-3.1.5-green.svg"> <img alt="platform" src="https://img.shields.io/badge/platform-Web-orange.svg">
</h1>

### 🔥 Motivation

> 인스타그램을 클론코딩하면서 React와 Hooks을 깊이 있게 이해하고 GraphQL과 Prisma을 공부하여 풀스택 개발을 하기 위해 프로젝트를 시작하였습니다.



## 서비스 소개

### [Instagram](https://www.instagram.com/) 풀스택 클론코딩 프로젝트
- 온라인 사진 공유 및 소셜 네트워킹 서비스
- 인스타그램의 프론트엔드, 백엔드 모두 클론 코딩하여 사진 업로드, 피드, Infinite Scroll, 포스팅/유저 검색, 댓글, 좋아요, 팔로잉, Skeleton loading 등 인스타그램의 주요 기능들을 구현하였습니다.


## UI

### 1) 메인 피드

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/46dbfd87-8ba3-43dc-aea7-e5c48534f5fc/Feed.mov.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/46dbfd87-8ba3-43dc-aea7-e5c48534f5fc/Feed.mov.gif)

- 좋아요 / 좋아요 취소
    - 좋아요 쿼리 요청을 보내기 전 Frontend에서 먼저 좋아요 처리 ⇒ 반응속도 Up
- 댓글 작성
- 이미지 슬라이딩
    - CSS translateX + transition 를 이용하여 슬라이딩 구현

### 2) 무한 스크롤 (Infinite scroll)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fbe7ecba-74fa-4dcd-a65b-791a140a63eb/Infinity_Scroll.mov.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fbe7ecba-74fa-4dcd-a65b-791a140a63eb/Infinity_Scroll.mov.gif)

- Infinity Scroll
    - Observer 를 이용해 맨 아래 게시물 감지
    - ⇒ 서버에 offset과 limit 를 parameter로 전달하여 추가 피드 데이터 가져옴
- 마지막 게시물 게시물 도달 시 안내 메세지
    - Toastify 사용

### 3) 회원가입 & 로그인
<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/13609011/84225388-f586b680-ab19-11ea-812c-4adea276119b.gif"/>
       <br><br>[회원가입]
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/13609011/84225392-f7e91080-ab19-11ea-884a-ec2b1ec6920a.gif"/>
       <br><br>[로그인] 
    </th>
  </tr>
</table>

- 이메일 인증 코드 방식 로그인
- 회원가입
    - Nodemailer 사용

### 4) Skeleton loading

<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/13609011/84225388-f586b680-ab19-11ea-812c-4adea276119b.gif"/>
       <br><br>[피드]
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/13609011/84225392-f7e91080-ab19-11ea-884a-ec2b1ec6920a.gif"/>
       <br><br>[유저 홈] 
    </th>
  </tr>
</table>

- 쿼리 데이터 로딩
- 이미지 리소스 로딩

### 5) 유저 홈

<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/13609011/84225388-f586b680-ab19-11ea-812c-4adea276119b.gif"/>
       <br><br>[유저 홈]
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/13609011/84225392-f7e91080-ab19-11ea-884a-ec2b1ec6920a.gif"/>
       <br><br>[반응형] 
    </th>
  </tr>
</table>


- 게시글 마우스 hover시 좋아요, 댓글 오버레이
- 부분 반응형 디자인 (게시글 사이 gap)
    - 미디어 쿼리 이용

### 6) Following & Unfollowing
<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/13609011/84225388-f586b680-ab19-11ea-812c-4adea276119b.gif"/>
       <br><br>[Following]
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/13609011/84225392-f7e91080-ab19-11ea-884a-ec2b1ec6920a.gif"/>
       <br><br>[Unfollowing] 
    </th>
  </tr>
</table>


- 피드에 Following 한 사람들의 게시물만 보여짐
- Unfollow 하면 피드에 해당 사람의 게시물이 사라짐

### 1) 메인 홈페이지

![velog_feed mov](https://user-images.githubusercontent.com/13609011/84225378-edc71200-ab19-11ea-9fd8-371c31a68d09.gif)

- Card 디자인 & Skeleton 로딩 구현
- 트렌딩 / 최신 게시물 노출
- hover 애니메이션
- 인기태그 표시



### 2) Responsive Layout

- 미디어 쿼리를 이용하여 반응형 웹사이트를 구현



### 3) 로그인

<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/13609011/84225386-f3bcf300-ab19-11ea-96e1-073c342a652d.gif"/>
       <br><br>[로그인]
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/13609011/84225370-ebfd4e80-ab19-11ea-84d7-0becdc0e8765.gif"/>
       <br><br>[회원가입] 
    </th>
  </tr>
</table>

- 모달을 통해 로그인과 회원가입을 구현했습니다.
    - Portal 사용

![velog_login mov](https://user-images.githubusercontent.com/13609011/84225384-f1f32f80-ab19-11ea-8172-9adfed4cab7d.gif)

- 이메일 인증으로 로그인 구현
    - nodemailer 사용



### 4) 해시태그 검색

![velog_hashtag mov](https://user-images.githubusercontent.com/13609011/84225382-f0296c00-ab19-11ea-9582-e3b538e6a086.gif)

- Skeleton loading 구현



### 5) 게시물 검색

![velog_search mov](https://user-images.githubusercontent.com/13609011/84225393-f91a3d80-ab19-11ea-9db4-99c66a9edec0.gif)

- Input 값의 변화를 실시간으로 감지하여 입력 즉시 검색 데이터를 받아옴



## 활용기술
- **[Hooks]()**: 함수형 컴포넌트의 React State와 생명주기 관리를 도와주는 모듈로 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 도와줍니다. (클래스형 컴포넌트 기능 거의 대부분을 대체가능)
- **[Styled-component]()**: CSS 파일 없이 자바스크립트 안에서 CSS 작업을 할 수있게 도와주는 모듈로 HTML element + CSS + Javascript 코드를 Component로 캡슐화시켜 코드를 관리하기 용이하도록 도와준다. (클래스 기반 Component 스타일링 대체)
- **[Apollo]()**: GraphQL의 클라이언트 라이브러리 중 하나로 GraphQL 상태 관리 플랫폼입니다.
- **[Axios]()**: 파일 업로드를 처리하기 위해 도입한 HTTP 클라이언트 라이브러리로써, 비동기 방식으로 Node.js 서버에 HTTP 데이터 요청을 실행합니다. (파일 관리에 있어서는 RESTfull 방식이 GraphQL 방식보다 효과적)
- **[Sass]()**: CSS의 유지보수의 불편함을 개선하여 효율적인 스타일링을 도와주는 라이브러리입니다.
- **[Intersection Observer]()**: 기존 Scroll Event로 Infinite Scroll을 구현하면 엘리먼트의 offset을 구하기 위해 불필요한 함수 호출과 매번 layout을 새로 그려 성능의 문제가 발생하게 되는 데, Intersection Observer는 타겟 엘리먼트와, 타겟 엘리먼트의 부모나 뷰포트가 교차하는 부분의 변화를 비동기적으로 관찰하여 이러한 문제점을 해결해준다.
- **[Toastify]()**: Notification, Alert를 쉽고 예쁘게 처리하도록 도와준다.

