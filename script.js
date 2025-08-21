console.log("Portfolio loaded!");
console.log("Variable from GitHub Actions:", window.CONFIG);
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

function mazeA(val) {
    return val * 42;
}

function mazeB(val) {
    return mazeA(val) + 1337;
}

function mazeC(val) {
    return mazeB(val) ^ 0xdeadbeef;
}

function validatePass(input) {
    const base64Encoded = btoa(input);
    const chunks = base64Encoded.match(/.{1,2}/g);
    const reversedChunks = chunks.reverse().join('');
    const hashed = simpleHash(reversedChunks);
    const finalValue = mazeC(hashed);

    const storedObfuscated = -205430528;

    return finalValue === storedObfuscated;
}