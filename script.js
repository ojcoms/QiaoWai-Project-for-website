function load_video(){
	var video = document.createElement('video')
	var div = document.getElementsByClassName('video-frame')[0]
	video.controls = false;
	video.muted = true;
	video.autoplay = "autoplay";
	video.playinline = true; // 使用驼峰命名规范
	//video.setAttribute('x5-playsinline', 'true');
	//video.setAttribute('x5-video-player-type', 'h5');
	//video.setAttribute('webkit-playsinline', 'true');
	//video.setAttribute('data-v-5c8f247b','')
	video.loop = true;
	//video.className = 'full-video'; // 修改类名的方式
	video.src = 'https://ojcoms.github.io/QiaoWai-Project-for-website/landscape of qiaowai.mp4';
	video.type = 'video/mp4';
	video.className = 'full-video';
	var videoWidth;
	var videoHeight;
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	video.addEventListener('loadedmetadata', function(){
		videoWidth = video.videoWidth;
		videoHeight = video.videoHeight;
		
//		var leftOffset = (windowWidth - videoWidth) / 2;
//		var topOffset = (windowHeight - videoHeight) / 2;
		var scale = Math.min(windowWidth / videoWidth, windowHeight / videoHeight);
//		video.style.left = leftOffset + 'px';
//		video.style.top = topOffset + 'px';
//		console.log(videoHeight);
//		console.log(videoWidth);
		video.style.width = videoWidth * scale + 'px';
//		video.style.width = '100px';
//		video.position = 'absolute';
		video.style.height = videoHeight * scale + 'px';
		//console.log(video.style.width)
		video.style.left = (windowWidth - videoWidth * scale) / 2 +'px';
		video.style.top = (windowHeight - videoHeight * scale) / 2 + 'px';
		console.log(windowWidth - videoWidth * scale);
//		video.style.left = '100px';
//		console.log(videoWidth * scale);
		div.appendChild(video);
//		console.log('video has been loaded!');
		});
}
//function sleep(ms) {
//    return new Promise(resolve => setTimeout(resolve, ms));
//}
function load_h1_title(text,class_name,title_id,fontsize){
	var _strong = document.createElement('strong')
	var h1 = document.createElement('h1');
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var length = text.length;
	
	h1.style.display = 'flex';
	h1.style.flexWarp = 'nowrap';
	h1.style.fontSize = fontsize + 'px'
	h1.style.animation = 'colorChange 2s forwards, let_position_up 0.1s forwards';
	h1.style.position = 'absolute';
    h1.style.top = (windowHeight - fontsize) / 5 + 'px';
    h1.style.left = (windowWidth - length * fontsize) / 2 + 'px';
	h1.style.justifyContent = 'center';
	h1.style.alignItems = 'center';
	h1.textContent = text;
	var path = document.getElementsByClassName(class_name)[title_id];
	path.appendChild(_strong);
	_strong.appendChild(h1);
	
}
load_video();
load_h1_title("让侨外走进世界","title",0,70);
var image_train = document.createElement('img');
image_train.className = 'train';
image_train.src = "https://ojcoms.github.io/QiaoWai-Project-for-website/train_.png";
image_train.style.left = 0;
image_train.style.bottom = 0;
var train_div = document.getElementsByClassName("trainDiv")[0];
train_div.appendChild(image_train);
document.querySelector('.train').addEventListener('animationend', function() {
	var start = document.createElement('img');
	var scale = 0.5;
	start.className = "startButton";
	start.src = "https://ojcoms.github.io/QiaoWai-Project-for-website/start.png";
	start.style.position = 'relative';
	start.style.width = 227 * scale + 'px';
	start.style.height = 99 * scale + 'px';
	start.addEventListener('mouseover', function() {
        this.style.cursor = 'pointer';
    });
    document.body.appendChild(start);
	start.addEventListener('click', function() {
        // 在这里指定要执行的函数
        console.log("Started...zzzzzz")
    });
});
//for(var i = 1;i <= 100;i++){
//	setTimeout(function(){
//		image.style.left = i * 1 + 'px';
//	},1000);
//}

