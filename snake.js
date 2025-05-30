let snake=[0];
cellElement=document.querySelectorAll('.cell');
let x;

let movId;

function generatefood(){
    x=Math.random();
    console.log(x);
    x=Math.floor(x*144);
    console.log(x);
    cellElement[x].innerHTML='.';
    cellElement[x].classList.add('food');
}

generatefood();
snakemov();
updatescore();

document.addEventListener('keydown',(e)=>{
     if(e.key==='a'){
        left();
    }
    else if(e.key==='d'){
        right();
    }
    else if(e.key==='s'){
        down();
    }
    else if(e.key==='w'){
        up();
    }
});
   

function endgame(){
    for(let i=0;i<snake.length-1;i++){
        if (snake[snake.length-1]===snake[i]&&!(snake.length===1)){
        snake.forEach((cell)=>{
            cellElement[cell].classList.remove('snakecell');
            cellElement[cell].classList.remove('head');
        })
        alert(`gameover! score:${snake.length-1}`);
        snake=[0];
        snakemov();
        updatescore();
        }
    }
}

function insidesnake()
{
    for(let i=0;i<snake.length-1;i++){
        if(x===snake[i])
        {
            cellElement[x].innerHTML='';
            generatefood();
        }
    }
}

function updatescore(){
    let scoree=snake.length-1;
    let scoreElement=document.querySelector('.score');
    scoreElement.innerHTML=`score:${scoree}`
    console.log(scoree);
}

function snakemov(){
    snake.forEach((cell)=>{
        cellElement[cell].classList.add('snakecell');
    })

    cellElement[snake[snake.length-1]].classList.add('head');
}

function right(){

    snake.forEach((cell)=>{
        cellElement[cell].classList.remove('snakecell');
    })

    cellElement[snake[snake.length-1]].classList.remove('head');
    
    /*for(let i=0;i<snake.length;i++)
    {
        //snake[i]++;
        snake[i]=(snake[i]+1)%8+Math.floor(snake[i]/8)*8;
    }*/
   let head=snake[snake.length-1];
   let newhead=(head+1)%12 + Math.floor(head/12)*12;
   snake.shift();
   snake.push(newhead);
    

   if (snake[snake.length-1]+1===x||snake[snake.length-1]-1===x||snake[snake.length-1]+12===x||snake[snake.length-1]-12===x)
    {
        snake.push(x);
        cellElement[x].innerHTML='';
        cellElement[x].classList.remove('food');
        generatefood();
    }

    /*if(snake[snake.length-1]===x){
        snake.push(x);
        cellElement[x].innerHTML='';
        cellElement[x].classList.remove('food');
        generatefood();
    }*/

    //eating();

    insidesnake();
    console.log(snake);
    snakemov();
    updatescore();
    endgame();

    clearInterval(movId);
    movId=setInterval(()=>{
        right();
    },300);

}

function left(){
    snake.forEach((cell)=>{
        cellElement[cell].classList.remove('snakecell');
    })

    cellElement[snake[snake.length-1]].classList.remove('head');
    /*(for(let i=0;i<snake.length;i++)
    {
        //snake[i]--;
        snake[i]=(snake[i]-1+8)%8+Math.floor(snake[i]/8)*8;
    }*/
    let head=snake[snake.length-1]; 
    let newhead= (head-1+12) % 12 + Math.floor(head/12)*12;
    snake.shift();
    snake.push(newhead);

    if (snake[snake.length-1]+1===x||snake[snake.length-1]-1===x||snake[snake.length-1]+12===x||snake[snake.length-1]-12===x)
    {
        snake.push(x);
        cellElement[x].innerHTML='';
        cellElement[x].classList.remove('food');
        generatefood();
    }

    insidesnake();
    console.log(snake);
    snakemov();
    //eating();
    updatescore();
    endgame();

    clearInterval(movId);
    movId=setInterval(()=>{
        left();
    },300);
}

function up(){
    snake.forEach((cell)=>{
        cellElement[cell].classList.remove('snakecell');
    })

    cellElement[snake[snake.length-1]].classList.remove('head');

    let head=snake[snake.length-1];
    let newhead = (head-12+144)%144;
    console.log(head);
    snake.shift();
    snake.push(newhead);
    if (snake[snake.length-1]+1===x||snake[snake.length-1]-1===x||snake[snake.length-1]+12===x||snake[snake.length-1]-12===x)
    {
        snake.push(x);
        cellElement[x].innerHTML='';
        cellElement[x].classList.remove('food');
        generatefood();
    }
   
    insidesnake();
    console.log(snake);
    snakemov();
   // eating();
   updatescore();
   endgame();

   clearInterval(movId);
   movId=setInterval(()=>{
        up();
    },300);
}

function down(){
    snake.forEach((cell)=>{
        cellElement[cell].classList.remove('snakecell');
    })

    cellElement[snake[snake.length-1]].classList.remove('head');
    
    let head=snake[snake.length-1];
    let newhead= (head+12+144)%144;
    snake.shift(newhead);
    snake.push(newhead);
    if (snake[snake.length-1]+1===x||snake[snake.length-1]-1===x||snake[snake.length-1]+12===x||snake[snake.length-1]-12===x)
    {
        snake.push(x);
        cellElement[x].innerHTML='';
        cellElement[x].classList.remove('food');
        generatefood();
    }

    insidesnake();
    console.log(snake);
    snakemov();
    //eating();
    updatescore();
    endgame();

    clearInterval(movId);
    movId=setInterval(()=>{
        down();
    },300);

}