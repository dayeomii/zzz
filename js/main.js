const $text = document.querySelector(".text");

// 글자 모음
const letters = ["안녕하세요. 신입 퍼블리셔 김다연입니다."];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {  
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }
  
  // 잠시 대기
  await wait(800);
  
  // 지우는 효과
//   remove();
}

// 글자 지우는 효과
// const remove = async () => {
//   const letter = letters[i].split("");
  
//   while (letter.length) {
//     await wait(speed);
    
//     letter.pop();
//     $text.innerHTML = letter.join(""); 
//   }
  
//   // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
//   i = !letters[i+1] ? 0 : i + 1;
//   typing();
// }

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1000);

$(function(){
    let aboutNum = $('#section2').offset().top

    let pfNum = $('#section3').offset().top

    let contNum = $('#section4').offset().top

    $('.gnb ul li a').click(function(){
      let name = $($(this).attr('href'))
      console.log(name)

      let target = $($(this).attr('href')).offset().top
      console.log(target)

      $('body,html').animate({scrollTop:target},1000)
  })

  // 스크롤바를 스크롤 하는 동안
  // 메뉴바의 글자색을 바꾸는 기능
  $('.gnb li:eq(0) a').css({color:'#423507'})

  $(window).scroll(function(){
      let num = $(this).scrollTop()

      $('.xy').text(num)

      // 영역별 설정
      if(num >= 0 && num < aboutNum){
          $('.gnb li a').css({color:'#423507'})
          $('.gnb li:eq(0) a').css({color:'#DBB224'})
          $('.gnb li:eq(3) a').css({color:'#423507',background:'#FFE99D'})
      }
      if(num >= aboutNum && num <= pfNum){
          $('.gnb li a').css({color:'#423507'})
          $('.gnb li:eq(1) a').css({color:'#DBB224'})
          $('.gnb li:eq(3) a').css({color:'#423507',background:'#FFE99D'})
      }
      if(num >= pfNum && num <= contNum){
          $('.gnb li a').css({color:'#423507'})
          $('.gnb li:eq(2) a').css({color:'#DBB224'})
          $('.gnb li:eq(3) a').css({color:'#423507',background:'#FFE99D'})
      }
      if(num >= contNum){
          $('.gnb li a').css({color:'#423507'})
          $('.gnb li:eq(3) a').css({color:'#FFE99D',background:'#423507'})
      }
  })
})

$(function(){
  $('.gnb li:eq(0) a,h1 a').click(function(){
    $('html, body').animate({scrollTop:0},1000)
  })

  $('.gnb li:eq(1) a, .btn_go:eq(0)').click(function(){
      $('html, body').animate({scrollTop:1113},1000)
  })

  $('.gnb li:eq(2) a').click(function(){
      $('html, body').animate({scrollTop:2200},1000)
  })

  $('.gnb li:eq(3) a').click(function(){
      $('html, body').animate({scrollTop:6263},1000)
  })
})

$(function(){
  $('.portfolio li a').mouseenter(function(){
    $(this).addClass('on')
  })

  $('.portfolio li a').mouseleave(function(){
    $(this).removeClass('on')
  })
})

$(function(){
  $('.p2 li a').lightBox({
      overlayBgColor:'#000',
      overlayOpacity: 0.9,
      imageLoading:"./images/lightbox-ico-loading.gif",
      imageBtnClose:"./images/lightbox-btn-close.gif",
      imageBtnPrev:"./images/lightbox-btn-prev.gif",// 이전버튼
      imageBtnNext:"./images/lightbox-btn-next.gif",
      containerResizeSpeed:500,// 팝업창 속도 조절

      txtImage:"작품"// 작품
  })
})