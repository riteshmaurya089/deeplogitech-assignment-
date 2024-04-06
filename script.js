document.addEventListener("DOMContentLoaded", function() {
    fetch('news.json')
    .then(response => response.json())
    .then(data => {
    const latestStoriesElement = document.getElementById("latest-stories");
    data.forEach(story => {
    const storyElement = document.createElement("div");
    storyElement.classList.add("story");

    const titleLink = document.createElement("a"); 
    titleLink.classList.add("title-link"); 
    titleLink.textContent = story.title; 
    titleLink.href = story.link; 
    titleLink.target = "_blank"; 

    storyElement.appendChild(titleLink); 

    latestStoriesElement.appendChild(storyElement); 
    });
    })
    .catch(error => console.error('Error fetching data:', error));
});


