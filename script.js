"use strict";

$(document).ready(() => {
  $.get('https://www.reddit.com/r/nature/.json', (data) => {
  console.log(data.data.children);

  for (let post of data.data.children.slice(2,12)) {
    console.log(post.data.author);
    console.log(post.data.title);

    $("body").append(`
    <div id="post-container">
      <div id="myposts">
        <h3>${post.data.title}</h3>
        <p>Author: <em>${post.data.author}</em></p>
        <a href="${post.data.url}"><img src="${post.data.thumbnail}"></a>
      </div>
    </div>
    `)
  }
  });
}) 
