class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    //this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    themes.play();
    this.title.html("110m Hurdle Race");
    this.title.position(displayWidth/2 - 200, 30);
    this.title.style("color", "rgb(0, 57, 127)")
    this.title.style("font-size", "50px")

    background(bg);

    this.input.position(displayWidth/2 +300 , displayHeight/2 -30);
    this.button.position(displayWidth/2 + 330, displayHeight/2);
   // this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 +300, displayHeight/2 - 30);
    });

    //this.reset.mousePressed(()=>{
    //player.updateCount(0);
    //  game.update(0);
  // });

  }
}
