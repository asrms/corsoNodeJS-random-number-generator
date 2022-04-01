



function RNG(min: number,max: number){
    const rng = Math.random();
    return Math.trunc(rng * (max - min) + min);

}

function RNGDec(min: number,max: number, precision:number){

    if(precision < 0){
        throw new Error("il numero deve essere positivo");
        
    }

    
    if(!Number.isInteger(precision)){
        throw new Error("il numero deve essere intero");
        
    }


    const rng = Math.random();
    let n = rng * (max - min) + min;
      
    n = n * Math.pow(10, precision);
    n = Math.floor(n);
    n = n / Math.pow(10, precision);


    return n;

}

function RNGDecCorso(min: number,max: number, precision:number){

    if(precision < 0){
        throw new Error("il numero deve essere positivo");
        
    }

    
    if(!Number.isInteger(precision)){
        throw new Error("il numero deve essere intero");
        
    }

    const multFactor = Math.pow(10, precision);


    return RNG(min * multFactor,max * multFactor) / multFactor;

}



function RNGSequence(len: number, min: number, max:number){
    
    if(len > max - min){
        throw new Error(`Non posso trovare ${len} numeri tra ${min} e ${max}`);
    }
    
    const res: number[] = [];

    try {

        while(res.length < len){
            const rn = RNG(min,max);
    
            if(res.includes(rn)){
                continue;
            }
            res.push(rn);
        }
       return res;  
    } catch (error) {
        console.log(error)
        
    }


}

const ruote = ['Bari','Cagliari','Firenze','Genova','Milano','Napoli','Palermo','Roma','Torino','Venezia','Nazionale'];

const estrazioni: { [ruota: string]: number[]} = {};

for (const ruota of ruote){
    const estrazione = RNGSequence(5,1,100);

    estrazioni[ruota]= estrazione;

  

}


console.log(JSON.stringify(estrazioni, null, 2)); 

/*  console.log(RNGDec(1,5,0)) */

/* console.log(RNGDecCorso(1,5,3)) */

