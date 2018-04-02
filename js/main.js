

var nowId = -1;

body = document.getElementsByTagName('body')
body[0].style.backgroundColor = 'orange'
mapImage = document.getElementById('image')

// body[0].innerHTML += '<p style="width: 500px; height:400px;">fdsa </p>'

// body[0].innerHTML += '<p style="width: 500px; height:400px;">fdsa </p>'
// p = document.getElementsByTagName('p')
// p[0].style.backgroundColor = 'yellow'
// p[1].style.backgroundColor = 'pink'

var image = '';
    function selectImage(file) {
        if (!file.files || !file.files[0]) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (evt) {
            document.getElementById('image').src = evt.target.result;
            document.getElementById('image').style.visibility = 'visible';
            image = evt.target.result;
        }
        reader.readAsDataURL(file.files[0]);
    }

var playersss=[]

class player {	
	constructor(h,w,num){
		this.height = h;
		this.width = w;
		this.number = num;
		this.o = 1;
		this.r = Math.floor(Math.random()*256);
		this.g = Math.floor(Math.random()*256);
		this.b = Math.floor(Math.random()*256);
		this.x = 0;
		this.y = 40;
	}

	ready() {
		body[0].innerHTML += `<div class='players player${this.number}' style='height: ${this.height}px; width:${this.width}px;'></div>`
	}

	randomSetting() {
		this.height = Math.random()*100;
		this.width = Math.random()*100;
	}

	change() {
		let red = Math.floor(Math.random()*256);
		let green = Math.floor(Math.random()*256);
		let blue = Math.floor(Math.random()*256);

		let rectangle = document.getElementsByClassName(`player${this.number}`)

		rectangle[0].style.backgroundColor = `rgba(${red},${green},${blue},1)`;
	}

	setChraImg() {

		let rectangle = document.getElementsByClassName(`player${this.number}`)

		rectangle[0].style.backgroundImage = `url(img/${this.number}.png)`;
	}

	moveWithClick(){
		let rectangle = document.getElementsByClassName(`player${this.number}`)
		rectangle[0].style.left = `${this.number}00px`

		// rectangle[0].addEventListener('mousedown',function(){
		// 	nowId = this.number
		// 	console.log('mousedown',rectangle[0].style.left,rectangle[0].style.top);
		// },false)

	}
}


for(i=0;i<7;i++){
	var person = new player(100,100,i);
	playersss.push(person);
	// person.randomSetting();
	person.ready();
	person.setChraImg();
	person.moveWithClick();

	// aaa.push(document.getElementsByClassName(`player${i}`))

	// aaa[i][0].addEventListener('mousedown',function(){
	// 	nowId = aaa.aaa[i][0].className[14]
	// 	console.log('mousedown',aaa[0].style.left,aaa[0].style.top);
	// },false)

}

// var pl1 = new player(100,100,10);
// pl1.randomSetting();
// pl1.ready();


 // 突然想到直接抓然後for迴圈就行了
 // 如果像以前那樣 直接把圖放for裡就好
 // 好像不用特地寫成物件再綁定圖形上去啊...
ppp = document.getElementsByClassName('players')

for(var j=0;j<ppp.length;j++){
	ppp[j].addEventListener('mousedown',function(){
		nowId = this.className[14]
		console.log(nowId);
	},false)
}


window.onmousedown = (evt)=>{
	a = evt.pageX;
	b = evt.pageY;
	console.log(evt.pageX,evt.pageY,'哈',a, b)
}


window.onmousemove = (evt)=>{
	if (nowId != -1){
		aaa = document.getElementsByClassName(`player${nowId}`)
    	aaa[0].style.left=evt.pageX + 'px'
    	aaa[0].style.top=evt.pageY + 'px'
	}
}

window.onmouseup = ()=>{
  nowId = -1
}

paragraph = document.getElementsByTagName('p');

for (var q=0; q<paragraph.length; q++) {
	paragraph[q].addEventListener('mousedown',function(){
		this.style.display = 'none';
	},false)
};


