// fetch Data

// const getLists = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await response.json();
//   //   console.log("***", data);
//   displayListInfo(data);
//   return data;
// };

// const displayListInfo = (data) => {
//   const listDiv = document.getElementById("lists");
//   data.slice(0, 100).forEach((item) => {
//     const unorderedList = document.createElement("ul");
//     unorderedList.className = "ordered-list";

//     const list = document.createElement("li");
//     list.className = `listID-${item.id}`;
//     list.textContent = `${item.id}. ${item.title} `;

//     unorderedList.appendChild(list);
//     listDiv.appendChild(unorderedList);
//   });
// };

// ! Improvement needed in the above code
// ! Error Handling: Add error handling to manage any issues during the fetch operation.
// ! Code Organization: Keep the JavaScript code clean and well-organized by separating concerns, such as creating a separate function for creating list items.
// ! Accessibility: Improve accessibility by adding proper ARIA attributes and semantic HTML elements.
// ! Loading State: Add a loading state to inform users that data is being fetched.

// Error Handling done!
const getLists = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    displayListInfo(data);
    // return data;
  } catch (error) {
    console.error("Fetch error:", error);
    document.getElementById("lists").innerHTML = `<p>Error
    ${error}</p>`;
  }
};

// Code Organization
const displayListInfo = (data) => {
  const listDiv = document.getElementById("lists");

  listDiv.innerHTML = "";

  data.slice(0, 100).forEach((item) => {
    const unorderedList = createList(item);
    listDiv.appendChild(unorderedList);
  });
};

// Make createList function
const createList = (item) => {
  const unorderedList = document.createElement("ul");
  unorderedList.className = "ordered-list";

  unorderedList.setAttribute("role", "list");

  const list = document.createElement("li");
  list.className = `listId-{item.id}`;
  list.textContent = item.title;

  unorderedList.append(list)
  return unorderedList
};
