
        var btn = document.querySelector('#id1') 
        var src = ['https://google.com',
                'https://www.youtube.com/',
                'https://yummyanime.club/catalog',
                'https://yandex.ru',]
        var btn2 = document.querySelector('#id2')
        var color = [ 'red',
                      'green',
                      'black'] 

      function getRandom(min,max)
      {  
      return Math.floor(Math.random()*(max-min)+min)
      }
      
      btn.addEventListener('click', function(){
          window.location.href = src[getRandom(0,2)]})

      btn2.addEventListener('click', function(){
        document.body.style.backgroundColor = color[getRandom(0,3)]})
