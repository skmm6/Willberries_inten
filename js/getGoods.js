const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('https://willberris-17c9c-default-rtdb.europe-west1.firebasedatabase.app/db.json')
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('goods', JSON.stringify(data));
        })
    }

    links.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            getData();
        })
    })
}

getGoods();