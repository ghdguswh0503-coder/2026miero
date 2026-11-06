

// 변수선언
const t_btn = document.querySelector('.toggle');
const spans = document.querySelectorAll('.toggle span');
const gnb = document.querySelector('.gnb');
let mnu = document.querySelectorAll('.gnb > ul > li > a');

t_btn.addEventListener('click', function(){
  this.classList.toggle('active')
  if(this.classList.contains('active')){
spans[0].classList.add('act_rotate1');
spans[1].classList.add('act_none');
spans[2].classList.add('act_rotate2');



gnb.style.height='242.5px';
}else{
  spans[0].classList.remove('act_rotate1');
  spans[1].classList.remove('act_none');
  spans[2].classList.remove('act_rotate2');    
  
  
  
  gnb.style.height='0'
  };
});

// 메인메뉴 클릭시 해당 서브만 나오게하기

mnu.forEach(function(i, index){
    i.addEventListener('click',function(event){
    // alert(index);

    // 메인메뉴[인덱스]아래의 서브메뉴찾고
    // 서브메뉴 나오는 서식을 넣기
    // i는 지역변수이니까 밖에다가 변수 만들지 않는한 밖에서 못씀
    const sub = item.nextElementSibling;
    if(sub&&sub.classList.contains('sub')){
      event.preventDefault();
    }
    mnu.forEach(function(otheritem){
      if(otheritem!=item){
        const othersub = otheritem.nextElementSibling;
        if(othersub&&othersub.classList.contains('sub')){
          othersub.classList.remove('act')
        };
        const othericon = otheritem.querySelector('fa-angle-down');
        if(othericon){
          othericon.classList.remove('rotate');
        }
      }
    });
    sub.classList.toggle('act');

    const icon = item.querySelector('.fa-angle-down');
    if(icon){
      icon.classList.toggle('rotate');
    }
  });
});