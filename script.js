function verificar(){
    var dia = document.getElementById('txtdia')
    var mes = document.getElementById('txtmes')
    var res = document.getElementById('res')
    if(dia.value <= 0 || dia.value > 31){
        alert('[ERRO] por favor digite um dia válido!')
    }else{
        res.innerHTML = `Você nasceu no dia ${txtdia.value} de ${txtmes.value}. </br> `
        var d = Number(txtdia.value)
        var signo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(txtmes.value == 'Janeiro'){
            if(d >= 1 && d <= 19){
              var signo = 'Capricórnio'
              img.src = 'fotocapricornio.png'
              document.body.style.background = '#7a952c'
            }else if(d >= 20 && d <= 31){
                var signo = 'Aquário'
                img.src = 'fotoaquario.png' 
                document.body.style.background = '#366174'                        
            }
        }else if(txtmes.value == 'Fevereiro'){
            if(d > 29){
                alert('[ERRO] por favor digite um dia válido para este mês.')
            }else if(d >= 1 && d <= 18){
                var signo = 'Aquário'
                img.src = 'fotoaquario.png'
                document.body.style.background = '#366174'                         
            }else if(d >= 19 && d <= 29){
                var signo = 'Peixes'
                img.src = 'fotopeixes.png'
                document.body.style.background = '#7aa6c3'                         
            }
        }else if(txtmes.value == 'Março'){
            if(d >=1 && d <= 20){
                var signo = 'Peixes'
                img.src = 'fotopeixes.png'
                document.body.style.background = '#7aa6c3'                         
            }else if(d >= 21 && d <= 31){
                var signo = 'Áries'
                img.src = 'fotoaries.png'
                document.body.style.background = '#6a26b1'                         
            }
        }else if( txtmes.value == "Abril"){
            if(d > 30){
                alert('[ERRO] por favor digite um dia válido para este mês.')
            }
            if(d >= 1 && d <= 19){
                var signo = 'Áries'
                img.src = 'fotoaries.png'
                document.body.style.background = '#6a26b1'                         
            }else if(d >= 20 && d <= 30){
                var signo = 'Touro'
                img.src = 'fototouro.png'
                document.body.style.background = '#bc62a8'                         
            }
        }else if(txtmes.value == 'Maio'){
            if(d >= 1 && d <= 21){
                var signo = 'Touro'
                img.src = 'fototouro.png'
                document.body.style.background = '#bc62a8'                         
            }else if(d >= 22 && d <= 31){
                var signo = 'Gêmeos'
                img.src = 'fotogemeos.png'
                document.body.style.background = '#e02b78'                         
            }
        }else if(txtmes.value == 'Junho'){
            if(d > 30){
                alert('[ERRO] por favor digite um dia válido para este mês.')
            }
            if(d >= 1 && d <= 21){
                var signo = 'Gêmeos'
                img.src = 'fotogemeos.png'   
                document.body.style.background = '#e02b78'                      
            }else if(d >= 22 && d <= 30){
                var signo = 'Câncer'
                img.src = 'fotocancer.png'   
                document.body.style.background = '#d06a5c'                      
            }
        }else if(txtmes.value == 'Julho'){
            if(d >= 1 && d <= 22){
                var signo = 'Câncer'
                img.src = 'fotocancer.png' 
                document.body.style.background = '#d06a5c'                        
            }else if( d >= 23 && d <= 31){
                var signo = 'Leão'
                img.src = 'fotoleao.png' 
                document.body.style.background = '#bf4830'                        
            }
        }else if(txtmes.value == 'Agosto'){
            if(d >= 1 && d <= 22){
                var signo = 'Leão'
                img.src = 'fotoleao.png'  
                document.body.style.background = '#bf4830'                       
            }else if(d >= 23 && d <= 31){
                var signo = 'Virgem'
                img.src = 'fotovirgem.png' 
                document.body.style.background = '#e0791d'                        
            }
        }else if(txtmes.value == 'Setembro'){
            if(d > 30){
                alert('[ERRO] por favor digite um dia válido para este mês.')
            }
            if(d >= 1 && d <= 22){
                var signo = 'Virgem'
                img.src = 'fotovirgem.png' 
                document.body.style.background = '#e0791d'                        
            }else if(d >= 23 && d <= 30){
                var signo = 'Libra'
                img.src = 'fotolibra.png'  
                document.body.style.background = '#bdbd27'                       
            }
        }else if(txtmes.value == 'Outubro'){
            if(d >= 1 && d <= 22){
                var signo = 'Libra'
                img.src = 'fotolibra.png' 
                document.body.style.background = '#bdbd27'                        
            }else if(d >= 23 && d <= 31){
                var signo = 'Escorpião'
                img.src = 'fotoescorpiao.png' 
                document.body.style.background = '#d16c12'                        
            }
        }else if(txtmes.value == 'Novembro'){
            if(d > 30){
                alert('[ERRO] por favor digite um dia válido para este mês.')
            }
            if(d >= 1 && d <= 21){
                var signo = 'Escorpião'
                img.src = 'fotoescorpiao.png'
                document.body.style.background = '#d16c12'                         
            }else if(d >= 22 && d <= 30){
                var signo = 'Sagitário'
                img.src = 'fotosargitario.png' 
                document.body.style.background = '#73cd8d'                        
            }
        }else if(txtmes.value == 'Dezembro'){            
            if(d >= 1 && d <= 21){
                var signo = 'Sargitário'
                img.src = 'fotosargitario.png'                         
                document.body.style.background = '#73cd8d'
            }else if(d >= 22 && d <= 31){
                var signo = 'Capricórnio'
                img.src = 'fotocapricornio.png'
                document.body.style.background = '#7a952c'                         
            }

        }
    }
    res.innerHTML += `Seu signo é de ${signo}.</br>`
    res.appendChild(img)
}