var once = function(fn) {
    return function(...args){
        return fn.reduceRight((a,b,c) => fn(acc), x);
    }
        
};
