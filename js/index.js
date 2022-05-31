document.body.onload = LoadSection;

/**
 * 加载文章
 */
function LoadSection()
{
    console.log("加载文章");
    // 获取容器
    let container = document.getElementById("container");

    // json 地址
    let json_url = "json/data.json"

    // 请求 json 数据
    let req = new XMLHttpRequest();
    req.open("get", json_url);
    req.send(null);
    req.onload = function()
    {
        // json 文件存在
        if(req.status == 200)
        {
            // 解析 json
            json_data = JSON.parse(req.responseText);
            let sections = json_data.sections;
            let len = sections.length;
            for(let i = 0; i < len; i++)
            {
                AddSection(container, sections[i]);
            }
        }
        else
        {
            console.log("json 不存在");
        }
    }
}

/**
 * 添加文章
 * @param {HTMLElement} container 容器
 * @param {object} section 数据项
 */
function AddSection(container, section)
{
    let newSection = document.createElement("div");
    newSection.className = "section";

    let newTitle = document.createElement("h2");
    let titleContent = document.createTextNode(section.title);
    newTitle.appendChild(titleContent);
    newSection.appendChild(newTitle);

    let newTime = document.createElement("p");
    let timeContent = document.createTextNode(section.time);
    newTime.appendChild(timeContent);
    newSection.appendChild(newTime);

    let newImageDiv = document.createElement("div");
    let newImage = document.createElement("p");
    let ImageContent = document.createTextNode(section.image);
    newImage.appendChild(ImageContent);
    newImageDiv.appendChild(newImage);
    newSection.appendChild(newImageDiv);

    let newMore = document.createElement("p");
    let moreContent = document.createTextNode("更多");
    newMore.appendChild(moreContent);
    newSection.appendChild(newMore);

    container.appendChild(newSection);
}