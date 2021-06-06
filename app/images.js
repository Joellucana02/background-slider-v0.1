export function Images(){
    const $div = document.createElement('div');
    const pictures = [
        './app/media/nature1.jpg',
        './app/media/nature2.jpg',
        './app/media/nature3.jpg',
        './app/media/nature4.jpg',
    ]
    $div.innerHTML = `
        <img src='${pictures[0]}'/>
        <p>Image </p>
        
    `;
    let $btn = document.querySelector('.btn1');
    console.log($btn)
    let i=1;
    $btn.addEventListener('click', (e)=>{
        console.log(i)
        $div.innerHTML += `
        <img src='${pictures[i++]}'/>
        <p>Image </p>
        `;
        if(i==4){
            i = 0
        }
        
    })
    
    return $div;
}
