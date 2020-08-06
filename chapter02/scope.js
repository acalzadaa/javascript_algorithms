test = "sss";
console.log(test);

/*Declaration with var: Functional Scope*/

/*
function scope1(){
    var top = "top";
    botton = "bottom";
    console.log(bottom);
    var bottom;
}
*/

scope1();

function scope2(print){
    var insideIf;
    if(print){
        insideIf='12';
    }
    console.log(insideIf);
}

scope2(true);

/*Declaration with let: Block Scope*/

/*function scope3(print){
    if(print){
        let insideIf = '12';
    }
    console.log(insideIf);
}

scope3(true);
*/

