# Markdown

```
D:\java\work>mkdir tutorial

D:\java\work>cd tutorial

git init
git add myfile.txt
git status
git commit -m "first commit"
-----------------------------
git branch issue1
git branch
git checkout issue1

git checkout -b issue1


git add myfile.txt
git commit -m "add 설명을 추가"

<'master' 브랜치에 'issue1'를 넣기 위해서는 우선 'master' 브랜치에 'HEAD'가 위치하게 만들어야 합니다. issue1을 master에 병합>

git checkout master
git merge issue1

- 브랜치삭제
git branch -d issue1

- 두개의 브랜치 생성후 작업
git branch issue2
git branch issue3
git checkout issue2

git add myfile.txt
git commit -m "commit의 설명 추가"

- git3으로 전환
git checkout issue3

- myfile.txt 내용 수정 후 명령어 입력
git add myfile.txt
git commit -m "pull 설명을 추가"

-issue2' 브랜치에서 변경한 부분과 'issue3' 브랜치에서 변경한 부분을 모두 'master' 브랜치에 통합
git checkout master
git merge issue2
git merge issue3

git add myfile.txt
git commit -m "issue3 브랜치 병합"
git reset --hard HEAD~
- HEAD is now at 0c57b49 commit의 설명 추가

git checkout issue3
git add myfile.txt

```
