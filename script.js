$(document).ready(function() {
    function validateForm(formId) {
        const form = $('#' + formId);
        form.find('input, textarea').on('blur', function() {
            const $this = $(this);
            $this.toggleClass('error', !$this.val().trim());
        });
    }

    
    validateForm('login-form');
    validateForm('register-form');

    
    $('#carrito').on('click', '.agregar-al-carrito', function(e) {
        e.preventDefault();
        const $this = $(this);
        const precio = parseFloat($this.data('precio'));
        const cantidad = parseInt($this.data('cantidad'), 10) || 1;
        const total = precio * cantidad;
        
        const row = `
            <tr>
                <td>${$this.parent().find('h3').text()}</td>
                <td>${cantidad}</td>
                <td>$${precio.toFixed(2)}</td>
                <td>$${total.toFixed(2)}</td>
            </tr>
        `;
        $('#cart-body').append(row);
        updateTotal(); 
    });

    $('#empty-cart').on('click', function() {
        $('#cart-body').empty(); 
        updateTotal(); 
    });

    function updateTotal() {
        let total = 0;
        $('#cart-body tr').each(function() {
            const rowTotal = parseFloat($(this).find('td').eq(3).text().replace('$', ''));
            total += rowTotal;
        });
        $('#total-price').text(`$${total.toFixed(2)}`);
    }

    
    $('#login-form').on('submit', function(e) {
        e.preventDefault();
        alert('Bienvenido!');
        
    });

    $('#register-form').on('submit', function(e) {
        e.preventDefault();
        alert('Registro exitoso!');
        
    });
});
