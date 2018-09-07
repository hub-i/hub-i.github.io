
# 사용자 등록 (자격증명 설정)

글로벌 ---------------------------------
git config --global user.name "이름"
git config --global user.email "이메일"


프로젝트 하나에서만 변경하고 싶으시면

git config --local user.name "이름"
git config --local user.email "이메일"

```
참조 :https://git-scm.com/book/ko/v1/Git%EB%A7%9E%EC%B6%A4-Git-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0
```
```
Github Push에서 권한 거부 오류
http://recoveryman.tistory.com/392 참조

 Answers

git config --global user.email을 통해 내 사용자 전자 메일을 변경하고 여기에서 내 솔루션을 찾으면 같은 오류가 발생 합니다. 제어판 : 사용자 계정 -> 자격 증명 관리 -> Windows 자격 증명

Generic Credentials 에는 Github과 관련된 몇 가지 자격 증명 이 있습니다. 해당 자격을 클릭하고 " Remove "를 클릭 하십시오 .

뭔가를 밀 때 다시 로그인해야합니다. 이게 너에게 도움이되기를 바란다.
```
깃허브 사용자 추가
https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/
