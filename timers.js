function countDown(nums) {
    let temp = nums;
    function decrease() {
        temp--;
        if (temp < 1) {
            console.log("DONE!");
            clearInterval(id);
        } else {
            console.log(temp);
        }
    }

    let id = setInterval(decrease, 1000);

}


function randomGame() {
    let temp = 0;
    let counter = 0;
    function randGen() {
        temp = Math.random();
        counter++;
        if (temp > 0.75) {
            clearInterval(id);
            //console.log(counter);
        } else {
            console.log(temp);
        }
    }

    let id = setInterval(randGen, 1000);

}
