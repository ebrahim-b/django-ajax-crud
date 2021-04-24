console.log('Hello World')

const helloworld_box = document.getElementById('hello-world')
const data_box = document.getElementById('data-box')

helloworld_box.textContent = 'Hello World x2'


$.ajax({
    type : 'GET',
    url : '/hello/',
    success: function(response){
        console.log('response', response)
    },
    error: function(error){
        console.log('error', error)
    },
})


$.ajax({
    type:'GET',
    url: '/data/',
    success: function(response){
        console.log(response)
        const data = response.data
        data.forEach(el => {
            data_box.innerHTML += `${el.title} - ${el.body} <br>`
        });
    },
    error: function(error){
        console.log(error)
    },
})