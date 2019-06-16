
	var Switch = document.querySelector(".checkbox").onclick = toggleNav;
	var mainHeader = document.querySelector(".relative.header");
	var mobileNav = document.querySelector("#mobileNav");
	var overlay = document.querySelector(".overlay");
	var logoHeader = document.querySelector(".head-header");
	var sidebar = document.querySelector(".sidebar");
	var sidebarSwitch = document.querySelector(".sidebarSwitch").onclick = toggleSidebar;
	var sidebarSwitchR = document.querySelector(".sidebarSwitch");
	var siteWrapper = document.querySelector(".whole-site-cont");

	function toggleNav(){
		if (this.checked == true) {
			mobileNav.style.right = "0px";
			overlay.style.display = "block";
			siteWrapper.style.right = "78%";
		}
		else{
			mobileNav.style.right = "-1000px";
			overlay.style.display = "none";
			siteWrapper.style.right = "0px";
		}
	};

	function fixHeader(){
		if (pageYOffset > 90) {
			logoHeader.style.padding = "0px";
		}else{
			logoHeader.style.padding = "";
		}
	};
	function toggleSidebar(){
		if (this.checked == true) {
			sidebar.style.left = "0px";
		}
		else{
			sidebar.style.left = " -1000px";
		}
	};

	// For highlighting the status of a job opening

	setTimeout(highlight, 0);
	function highlight(){
		var status = document.querySelectorAll("#status");
		for(i = 0; i < status.length; i++){
			if(status[i].innerText == "Active"){
				status[i].className = "green-t";
		    }
			else if (status[i].innerText == "Inactive"){
		    	status[i].className = "red-t";
		    }
			else if (status[i].innerText == "Pending"){
		    	status[i].className = "orange-t";
		    }else{
				console.log("non found!")
		    }
		};
	}