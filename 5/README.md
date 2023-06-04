## CSS について
### inline Styles
- プロパティはキャメルケース
```js
  const contentStyle = {
    color: color,
    fontSize: "20px"
  };

<p style={contentStyle}>こんにちは</p>
```
- 値は文字列
```js
<h1 style={{ color: "red" }}>こんにちは</h1>
```

### CSS Module
- [name].module.css
```
npm i node-sass
```

### style JSX
- Nextjsに標準で組み込まれているライブラリ
```
npm i styled-jsx
```
```
    <styled jsx>{`
    // ここにCSS
    `}</styled>
```

### styled components
- react-bootstrap的な
```
npm i styled-components
```
```jsx
export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>Styled Componentsです</STitle>
      <SButton>ボタン</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
```
## Emotion
- 上の３種類のいいとこ取り


## tailwind css
- フレームワーク
- 慣れるまでは、公式サイトやチュートリアル参照
- 『命名に悩まなくても良い』
https://tailwindcss.com/docs/installation
```
npm install -D tailwindcss
npx tailwindcss init
```

## その他
- Chakra UI
- Material UI
- Samantic UI React