

// 변수선언
const t_btn = document.querySelector('.toggle');
const spans = document.querySelectorAll('.toggle span');
const gnb = document.querySelector('.gnb');

t_btn.addEventListener('click', function(){
  this.classList.toggle('active')
  if(this.classList.contains('active')){
spans[0].classList.add('act_rotate1');
spans[1].classList.add('act_none');
spans[2].classList.add('act_rotate2');



gnb.style.height='244.55px';
}else{
  spans[0].classList.remove('act_rotate1');
  spans[1].classList.remove('act_none');
  spans[2].classList.remove('act_rotate2');    
  
  
  
  gnb.style.height='0'
  };
});

