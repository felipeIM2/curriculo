

let maxWidth = 240

let elements = {
   e1: 8,
   e2: 6,
   e3: 9,
   e4: 7,
   e5: 6,
   e6: 7,
   e7: 6,
   e8: 5,
   e9: 6,
   e10: 4,
}

let pixelValues = {}
Object.keys(elements).forEach(key => {
  let percentage = parseFloat(elements[key]);
  pixelValues[key] = (percentage*10)/100 * maxWidth;
});
 
//console.log()

let line = document.querySelectorAll(".line")

line.forEach((e) => {

  let p = e.querySelectorAll("p")

  if (p[0].id) {

    switch (p[0].id) {
      case "1":
        let i1 = e.querySelector(".indicator");
        if (i1) {
          setTimeout(() => {
            i1.style.cssText = `border-bottom:rgb(224, 112, 8) solid 4px; width:${pixelValues.e1}px;`;
          }, 800);
        }
        break;
      case "2":
        let i2 = e.querySelector(".indicator");
        if (i2) {
          setTimeout(() => {
            i2.style.cssText = `border-bottom:rgb(53, 142, 202) solid 4px; width:${pixelValues.e2}px;`;
          }, 800);
        }
        break;
      case "3":
        let i3 = e.querySelector(".indicator");
        if (i3) {
          setTimeout(() => {
            i3.style.cssText = `border-bottom:rgb(241, 191, 24) solid 4px; width:${pixelValues.e3}px;`;
          }, 800);
        }
        break;
      case "4":
        let i4 = e.querySelector(".indicator");
        if (i4) {
          setTimeout(() => {
            i4.style.cssText = `border-bottom:#3178C6 solid 4px; width:${pixelValues.e4}px;`;
          }, 800);
        }
        break;
      case "5":
        let i5 = e.querySelector(".indicator");
        if (i5) {
          setTimeout(() => {
            i5.style.cssText = `border-bottom:rgb(165, 165, 165) solid 4px; width:${pixelValues.e5}px;`;
          }, 800);
        }
        break;
      case "6":
        let i6 = e.querySelector(".indicator");
        if (i6) {
          setTimeout(() => {
            i6.style.cssText = `border-bottom:rgb(90, 190, 212) solid 4px; width:${pixelValues.e6}px`;
          }, 800);
        }
        break;
      case "7":
        let i7 = e.querySelector(".indicator");
        if (i7) {
          setTimeout(() => {
            i7.style.cssText = `border-bottom:rgb(79, 148, 65) solid 4px; width:${pixelValues.e7}px`;
          }, 800);
        }
        break;
      case "8":
        let i8 = e.querySelector(".indicator");
        if (i8) {
          setTimeout(() => {
            i8.style.cssText = `border-bottom: #00BCFF solid 4px; width:${pixelValues.e8}px`;
          }, 800);
        }
        break;
      case "9":
        let i9 = e.querySelector(".indicator");
        if (i9) {
          setTimeout(() => {
            i9.style.cssText = `border-bottom:rgb(53, 96, 129) solid 4px; width:${pixelValues.e9}px`;
          }, 800);
        }
        break;
        case "10":
          let i10 = e.querySelector(".indicator");
          if (i10) {
            setTimeout(() => {
              i10.style.cssText = `border-bottom: #00684A solid 4px; width:${pixelValues.e10}px`;
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
alert('Os icones em "Contatos" contém Links')
