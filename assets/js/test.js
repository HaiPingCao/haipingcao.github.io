// Su dung ` thay vi ' de co the xuong dong trong 1 string
const navbarcontent = `
<div class="navbar_container">
  <a class="navbar_logo" href="/">HAII26</a>
  <ul class="navbar_menu">
    <li>
      <a href="/index.html"> <span>Home</span></a>
    </li>
    <li>
      <a href="/about.html"> <span>About Me</span></a>
    </li>
    <li>
      <a href="/test.html"> <span>Test</span></a>
    </li>
    <li>
      <a href="https://github.com/HaiPingCao"> <span>Github</span></a>
    </li>
    <li>
      <button class="toggle-theme-btn" aria-label="Toggle dark mode">
        🌙
      </button>
    </li>
  </ul>
</div>
`;

function appendDiv() {
  // Create an "div" node:
  const node = document.createElement("div");
  // Create a text node:
  const textnode = document.createTextNode("Div created!");
  // Append the text node to the "div" node:
  node.appendChild(textnode);
  // Append the "div" node to the list:
  document.getElementById("navbar").appendChild(node);
}

function appendHtml_insertAdjacentHTML(){
    // Lay thanh phan can them html vao ben trong
    const myDiv = document.getElementById('navbar');
    /* 
    Them html vao thanh phan
    insertAdjacentHTML() -> them vao 1 vi tri 
    vd:
      "beforebegin": Before the element. Only valid if the element is in the DOM tree and has a parent element.
      "afterbegin": Just inside the element, before its first child.
      "beforeend": Just inside the element, after its last child.
      "afterend": After the element. Only valid if the element is in the DOM tree and has a parent element.
    
    */
    myDiv.insertAdjacentHTML(
      "afterend",
      navbarcontent
    );
}

function appendHtml_innerHTML(){
  /* 
  `innerHTML()`: This method involves setting the innerHTML property of an existing HTML element to a string containing the desired HTML templat
  */

  // Lay thanh phan can them html vao ben trong
  const myDiv = document.getElementById('navbar');
  myDiv.innerHTML = navbarcontent;
}

var addButton = document.getElementById("addBtn").onclick = function() {
  appendDiv()
};
var subButton = document.getElementById("subBtn");
var number = document.getElementById("num");