var sum=0;
function enterSum() {
    document.getElementById("mcount").innerHTML = sum+=1;
}

function addText() {
    var div = document.createElement("div");
    div.classList.add("post-time");
    var par = document.createElement("p")
    par.classList.add("post-content");
    div.innerHTML = Date();
    par.innerHTML = document.getElementById("post-text").value;
    post_color(par);
    var count = post_number();
    post_style(par);
    for(let i=0; i<count;i++) {
        document.getElementById('posts').appendChild(div.cloneNode(true));
        document.getElementById('posts').appendChild(par.cloneNode(true));
    }

}

function displayMenu() {
    document.getElementById("main").style.display = 'none';
    document.getElementById("menu").style.display = 'block';
}

function displayMain() {
    document.getElementById("main").style.display = 'block';
    document.getElementById("menu").style.display = 'none';
}

function post_color(postContent) {
    const rbuttons = document.querySelectorAll('input[name="color"]');
    var color;
    for(const rbutton of rbuttons) {
        if(rbutton.checked) {
            color = rbutton.value;
            break;
        }
    }
    postContent.style.color = color;
}

function post_number() {
    const b = document.querySelector('input[name="quantity"]');
    if(b.value !== 1) {
        return b.value;
    }
    else
        return 1;
}

function background_color() {
    document.body.style.backgroundColor = document.querySelector('input[type="text"]').value;
}

function post_style(postContent) {
    const sbuttons = document.querySelectorAll('input[name="style"]');
    var style;
    for(const sbutton of sbuttons) {
        if(sbutton.checked) {
            style = sbutton.value;
            break;
        }
    }
    if(style === "bold") {
        postContent.style.fontWeight = "bold";
    }
    if(style === "italic") {
        postContent.style.fontStyle = "italic";
    }
    else
        return;
}

function slider() {
    const posts = document.getElementById("posts");
    var slider_value = document.querySelector('input[type="range"]').value;
    child = posts.children;
    var l = child.length;
    var count = l/2;
    if(slider_value == 1)
        return;
    if(slider_value == count) {
        var temp1 = child[slider_value];
        temp1.style.display = "none";
        var temp2 = child[slider_value-1];
        temp2.style.display = "none";
        count--;
    }
}
