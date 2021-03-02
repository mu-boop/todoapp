function post(){
    var post = document.getElementById("input");
    var main = document.getElementById("main");
    var div = document.createElement('div');
    var h2 = document.createElement('h2');
    var image = document.createElement('img')
    image.setAttribute('src' , 'images/check.png');
    div.appendChild(image)
    image.className = "hid";
    image.setAttribute("id" , "image1");
    var newImage = document.createElement('img')
    newImage.setAttribute('src' , 'images/notdone.png');
    newImage.className = "image1";
    newImage.setAttribute("id" , "image2");
    div.appendChild(newImage);
    h2.className = "heading"
    h2.setAttribute("id" , "update");
    div.appendChild(h2);
    var text = document.createTextNode(post.value);
    h2.appendChild(text);
    main.appendChild(div);
    post.value = "";
    var edit = document.createElement('button');
    var edittext = document.createTextNode("Edit");
    edit.setAttribute("class" , "update" )
    edit.appendChild(edittext);
    div.appendChild(edit);
    var upd =document.createElement('button');
    var updT =document.createTextNode('Update');
    upd.appendChild(updT);
    div.appendChild(upd)
    upd.className = 'hid';
    var del = document.createElement('button');
    var deltext = document.createTextNode("Delete");
    del.setAttribute("class" , "dl8");
    del.appendChild(deltext);
    div.appendChild(del);
    div.className="post";
    del.setAttribute("onclick",'delData()');
    edit.setAttribute("onclick",'editing()');
    newImage.setAttribute("onclick",'image()');
    upd.setAttribute('onclick','updat()');


}

function del8All(){
    var a = document.getElementById("main");
    a.innerHTML = "";
}

function delData(){
    var a = event.target;
    a.parentNode.remove();

}

function editing(){
    var a = event.target;
    var b = a.parentNode;
    b.childNodes[2].contentEditable = true;
    alert("Please click the text to edit.");
    a.className = 'hid'
   console.log(a.nextSibling) 
   a.nextSibling.className = "update"
}




function updat(){
    var a = event.target;
    a.className = 'hid';
    a.previousSibling.className = 'update';
    var b = a.parentNode;
    console.log(b.childNodes[2])
    b.childNodes[2].contentEditable = false;
}

function image(){
    var a = event.target;
    a.style.display = "none";
    var b = a.previousSibling;
    b.className = "image1";
    var c = a.parentNode;
    c.childNodes[3].style.display = "none"
    c.childNodes[5].style.marginLeft = "17rem"
}

function myFunction(event) {
    var x = event.keyCode;
    if (x == 13) { 
      post()
    }
  }

  function myali(event) {
    var x = event.keyCode;
    if (x == 46) { 
        delData();
        console.log;
    }
  }
 