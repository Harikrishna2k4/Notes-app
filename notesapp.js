let createbtn = document.getElementById("create_notes");
let box = document.getElementById("box");

createbtn.addEventListener("click",(event)=>{
    let notes = document.createElement("div");
    let notecontents = document.createElement("div");
    notecontents.setAttribute("data-placeholder","Notes content...");
    notecontents.contentEditable = "true";
    notecontents.classList.add("notesp");

    let bin = document.createElement("img");
    bin.src = "delete-203.png";
    notes.classList.add("inputbox");
    bin.className = "binicon";
    bin.classList.add("inputbox_img");
    
    let title = document.createElement("input");
    title.type = "text";
    title.className = "notetitle";
    title.classList.add("notetitle");
    title.placeholder = "Title";
    notes.append(title);
    notes.append(notecontents);
    notes.append(bin);
    box.append(notes);
})

box.addEventListener("click", (event)=>{
    if(event.target.classList.contains("binicon")){
        event.target.parentElement.remove();
    }
})

notecontents.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
