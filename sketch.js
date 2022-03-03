var ladodireito
var ladoesquerdo
var corredor 
var rua
var runner
var estrada
function preload(){
  //imagens pré-carregadas
runner = loadAnimation ("Runner-1.png", "Runner-2.png");
estrada = loadAnimation ("path.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui

  rua = createSprite (200,200);
  rua.addAnimation ("path.png", estrada);
  rua.velocityY = 3
  rua.scale = 1.4
  corredor = createSprite (65,350,20,20);
  corredor.addAnimation ("Runner-1.png", runner);
  corredor.scale = 0.08
  ladoesquerdo = createSprite (0,200,60,400)
  ladodireito = createSprite (400,200,60,400)
  ladoesquerdo.visible = false
  ladodireito.visible = false
}

function draw() {
  background(180);
drawSprites();
if (rua.y > 400){
  rua.y = height/2
}
corredor.x = mouseX
corredor.collide (ladodireito)
corredor.collide (ladoesquerdo)
}