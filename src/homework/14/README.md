# react-hook-form 다루기 : 유효성 검사

1. **react-hook-form 라이브러리를 사용해서**, 유효성 검사하는 로직을 작성해보세요
2. (선택) 기왕이면 타입스크립트의 기능도 사용해봅니다.

## 유효성(validation)

1. username
   1. 길이는 3글자 이상 10글자 이하여야합니다 (ErrorMsg: "username 길이가 너무 짧습니다" | "username 길이가 너무 깁니다")
   2. 빈 문자열 입력시 (ErrorMsg "username이 비어있습니다" )
2. Email
   1. @gmail.com 을 포함하면 invalid (ErrorMsg "gmail.com 은 불가능합니다.")
3. password
   1. 8글자 이상, 15글자 이하 ("password 길이가 너무 짧습니다" | "password 길이가 너무 깁니다")
4. 비어있는 input 가 하나라도 있으면 invalid

## onSubmit 제출시

1. username, password, email 정보를 콘솔에 출력합니다.

## onValid : 유효한 제출일 경우

1. 모든 input 필드가 비워집니다.
2. 유효하다는 메세지를 출력합니다.

## onInvalid : 유효하지 않은 제출일 경우

1. 유효하지 않은 input 에 자동으로 focus 합니다. (우선순위는 무시)
2. 에러발생 원인을 담은 메세지를 화면에 띄웁니다.
