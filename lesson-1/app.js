const $post = document.createElement("article");
$post.setAttribute("class","post");
$post.innerText = "お腹減ったなう。"

const $timeline = document.querySelectorAll(".timeline")[0];
$timeline.appendChild($post);


// ---------------

//window.addEventListener
//document.addEventListener
