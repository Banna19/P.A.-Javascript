//Écrivons une fonction iterateWithAsyncAwait qui prend un tableau de valeurs et consigne chaque valeur avec un délai de 1 seconde entre les journaux.

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Délai de 1 seconde
    }
}