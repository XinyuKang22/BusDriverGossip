const totalTime = 480;

// Change the inputs below:
const inputs = [[7 ,11 ,2 ,2 ,4 ,8 ,2 ,2],
[3 ,0 ,11, 8],
[5, 11, 8, 10, 3 ,11],
[5 ,9 ,2 ,5 ,0 ,3],
[7 ,4 ,8 ,2 ,8 ,1 ,0 ,5],
[3 ,6 ,8 ,9],
[4 ,2 ,11 ,3 ,3]];
console.log(gossip(inputs, [[0],[1],[2],[3],[4],[5],[6]], 0));


function gossip(inputs:Array<Array<number>>, gossips:any, count:number):any{
    console.log("count="+count);
    console.log(gossips);
    if (count == totalTime) {
        return "never";
    }
    let currStops = inputs.map(x => x[count%x.length]);
    let pairs = distinctArray(currStops).map(x => indexOfAll(currStops, x));
    for (let p of pairs) {
        let gossipUpdate = distinctArray(p.map((x: number) => gossips[x]).flat());
        for (let x of p) {
            gossips[x] = gossipUpdate;
        }
    }

    if (gossips.every((x: any[]) => x.length == gossips.length)) {
        return count + 1;
    } else {
        return gossip(inputs, gossips, count + 1);
    }
    
}

function indexOfAll (arr: any[], val: any) {
    return arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
}

function distinctArray (arrayWithDuplicates:any[]) {
    return arrayWithDuplicates.filter((n, i) => arrayWithDuplicates.indexOf(n) === i);
}