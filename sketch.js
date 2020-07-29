//https://youtu.be/3rQ6U3MAH5s
var tela = 0;
var largura = 300;
var altura = 80;
var xMenu = 180;
var yMenu1= 150;
var yMenu2= 250;
var yMenu3= 350;
var lJogo = 85;
var pontos = 0;
var x=[], y=[];
let imgAnd, imgNil, bg0, bg1, bg2, bg3;
let qmark
let abelha, bola, casa, dedo, escova, faca, gato, helicoptero, igreja, jaca, lapis, manga, navio, ovo, papagaio;
var palavras = ["Abelha", "Bola", "Casa", "Dedo", "Escova", "Faca", "Gato", "Helicóptero", "Igreja", "Jaca", "Lápis", "Manga", "Navio", "Ovo", "Papagaio"];
var figuras = [abelha, bola, casa, dedo, escova, faca, gato, helicoptero, igreja, jaca, lapis, manga, navio, ovo, papagaio];

var randomp = Math.floor(Math.random()*palavras.length);
var randomf = Math.floor(Math.random()*figuras.lenght);


function preload() {
  imgAnd = loadImage('ImgCreditos/And.jpg');
  imgNild = loadImage('ImgCreditos/nilm.jpg');
  bg0 = loadImage('bg/bg0.png');
  bg1 = loadImage('bg/bg1.png');
  bg2 = loadImage('bg/bg2.png');
  bg3 = loadImage('bg/bg3.jpg');
  qmark = loadImage('Jogo/qmark.png');
  abelha = loadImage('Jogo/abelha.png');
  bola = loadImage('Jogo/bola.png');
  casa = loadImage('Jogo/casa.png');
  dedo = loadImage('Jogo/dedo.png');
  escova = loadImage('Jogo/escova.png');
  faca = loadImage('Jogo/faca.png');
  gato = loadImage('Jogo/gato.png');
  helicoptero = loadImage('Jogo/helicoptero.png');
  igreja = loadImage('Jogo/igreja.png');
  jaca = loadImage('Jogo/jaca.png');
  lapis = loadImage('Jogo/lapis.png');
  manga = loadImage('Jogo/manga.png');
  navio = loadImage('Jogo/navio.png');
  ovo = loadImage('Jogo/ovo.png');
  papagaio = loadImage('Jogo/papagaio.png');
  
}

function setup() {
  createCanvas(650, 500);
}

function keyPressed(){
  if(key == 'Escape' ){
    tela=0;
  }
}

function mousePressed(){
   for(i=0; i<6; i++){
     for(j=0; j<5; j++){
       if(mouseX > x[i] && mouseX < x[i]+lJogo && mouseY > y[j] && mouseY < y[j]+lJogo){
         alert(palavras[randomp])
        
       }
     }
   }
}
 

    

function draw() {
  //Tela de Menu
    if(tela==0){
      //Menu
    background(bg3);
      stroke(0);
      textFont('Impact');
      textSize(60);
      textAlign(CENTER);
      fill('#E6E6FA')
      text('MENU', 330, 100);
      
      //Menu Jogar     
      if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu1 && mouseY < yMenu1+altura){
        stroke(255);
        strokeWeight(2);
        fill('#B0E0E6')
        rect(xMenu, yMenu1, largura, altura, 10);
         if (mouseIsPressed) {
           tela = 3;
         }
      }
      
      textFont('Georgia');
      stroke(0);
      textSize(50);
      textAlign(CENTER);
      fill('#E0FFFF')
      text('JOGAR', 330, 210);

      //Menu Instruções
      if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu2 && mouseY < yMenu2+altura){
        stroke(255);
        strokeWeight(2);
        fill('#B0E0E6')
        rect(xMenu, yMenu2, largura, altura, 10);
         if (mouseIsPressed) {
           tela = 1;
         }
      }
      
      stroke(0);
      textSize(40);
      textAlign(CENTER);
      fill('#E0FFFF')
      text('INSTRUÇÕES', 330, 305);
      
      //Menu Créditos
      if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu3 && mouseY < yMenu3+altura){
        stroke(255);
        strokeWeight(2);
        fill('#B0E0E6')
        rect(xMenu, yMenu3, largura, altura, 10);
         if (mouseIsPressed) {
           tela = 2;
         }
      }
      
      stroke(0)
      textSize(50);
      textAlign(CENTER);
      fill('#E0FFFF');
      text('CRÉDITOS', 330, 410);
      
  }
  //Tela de Instruções
    if(tela==1){
      background(bg1);
      textFont('Impact');
      fill('#FFFFFF')
      textAlign(CENTER);
      textSize(60);
      text('INSTRUÇÕES', 330, 70);
      
      textFont('Georgia');
      textAlign(LEFT);
      textSize(20);
      text('Ano: 1º Ano - Ensino Fundamental;\n\nHabilidade: (EF15LP18) Relacionar texto com ilustrações e outros \nrecursos gráficos - Língua Portuguesa;\n\nJogo da Memória que associa palavras a figuras. ', 10, 200);
      
  }else
  //Tela de Créditos
    if(tela==2){
      background(bg2);
      stroke(0)
      textFont('Impact');
      textAlign(CENTER);
      textSize(60);
      text('CRÉDITOS', 330, 70);
      
      textFont('Georgia');
      textAlign(LEFT);
      textSize(20);
      image(imgAnd,10 , 80, 150, 150);
      text('João Andreiw Fernandes de Oliveira: Programador', 0, 260);
      image(imgNild, 10,300, 150, 150);
      text('Anilda Xavier de Oliveira: Pedagoga', 0, 480)
  
    }else
  //Fase1
    if(tela==3){
      background(bg3);
      for(i=0; i<6; i++){
        x[i]=i*90+55;
        y[i]=i*90+50;
      }
      
      for(i=0; i<6; i++){
        for(j=0; j<5; j++){
          stroke(0);
          fill('white');
          rect(x[i], y[j], lJogo, lJogo, 5);
          image(qmark, x[i], y[j], lJogo, lJogo);
          
          if(mouseX > x[i] && mouseX < x[i]+lJogo && mouseY > y[j] && mouseY < y[j]+lJogo){
            
            fill('#778899');
            rect(x[i], y[j], lJogo, lJogo, 5);
            image(qmark, x[i], y[j], lJogo, lJogo);
            if(mousePressed){
        
              }             
            }
          }
        }
      }
    }