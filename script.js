//// GSAP VARIABLES ////

var Box = $('#box');
var Drip1 = $('.drip1');
var Drip2 = $('.drip2');
var Drip3 = $('.drip3');

//// SNAP VARIABLES ////

var s = Snap('#pop');
var red = s.select('.red');
var blue = s.select('.blue');
var white = s.select('.white');

//// GSAP ////

var tl = new TimelineMax();

tl.to(Box, 0.65, {
  onStart: function() {
    red1();
  }
});
tl.to(Box, 0.65, {
  onStart: function() {
    red2();
  }
});
tl.to(Box, 0.65, {
  onStart: function() {
    blue1();
  }
});
tl.to(Box, 0.65, {
  onStart: function() {
    blue2();
  }
});
tl.to(Box, 0.65, {
  onStart: function() {
    white1();
  }
});
tl.to(Box, 0.65, {
  onStart: function() {
    white2();
  }
});
tl.to(Box, 0.65, {
  onComplete: function() {
    tl.restart();
  }
});

//// SNAP SVG ////

function red1() {
  red.animate({
    'path': 'M356.5,208.5c13.3-22.7,20-36,20-60c0-17.3,7-31.7,13.7-45c25.3-37.3-16-54.7-16-54.7 c-34.7-17.3-37.3-1.3-57.3,25.3c-12,16-18.4,19.8-36,29.3c-27.4,14.9-62.7,80-62.7,80s13.3,10.7,9.3,18.7s2.7,25.3,12,28 c9.3,2.7,26.7,6.7,29.3,16c2.7,9.3,6.7,13.3,28,13.3c8-1.3,21.7-6.7,29.7-2.7L356.5,208.5z'
  }, 2400, mina.bounce);

};

function red2() {
  red.animate({
    'path': 'M352.9,216.5c13.3-22.7,24-44,24-68c0-17.3,7-31.7,13.7-45c25.3-37.3-16-54.7-16-54.7 c-34.7-17.3-37.3-1.3-57.3,25.3c-12,16-18.4,19.8-36,29.3c-27.4,14.9-62.7,80-62.7,80s13.3,10.7,9.3,18.7s2.7,25.3,12,28 c9.3,2.7,23.1,8.5,29.3,16c41.3,50,17,86.7,31,86c10-0.7,5-37.3,23.3-66L352.9,216.5z'
  }, 3800, mina.ease);
  TweenMax.to(Drip3,0.1,{x: -2,scale: 0.5,opacity:1,delay: 4.3});
  TweenMax.to(Drip3,2,{scale: 1.3, y: 800,delay: 4.3});
  TweenMax.to(Drip3,0,{opacity:0, y: 0, delay: 2});
};
//
function blue1() {
  blue.animate({
    'path': 'M218.2,184.8l-45.3,73.3c0,0,9.3,16,6.7,21.3s-14.7,24,5.3,34.7c12,2.7,19.3-8.9,32,9.3 c10.7,15.3,30.7,18.7,48-2.7c6.7,0,14.3,3.7,19.7-3c5.3-6.7,46.7-70.3,46.7-70.3L218.2,184.8z'
  }, 2200, mina.bounce);
};

function blue2() {
  blue.animate({
    'path': 'M218.5,184.8l-45.3,73.3c0,0,9.3,16,6.7,21.3s-14.7,24,5.3,34.7c12,2.7,16.2-4.4,38.7,0 c49.3,14,31.6,73.3,44.7,73.3c9.6,0,3-50.3,16.3-69.7c4.8-7,46.7-70.3,46.7-70.3L218.5,184.8z'
  }, 3800, mina.ease);
  TweenMax.to(Drip2,0.1,{x: -2,scale: 0.5,opacity:1,delay: 4.3});
  TweenMax.to(Drip2,2,{scale: 1.2, y: 500,delay: 4.3});
  TweenMax.to(Drip2,0,{opacity:0, y: 0, delay: 2});
};
//
function white1() {
  white.animate({
    'path': 'M176.5,253.8l-30.3,49.7c0,0-10.7,18.7-2.7,32c-1.3,4-10.7,22.7,6.7,38.7 c6.7,1.3,21.3,5.3,26.7,13.3c5.3,8,20,8.7,29.3,6c4-4,10.7-4,17.3-1.3c8,2.7,12-0.7,21.3-15.3c9.3-14.7,42.7-65.3,42.7-65.3 L176.5,253.8z'
  }, 2000, mina.bounce);
};

function white2() {
  white.animate({
    'path': 'M176.9,253.8l-30.3,49.7c0,0-10.7,18.7-2.7,32c-1.3,4-10.7,22.7,6.7,38.7 c6.7,1.3,22.3,2.7,26.7,13.3c7.4,18.1,19.8,20.6,25.6,12c30.7-45.3,16.7,44.3,25.7,44.3c13.6,0-1-41.7,15-65 c9.8-14.3,44.4-67.3,44.4-67.3L176.9,253.8z'
  }, 3800, mina.ease);
  TweenMax.to(Drip1,0.1,{x: -2,scale: 0.5,opacity:1,delay: 4.3});
  TweenMax.to(Drip1,2,{scale: 1.1, y: 500,delay: 4.3});
  TweenMax.to(Drip1,0,{opacity:0, y: 0, delay: 2});
};
//

animationTimeline();