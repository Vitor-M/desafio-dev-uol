for (let counter=1; counter <= 100; counter++){
    let message = '';
    
    if(counter % 15 === 0){
        message = 'TechOps';
    }else if(counter % 3 === 0){
        message = 'Tech';
    }else if(counter % 5 === 0){
        message = 'Ops';
    }

    console.log(message || counter);
}