   // Create a new Particle
    var ps = new ParticleSlider({
        ptlGap: 1,
        mouseForce: 100 ,
        monochrome: true ,
        color: '#ffffff' ,
        ptlSize: 1,
        
      });
      
      var ptl = new ps.Particle(ps);
      
      // Set time to live of Particle to20 frames.
      ptl.ttl = 100;

$(document).scroll(function() {
if ($(document).scrollTop() >= 50) {
    // user scrolled 50 pixels or more;
    // do stuff
    $("nav").addClass("bg-white");
} else {
    $("nav").removeClass("bg-white");
}
});