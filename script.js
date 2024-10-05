// Example code to fetch the latest release info from GitHub API

const latestReleaseUrl = 'https://api.github.com/repos/your-repo/rawberry/releases/latest';

fetch(latestReleaseUrl)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.download button').innerHTML = data.name;
        document.querySelector('.download button').onclick = () => {
            window.location.href = data.zipball_url;
        };
    })
    .catch(error => console.error('Error fetching latest release:', error));
