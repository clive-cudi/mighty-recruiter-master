(function () {
  const navbar = document.querySelector("nav");
  const cont = document.getElementById("content");
  const nav_logo = document.getElementById("nav-logo");
  const acc_btn = document.getElementById("acc-btn");
  const scroll_chevron = document.getElementById("scroll-chevron");
  const fr_content = document.getElementById("fr-main-wrapper");
  const bottom_nav = document.getElementById("bottom-nav");
  // const rotate_all_btn = document.getElementById('rotate-all')
  const cog_data = [
    {
      cogId: "gear1",
      h3: "Free postings on 29+ job boards",
      p: "Instantly post your jobs on sites like Linkedin, Glassdoor, and Ziprecruiter for free, and see your jobs in Google search results.",
      img_src: "./src/assets/images/talent-pool-partners.png",
      cog_active_img: "./src/assets/images/Gear1-o.png",
      cog_inactive_img: "./src/assets/images/Gear1-inactive.png",
      rotation_dir: "left",
    },
    {
      cogId: "gear2",
      h3: "Social media sourcing and employee referrals",
      p: "Use our tools to search your LinkedIn and Facebook networks. Leverage the power of your coworkers to find people they know.",
      img_src: "./src/assets/images/social-media-accounts.png",
      cog_active_img: "./src/assets/images/Gear2-o.png",
      cog_inactive_img: "./src/assets/images/Gear2-inactive.png",
      rotation_dir: "right",
    },
    {
      cogId: "gear3",
      h3: "Searchable resume database",
      p: "Search our database of more than 22 million unique resumes and invite them to apply.",
      img_src: "./src/assets/images/social-media-accounts.png",
      cog_active_img: "./src/assets/images/Gear3-o.png",
      cog_inactive_img: "./src/assets/images/Gear3-inactive.png",
      rotation_dir: "left",
    },
    {
      cogId: "gear4",
      h3: "",
      p: "MightyRecruiter is an intuitive recruiting solution that helps you source passive candidates, manage applicants and hire the most relevant candidates to your jobs — at no cost to you.",
      img_src: "",
      cog_active_img: "./src/assets/images/Gear4-o.png",
      cog_inactive_img: "./src/assets/images/Gear4-inactive.png",
      rotation_dir: "left",
    },
    {
      cogId: "gear5",
      h3: "MightySourcer Chrome Extension",
      p: "Get our easy to use, free Google Chrome extension to extract candidate information from social profiles, and import directly into MightyRecruiter.",
      img_src: "",
      cog_active_img: "./src/assets/images/Gear5-o.png",
      cog_inactive_img: "./src/assets/images/Gear5-inactive.png",
      rotation_dir: "right",
    },
  ];

  cont.addEventListener("scroll", (e) => {
    if (cont.scrollTop > 40) {
      navbar.setAttribute("class", "nav-scroll");
      nav_logo.setAttribute("src", "./src/assets/images/mr-logo.png");
      acc_btn.textContent = `GET FREE ACCOUNT`;
      acc_btn.setAttribute("class", "nav-scroll-btn");
      scroll_chevron.setAttribute("style", "display: none");
    } else {
      navbar.removeAttribute("class");
      nav_logo.setAttribute("src", "./src/assets/images/homepage-logo.png");
      acc_btn.textContent = `FREE ACCOUNT`;
      acc_btn.removeAttribute("class");
      scroll_chevron.setAttribute("style", "display: flex");
    }
    if (cont.scrollTop > 500) {
      bottom_nav.setAttribute("style", "display: flex");
    } else {
      bottom_nav.setAttribute("style", "display: none")
    }
  });

  class CogWheel {
    constructor() {
      this.deactivate = this.deactivate.bind(this);
      this.activate = this.activate.bind(this);
      this.rotate = this.rotate.bind(this);
    }

    rotate(cog_id, direction) {
      this.removeAnimation(cog_id);
      const target_cog = document.getElementById(cog_id);

      target_cog.setAttribute(
        "style",
        `animation: animate-cog-${direction} 5s ease-in-out forwards`
      );

      setTimeout(() => {
        this.removeAnimation(cog_id);
      }, 5000);
    }

    activate(cog_id, activated_img_src) {
      const target_cog = document.getElementById(cog_id);

      target_cog.setAttribute("src", activated_img_src);
    }

    deactivate(cog_id, deactivated_img_src) {
      const target_cog = document.getElementById(cog_id);

      target_cog.setAttribute("src", deactivated_img_src);
    }

    removeAnimation(cog_id) {
      let target_cog = document.getElementById(cog_id);

      target_cog.setAttribute("style", "animation: ");
    }

    rotateAndRenderText(
      cogId,
      rotation_dir,
      activated_img_src,
      h3,
      p,
      img_src_path,
      additional_markup
    ) {
      this.activate(cogId, activated_img_src);
      this.rotate(cogId, rotation_dir);
      const mountingPoint = document.getElementById("rt-txt-wrapper");
      const markupTemplate = `<h3>${h3}</h3>
                    <p>${p}</p>
                    ${img_src_path ? `<img src="${img_src_path}" alt="">` : ``}
                    ${additional_markup}`;
      mountingPoint.innerHTML = markupTemplate;
    }
  }

  function rotateAllCogs() {
    const Cog = new CogWheel();
    cog_data.forEach((cog) => {
      const target_cog =   document.getElementById(cog.cogId);
      target_cog.addEventListener('click',()=> {
        Cog.activate(cog.cogId, cog.cog_active_img);
        Cog.rotate(cog.cogId, cog.rotation_dir);
        setTimeout(()=>{
            Cog.deactivate(cog.cogId, cog.cog_inactive_img);
      },5000)
      })
    });
  }
  
  const activateOnHover = ()=>{
    cog_data.forEach((cog)=>{
      const target_cog = document.getElementById(cog.cogId);
      target_cog.addEventListener('mouseover',()=>{
        target_cog.setAttribute("src", cog.cog_active_img);
        target_cog.onmouseleave = ()=>{
          target_cog.setAttribute("src", cog.cog_inactive_img)
        }
      })
    })
  }

  function autoRotateCogs() {
    let counter = 0;
    const Cog = new CogWheel();
    const btn_style = `display: flex;
        height: 50px;
        margin-top: 20px;
        padding-right: 27px;
        padding-left: 27px;
        max-width: 300px;
        font-size: 16px;
        font-weight: 700;
        background: rgb(255, 193, 0);
        color: white;
        /* background: rgb(206, 155, 0); */
        border: none;
        align-items: center;
        justify-content: center;`;
    setInterval(() => {
      // update the counter
      // if the counter is greater than cog_data.length then reset it to 0;
      if (counter > 3) {
        counter = 0;
        Cog.deactivate(cog_data[4].cogId, cog_data[4]?.cog_inactive_img);
        Cog.removeAnimation(cog_data[4].cogId)
      } else {
          Cog.deactivate(cog_data[counter].cogId, cog_data[counter].cog_inactive_img);
          Cog.removeAnimation(cog_data[counter].cogId);
        counter = counter + 1;
      }
      Cog.rotateAndRenderText(
        cog_data[counter].cogId,
        cog_data[counter].rotation_dir,
        cog_data[counter].cog_active_img,
        cog_data[counter].h3,
        cog_data[counter].p,
        cog_data[counter].img_src,
        cog_data[counter].img_src == "" && cog_data[counter].cogId == "gear4"
          ? `<button class="rt-txt-btn" style="${btn_style}" >OPEN YOUR FREE ACCOUNT</button>`
          : ``
      );
    }, 5000);
  }

  activateOnHover();  
  autoRotateCogs();

  scroll_chevron.addEventListener("click", () => {
    fr_content.scrollIntoView();
  });
})();