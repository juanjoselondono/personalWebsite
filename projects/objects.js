class Item {
    constructor(image, description, date, category, title) {
      this.image = image;
      this.title = title;
      this.description = description;
      this.date = date;
      this.category =  category;
    }
}
const BRUNO = new Item('../assets/projects-images/BRUNO/UI.png', `CVI, Command voice interface built with google's API Speech Recogniton`, '1/5/2021', ['Software'],'BRUNO');
const FIGHTER_JET = new Item('../assets/projects-images/FIGHTER_JET/portrait.jpg', `Su32 RC model`, '1/10/2021', ['Software'],'Electric Fighter Jet');
const REMEMBER_ME = new Item('../assets/projects-images/REMEMBER_ME/REMEMBERME.png', `REMEBERME GAME`, '3/30/2020', ['IOT'],'REMEMBER ME GAME');

const projects = [FIGHTER_JET, REMEMBER_ME,BRUNO];
function buildObjects(object){
    var node = document.createElement(`div`)                 // Create a <li> node
    node.classList.add('projects_item');
    var img = document.createElement(`img`);
    var title = document.createElement('h2')
    title.setAttribute('class', 'project_title');
    title.innerHTML = object.title;
    node.appendChild(title);
    
    var date = document.createElement('p')
    date.setAttribute('class', 'project_date');
    date.innerHTML = object.date;
    node.appendChild(date);
    img.setAttribute('src', object.image);
    img.classList.add('project_img');
    var text = document.createElement('p')
    text.innerHTML = object.description;
    text.classList.add('project_description');

    node.appendChild(img);
    node.appendChild(text);
    var tag_container = document.createElement(`div`)
    tag_container.setAttribute('class', 'project_tag_container');
    node.appendChild(tag_container)
    object.category.forEach(element =>     {
        var tag = document.createElement('p')
        tag.setAttribute('class', 'project_tag');
        tag.innerHTML = element
        tag_container.appendChild(tag);                            // Append the text to <li>
    });
    // Append the text to <li>
    document.getElementById("projects").appendChild(node);     // Append <li> to <ul> with id="myList"
}
projects.forEach(element => buildObjects(element))
function sortbyDate(){
    var sort = projects.sort(function(a, b) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
        return dateA - dateB;
    });
    var node = document.getElementById('projects');
    sort.reverse()
    node.innerHTML = '';
    sort.forEach(element =>{
        buildObjects(element);
    })
}
function sortbyName(){
    var sort = projects.sort(function(a, b) {
        var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
    });
    var node = document.getElementById('projects');
    node.innerHTML = '';
    sort.forEach(element =>{
        buildObjects(element);
    })
}
function callback(){
    var val = document.getElementById("selector").value;
    if(val == 1){
        sortbyDate();
    }
    else if(val == 2){
        sortbyName();
    }
}