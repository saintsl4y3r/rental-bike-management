# Dự án Quản lý xe máy cho thuê

## Yêu cầu

Node.js, Docker, MongoDB

## Cài đặt & Chạy

1. Clone repository và giải nén file mssv.zip hoặc mssv.rar.
2. Di chuyển đến thư mục gốc của dự án.
3. Chạy Docker:
```bash
docker-compose up --build
```
4. Chạy migration
```bash
node migrate.js
```
5. Truy cập
<!-- Frontend: http://localhost:3000
GraphQL Playground: http://localhost:4000/graphql -->