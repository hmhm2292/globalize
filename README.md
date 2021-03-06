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

# Globalization

## <ShowTranslation/ >

**To set the color for the word you want to highlight, it is always set in the language translation file, check translation file section**

| Prop                  | type                                                                  | description                                                                                                                                                                     |
| --------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| style                 | object                                                                | object with style values                                                                                                                                                        |
| color                 | string                                                                | sets the text color (use colors from the colors file)                                                                                                                           |
| weight                | string ("l" = light, "r" = regular, "m" = medium, "b" = bold )        | sets the text fontWeight                                                                                                                                                        |
| size                  | number                                                                | sets the text fontSize                                                                                                                                                          |
| children              | any(in this case an array[], or string)                               | the text value that needs to be rendered (when used with getTranslation() will receive as an array if there is a text that needs to be highlighted, else will receive a string) |
| highlightWeight       | string ("l" = light, "r" = regular, "m" = medium, "b" = bold )        | sets the fontWeight for the highlighted text                                                                                                                                    |
| highlightTextDecoLine | string (none", "underline", "line-through", "underline line-through") | can choose to underline etc. for the highlighted text                                                                                                                           |
| highlightSize         | number                                                                | sets the fontSize for the highlighted text                                                                                                                                      |

## getTranslation(translationKey, replace)

| Parameters     | type   | description                                                                            |
| -------------- | ------ | -------------------------------------------------------------------------------------- |
| translationKey | string | key value that represents the string from the language translation file **(required)** |
| replace        | object | any values that is a variable, ex(username, count) **(optional)**                      |

## Translation File (file type json)

    {
       "testShowTranslation": {
    	    "termsHighlightText": "계속 진행함으로써 {}notiRed/이용약관{} 및, {}notiRed/개인정보 취급방침{}\n에 동의한 것으로 간주됩니다.",
    	    "terms2Button": {
    		    "line1": "계속 진행함으로써, ",
    		    "line2": "{}notiRed/이용약관{} ",
    		    "line3": "및, ",
    		    "line4": "{}notiRed/개인정보 취급방침{}",
    		    "line5": "에",
    		    "line6": "동의한 것으로 간주됩니다."

    	    },

    	    "terms3JustText": "계속 진행함으로써 이용약관 및, 개인정보 취급방침에 동의한 것으로 간주됩니다.",
    	    "terms4ReplaceHighlight": "{}bannerBlue/{v}{} 님이 계속 진행함으로써 이용약관 및, 개인정보 취급방침에 동의한 것으로 간주됩니다."
        }
    }

The translation file will formatted in a way where the main key value is the screen or the component name. Within the key will be an object that has all the strings used for the screen or the component.

**Use the translation file to designate a different color for the word you would like to change from the rest of the text**

- **Designate Text** : always surround the text you want to change with "{}" and add a "/" next to the word
- **color** : `{}notiRed/이용약관{}` when setting a color you want always write the color code or name before the "/". This will set the 이용약관 color to be red
- **fontWeight/highlightTextLDecoLine** : if you want to just make the text to be bold or underlined, just surround the text with "{}" and add "/" in front of the word like so. `{}/이용약관{}`
- **Variables within the text** : ex( \_\_\_\_님), when adding a variable in a certain text always use "{v}" in place where the variable will be within the text - ex. "{v}계속 진행함으로써 {}/이용약관{} 및, {}/개인정보 취급방침{}\n에 동의한 것으로 간주됩니다."
  **If same variable used multiple times** - ex. "{v}계속 진행함으로써 {}/이용약관{} 및, {}/개인정보 취급방침{}\n에 동의한 {v}것으로 간주됩니다."
  **If multiple variable used** - ex. "{v}계속 진행함으로써 {}/이용약관{} 및, {}/개인정보 취급방침{}\n에 동의한 {v1}것으로 간주됩니다."
  **In the getTranslationMethod(translationKey, replace), you will need to provide an object for the replace parameter like so.** - If 1 variable : `getTranslation('testShowTranslation1.terms', { '{v}': 'testyp300' })` - If more than 1 variable : `getTranslation('testShowTranslation1.terms', { '{v}': 'testyp300', '{v1}': 'testyp301'})`

## When making specific words into buttons

     {
       "testShowTranslation": {
    	    "termsHighlightText": "계속 진행함으로써 {}notiRed/이용약관{} 및, {}notiRed/개인정보 취급방침{}\n에 동의한 것으로 간주됩니다.",
    	    "terms2Button": {
    		    "line1": "계속 진행함으로써, ",
    		    "line2": "{}notiRed/이용약관{} ",
    		    "line3": "및, ",
    		    "line4": "{}notiRed/개인정보 취급방침{}",
    		    "line5": "에",
    		    "line6": "동의한 것으로 간주됩니다."

    	    },

    	    "terms3JustText": "계속 진행함으로써 이용약관 및, 개인정보 취급방침에 동의한 것으로 간주됩니다.",
    	    "terms4ReplaceHighlight": "{}bannerBlue/{v}{} 님이 계속 진행함으로써 이용약관 및, 개인정보 취급방침에 동의한 것으로 간주됩니다."
        }
    }

When making specific words into a button, you **need** to separate each text like so in terms2.

## Example Usage

**Should use < ShowTranslation /> and getTranslation() together. If you want to display any string that is not from the translation file, just use < ShowTranslation />**

import ShowTranslation and getTranslation

translation file (ko.json)

    {
       "testShowTranslation": {
    	    "termsHighlightText": "계속 진행함으로써 {}notiRed/이용약관{} 및, {}notiRed/개인정보 취급방침{}\n에 동의한 것으로 간주됩니다.",
    	    "terms2Button": {
    		    "line1": "계속 진행함으로써, ",
    		    "line2": "{}notiRed/이용약관{} ",
    		    "line3": "및, ",
    		    "line4": "{}notiRed/개인정보 취급방침{}",
    		    "line5": "에",
    		    "line6": "동의한 것으로 간주됩니다."

    	    },

    	    "terms3JustText": "계속 진행함으로써 이용약관 및, 개인정보 취급방침에 동의한 것으로 간주됩니다.",
    	    "terms4ReplaceHighlight": "{}bannerBlue/{v}{} 님이 계속 진행함으로써 이용약관 및, 개인정보 취급방침에 동의한 것으로 간주됩니다."
        }
    }

Component using ShowTranslation and getTranslation

    <ShowTranslation
    	style={{
    		marginVertical: 20,
    		marginHorizontal: 20,
    	}}
    	highlightTextDecoLine={'underline'}
    	color={colors.CNTDarkGreen}
    	size={14}
    	weight={'r'}
    	highlightWeight={'b'}> {getTranslation('testShowTranslation.terms4ReplaceHighlight', {'{v}': 'Connecting', })}
     </ShowTranslation>

## Example when 이용약관 and 개인정보 취급방침 is a button

translation file (ko.json)

    {
           "testShowTranslation": {
    		    "termsHighlightText": "계속 진행함으로써 {}notiRed/이용약관{} 및, {}notiRed/개인정보 취급방침{}\n에 동의한 것으로 간주됩니다.",
    		    "terms2Button": {
    			    "line1": "계속 진행함으로써, ",
    			    "line2": "{}notiRed/이용약관{} ",
    			    "line3": "및, ",
    			    "line4": "{}notiRed/개인정보 취급방침{}",
    			    "line5": "에",
    			    "line6": "동의한 것으로 간주됩니다."

    		    },
    		    "terms3JustText": "계속 진행함으로써 이용약관 및, 개인정보 취급방침에 동의한 것으로 간주됩니다.",
    		    "terms4ReplaceHighlight": "{}bannerBlue/{v}{} 님이 계속 진행함으로써 이용약관 및, 개인정보 취급방침에 동의한 것으로 간주됩니다."
    	    }
        }

Component using ShowTranslation and getTranslation

        <View>
    	    <View
    	    style={{
    		    marginTop: 20,
    		    marginHorizontal: 30,
    		    flexDirection: 'row',
    		    alignSelf: 'center',
    		    alignItems: 'center',
    		}}>
    		    <ShowTranslation> {getTranslation('testShowTranslation.terms2Button.line1')} </ShowTranslation>
    			<TouchableOpacity>
    			    <ShowTranslation
    				    highlightWeight={'b'}
    				    highlightTextDecoLine={'underline'}>
    					    {getTranslation('testShowTranslation.terms2Button.line2'}
    			    </ShowTranslation>
    			</TouchableOpacity>
    			    <ShowTranslation>
    				    {getTranslation('testShowTranslation.terms2Button.line3')}
    			    </ShowTranslation>
    		    <TouchableOpacity>
    			    <ShowTranslation
    				    highlightWeight={'b'}
    				    highlightTextDecoLine={'underline'}>
    					    {getTranslation('testShowTranslation.terms2Button.line4')}
    				</ShowTranslation>
    		    </TouchableOpacity>
    			<ShowTranslation>
    				  {getTranslation('testShowTranslation.terms2Button.line5')}
    		    </ShowTranslation>
    	    </View>
    	    <ShowTranslation  style={{marginBottom: 20, alignSelf: 'center'}}>
    	    {getTranslation('testShowTranslation.terms2Button.line6')}
    	    </ShowTranslation>
        </View>

## Example of different cases and how its displayed on the screen

![](https://github.com/hmhm2292/globalize/blob/master/src/READMEImage/Screen%20Shot%202020-05-08%20at%201.48.03%20PM.png)
