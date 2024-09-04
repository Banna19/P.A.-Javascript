// Écrivons une fonction chainedAsyncFunctions qui appelle trois fonctions asynchrones distinctes de manière séquentielle.

async function asyncFunction1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Message de la fonction 1");
}

async function asyncFunction2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Message de la fonction 2");
}

async function asyncFunction3() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Message de la fonction 3");
}

async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}
