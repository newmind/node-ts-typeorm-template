# 설명
WiredCompany 에서 사용할 벡엔드 서버 템플릿

schemas first 로 개발 진행함
graphql 스키마 정의 후 codegen


## 주요 패키지
* apollo-server-express 3
* express 4.17
* typescript
* typeORM
* graphql-codegen/cli
* graphql-tools@8
* mysql
## Development

환경 변수 파일 복사(clone 이후, 한번만 진행하면 됨)
```sh
$ cp .env.example .env
```

도커로 mysql db 실행
```sh
$ docker-compose up -d mysql
```

node 를 개발모드로 실행
```sh
$ npm i
$ npm run dev
```

브라우저에서 http://localhost:3000/api-docs 로 접근 가능

graphql 은 http://localhost:3000/graphql 로 테스트


## Test
* auth.rest 에서 user 생성 가능
* user.rest 에서 user 에 대한 CRUD

## 구성
1. src/graphql2 에 schemas 와 resolvers 정의
2. schemas

## graphql schemas 빌드
graphql 빌드 한후
```sh
npm run codegen
```

resolver 구성 필요

