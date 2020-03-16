## Installation

1. Git clone the repository.

   ```
   git clone https://github.com/hmhm2292/globalize.git
   ```

2. Install your packages.

   ```
   yarn or npm install
   ```

- Note that I recommend using yarn .
- Also note that `yarn.lock` and `package-lock.json` sometimes make collision. Try to delete one of them.

3. Run pod install (if running on iOS)

- `cd ios && pod install`

4. Run your project

5. **Run metro bundler**

   - Xcode or Android studio should be installed.

   ```
   yarn ios
   ```

   ```
   yarn android
   ```

   or

   ```
   npx react-native run-ios
   ```

   ```
   npx react-native-android
   ```

## 설명

언어 파일
각 언어파일을 패이지 별로 나눌예정

```
//ko.json
{
  "firstPage": {
    "hello": "안녕!",
    "good morning": "좋은아침"
  }
}

//js.json
{
  "firstPage": {
    "hello": "こんにちは",
    "good morning": "おはようございます"
  }
}

```

폰에 설정되어있는 언어를 불러오는 매소드

```
const {languageTag} =
  RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
  fallback;
```

fallback 을 한글로 설정

```
const fallback = {languageTag: 'ko', isRTL: false};
i18n.fallbacks = true;
```

로직 설명

- 폰 언어 설정들을 불러와 가장 적합한 언어로 설정을 합니다.
- 예를들어 유저가 영어, 일본어, 중국어, 한글 로 언어들을 설정을 했고, 어플이 서포트 하는 언어들은 일본어, 한글 일 경우, 유저가 일본어를 한글보다 우선순으로 설정이 되어있기 때문에 일본어로 언어가 설정이 됨. 만약 유저폰에서 언어 설정에서 영어랑, 중국어만 있었을경우는 어플 언어가 한글로 설정이됨. 그이유는 fallback 언어를 ko 로 성정이 되있기 때문입니다.
