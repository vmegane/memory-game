function joinArrays(x,y,z) {
    const result = [...x, ...y, ...z];
    return result.sort( (a,b) => a - b );
}

const x = [21,3];
const y = [0,12];
const z = [42,5, 2];

console.log(joinArrays(x,y,z));

