const handleActiveSidebar = () => {
  const sidebarNodes = document.querySelectorAll(".product__sidebar__link");
  Array.from(sidebarNodes).map((item) =>
    item.addEventListener("click", (e) => {
      sidebarNodes.forEach((x) =>
        x != e.target ? x.classList.remove("active") : ""
      );
      e.target.classList.toggle("active");
    })
  );
};

handleActiveSidebar();
