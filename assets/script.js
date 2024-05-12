window.onload = function() {
    document.querySelector(".menu-opener").addEventListener("click", function(){

    if(document.querySelector(".navlist").style.display == 'flex') {
       document.querySelector(".navlist").style.display = 'none';
    } else {
       document.querySelector(".navlist").style.display = 'flex';
    }
    
});
};

document.addEventListener("scroll", function() {
   var currentScroll = window.scrollY;
   var windowHeight = window.innerHeight;
   var documentHeight = document.body.clientHeight;

   // Verificar se estamos próximos do final do documento
   if (documentHeight - currentScroll <= windowHeight) {
       var correspondingNavItem = document.querySelector("a[href='#habilidades']");
       // Remover a classe 'active' de todos os itens da lista
       document.querySelectorAll(".navlist li a").forEach(function(item) {
           item.classList.remove("active");
       });
       // Adicionar a classe 'active' ao item correspondente
       correspondingNavItem.classList.add("active");
       return; // Sair da função após definir o item ativo
   }

   // Seção de lógica para verificar outras seções
   var sections = document.querySelectorAll("section");
   sections.forEach(function(section) {
       var sectionTop = section.offsetTop;
       var sectionHeight = section.clientHeight;

       if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
           var sectionId = section.getAttribute("id");
           var correspondingNavItem = document.querySelector("a[href='#" + sectionId + "']");
           
           // Remover a classe 'active' de todos os itens da lista
           document.querySelectorAll(".navlist li a").forEach(function(item) {
               item.classList.remove("active");
           });

           // Adicionar a classe 'active' ao item correspondente
           correspondingNavItem.classList.add("active");
       }
   });
});


window.addEventListener('scroll', function() {
    var section = document.getElementById('projetos');
    var position = section.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        section.classList.add('shows');
    } else {
        section.classList.remove('shows');
    }
});

window.addEventListener('scroll', function() {
    var section = document.getElementById('habilidades');
    var position = section.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        section.classList.add('show');
    } else {
        section.classList.remove('show');
    }
});