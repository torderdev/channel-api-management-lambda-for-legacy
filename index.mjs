export async function handler(event) {
  try {
    const { path, httpMethod, headers, body } = event;

    // 라우팅 설정
    const apiRoutes = {
      '/api/getConfig': 'https://api.middleware.torder.tech/management/v1/legacy/api/getConfig',
      '/getConfig': 'https://api.middleware.torder.tech/management/v1/legacy/api/getConfig', // AWS API Gateway 전용
      '/api/isMiddlewareApproved': 'https://api.middleware.torder.tech/management/v1/legacy/api/isMiddlewareApproved',
    };

    // 유효한 경로 및 HTTP 메소드 확인
    if (httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        statusDescription: "OK",
        body: "",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        }
      };
    }
    if (httpMethod !== 'POST' || !apiRoutes[path]) {
      return {
        statusCode: 404,
        body: {
          result: false,
          error: 'Invalid route or method'
        },
      };
    }

    const targetUrl = apiRoutes[path];

    // 프록시 요청
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        "x-api-key": headers["x-api-key"],
        "Content-Type": "application/json"
      },
      body: body,
    });

    // 응답 처리
    const responseBody = await response.text(); // JSON이 아닐 수도 있으므로 text() 사용
    
    return {
      statusCode: response.status,
      headers: Object.fromEntries(response.headers.entries()), // Headers 객체를 일반 객체로 변환
      body: responseBody,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        result: false,
        error: error.message
      }),
    };
  }
}
