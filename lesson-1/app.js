const $post = document.createElement("article");
$post.setAttribute("class","post");
$post.innerText = "お腹減ったなう。"

const $timeline = document.querySelectorAll(".timeline")[0];
$timeline.appendChild($post);


// -------------------------------------------------------------------------------------

//window.addEventListener
//document.addEventListener

window.addEventListener("load", () => {
    alert("読み込み完了")
});

const $button = document.querySelector("#button");
$button.addEventListener("click", () => {
    console.log("Clickされた!");
});
