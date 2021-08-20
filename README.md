## development

환경 변수 파일 복사
```sh
$ cp .env.example .env
```

도커로 db 먼저 실행
```sh
$ docker-compose up mysql
```

node 를 개발모드로 실행
```sh
$ npm i
$ npm run dev
```

브라우저에서 http://localhost:3000/api-docs 로 접근 가능

graphql 은 http://localhost:3000/graphql 로 테스트

## test
auth.rest 에서 user 생성 가능

user.rest 에서 user 에 대한 CRUD

## 구성
1. src/graphql2 에 schemas 와 resolvers 정의
2. schemas
