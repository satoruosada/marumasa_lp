document.addEventListener("DOMContentLoaded", function () {
  const cb = function (el, inview) {
    // if(inview) {
    //   const ta = new TweenTextAnimation(el);
    //   ta.animate();
    // }
  };

  // const so = new ScrollObserver('.tween-animate-title', cb);

  const _inviewAnimation = function (el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  };
  const so2 = new ScrollObserver(".appear", _inviewAnimation);

  const header = document.querySelector(".header");

  const _navAnimation = function (el, inview) {
    if (inview) {
      header.classList.remove("triggered");
    } else {
      header.classList.add("triggered");
    }
  };

  const so3 = new ScrollObserver(".nav-trigger", _navAnimation, {
    once: false,
  });

  new MobileMenu();
});

// const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
// for (let i = 0; i < smoothScrollTrigger.length; i++) {
//   smoothScrollTrigger[i].addEventListener("click", (e) => {
//     e.preventDefault();
//     let href = smoothScrollTrigger[i].getAttribute("href");
//     let targetElement = document.getElementById(href.replace("#", ""));
//     const rect = targetElement.getBoundingClientRect().top;
//     const offset = window.pageYOffset;
//     const gap = 60;
//     const target = rect + offset - gap;
//     window.scrollTo({
//       top: target,
//       behavior: "smooth",
//     });
//   });
// }

//ios対応
$(function () {
  const ua = navigator.userAgent.toLowerCase();
  // alert(ua);
  if (
    ua.indexOf("iphone") > -1 ||
    (ua.indexOf("android") > -1 && ua.indexOf("mobile") > -1)
  ) {
    // スマートフォン
    // alert('スマートフォン');
    $("body").addClass("is-ios");
  } else if (
    ua.indexOf("ipad") > -1 ||
    (ua.indexOf("macintosh") > -1 && "ontouchend" in document)
  ) {
    // タブレット
    // alert('タブレット');
    $("body").addClass("is-ios");
  } else {
    // PC
    // alert('PC');
    $("body").removeClass("is-ios");
  }
});

// ヒーロータイトル
// var Emblem = {
//   init: function(el, str) {
//     var element = document.querySelector(el);
//     var text = str ? str : element.innerHTML;
//     element.innerHTML = '';
//     for (var i = 0; i < text.length; i++) {
//       var letter = text[i];
//       var span = document.createElement('span');
//       var node = document.createTextNode(letter);
//       var r = (130/text.length)*(i);
//       var x = (Math.PI/text.length).toFixed(0) * (i);
//       var y = (Math.PI/text.length).toFixed(0) * (i);
//       span.appendChild(node);
//       span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
//       span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
//       element.appendChild(span);
//     }
//   }
// };

// Emblem.init('.hero__title');

// var Emblem = {
//   init: function(el, str) {
//     var element = document.querySelector(el);
//     var text = str ? str : element.innerHTML;
//     element.innerHTML = '';
//     for (var i = 0; i < text.length; i++) {
//       var letter = text[i];
//       var span = document.createElement('span');
//       var node = document.createTextNode(letter);
//       var r = (130/text.length)*(i);
//       var x = (Math.PI/text.length).toFixed(0) * (i);
//       var y = (Math.PI/text.length).toFixed(0) * (i);
//       span.appendChild(node);
//       span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
//       span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
//       element.appendChild(span);
//     }
//   }
// };

// Emblem.init('.loading__title');


ScrollReveal().reveal(".work__images", {
  delay: 300, // アニメーション開始までの時間
  duration: 2000, // アニメーションの完了にかかる時間
  viewFactor: 0, // 0~1,どれくらい見えたら実行するか
  origin: "right", // 要素がどの方向から来るか
  distance: "50px", // 移動する距離
  reset: false, // 何回もアニメーション表示するか
});
ScrollReveal().reveal(".about__images", {
  delay: 300, // アニメーション開始までの時間
  duration: 2000, // アニメーションの完了にかかる時間
  viewFactor: 0, // 0~1,どれくらい見えたら実行するか
  origin: "left", // 要素がどの方向から来るか
  distance: "50px", // 移動する距離
  reset: false, // 何回もアニメーション表示するか
});
ScrollReveal().reveal(".staff__images-right", {
  delay: 300, // アニメーション開始までの時間
  duration: 2000, // アニメーションの完了にかかる時間
  viewFactor: 0, // 0~1,どれくらい見えたら実行するか
  origin: "right", // 要素がどの方向から来るか
  distance: "50px", // 移動する距離
  reset: false, // 何回もアニメーション表示するか
});
ScrollReveal().reveal(".staff__images-left", {
  delay: 300, // アニメーション開始までの時間
  duration: 2000, // アニメーションの完了にかかる時間
  viewFactor: 0, // 0~1,どれくらい見えたら実行するか
  origin: "left", // 要素がどの方向から来るか
  distance: "50px", // 移動する距離
  reset: false, // 何回もアニメーション表示するか
});

ScrollReveal().reveal(".work__person01", {
  delay: 300, // アニメーション開始までの時間
  duration: 1000, // アニメーション完了にかかる時間
  origin: "top", // 要素がどの方向から来るか
  distance: "50px", // 移動する距離
  reset: false, // フレームインの度に動かすか
});
ScrollReveal().reveal(".work__person02", {
  delay: 300, // アニメーション開始までの時間
  duration: 1000, // アニメーション完了にかかる時間
  origin: "top", // 要素がどの方向から来るか
  distance: "50px", // 移動する距離
  reset: false, // フレームインの度に動かすか
});
ScrollReveal().reveal(".about__person03", {
  delay: 300, // アニメーション開始までの時間
  duration: 1000, // アニメーション完了にかかる時間
  origin: "top", // 要素がどの方向から来るか
  distance: "50px", // 移動する距離
  reset: false, // フレームインの度に動かすか
});
ScrollReveal().reveal(".staff__person04", {
  delay: 200, // アニメーション開始までの時間
  duration: 1000, // アニメーション完了にかかる時間
  origin: "top", // 要素がどの方向から来るか
  distance: "70px", // 移動する距離
  reset: false, // フレームインの度に動かすか
});


// アニメーションさせたいクラス
var container = $(".loading__title");
// アニメーションスピード
var speed = 80;

// テキストの間にスペースを入れます
var content = container.html();
var text = $.trim(content);
var newHtml = "";

// スペースで区切ったテキストを、テキストの数だけspanで囲む
text.split("").forEach(function (v) {
  newHtml += "<span>" + v + "</span>";
});

// spanで囲んだテキスト群をHTMLに戻す
container.html(newHtml);

// 1文字ずつ表示
var txtNum = 0;
container.css({ opacity: 1 });
setInterval(function () {
  container.find("span").eq(txtNum).css({ opacity: 1 });
  txtNum++;
}, speed);

$(function () {
  var pagetop = $(".footer__scroll > a");
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});


// logoの表示
$(window).on("load", function () {
  $(".loading").delay(1600).fadeOut("200");
  
});


// アーチ型ヒーロータイトル
$(function () {
  $(".hero__title").arctext({
    radius: 160,
  });
  
  $(".loading__title").arctext({
    radius: 160,
  });
});

// ロゴのフェイドイン
$(function () {
  setTimeout(function () {
    $(".hero__title, .hero__title-logo, .hero__title-logo2, .hero__title-logo3").fadeIn(800);
  }, 2300); //1.9秒後にロゴをフェードイン
});


$('.loading__title01').fadeIn(1500);
$('.loading__title02').fadeIn(1500);


// パララックス
new BackgroundVideo('.bv-video', {
  src: [
      //動画保存先のパス
      './images/top-movie.mp4'
  ]
});



