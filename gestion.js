// Gestion des erreurs
// Modifions la fonction awaitCall pour gérer les erreurs correctement. Si l'appel d'API échoue, détectez l'erreur et consignez un message d'erreur convivial.

async function awaitCall() {
    // Simulation d'un appel API avec un délai
    const fetchData = () => new Promise((resolve, reject) => 
        setTimeout(() => reject(new Error("Échec de l'appel API")), 2000) // Simule une erreur
    );

    try {
        const data = await fetchData(); // Attente de la réponse de l'API
        console.log(data);
    } catch (error) {
        console.error("Une erreur est survenue :", error.message);
    }
}