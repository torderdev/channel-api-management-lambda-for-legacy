# channel-api-management-lambda-for-legacy

본 프로젝트는 구. 미들웨어 어드민의 일부 API 를 채널API - Management 로 라우팅 하기 위한 람다 코드를 구성하기 위해 만들어졌습니다.

## 대상 Lambda
**개발 환경**
대상 리소스:
- [AWS Lambda(dev-posservice-legacy-admin-to-channel-api-management)](https://ap-northeast-2.console.aws.amazon.com/lambda/home?region=ap-northeast-2#/functions/dev-posservice-legacy-admin-to-channel-api-management)
  - POST `https://dev.pos.torder.co.kr/api/getConfig` -> POST `https://api.middleware.torder.tech/management/v1/legacy/api/getConfig`
  - POST `https://dev.pos.torder.co.kr/api/isMiddlewareApproved` -> POST `https://api.middleware.torder.tech/management/v1/legacy/api/isMiddlewareApproved`
- [AWS API Gateway(dev-posservice-legacy-admin-to-channel-api-management)](https://ap-northeast-2.console.aws.amazon.com/apigateway/main/apis/ao8jqt4ce3/resources?api=ao8jqt4ce3&region=ap-northeast-2))
  - POST `https://a3f7efh7y4.execute-api.ap-northeast-2.amazonaws.com/dev/getConfig` -> POST `https://api.middleware.torder.tech/management/v1/legacy/api/getConfig`

**운영 환경**
