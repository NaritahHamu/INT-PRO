$( document ).ready(function() {
  console.log( "ready!" );

  function toggleActive(){
    $("#homeLoad, #servicesLoad, #aboutLoad, #contactLoad").removeClass("active");
    $("#homePage, #servicesPage, #aboutPage, #contactPage").addClass("displayHidden");
  }

 
  $("#homeLoad").click(function (){
    toggleActive();
    $("#homeLoad").addClass("active");
    $("#homePage").removeClass("displayHidden");
  })
  $("#servicesLoad").click(function (){
    toggleActive();
    $("#servicesLoad").addClass("active");
    $("#servicesPage").removeClass("displayHidden");

    BlockDefault()
  })
  $("#aboutLoad").click(function (){
    toggleActive();
    $("#aboutLoad").addClass("active");
    $("#aboutPage").removeClass("displayHidden");
  })
  $("#contactLoad").click(function (){
    toggleActive();
    $("#contactLoad").addClass("active");
    $("#contactPage").removeClass("displayHidden");
  })

  

});

//Main Navigation




//Service Page Section Load
function BlockDefault(){
  document.getElementById("service-title-text").innerHTML = "Default";
  document.getElementById("service-description-text").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementById("service-picture-1").src="/Images/AboutProjects/prj1.png";
  document.getElementById("service-picture-2").src="/Images/AboutProjects/prj2.png";
  document.getElementById("service-picture-3").src="/Images/AboutProjects/prj3.png";
  document.getElementById("service-picture-4").src="/Images/AboutProjects/prj4.png";
}

function BlockOne(){
  document.getElementById("service-title-text").innerHTML = "Building Control Systems";
  document.getElementById("service-description-text").innerHTML = "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementById("service-picture-1").src="/Images/AboutProjects/prj1.png";
  document.getElementById("service-picture-2").src="/Images/AboutProjects/prj2.png";
  document.getElementById("service-picture-3").src="/Images/AboutProjects/prj3.png";
  document.getElementById("service-picture-4").src="/Images/AboutProjects/prj4.png";
}

function BlockTwo(){
  document.getElementById("service-title-text").innerHTML = "Facility Managment Service";
  document.getElementById("service-description-text").innerHTML = "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementById("service-picture-1").src="/Images/AboutProjects/prj1.png";
  document.getElementById("service-picture-2").src="/Images/AboutProjects/prj2.png";
  document.getElementById("service-picture-3").src="/Images/AboutProjects/prj3.png";
  document.getElementById("service-picture-4").src="/Images/AboutProjects/prj4.png";
}

function BlockThree(){
  document.getElementById("service-title-text").innerHTML = "FTTH / WAN / LAN Systems";
  document.getElementById("service-description-text").innerHTML = "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementById("service-picture-1").src="/Images/AboutProjects/prj1.png";
  document.getElementById("service-picture-2").src="/Images/AboutProjects/prj2.png";
  document.getElementById("service-picture-3").src="/Images/AboutProjects/prj3.png";
  document.getElementById("service-picture-4").src="/Images/AboutProjects/prj4.png";
}

function BlockFour(){
  document.getElementById("service-title-text").innerHTML = "Lighting Protection Systems";
  document.getElementById("service-description-text").innerHTML = "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementById("service-picture-1").src="/Images/AboutProjects/prj1.png";
  document.getElementById("service-picture-2").src="/Images/AboutProjects/prj2.png";
  document.getElementById("service-picture-3").src="/Images/AboutProjects/prj3.png";
  document.getElementById("service-picture-4").src="/Images/AboutProjects/prj4.png";
}

function BlockFive(){
  document.getElementById("service-title-text").innerHTML = "Telecommunication Mobile & Fixed";
  document.getElementById("service-description-text").innerHTML = "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementById("service-picture-1").src="/Images/AboutProjects/prj1.png";
  document.getElementById("service-picture-2").src="/Images/AboutProjects/prj2.png";
  document.getElementById("service-picture-3").src="/Images/AboutProjects/prj3.png";
  document.getElementById("service-picture-4").src="/Images/AboutProjects/prj4.png";
}