export async function getAllLeases() {
  try {
    const response = await fetch("/logements.json");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getOneLease(id) {
  try {
    const response = await getAllLeases();
    return response.find((logement) => logement.id === id);
  } catch (error) {
    console.error(error);
  }
}
