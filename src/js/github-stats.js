const username = "gabrieelsza";

async function getRepos() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`)

    if (!response.ok) {
        throw new Error(`Erro ao buscar repositórios: ${response.status}`);
    }

    return await response.json();
}

async function renderRepos() {
    const repos = await getRepos();

    const numberRepositorios = document.getElementById("repo"); 
    numberRepositorios.textContent = repos.length + "+"; 
}

renderRepos();