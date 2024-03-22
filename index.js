// Write your solution here!

    let cats = ["Milo", "Otis", "Garfield"]
    const allCats = [...cats]; 
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield")
  
    function destructivelyAppendCat (Browny) {
        cats.push(Browny)
        console.log(cats)
    }

    function destructivelyPrependCat(Browny) {
        cats.unshift(Browny)
        console.log(cats)
    }
l
    function destructivelyRemoveLastCat() {
        cats.pop()
        console.log(cats)
    }

    function destructivelyRemoveFirstCat() {
        cats.shift()
        console.log(cats)
    }

    function appendCat(cat) {
        return cats.concat(cat);
    }
    
    function prependCat(cat) {
        return [cat, ...cats];
    }
    
    function removeLastCat() {
        return cats.slice(0, -1);
    }


    function removeFirstCat() {
    return cats.slice(1);
}
    

    
    