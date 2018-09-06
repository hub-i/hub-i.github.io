# Markdown
여러 문서작성 프로그램의 저장방식의 차이로 공유가 안되는 점을
극복하기 위해 만들어진 문서저장 포맷 표준방식

- 현재 설명서로 많이 사용되고 있습니다.
- HTML


로컬 저장소를 생성
--

```
D:\java\work\public>git init
git init Initialized empty Git repository in D:/java/work/public/.git/
```

```
D:\java\work\public>git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        test.html

nothing added to commit but untracked files present (use "git add" to track)
```

3.깃의 영역 3가지
------------------
워킹 디렉토리 ==>인덱스 ==>로컬저장소
소스코드==>백업대상 ==> 백업정보를 가지고 있는 폴더


인덱스의 백업대상을 등록
-----------------------
```
D:\java\work\public>git add index.html
```

인덱스에 등록된 대상파일들을 로컬저장소에 커밋(백업)
--------------------------------------------------
```
D:\java\work\public>git commit -m "frist commit"

[master (root-commit) 290a787] frist commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 index.html

 D:\java\work\public>git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

nothing added to commit but untracked files present (use "git add" to track)
```
notthing to commit : 인덱스 == 로컬저장소
working tree clean : 워킹디렉토리 == 로컬저장소
커밋을 수행하여 백업한 상태와 현재 프로젝트 파일들의 상태가
일치합니다.

위의 commit 명령이 안될때 작업자정보 등록하기
------------------------
```
git config --global user.name " Ha Taehyun"
git config --global user.email richplan@naver.com
```

환경변수 정보 조회하기
----------------------
```
git config --list
```
커밋 정보 조회하기
--
```
D:\java\work\public>git log
commit 290a787c92e607dfa775ad6597d35c9177c85211 (HEAD -> master)
Author: Ha Taehyun <richplan@naver.com>
Date:   Mon Sep 3 14:16:31 2018 +0900

    frist commit
```
삭제된 파일정보 확인
---
D:\java\work\public>git ls-files -d
index.html

삭제된 파일복구
---
D:\java\work\public>git checkout index.html


마크다운 사용법 검색
--
깃헙 회원가입
---
로컬 컴퓨터 환경변수 설정대로 등록하세요
깃헙로그인
새원격저장소 만들기
new repository >> repository Name 작성 > Create Repository버튼클릭

원격저장소와 연결작업 수행하기
--
```
…or create a new repository on the command line
echo "# public" >> README.md
//git init
git add README.md
<!-- git commit -m "first commit" -->
git commit -m  "really first commit"
git remote add origin https://github.com/hkh3800/public.git
git push -u origin master
```

git add
---
