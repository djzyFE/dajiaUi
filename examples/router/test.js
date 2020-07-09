function mult_9_9(){
    for(let i = 1; i<10; i++){
        let str = ''
        for(let j = 1; j <10; j++){
            if( j <= i){
                let space = '  '
                str += `${space}${j} * ${i} = ${i * j}`
            }else{
                continue
            }

        }
        console.error(str)
    }
}