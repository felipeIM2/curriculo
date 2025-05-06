
//Tamanho maximo de Skills    
let maxWidth = 240

// Controle de tamanho de porcentagem de Skills
let elements = {
   e1: 7,
   e2: 7,
   e3: 8,
   e4: 6,
   e5: 4,
   e6: 8,
   e7: 5,
   e8: 6,
   e9: 4,
   e10: 6,
}

let pixelValues = {}
Object.keys(elements).forEach(key => {
  let percentage = parseFloat(elements[key]);
  pixelValues[key] = (percentage*10)/100 * maxWidth;
});
 

let line = document.querySelectorAll(".line")
line.forEach((e) => {

  let p = e.querySelectorAll(".indicator")
    
  if (p[0].id) {
    switch (p[0].id) {
      case "1":
        let i1 = e.querySelector(".indicator");
        if (i1) {
          setTimeout(() => {
            i1.style.cssText = `background-color: #FF6B35; width:${pixelValues.e1}px;`;
          }, 800);
        }
        break;
      case "2":
        let i2 = e.querySelector(".indicator");
        if (i2) {
          setTimeout(() => {
            i2.style.cssText = `background-color: #3A86FF; width:${pixelValues.e2}px;`;
          }, 800);
        }
        break;
      case "3":
        let i3 = e.querySelector(".indicator");
        if (i3) {
          setTimeout(() => {
            i3.style.cssText = `background-color: #FFD60A; width:${pixelValues.e3}px;`;
          }, 800);
        }
        break;
      case "4":
        let i4 = e.querySelector(".indicator");
        if (i4) {
          setTimeout(() => {
            i4.style.cssText = `background-color: #4361EE; width:${pixelValues.e4}px;`;
          }, 800);
        }
        break;
      case "5":
        let i5 = e.querySelector(".indicator");
        if (i5) {
          setTimeout(() => {
            i5.style.cssText = `background-color: #A0A0A0; width:${pixelValues.e5}px;`;
          }, 800);
        }
        break;
      case "6":
        let i6 = e.querySelector(".indicator");
        if (i6) {
          setTimeout(() => {
            i6.style.cssText = `background-color: #4CC9F0; width:${pixelValues.e6}px`;
          }, 800);
        }
        break;
      case "7":
        let i7 = e.querySelector(".indicator");
        if (i7) {
          setTimeout(() => {
            i7.style.cssText = `background-color: #52B788; width:${pixelValues.e7}px`;
          }, 800);
        }
        break;
      case "8":
        let i8 = e.querySelector(".indicator");
        if (i8) {
          setTimeout(() => {
            i8.style.cssText = `background-color: #00B4D8; width:${pixelValues.e8}px`;
          }, 800);
        }
        break;
      case "9":
        let i9 = e.querySelector(".indicator");
        if (i9) {
          setTimeout(() => {
            i9.style.cssText = `background-color:rgb(67, 145, 190); width:${pixelValues.e9}px`;
          }, 800);
        }
        break;
        case "10":
          let i10 = e.querySelector(".indicator");
          if (i10) {
            setTimeout(() => {
              i10.style.cssText = `background-color: #007F5F; width:${pixelValues.e10}px`;
            }, 800);
          }
          break;
      default:
        console.log("ID não reconhecido");
        break;
    }
  }
})


  let experienceSide = document.querySelectorAll(".card-experience")
  experienceSide.forEach(e => {
    setTimeout(() => {
      e.style.cssText = "opacity: 1;"
    }, 600);
  });

  let coursesSide = document.querySelectorAll(".card-courses")
  coursesSide.forEach(e => {
    setTimeout(() => {
      e.style.cssText = "opacity:1"
    }, 800);
  }); 
 
 
  
  document.addEventListener('DOMContentLoaded', function() {

    // Animação para os cards
    const cards = document.querySelectorAll('.card-experience, .card-courses');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 300 + (index * 100));
    });
    
    // Animação para os projetos
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, index) => {
      project.style.opacity = '0';
      
      setTimeout(() => {
        project.style.opacity = '1';
      }, 600 + (index * 150));
    });

  });

