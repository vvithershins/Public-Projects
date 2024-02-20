// Get all album containers on the Bandcamp collection page
let albumContainers = Array.from(document.querySelectorAll('.collection-item-container'));

// Define a function to extract artist name, album title, and link
function extractAlbumInfo(container) {
    const titleElement = container.querySelector('.collection-item-title');
    const artistElement = container.querySelector('.collection-item-artist');
    const linkElement = container.querySelector('.item-link');
    
    const title = titleElement.textContent.trim();
    const artist = artistElement.textContent.trim();
    const link = linkElement.href;
    
    return `${artist} - ${title}\n${link}`;
}

// Extract album info for each container
const albumInfoArray = albumContainers.map(extractAlbumInfo);

// Sort album info array alphabetically by artist name - album title
albumInfoArray.sort();

// Convert the array of album info into a string with each info on a new line
const textToSave = albumInfoArray.join('\n\n');

// Create a Blob object containing the text
const blob = new Blob([textToSave], { type: 'text/plain' });

// Create a temporary <a> element to trigger the download
const a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = 'bandcamp_albums.txt';

// Append the <a> element to the body and trigger the click event
document.body.appendChild(a);
a.click();

// Clean up by removing the <a> element
document.body.removeChild(a);
