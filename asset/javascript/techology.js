/* ------------------------------- /
#Technologies
--------------------------------- */ 
document.addEventListener('DOMContentLoaded', function () {
    const categoryItems = document.querySelectorAll('.my-items ul li');
    const categories = document.querySelectorAll('.us');

    categoryItems.forEach(item => {
        item.addEventListener('click', function () {
            categoryItems.forEach(catItem => catItem.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            categories.forEach(category => {
                if (category.classList.contains(filter)) {
                    category.style.display = 'flex';
                } else {
                    category.style.display = 'none';
                }
            });
        });
    });
});