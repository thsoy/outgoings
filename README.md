# outgoings

가계부(지출/수입) 관리를 위한 REST API 서버입니다.

## 기술 스택

| 구분 | 기술 |
|------|------|
| 언어 | TypeScript |
| 프레임워크 | Fastify v4 |
| ORM | TypeORM v0.3 |
| 데이터베이스 | PostgreSQL |
| 인증 | JWT (`@fastify/jwt`) |
| 패키지 매니저 | Yarn |
| 런타임 | Node.js |

## 프로젝트 구조

```
src/
├── server/
│   └── index.ts              # 서버 진입점 (포트 4000)
├── db/
│   └── data-source.ts        # TypeORM DataSource 설정
├── routes/
│   ├── index.ts              # 라우트 통합
│   ├── outgoings/            # 지출/수입 CRUD 라우트
│   │   ├── create-outgoings.ts   # POST /
│   │   ├── read-outgoings.ts     # GET /
│   │   ├── update-outgoings.ts   # PUT /
│   │   └── remove-outgoings.ts   # DELETE /
│   └── user/                 # 사용자 관련 라우트
│       ├── auth.ts               # POST /generateAccessToken
│       └── login.ts              # POST /signUp
├── controller/
│   ├── index.ts              # 컨트롤러 일괄 export
│   ├── outgoings.ts          # 지출/수입 비즈니스 로직
│   ├── user.ts               # 사용자 비즈니스 로직
│   └── auth.ts               # 인증 비즈니스 로직
├── middleware/
│   └── auth.ts               # JWT 인증 미들웨어
├── modules/outgoings/
│   └── entity.ts             # Outgoings TypeORM 엔티티
├── repository/
│   └── outgoings.ts          # 데이터 접근 레이어
├── types/
│   └── outgoings.ts          # IOutgoings 인터페이스
├── enum/
│   └── outgoings.ts          # OUTGOINGS_TYPE 열거형 (income / expenditure)
└── index.d.ts                # Fastify 타입 확장 선언
```

## 데이터 모델

### Outgoings 엔티티

| 필드 | 타입 | 설명 |
|------|------|------|
| `id` | number | PK, 자동 생성 |
| `amount` | number | 금액 (필수) |
| `category` | string | 카테고리 (선택) |
| `title` | string | 제목 (선택) |
| `contents` | string | 내용 (선택) |
| `icon` | string | 아이콘 (선택) |
| `date` | Date | 거래 날짜 (자동 생성) |
| `created_at` | Date | 생성 일시 (자동 생성) |
| `updated_at` | Date | 수정 일시 (자동 갱신) |

### OUTGOINGS_TYPE 열거형

```typescript
enum OUTGOINGS_TYPE {
  INCOME = 'income',         // 수입
  EXPENDITURE = 'expenditure', // 지출
}
```

## API 엔드포인트

### 사용자 인증

| 메서드 | 경로 | 설명 |
|--------|------|------|
| `POST` | `/signUp` | 회원가입 |
| `POST` | `/generateAccessToken` | JWT 액세스 토큰 발급 |

#### POST /generateAccessToken - 요청 바디

```json
{
  "loginId": "string",
  "loginEmail": "string",
  "password": "string"
}
```

#### POST /generateAccessToken - 응답

```json
{
  "token": "JWT_TOKEN",
  "email": "string"
}
```

### 지출/수입 관리

| 메서드 | 경로 | 설명 |
|--------|------|------|
| `GET` | `/` | 지출/수입 목록 조회 |
| `POST` | `/` | 지출/수입 등록 |
| `PUT` | `/` | 지출/수입 수정 |
| `DELETE` | `/` | 지출/수입 삭제 |

#### POST / - 요청 바디

```json
{
  "date": "2024-01-01T00:00:00.000Z",
  "amount": 10000,
  "category": "income | expenditure",
  "title": "string (선택)",
  "contents": "string (선택)",
  "icon": "string (선택)"
}
```

## 시작하기

### 사전 준비

- Node.js
- Yarn
- Docker (PostgreSQL 실행용)

### 설치

```bash
yarn install
```

### 데이터베이스 실행

Docker Compose로 PostgreSQL을 실행합니다.

```bash
docker-compose up -d
```

데이터베이스 연결 정보:

| 항목 | 값 |
|------|----|
| Host | localhost |
| Port | 5454 |
| Database | thsoy |
| Username | thsoy |
| Password | thsoy |

### 개발 서버 실행

```bash
yarn start
```

서버가 `http://localhost:4000` 에서 실행됩니다.

### 빌드

```bash
yarn build
```

빌드 결과물은 `./build` 디렉터리에 생성됩니다.

## 의존성

### dependencies

| 패키지 | 버전 | 설명 |
|--------|------|------|
| `fastify` | ^4.11.0 | 웹 프레임워크 |
| `@fastify/jwt` | ^6.5.0 | JWT 인증 플러그인 |
| `fastify-plugin` | ^4.5.0 | Fastify 플러그인 유틸리티 |
| `fastify-raw-body` | ^4.2.0 | Raw body 파싱 |
| `typeorm` | ^0.3.11 | ORM |
| `pg` | ^8.8.0 | PostgreSQL 드라이버 |
| `raw-body` | ^2.5.1 | Raw body 유틸리티 |

### devDependencies

| 패키지 | 버전 | 설명 |
|--------|------|------|
| `typescript` | ^4.9.4 | TypeScript 컴파일러 |
| `ts-node` | ^10.9.1 | TypeScript 직접 실행 |
| `nodemon` | ^2.0.20 | 개발 서버 자동 재시작 |
| `tsconfig-paths` | ^4.1.2 | 경로 별칭 런타임 지원 |
| `@types/node` | ^18.11.18 | Node.js 타입 정의 |

## TypeScript 경로 별칭

`tsconfig.json`에 정의된 경로 별칭입니다.

| 별칭 | 경로 |
|------|------|
| `@server` | `src/server` |
| `@routes` | `src/routes` |
| `@routes/*` | `src/routes/*` |
| `@db/*` | `src/db/*` |
| `@controller` | `src/controller` |
| `@type/*` | `src/types/*` |
| `@enum/*` | `src/enum/*` |
| `@modules/*` | `src/modules/*` |
| `@middleware/*` | `src/middleware/*` |
