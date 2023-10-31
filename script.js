class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    
     getPG(movieArray) {
    }
  }
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

  console.log(casinoRoyale);


  class Circle{
    Circle(radius,color){
        this.radius=radius;
        this.color=color

    }
    set radius(sample){
        return `${this.radius}`

    }
    get radius(){
        return `${this.readius}`
    }
    get color(){
        return `${this.color}`
    }
    set radius(sample){
        return `${this.color}`

    }
    tostring(n,value){
        return `Circle[Radius=${n}]`
    }
    area(){
        return 22/7*Math.sqrt(this.radious);
    }
    circumference(){
        return 2*22/7*this.radius
    }
  }
  var a= new Circle(1.0,"red")
  console.log(a)
  var string=new Circle();
  console.log(string.tostring(1.0,"RED"))