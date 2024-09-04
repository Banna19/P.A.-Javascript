// Créer une fonction awaitCall qui simule l'extraction de données à partir d’une API. Utilisez await pour attendre la réponse de l'API, puis journalisez les données.

async function awaitCall() {
    // Simulation d'un appel API avec un délai
    const fetchData = () => new Promise(resolve => setTimeout(() => resolve("Données de l'API"), 2000));

    try {
        const data = await fetchData(); // Attente de la réponse de l'API
        console.log(data);
    } catch (error) {
        console.error("Erreur lors de l'appel de l'API :", error);
    }
}