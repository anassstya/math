export class Math1{
  constructor(){
    this.attack;
  }

  get(field){
    if(field === 1){
      return this.attack;
    }
    if(field > 1 && field <= 10){
      return this.attack * (10 - field + 1) / 10; 
    };
  };

  set(attack){
    return this.attack = attack;
  };

  durman(field){
    if(field === 1){
      return this.attack;
    }
    if(field > 1 && field <= 10){
      this.attack = this.attack * (10 - field + 1) / 10;
      return Math.round(this.attack - Math.log2(field) * 5);
    }

    
  }
}

export class Magician extends Math1 {};
export class Deamom extends Math1 {};

let deamonExm  = new Deamom();
let magicianExm = new Magician();
deamonExm.set(100);
magicianExm.set(100);
deamonExm.get(5);
magicianExm.durman(5);

