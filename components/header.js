const header = () => {
    return /*html*/ `
    <div id="header">
      <!-- LOGOTYPE/NAME -->
      <div class="header_logotype_container">
        <h1 class="logotype_name">Javier <span class="purple">Latorre</span></h1>
        <h2 class="logotype_occupation">Frontend Web Developer</h2>
      </div>
      <!-- MAIN MENU -->
        <div class="header_menu_container">

            <div class="clear"></div>
            <ul class="header_menu horizontal_list">
            <li><a class="no_border purple" href="#">Home</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Work Experience</a></li>
            <li><a href="#">Featured Projects</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
    `
};