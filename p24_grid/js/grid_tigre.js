const flexItems = document.querySelectorAll('.grid__item');
    flexItems.forEach((flexItem,index) => {
        const color = 'hsl('+ Math.floor(280 -(index*(280/flexItems.length)))+', 100%, 50%)';
        flexItem.style.background = color;
    });  