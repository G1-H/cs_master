## cs_master

- CS 개념도 익히고, 퀴즈로 내 수준도 테스트할 수 있는 사이트
- 웹프로그래밍을 처음부터 끝까지 다 만들어 봄으로써 개발 주니어로 역량을 높임과 동시에 CS 공부까지 일거양득.

---

#### 구현 기능

1. 회원 기능

   - signIn(로그인)
   - signUp(회원가입)
   - getUser(마이페이지 정보 가져오기)
   - solvedQuizList(풀었던 문제 리스트)
   - learnedConceptList(학습한 개념 리스트)
   - bookMarkConceptList(북마크 개념 리스트)
   - updateInfo(회원 정보 수정)


2. CS 개념 학습 게시판

   - createConcept(개념 등록)
   - updateConcept(개념 수정)
   - deleteConcept(개념 삭제 / 삭제 요청)
   - rollbackToPrevVersion(개념 이전 버전으로 롤백)
   - searchConceptList(개념 검색 리스트)
   - partialConceptList(분류별 개념 리스트)
   - conceptDetail(개념 상세)
   - fileUpload(파일 업로드 /이미지)
   - getFile(파일 불러오기)
   - thumbsUp(좋아요)
   - postComment(댓글 쓰기)
   - updateComment(댓글 수정)
   - deleteComment(댓글 삭제)
   - thumbsUpComment(댓글 좋아요)
   - thumbsDownComment(댓글 싫어요// 옵션)
   - commentList(댓글 리스트)
   - bookMark(북마크)
   - reportAbuse(악질 신고)


3. 퀴즈 게시판

   - createQuiz(퀴즈 등록)
   - updateQuiz(퀴즈 수정)
   - todayQuizList(오늘의 퀴즈 리스트 / 10개)
   - partialQuizList(분류별 퀴즈)
   - randomQuizList(무작위 퀴즈)
   - submitAnswer(정답 제출)
   - quizDetail(퀴즈 상세)
   - sendQuizKakao(오늘의 퀴즈 카톡 전송)

### UI 구성 (피그마)

<img width="16384" alt="CS MASTER" src="https://github.com/user-attachments/assets/0adf5312-c13a-4499-9570-410aebfa1265" />

### ERD

> 테이블 목록
> - 멤버 : members
> - 개념 : concepts
> - 퀴즈 : quizzes
> - 댓글 : comments
> - 개념 북마크 : concept_bookmarks
> - 개념 좋아요 : concept_likes
> - 퀴즈 정답 : quiz_answers
> - 학습한 퀴즈 : quiz_learning_logs
> - 오늘의 퀴즈 : daily_quizzes (레디스로 캐시 처리할 지 미정)

<img width="1136" alt="Image" src="https://github.com/user-attachments/assets/95b36f18-c26c-41bb-a8b1-8b72f288b4cc" />  
    


