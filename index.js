function listree() {
    const subMenuHeading = document.getElementsByClassName("listree-submenu-heading");
    Array.from(subMenuHeading).forEach(
        function(subMenuHeading) {
            subMenuHeading.nextElementSibling.style.display = "none";
            subMenuHeading.addEventListener('click', function(event) {
                event.preventDefault();
                const subMenuList = event.target.nextElementSibling;
                if(subMenuList.style.display == "none") {
                    subMenuList.style.display = "block";
                }
                else {
                    subMenuList.style.display = "none";
                }
                event.stopPropagation();
            });
        }
    );
}