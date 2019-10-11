/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/
//#EF3A43
//#58E80C
/* Otherwise just put the config content (json): */

particlesJS(
  'particles-js',

  {
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          value_area: 100,
        },
      },
      color: {
        value: ['#EF3A43'],
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#EF3A43',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'img/leaf.png',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: false,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: '#EF3A43',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
          mode: 'bubble',
        },
        onclick: {
          enable: false,
          mode: 'bubble',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 100,
          size: 20,
          duration: 0.2,
          opacity: 1,
          speed: 20,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: '#b61924',
      background_image: '',
      background_position: '50% 50%',
      background_repeat: 'no-repeat',
      background_size: 'fill',
    },
  },
);

// Animations

// Emojis

//earth &#127759
//Slight Smile &#128578
//Yawning face &#129393‬
//Thinking &#129300
//Pensive face &#128532
//Face without mouth &#128566
// smiling face &#128522
//sections

var section1 = document.querySelector('#section-1');
var section2 = document.querySelector('#section-2');

// Buttons
var but = document.querySelector('.button');
// Timelines

var tl5 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl5Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});
///***********PAGE - 1************ */

var tl1 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl1Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page1In() {
  var arrow1 = document.querySelector('.arrow-1');
  var note = document.querySelector('.note');

  tl1.add({
    targets: '#section-1 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });

  setTimeout(() => {
    arrow1.style.opacity = '1';
    note.style.opacity = '1';
  }, 3500);
}

function page1Out() {
  var arrow1 = document.querySelector('.arrow-1');
  var note = document.querySelector('.note');

  arrow1.style.opacity = '0';
  note.style.opacity = '0';
  tl1Rev.add({
    targets: '#section-1 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

///***********PAGE - 2************ */

var tl2 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl2Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page2In() {
  tl2.add({
    targets: '#section-2 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });

  setTimeout(() => {
    but.innerHTML = `&#127759;`;
  }, 3000);
}

function page2Out() {
  tl2Rev.add({
    targets: '#section-2 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

///***********PAGE - 3************ */

var tl3 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl3Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page3In() {
  tl3.add({
    targets: '#section-3 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });

  setTimeout(() => {
    but.innerHTML = `&#128528;‬`;
  }, 3000);
}

function page3Out() {
  tl3Rev.add({
    targets: '#section-3 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

///***********PAGE - 4************ */

var tl4 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl4Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page4In() {
  tl4.add({
    targets: '#section-4 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });

  setTimeout(() => {
    but.innerHTML = `&#129300;`;
  }, 3000);
}

function page4Out() {
  tl4Rev.add({
    targets: '#section-4 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

///***********PAGE - 5************ */

var tl5 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl5Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page5In() {
  tl5.add({
    targets: '#section-5 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });

  setTimeout(() => {
    but.innerHTML = `&#128566;`;
  }, 3000);
}

function page5Out() {
  tl5Rev.add({
    targets: '#section-5 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

///***********PAGE - 6************ */

var tl6 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl6Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page6In() {
  tl6.add({
    targets: '#section-6 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });

  setTimeout(() => {
    but.innerHTML = `&#128171;`;
  }, 2000);
}

function page6Out() {
  tl6Rev.add({
    targets: '#section-6 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-7**************

var tl7 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl7Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page7In() {
  tl7.add({
    targets: '#section-7 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128522;`;
  }, 3000);
}

function page7Out() {
  tl7Rev.add({
    targets: '#section-7 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-8**************

var tl8 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl8Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page8In() {
  tl8.add({
    targets: '#section-8 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128515;`;
  }, 3000);
}

function page8Out() {
  tl8Rev.add({
    targets: '#section-8 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-9**************

var tl9 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl9Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page9In() {
  tl9.add({
    targets: '#section-9 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128107;`;
  }, 3000);
}

function page9Out() {
  tl9Rev.add({
    targets: '#section-9 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-10**************

var tl10 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl10Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page10In() {
  tl10.add({
    targets: '#section-10 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128529;`;
  }, 3000);
}

function page10Out() {
  tl10Rev.add({
    targets: '#section-10 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-11**************

var tl11 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl11Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page11In() {
  tl11.add({
    targets: '#section-11 .sentence .slide',
    opacity: 1,
  });
  setTimeout(() => {
    but.innerHTML = `&#128578;`;
  }, 1500);
}

function page11Out() {
  tl11Rev.add({
    targets: '#section-11 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-12**************

var tl12 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl12Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page12In() {
  tl12.add({
    targets: '#section-12 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128529;`;
  }, 3000);
}

function page12Out() {
  tl12Rev.add({
    targets: '#section-12 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-13**************

var tl13 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl13Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page13In() {
  tl13.add({
    targets: '#section-13 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128514;`;
  }, 3000);
}

function page13Out() {
  tl13Rev.add({
    targets: '#section-13 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-14**************

var tl14 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl14Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page14In() {
  tl14.add({
    targets: '#section-14 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128522;`;
  }, 3000);
}

function page14Out() {
  tl14Rev.add({
    targets: '#section-14 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-15**************

var tl15 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl15Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page15In() {
  tl15.add({
    targets: '#section-15 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128515;`;
  }, 3000);
}

function page15Out() {
  tl15Rev.add({
    targets: '#section-15 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-16**************

var tl16 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl16Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page16In() {
  tl16.add({
    targets: '#section-16 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128578;`;
  }, 2000);
}

function page16Out() {
  tl16Rev.add({
    targets: '#section-16 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-17**************

var tl17 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl17Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page17In() {
  tl17.add({
    targets: '#section-17 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128578;`;
  }, 2000);
}

function page17Out() {
  tl17Rev.add({
    targets: '#section-17 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-18**************

var tl18 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl18Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page18In() {
  tl18.add({
    targets: '#section-18 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128525;`;
  }, 2000);
}

function page18Out() {
  tl18Rev.add({
    targets: '#section-18 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-19**************

var tl19 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl19Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page19In() {
  tl19.add({
    targets: '#section-19 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128522;`;
  }, 2000);
}

function page19Out() {
  tl19Rev.add({
    targets: '#section-19 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-20**************

var tl20 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl20Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page20In() {
  tl20.add({
    targets: '#section-20 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128579;`;
  }, 2000);
}

function page20Out() {
  tl20Rev.add({
    targets: '#section-20 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-21**************

var tl21 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl21Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page21In() {
  var arrow2 = document.querySelector('.arrow-2');
  var joke = document.querySelector('.joke');

  tl21.add({
    targets: '#section-21 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `&#128525;`;
  }, 2000);
  setTimeout(() => {
    arrow2.style.opacity = '1';
    joke.style.opacity = '1';
  }, 4000);
  setTimeout(() => {
    but.style.fontSize = '0.7em';
    but.innerHTML = `Ghanerda&#128530;`;
  }, 4500);
}

function page21Out() {
  var arrow2 = document.querySelector('.arrow-2');
  var joke = document.querySelector('.joke');

  arrow2.style.opacity = '0';
  joke.style.opacity = '0';

  tl21Rev.add({
    targets: '#section-21 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

// ****************page-22**************

var tl22 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
});

var tl22Rev = anime.timeline({
  easing: 'easeOutExpo',
  duration: 600,
});

function page22In() {
  tl22.add({
    targets: '#section-22 .sentence .slide',
    opacity: 1,
    delay: anime.stagger(1000),
  });
  setTimeout(() => {
    but.innerHTML = `<a href="tel: +919834169047">&#128222;‬</a>`;
  }, 2000);
}

function page22Out() {
  tl22Rev.add({
    targets: '#section-22 .sentence .slide',
    opacity: 0,
    delay: anime.stagger(200),
  });
}

page1In();

pageOn = 1;
but.addEventListener('click', () => {
  pageOn++;
  console.log(pageOn);

  switch (pageOn) {
    case 1:
      page1In();
      break;
    case 2:
      page1Out();
      setTimeout(() => {
        page2In();
      }, 800);
      break;
    case 3:
      page2Out();
      setTimeout(() => {
        page3In();
      }, 800);
      break;
    case 4:
      page3Out();
      setTimeout(() => {
        page4In();
      }, 800);
      break;
    case 5:
      page4Out();
      setTimeout(() => {
        page5In();
      }, 800);
      break;
    case 6:
      page5Out();
      setTimeout(() => {
        page6In();
      }, 800);
      break;
    case 7:
      page6Out();
      setTimeout(() => {
        page7In();
      }, 800);
      break;
    case 8:
      page7Out();
      setTimeout(() => {
        page8In();
      }, 800);
      break;
    case 9:
      page8Out();
      setTimeout(() => {
        page9In();
      }, 800);
      break;
    case 10:
      page9Out();
      setTimeout(() => {
        page10In();
      }, 800);
      break;
    case 11:
      page10Out();
      setTimeout(() => {
        page11In();
      }, 800);
      break;
    case 12:
      page11Out();
      setTimeout(() => {
        page12In();
      }, 800);
      break;
    case 13:
      page12Out();
      setTimeout(() => {
        page13In();
      }, 800);
      break;
    case 14:
      page13Out();
      setTimeout(() => {
        page14In();
      }, 800);
      break;
    case 15:
      page14Out();
      setTimeout(() => {
        page15In();
      }, 800);
      break;
    case 16:
      page15Out();
      setTimeout(() => {
        page16In();
      }, 800);
      break;
    case 17:
      page16Out();
      setTimeout(() => {
        page17In();
      }, 800);
      break;
    case 18:
      page17Out();
      setTimeout(() => {
        page18In();
      }, 800);
      break;
    case 19:
      page18Out();
      setTimeout(() => {
        page19In();
      }, 800);
      break;
    case 20:
      page19Out();
      setTimeout(() => {
        page20In();
      }, 800);
      break;
    case 21:
      page20Out();
      setTimeout(() => {
        page21In();
      }, 800);
      break;
    case 22:
      page21Out();
      setTimeout(() => {
        page22In();
      }, 800);
      break;
    default:
      break;
  }
});
