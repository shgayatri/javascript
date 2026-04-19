function CreatePencil(name,price,color,company){
    this.name=name;
    this.proce=price;
    this.color=color;
    this.company=company;
    this.write=function(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.append(h1);
    };
}
let pencil1= new CreatePencil("Natraj",10,"blue","Natraj");
let pencil2= new CreatePencil("Apsara",15,"red","Apsara");