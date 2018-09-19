window.onload = function(){
    
    console.log("loaded");
    
    
    function Base(name){
        this.name = name;
        
        this.getNameFull = function(){
            
             return this.name + " blada"
            
        }
    }
    
    var test = new Base("dupa");
    
    console.log(test.getNameFull());
    
    
    function salad(name, salt){
        
        Base.call(name, this);
        
        this.salt = salt;
        
    }
    
    salad.prototype = Base;
    salad.prototype.constructor = salad;
    
    var cesar = new salad("ces", "more");
    
    console.log(cesar);

}