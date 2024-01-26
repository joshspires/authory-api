 const apiUrl = "https://api-production.authory.com/api/v1/list-content?skip=0&take=9&collection=All-Content-c9a89036ca0ee4ccabd188471048d6016&key=XXXXXXXXXXXXXXXXXXXX";

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const contentArray = data.content;

      // Create the container div
      const containerDiv = document.createElement('div');
      containerDiv.className += "grid grid-cols-1 sm:grid-cols-3 gap-7";

      // Iterate over the content array
      for (const content of contentArray) {
        // Extract the content details
        const title = content.title;
        const image = content.previewImage;
        const description = content.description;
        const source = content.source;
        const date = new Date(content.date);
        const pageUrl = content.pageUrl;

        // Create the content item div
        const contentDiv = document.createElement('div');

        // Create the HTML elements
        const imageLink = document.createElement('a');
        imageLink.href = pageUrl;
        imageLink.target = "_blank";

        const imageElement = document.createElement('img');
        imageElement.className += "relative w-full rounded-lg";
        imageElement.src = image;

        const infoDiv = document.createElement('div');
        infoDiv.className += "bg-zinc-200 p-5 rounded-xl";

        const titleElement = document.createElement('h3');
        titleElement.className += "text-lg font-mono";

        // Create the link element
        const titleLink = document.createElement('a');
        titleLink.href = pageUrl;
        titleLink.target = "_blank";
        titleLink.textContent = title;

        // Append the link element to the title element
        titleElement.appendChild(titleLink);

        const descriptionElement = document.createElement('p');
        descriptionElement.className += "text-base font-sans";
        descriptionElement.textContent = description;

        const sourceElement = document.createElement('div');
        sourceElement.className += "text-sm font-sans";
        sourceElement.textContent = source;

        const dateElement = document.createElement('div');
        dateElement.className += "text-sm font-sans";
        dateElement.textContent = date.toDateString();

        // Append the elements to the content item div
        infoDiv.appendChild(titleElement);
        infoDiv.appendChild(sourceElement);
        infoDiv.appendChild(dateElement);
        infoDiv.appendChild(descriptionElement);

        imageLink.appendChild(imageElement);
        contentDiv.appendChild(imageLink);
        contentDiv.appendChild(infoDiv);

        // Append the content item div to the container div
        containerDiv.appendChild(contentDiv);
      }

      // Append the container div to the document body or any desired container
      document.getElementById("content-frame").appendChild(containerDiv);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData();
