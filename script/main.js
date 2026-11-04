const m_img = document.querySelectorAll('#visual_slide > div');
const l_btn = document.querySelector('#visual_slide .s_btn > li:first-child');
const r_btn = document.querySelector('#visual_slide .s_btn > li:last-child');
const c_btn = document.querySelectorAll('#visual_slide .ctrl_btn li');

let n = 0;

function fadeInOut(){
  m_img.forEach(img=>{
    img.style.oppacity ='0';
  });
  
  c_btn.forEach(btn=>{
    btn.classList.remove('on');
  });

  if(n===3){
    n=0;
  }else{
    n++;
  };
  m_img[n].style.opacity='1';
  c_btn[n].classList.add('on');
  console.log(n)
}
// 위 우측 버튼, 아래 좌측 버튼
function fadeInOut2(){
  m_img.forEach(img=>{
    img.style.opacity ='0';  
  });
  
  c_btn.forEach(btn=>{
    btn.classList.remove('on');
  });
  
  if(n===0){
    n=3;
  }else{
    n--;
  };
  c_btn[n].classList.add('on');
  m_img[n].style.opacity ='1';
};
let Timer = setInterval(fadeInOut,3000);

c_btn.forEach(btn=>{
  btn.addEventListener('mouseenter', function(){
    clearInterval(Timer);
  });
});
c_btn.forEach(btn=>{
  btn.addEventListener('mouseleave', function(){
    Timer = setInterval(fadeInOut, 3000);
  });
});
c_btn.forEach((btn,idx)=>{
  btn.addEventListener('click',function(){
    console.log(idx);
    m_img.forEach(img=>{
      img.style.opacity='0';
    });
    c_btn.forEach(b=>{
      b.classList.remove('on');
    })
    m_img[idx].style.opacity='1';
    c_btn[idx].classList.add('on');
  });
});

l_btn.addEventListener('click', function(){
  clearInterval(Timer);
  fadeInOut2();
});
r_btn.addEventListener('click', function(){
  clearInterval(Timer);
  fadeInOut();
});
const s_btn_area = document.querySelector('#visual_slide .s_btn');
s_btn_area.addEventListener('mouseleave', function(){
  clearInterval(Timer);
  Timer = setInterval(fadeInOut,3000);
});



// tab_con.forEach((el, index)=>{
//   //div 태그에 각각기능을 적용합니다
//   if(index===0){
//     el.style.display='block';
//     tab_list[index].classList.add('on');
//   }else{
//     el.style.display='none';
//   }
//   console.log(el)
//   console.log(index)
// });



const tab_list = document.querySelectorAll('.tcon ul li a');
const tab_con = document.querySelectorAll('.tcon ul li div');


// 사용자가 탭메뉴를 클릭하면 이벤트가 동작하면서 모든 콘텐츠를 숨기고, 해당 탭메뉴의 콘테츠만 보이게한다
tab_list.forEach((tab, i)=>{
  tab.addEventListener('click', function(e){
    e.preventDefault();
    // 모든콘텐츠 지우고 t_on서식을 지운다
    tab_con.forEach((content)=>{
      content.style.display='none';
      //diplay로 오타
    });
    tab_list.forEach((t)=>{
      t.classList.remove('on');
    })
    tab_con[i].style.display='block';
    // 결과를 똑같이 none으로 함
    tab_list[i].classList.add('on');
    if(i==2){
    tab_con[i].parentElement.parentElement.style.height='750px';
  }else{
      tab_con[i].parentElement.parentElement.style.height='600px';
    }
  });  
});