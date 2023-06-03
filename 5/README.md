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

### style JSX
- Nextjsに標準で組み込まれているライブラリ
```
    <styled jsx>{`
　　// ここにCSS
    `}</styled>
```