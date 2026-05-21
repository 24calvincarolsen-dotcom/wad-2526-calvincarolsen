let cart = [];

loadCart();

function loadCart() {
    const params = new URLSearchParams(window.location.search);
    cart = JSON.parse(params.get('cart'));

    let display = '';
    let totalItem = 0;

    for (let i = 0; i < menus.length; i++) {
        const e = menus[i];

        for (let j = 0; j < e.variants.length; j++) {
            const f = e.variants[j];

            if (cart[i][j] > 0) {

                totalItem += cart[i][j];

                display += `
                    <div class="item">
                        <div>
                            ${e.name}<br>
                            <small>${f.description}</small>
                        </div>

                        <div>x${cart[i][j]}</div>
                    </div>
                `;
            }
        }
    }

    document.getElementById('cart').innerHTML = display;

    document.getElementById('totalItem').innerHTML =
        `Total Item : ${totalItem}`;

    const today = new Date();

    document.getElementById('date').innerHTML =
        today.toLocaleString();
}