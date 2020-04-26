const divFind = document.querySelectorAll('div');
const divFindClass=document.querySelectorAll('*[class^="ms-theme"]');
const findAttr= (e)=> {

    e.forEach(function(element) {
        const classAA= element.getAttribute('class');
        console.log(classAA);
       
 })
    


}

findAttr(divFindClass);



