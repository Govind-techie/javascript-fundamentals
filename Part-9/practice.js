let para1 = document.createElement("p");
para1.textContent = "Hey, I am red";
para1.classList.add("red");
document.body.append(para1);

let head3 = document.createElement('h3');
head3.textContent = "I'm a blue h3";
head3.classList.add("blue");
document.body.append(head3);

let div1 = document.createElement('div');
div1.classList.add("divStyle");
document.body.append(div1);

let head1 = document.createElement('h1');
head1.textContent = "I'm in a div";
document.querySelector('div').append(head1);

let para2 = document.createElement('p');
para2.textContent = "ME TOO!";
document.querySelector('div').append(para2);

