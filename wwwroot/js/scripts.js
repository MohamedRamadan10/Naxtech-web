$(() => {
	// Multi Dropdown
	document.addEventListener("DOMContentLoaded", function () {
		// make it as accordion for smaller screens
		if (window.innerWidth < 992) {
			// close all inner dropdowns when parent is closed
			document
				.querySelectorAll(".navbar .dropdown")
				.forEach(function (everydropdown) {
					everydropdown.addEventListener("hidden.bs.dropdown", function () {
						// after dropdown is hidden, then find all submenus
						this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
							// hide every submenu as well
							everysubmenu.style.display = "none";
						});
					});
				});

			document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
				element.addEventListener("click", function (e) {
					let nextEl = this.nextElementSibling;
					if (nextEl && nextEl.classList.contains("submenu")) {
						// prevent opening link if link needs to open dropdown
						e.preventDefault();
						if (nextEl.style.display == "block") {
							nextEl.style.display = "none";
						} else {
							nextEl.style.display = "block";
						}
					}
				});
			});
		}
		// end if innerWidth
	});
	// DOMContentLoaded  end

	//SVG converter
	const svgConverter = function () {
		$("img.svg").each(function () {
			var $img = jQuery(this);
			var imgID = $img.attr("id");
			var imgClass = $img.attr("class");
			var imgURL = $img.attr("src");
			jQuery.get(
				imgURL,
				function (data) {
					var $svg = jQuery(data).find("svg");
					if (typeof imgID !== "undefined") {
						$svg = $svg.attr("id", imgID);
					}
					if (typeof imgClass !== "undefined") {
						$svg = $svg
							.attr("class", imgClass + " replaced-svg")
							.css("display", "inline-block");
					}
					$svg = $svg.removeAttr("xmlns:a");
					$img.replaceWith($svg);
				},
				"xml"
			);
		});
	};
	svgConverter();

	// Navbar on scroll
	const header = $(".header");
	window.onscroll = () => {
		if (window.scrollY > 150) {
			header.addClass("on__scroll");
		} else {
			header.removeClass("on__scroll");
		}
	};
	if (header.hasClass("internal__menu")) {
		window.onscroll = () => {
			if (window.scrollY > 150) {
				header.addClass("on__scroll");
			} else {
				header.removeClass("on__scroll");
			}
		};
	}
	// Sm Menu

	const overlayHeader = $(".header .overlay__header");
	const navbarToggler = $(".header .navbar-toggler");

	navbarToggler.on("click", () => {
		overlayHeader.toggleClass("active");
		if (overlayHeader.hasClass("active")) {
			$("body").css({
				"overflow-y": "hidden",
				"overflow-x": "hidden",
			});
		} else {
			$("body").css({
				"overflow-y": "auto",
				"overflow-x": "hidden",
			});
		}
	});

	// Banner Slider
	const banner = $(".banner");
	if (banner.length > 0) {
		banner
			.slick({
				dots: false,
				arrows: true,
				autoplay: true,
				fade: true,
			})
			.slickAnimation();
	}

	//    Counter Up
	const counter = $(".counter");
	if (counter.length > 0) {
		counter.counterUp();
	}

	// Clients Slider
	const clientSlider = $(".clients__slider");
	if (clientSlider.length > 0) {
		clientSlider.slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			arrows: true,
			autoplay: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
			],
		});
	}

	// Sector Slider
	const sectorSlider = $(".sector__slider");
	if (sectorSlider.length > 0) {
		sectorSlider.slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			arrows: false,
			dots: true,
			autoplay: true,
			responsive: [
				{
					breakpoint: 1320,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});
	}

	// Sector Slider
	const whatSlider = $(".what__slider");
	if (whatSlider.length > 0) {
		whatSlider.slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			arrows: false,
			dots: true,
			autoplay: true,
			responsive: [
				{
					breakpoint: 1320,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});
	}
});
