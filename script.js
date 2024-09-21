const body = document.getElementsByTagName("body")[0]
body.style.backgroundColor = "red"

function setColor(name){
 body.style.backgroundColor = name;
}
setColor("green")
setColor("purple")

function RandomColor(){
  const Red = Math.round(Math.random() * 255)
  const Green = Math.round(Math.random() * 255)
  const Blue = math.round(Math.random() * 255)

  const color =`rgb(${Red}, ${Green}, ${Blue})`
  body.style.backgroundColor = color;

}
RandomColor()