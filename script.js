let imgs=[
'assets/1.gif',
'assets/2.gif',
'assets/3.gif',
'assets/4.gif',
'assets/5.gif',
'assets/6.gif'
]

let rightAudio=new Audio('assets/right.wav');
let wrongtAudio=new Audio('assets/wrong.wav');

let main=document.getElementById('main');
let allDiv=document.getElementsByTagName('div')


function drawimg(){
for(let i=0 ;i<imgs.length;i++)
{
     main.innerHTML +='<div><img src="'+imgs[i]+'"></div>';
}
}
drawimg();
drawimg();



var flg=true;
var arr= [];


for(let i=0;i<allDiv.length;i++){
    allDiv[i].addEventListener('click', function() {
        if(flg){
      this.firstChild.style.opacity='1';

      if(arr.length==0){
        arr[0]=this;
      }else if(arr.length==1){
        arr[1]=this;
      }
      if(arr.length==2){
        flg=false;
         setTimeout(checkImg , 200);
      }
        } else{
            return;
        }
    })

    function checkImg(){
        if(arr[0].firstChild.getAttribute('src') == arr[1].firstChild.getAttribute('src')){

           rightAudio.play();
        }else{
            wrongtAudio.play();
          arr[0].firstChild.style.opacity=0;  
          arr[1].firstChild.style.opacity=0;  
        
        }

        arr=[];
        flg=true;
    }
}