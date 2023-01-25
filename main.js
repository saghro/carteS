let x = document.createElement('div');
document.body.appendChild(x);
x.style.textAlign = 'center';


function createElement(i = 1, names, rates) {
    let y = document.createElement('div');
    let title = document.createElement('h3');
    let rate = document.createElement('p');
    let img = document.createElement('img');
    let head = document.createTextNode('names');
    let ranke = document.createTextNode('rates');
    img.src = "images.jpeg";
    title.appendChild(head);
    rate.appendChild(ranke);
    x.appendChild(y);
    y.appendChild(title);
    y.appendChild(rate);
    y.appendChild(img);
    x.appendChild(y)


}
createElement(1);