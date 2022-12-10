console.log("fjrbhrgfhb")
const select = document.getElementById('select-a-book-on-the-right');
const head = document.getElementById('heading');
var globalData;

function searchData(id)
{
    head.innerText = id;
    const xhr = new  XMLHttpRequest();
    xhr.onload = function()
    {
        globalData = this.responseText;
        select.innerText = this.responseText;
    }
    xhr.open("GET" , `${id}.txt` , true);
    xhr.send();
}

const filter = document.getElementById('filter');
const text = document.getElementById('select-a-book-on-the-right');

function search()
{
    let str = text.innerText;

    if(text.innerText.toLowerCase().includes(filter.value.toLowerCase()))
    {
        console.log("rwhgwr");
    }
}
