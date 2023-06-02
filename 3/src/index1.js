// getElementById
// 1つの要素を取得する
const title1 = document.getElementById("title");
console.log(title1);
/*
  <h1 id="title">Hello World</h1>
*/

// querySelector
// 1つの要素を取得する
const title2 = document.querySelector("title");
console.log(title2);
/*
  <title>DOM操作 モダンJavaScriptの基本から始める React 実戦の教科書</title>
*/
// 一致した最初の要素を取得する
const container = document.querySelector(".container");
console.log(container);
/**
  <div class="container">
    <p>エリア1です</p>
  </div>
 */

// querySelectorAll
// 2つ以上の要素を取得する  配列で取得される
const containers1 = document.querySelectorAll(".container");
console.log(containers1);
/**
 * NodeList(2) [div.container, div.container]
0: div.container
1: div.container
length: 2
[[Prototype]]: NodeList
 */

// getElementsByClassName
// 2つ以上の要素を取得する  配列で取得される
const containers2 = document.getElementsByClassName("container");
console.log(containers2);
