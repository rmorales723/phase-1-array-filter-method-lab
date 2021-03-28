// Code your solution here function 
function findMatching(collection, string){
    return collection.filter(match => 
        match.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(collection, string){
    return collection.filter(match => 
        match.toLowerCase().indexOf(string.toLowerCase()) === 0);
}

function matchName(collection, string){
    return collection.filter(file => file.name  === string);
}