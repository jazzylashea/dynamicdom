// // Create index.js and link to it in your HTML file.

// Your code should do the following:

// Maintain an array of objects representing all of the user's added bookmarks.
// Re-render the entire list of bookmarks any time a bookmark is added or removed.
// Use map to map the bookmark array to DOM elements.
// Here are some guiding questions:

// What event listeners do you need to start off with? click
// Can you correctly add bookmarks?
// What UI element allows a user to remove a previously added bookmark?
// How can you make sure that the correct bookmark is removed?

const addButton = document.getElementById("addbutton");
// console.log(newBookmarkName)


class Bookmark {
    constructor(siteName, siteURL){
        this.siteName = siteName;
        this.siteURL = siteURL;
    }

}

 
addButton.addEventListener("click", function() {
    const newBookmarkName = document.getElementById("siteName").value;
    const newBookmarkSite = document.getElementById("siteURL").value;

    let log = document.getElementById("log");
    let li = document.createElement("li");
   
    let link = document.getElementById("siteURL");
    li.innerHTML = `<a href="${newBookmarkSite}"> ${newBookmarkName} </a> `;
   
    let visit = document.createElement("button");
    visit.innerHTML = "Visit Site!"

    visit.addEventListener("click", function() {
        window.open(`${newBookmarkSite}`, "_blank")
    })

    li.append(visit);

    let remove = document.createElement("button");
    remove.innerHTML = "Delete"
    li.append(remove);

    remove.addEventListener("click", function(){
        li.remove();
 
    })
    log.append(li);
})



