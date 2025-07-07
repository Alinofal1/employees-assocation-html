document.addEventListener("DOMContentLoaded", function () {
  // Header HTML
  const headerHTML = `
    <nav>
      <div class="navContainer">
        <div class="header-wrapper">
          <!-- Right Logo -->
          <a href="/">
            <h1 id="logoh1">
              <img src="../assets/images/logo.png" alt="logo" id="logo" />
            </h1>
          </a>
          <!-- Navbar List -->
          <div id="navList">
            <ul>
            <li><a href="/pages/who-we-are.html">عن الجمعية</a></li>
            <li><a href="/pages/services.html">الخدمات</a></li>
            <li class="drop-down-menu">
            <a>
            المكتبة الالكترونية
            <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="arrow" class="desktop-arrow">
            </a>
            <div class="dropdown-content">
            <a href="/pages/electronic-library-files.html">الملفات</a>
            <a href="/pages/annual-reports.html">التقارير السنوية</a>
            </div>
            </li>
            
             <li class="drop-down-menu">
             <a>
             ميديا
             <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="arrow" class="desktop-arrow">
            </a>
            <div class="dropdown-content">
            <a href="/pages/media.html"> الصور</a>
            <a href="/pages/theNews.html"> الاخبار</a>
            <a href="/pages/videos.html">الفيديوهات</a>
            </div>
            </li>
            <li><a href="/pages/membership.html">العضوية</a></li>
            <li><a href="/pages/contact-us.html">اتصل بنا</a></li>
            </ul>
          </div>
          <!-- left side -->
          <div id="leftsideHead">
          <div id="searchLogo">
            <img src="../assets/images/searchIcon.svg" alt="search svg" />
            </div>
            <img src="/assets/images/language-icon.png" alt="search svg" class="language"/>

          <div id="leftBtn">
            <img src="../assets/images/inquiry.svg" alt="svg" id="navSvg" />
            <p>استعلام</p>
          </div>
          </div>
        </div>
      </div>

      <!-- Mobile Navbar -->
      <div class="mobileSideBar">
        <a href="/"><img src="../assets/images/logo.png" alt="logo" id="logo" /></a>
        <div class="openClose" id="toggleMenu">
          <!-- Burger Icon -->
          <svg id="burgerIcon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobileMenu">
        <div id="internalCloseIcon" class="internalClose">
          <img src="../assets/images/close-svgrepo-com.svg" alt="close" width="22" height="22" />
        </div>

        <!-- search -->
        <div class="mobileSearchBar">
          <input type="text" placeholder="ابحث هنا..." class="searchInput" />
          <div id="searchLogo">
            <img src="../assets/images/searchIcon.svg" alt="search" />
          </div>
        </div>

        <!-- list -->
        <ul class="mobileUl">
          <li><a href="/index.html">الرئيسية</a></li>
          <li><a href="/pages/who-we-are.html">عن الجمعية</a></li>
            <li><a href="/pages/services.html">الخدمات</a></li>

     <li class="library-dropdown">
  <div class="library-toggle">
    <span class="arrow">&#9654;</span>
    المكتبة الالكترونية
  </div>
  <ul class="library-menu">
    <li><a href="/pages/electronic-library-files.html">الملفات</a></li>
    <li><a href="/pages/annual-reports.html">التقارير السنوية</a></li>
  </ul>
</li>

                <li class="library-dropdown">
  <div class="library-toggle">
    <span class="arrow">&#9654;</span>
    ميديا
  </div>
  <ul class="library-menu">
    <li><a href="/pages/media.html">الصور</a></li>
    <li><a href="/pages/theNews.html">الاخبار</a></li>
    <li><a href="/pages/videos.html">الفيديوهات</a></li>
  </ul>
</li>
            <li><a href="/pages/membership.html">العضوية</a></li>
            <li><a href="/pages/contact-us.html">اتصل بنا</a></li>
        </ul>

        <!-- leftBtn -->
        <div class="sideImg">
          <p>استعلام</p>
          <img src="../assets/images/inquiry.svg" alt="svg" class="sideSvg" />
        </div>
      </div>
    </nav>
  `;

  // Desktop Search HTML
  const desktopSearchHTML = `
    <div id="desktopSearchWrapper" class="hidden">
      <div class="backdrop"></div>
      <div class="searchBarContainer">
        <input type="text" placeholder="ابحث هنا..." class="searchInput" />
        <div class="closeSearch" id="closeSearchBtn">
          <img src="../assets/images/close-svgrepo-com.svg" alt="close" width="22" height="22" />
        </div>
      </div>
    </div>
  `;

  // Footer HTML
  const footerHTML = `
    <footer>
      <div id="listWrapper">
        <ul id="footerList">
          <li><a href="/pages/in-kind-loan.html">التسليف العيني</a></li>
          <li><a href="/pages/electronic-library.html">النماذج الالكترونية</a></li>
          <li><a href="/pages/annual-reports.html">تقارير سنوية</a></li>
          <li><a href="/pages/financial-reports.html">تقارير مالية</a></li>
          <li><a href="/pages/cash-lending.html">التسليف النقدي</a></li>
          <li><a href="/pages/theNews.html">الاخبار</a></li>
          <li><a href="/pages/electronic-forms.html">النماذج الالكترونية</a></li>
          <li><a href="./board-of-directors.html">مجلس الادارة</a></li>
        </ul>
      </div>
      <div id="footerBottom">
        <p>© 2025 جمعية الموظفين الحكوميين</p>
        <div id="socialMedia">
          <img src="../assets/images/facebook.svg" alt="icon" />
          <img src="../assets/images/instagram.svg" alt="icon" />
          <img src="../assets/images/twitter.svg" alt="icon" />
          <img src="../assets/images/tiktok.svg" alt="icon" />
        </div>
        <p>سياسة الخصوصية | الشروط والاحكام</p>
      </div>
    </footer>
  `;

  // Insert HTML content into placeholders
  document.getElementById("header-placeholder").innerHTML = headerHTML;
  document.getElementById("desktop-search-placeholder").innerHTML =
    desktopSearchHTML;
  document.getElementById("footer-placeholder").innerHTML = footerHTML;

  const toggleBtn = document.getElementById("toggleMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const internalClose = document.getElementById("internalCloseIcon");

  if (toggleBtn && mobileMenu && internalClose) {
    // Open menu
    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.add("show");
      document.body.classList.add("no-scroll");
    });

    // Close menu with X button
    internalClose.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
      document.body.classList.remove("no-scroll");
    });

    // Close menu when a link is clicked
    document.querySelectorAll("#mobileMenu li a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
        document.body.classList.remove("no-scroll");
      });
    });
  } else {
    console.error(
      "Some elements are missing for the mobile menu functionality."
    );
  }

  // Remove no-scroll if screen becomes large
  window.addEventListener("resize", () => {
    if (
      window.innerWidth > 1024 &&
      mobileMenu &&
      mobileMenu.classList.contains("show")
    ) {
      mobileMenu.classList.remove("show");
      document.body.classList.remove("no-scroll");
    }
  });

  // Search functionality
  // const searchLogo = document.querySelector("#navList #searchLogo");
  // const searchWrapper = document.getElementById("desktopSearchWrapper");
  // const closeSearchBtn = document.getElementById("closeSearchBtn");

  // if (searchLogo && searchWrapper && closeSearchBtn) {
  //   // Open search bar
  //   searchLogo.addEventListener("click", () => {
  //     searchWrapper.classList.remove("hidden");
  //     searchWrapper.classList.add("show-search");
  //     document.body.classList.add("no-scroll");
  //   });

  //   // Close search bar
  //   closeSearchBtn.addEventListener("click", () => {
  //     searchWrapper.classList.remove("show-search");
  //     searchWrapper.classList.add("hidden");
  //     document.body.classList.remove("no-scroll");
  //   });
  // } else {
  //   console.error(
  //     "One or more elements for the search functionality are missing."
  //   );
  // }
});

// Library dropdown
document.addEventListener("DOMContentLoaded", function () {
  const allToggles = document.querySelectorAll(".library-toggle");

  allToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const dropdown = this.closest(".library-dropdown");
      dropdown.classList.toggle("open");
    });
  });
});
