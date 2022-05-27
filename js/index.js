document.body.onload = LoadSection;

function LoadSection()
{
    console.log("加载文章");
    let container = document.getElementById("container");
    let sum = 5;
    for(let i = 0; i < sum; i++)
    {
        AddSection(container, i);
    }
}

function AddSection(container, index)
{
    let newSection = document.createElement("div");
    newSection.className = "section";

    let newTitle = document.createElement("h2");
    let titleContent = document.createTextNode("Title" + index);
    newTitle.appendChild(titleContent);
    newSection.appendChild(newTitle);

    let newTime = document.createElement("p");
    let timeContent = document.createTextNode("Time" + index);
    newTime.appendChild(timeContent);
    newSection.appendChild(newTime);

    let newImageDiv = document.createElement("div");
    let newImage = document.createElement("p");
    let ImageContent = document.createTextNode("Image" + index);
    newImage.appendChild(ImageContent);
    newImageDiv.appendChild(newImage);
    newSection.appendChild(newImageDiv);

    let newMore = document.createElement("p");
    let moreContent = document.createTextNode("More" + index);
    newMore.appendChild(moreContent);
    newSection.appendChild(newMore);

    container.appendChild(newSection);
}