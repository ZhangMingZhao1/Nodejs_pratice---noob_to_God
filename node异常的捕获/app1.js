try {
    throw new Error('exception')
} catch (e) {
    console.log(1);
    console.log(e);
}

console.log(2);
