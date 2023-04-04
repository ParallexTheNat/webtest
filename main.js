let title = document.getElementById("title");
let mywork = document.getElementById("mywork");
let contactme = document.getElementById("contactme");
const current = ["b", "s", "x", "1", "s", "d", "j", "&"]



function makeid() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const name = ["n", "a", "t", "a", "n", "i", "e", "l"]
    
    for (let i=0; i < 7; i++){
        while (name[i] != current[i]){
            current[i] = name[i]
            title.innerHTML = current.join("")
            console.log(current)

            const list = [1, 2, 3, 4]
            const doSomething = async () => {
                for (const item of list) {
                    await sleep(1000)
                    console.log('🦄')    
                }
            }
            doSomething

            
        }
    }

}


mywork.addEventListener("click", function(){
    makeid()
});
