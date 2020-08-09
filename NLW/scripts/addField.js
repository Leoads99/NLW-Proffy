// Procurar  o botao
document.querySelector("#add-time")
    // Quando clicar no botao
    .addEventListener('click', cloneField)


//Executar uma acao
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFiledContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true or false

    // Pegar os campos. Que campos?
    const fields = newFiledContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o  field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página: onde??
    document.querySelector('#schedule-items').appendChild(newFiledContainer)
}