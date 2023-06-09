

const $div = document.querySelector('div');

const $formulario = document.querySelector('#formulario')
$formulario.onsubmit = function(e) {
    const $monto = document.querySelector('#monto').value
    const monto = Number($monto)

    const $unidad = document.querySelector('#unidad').value
    
    const apiUrl = `https://api.exchangerate.host/convert?from=${$unidad}&to=ARS&places=2`;

    fetch(apiUrl).then(res => res.json())
    .then(data => {
        console.log(data)
        return $div.innerText = (data.result * monto) * 2
    })
    .catch(err => console.error(err))
    e.preventDefault();
}


    