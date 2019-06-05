$(document).ready(function () {
  var animation1 = new TimelineMax();

  $("#accept-button").click(function(){
    animation1.to(".cookie", 0.5, {opacity: 0, height: 0, display:"none", ease:Linear.easeNone}, 0)
  });

  $("#decline-button").click(function(){
    animation1.to(".cookie", 0.5, {opacity: 0, height: 0, display:"none", ease:Linear.easeNone}, 0)
  });

  $(".cookie-x-button").click(function(){
    animation1.to(".cookie", 0.5, {opacity: 0, height: 0, display:"none", ease:Linear.easeNone}, 0)
  });

  var animation2 = new TimelineMax();
  var animation3 = new TimelineMax();

  $(".ss-button").click(function(){
    var text= $(".ss-extra-text");
    var button = $(".ss-button");

    if(text.css('display') == 'none') {
      $(button).text("AUSBLENDEN");
      animation2.to(text , 0.1, {opacity: 1,marginBottom: 30, height: "auto", display:"flex", ease:Linear.easeNone}, 0);
      animation2.restart();
    }

    if(text.css('display') == 'flex') {
      $(button).text("WEITER LESEN");
      animation3.to(text , 0.1, { opacity: 0, height: 0, margin: 0, display:"none", ease:Linear.easeNone}, 0);
      animation3.restart();
    }
  });

  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
  // animate to second panel
      .to("#horizontal-sections-container", 1,   {x: "-60vw"})
      .to("#horizontal-sections-container", 1,   {x: "-110vw"})
      .to("#horizontal-sections-container", 1,   {x: "-160vw"})
      .to("#horizontal-sections-container", 1,   {x: "-210vw"})
      .to("#horizontal-sections-container", 1,   {x: "-260vw"})
  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#horizontal-sections",
    triggerHook: "onLeave",
    duration: "500%"
  })
      .setPin("#horizontal-sections")
      .setTween(wipeAnimation)
      .addTo(controller);

});
