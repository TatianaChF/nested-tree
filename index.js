function listree() {
    const subMenuHeadings = document.getElementsByClassName("listree-submenu-heading");
    Array.from(subMenuHeadings).forEach(function(subMenuHeading) {
        subMenuHeading.classList.add("collapsed");
        document.addEventListener("DOMContentLoaded", function() {
            subMenuHeading.nextElementSibling.style.display = "none";
        })
        subMenuHeading.addEventListener('click', function(event){
            event.preventDefault();
            const subMenuList = event.target.nextElementSibling;
            if(subMenuList.style.display=="none"){
                subMenuHeading.classList.remove("collapsed");
                subMenuHeading.classList.add("expanded");
                subMenuList.style.display = "block";
            }
            else {
                subMenuHeading.classList.remove("expanded");
                subMenuHeading.classList.add("collapsed");
                subMenuList.style.display = "none";
            }
            event.stopPropagation();
        });
    });
}
listree();