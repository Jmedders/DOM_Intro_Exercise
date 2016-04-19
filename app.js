console.log("Javascript is alive!");
//1. Change the greeting from "Hello, There!" to "Hello, World!".
document.getElementById('greeting').innerText = "Hello World";
//2. Set the background color of each `<li>` to `yellow`.
document.getElementById('essentials').style.backgroundColor = "yellow";
// 3. Create an image tag, set its `src` attribute to `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`,
// and append the to the `#greeting` div.
var newImg = document.createElement("img");
newImg.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
document.getElementById('greeting').appendChild(newImg);
//4. Add the class of `selected` to an `<li>` when it is clicked. Remove it from any other `li`s as well.
var clicker = document.getElementsByTagName("li");
for(i=0; i<clicker.length; i++){
  clicker[i].addEventListener("click", function(listen){
    for(i=0; i<clicker.length; i++) {
      if(clicker[i].className != 'selected'){
        listen.target.classList.toggle('selected');
      }
      else if(clicker[i].className = 'selected') {
        listen.target.classList.remove('selected');
      }
    }
  })
}
// 5. Change the image to be the most recently clicked food item.
// var lisa = document.getElementsByTagName('li');
// var image1 = document.getElementsByTagName('img');
// image1.src = "/images/milk.jpeg"
// lisa.addEventListener("click",function(){
//   for(var i = 0; i< 5; i++){
//     if(i = 0){document.getElementsByTagName('img').append('img src="./images/honey.jpeg" height="60" width="60" alt="beer"'}
//     else{ console.log (work);}
//   }
// })
//6. When the gray div is moused over, it's removed from the DOM.
document.getElementById('ghosting').addEventListener('mouseover', function(){
  document.getElementById('ghosting').style.display = "none";
})

// 7. When the orange div is moused over, its width doubles.
//When the mouse moves out of the div, it returns to its original size.
document.getElementById('resize').addEventListener('mouseover',function(){
  document.getElementById('resize').style.width = '400px';
})
// 8. When the reset button is clicked - remove the
// `selected` class from each `<li>` and change the image to `panic.jpeg`
document.getElementsByTagName('input').addEventListener('click', function(event){
   document.getElementsByTagName('li').classList.remove('selected');
 })



// 9. When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"
window.addEventListener("keydown", numbersSuck);

function numbersSuck(e) {
    switch(e.keyCode) {
        case 48:
            alert("I HATE NUMBERZZZ!");
            break;
        case 49:
            alert("I HATE NUMBERZZZ!");
            break;
        case 50:
            alert("I HATE NUMBERZZZ!");
            break;
        case 51:
            alert("I HATE NUMBERZZZ!");
            break;
        case 52:
            alert("I HATE NUMBERZZZ!");
            break;
        case 53:
            alert("I HATE NUMBERZZZ!");
            break;
        case 54:
            alert("I HATE NUMBERZZZ!");
            break;
        case 55:
            alert("I HATE NUMBERZZZ!");
            break;
        case 56:
           alert("I HATE NUMBERZZZ!");
           break;
        case 57:
           alert("I HATE NUMBERZZZ!");
           break;

    }
}
