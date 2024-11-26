/* ------------------------------- /
#Technologies
--------------------------------- */ 

document.addEventListener('DOMContentLoaded', function () {
    const categoryItems = document.querySelectorAll('.my-items ul li'); // Cibler les éléments de la liste
    const categories = document.querySelectorAll('.us'); // Cibler les sections à masquer/afficher

    categoryItems.forEach(item => {
        item.addEventListener('click', function () {
            // Supprimer la classe 'active' de tous les éléments et ajouter à l'élément cliqué
            categoryItems.forEach(catItem => catItem.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter'); // Récupérer le filtre à partir de l'attribut data-filter

            categories.forEach(category => {
                // Si l'élément a la classe correspondant au filtre, on l'affiche, sinon on le masque
                if (category.classList.contains(filter)) {
                    category.style.display = 'flex'; // Afficher l'élément correspondant
                } else {
                    category.style.display = 'none'; // Masquer les autres éléments
                }
            });
        });
    });
});