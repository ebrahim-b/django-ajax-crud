console.log('Hello World')

const helloworld_box = document.getElementById('hello-world')

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
    },
    error: function(error){
        console.log(error)
    },
})