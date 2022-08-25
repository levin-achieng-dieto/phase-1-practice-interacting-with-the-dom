const counting = document.getElementById('counter');
const subtraction = document.getElementById('minus')
const addition = document.getElementById('plus')
const commentsList = document.getElementById('list');
const comments = document.getElementById('comment-input')
const likesHeart = document.getElementById('heart')
const likeList = document.querySelector('.likes')


let timer = function(){
    var sec =0;
    count = setInterval(() => {
        counter.innerHTML = sec;
        sec++
    }, 1000);

   
subtraction.addEventListener('click', function(){
    sec -= 1
})

addition.addEventListener('click', function(){
    sec += 1
})


likesHeart.addEventListener('click', function(){
    const p = document.createElement('p')
    // p.classList.add('p-heart')
    p.innerText = sec +" " +'has been liked 1 time'
    likeList.appendChild(p) 
})

}

document.addEventListener('DOMContentLoaded', timer);


document.getElementById('pause').addEventListener("click", function(){
    clearInterval(count)
})



document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    commentsList.appendChild(paragraph)
    paragraph.innerText = comments.value
    comments.value = ""
})
