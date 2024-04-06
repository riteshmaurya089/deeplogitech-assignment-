document.addEventListener("DOMContentLoaded", function() {
    fetch('news.json')
        .then(response => response.json())
        .then(data => {
            const latestStoriesElement = document.getElementById("latest-stories");
            data.forEach(story => {
                const storyElement = document.createElement("div");
                storyElement.classList.add("story");

                const titleLink = document.createElement("a"); // Create anchor element for title
                titleLink.classList.add("title-link"); // Optionally add a class for styling
                titleLink.textContent = story.title; // Set title text
                titleLink.href = story.link; // Set href to story link
                titleLink.target = "_blank"; // Open link in new tab

                storyElement.appendChild(titleLink); // Append title link to story element

                latestStoriesElement.appendChild(storyElement); // Append story element to container
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});


