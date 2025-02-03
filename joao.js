const imagens =["https://images2.alphacoders.com/868/thumb-1920-868364.jpg", 
    "https://images2.alphacoders.com/838/thumb-1920-838311.jpg", 
    "https://images4.alphacoders.com/842/thumb-1920-842979.jpg", 
    "https://images4.alphacoders.com/838/thumb-1920-838231.jpg"];
    var num = 0;
    var timer = 3
    var posNumSlide;
    var clickd=false;
    
    
    window.addEventListener("load",carrega)
    
    
    function carrega(){
        
        var botoes = document.getElementsByTagName("a")
        for(var x of botoes){
            x.addEventListener("click", mudaAba)
        }
    
        slideShow()
    }
    
    
    // FUNCOES SLIDE SHOW
    function slideShow(){
        let slider = document.getElementById("slide")
        mudaSliderManual();
        if(clickd==false ){
        setInterval(() => {
    
            num++
            if(num >= imagens.length) {
                num = 0;
            }
            slider.src = imagens[num];
            changeDot()
            }, (timer*1000))
        }
        else if(clickd==true){
            slider.src=imagens[posNumSlide]
            clickd=false;
        }
    
    }
    function changeDot(){
        var pontos=document.getElementsByClassName("ponto")
        for(x of pontos){
            x.classList.remove("ativa")
        }
        pontos[num].classList.add("ativa")
    
    }
    
    // FUNCOES ABAS
    function mudaAba(){
        var navBar = document.getElementsByClassName("navBar")
        var botoes = navBar[0].getElementsByTagName("a")
    
        for(var x of botoes){
            x.classList.remove("ativa")
        }
        this.classList.add("ativa")
        editaConteudo(this)
    }
    function editaConteudo(abaSelec){
        let aba = abaSelec.innerHTML
        var div = document.getElementById("principal")
        var conteudos = div.childNodes;
    
    
        if(aba=="HOME"){ //INICIO
            for(var x = 1; x<conteudos.length; x+=2)
                conteudos[x].classList.add("oculta")
    
            conteudos[1].classList.remove("oculta")
            conteudos[1].classList.add("ativa")
        }else if(aba=="SOBRE"){ //SOBRE
            for(var x = 1; x<conteudos.length; x+=2)
                conteudos[x].classList.add("oculta")
    
            conteudos[3].classList.remove("oculta")
            conteudos[3].classList.add("ativa")
            
        }else if(aba=="PLANOS"){ //PLANOS
            for(var x = 1; x<conteudos.length; x+=2)
                conteudos[x].classList.add("oculta")
    
            conteudos[5].classList.remove("oculta")
            conteudos[5].classList.add("ativa")
            
        }else if(aba=="CONTATO"){ //CONTATO
            for(var x = 1; x<conteudos.length; x+=2)
                conteudos[x].classList.add("oculta")
    
            conteudos[7].classList.remove("oculta")
            conteudos[7].classList.add("ativa")
            
        }
    }
    
    function mudaSliderManual(){
        var i=0
        var pontosSlide=document.getElementsByClassName("slider")[0]
        var pntSld=pontosSlide.getElementsByClassName("ponto")
        for(pntSldu of pntSld){
            pntSldu.addEventListener("click",function(){
                clickd=true;
                capturaPos(this)
            })
        }
    }
    function capturaPos(pos){
        let slider = document.getElementById("slide")
        posNumSlide =pos.getAttribute("id")
        console.log(posNumSlide)
        slider.setAttribute("src",imagens[posNumSlide]);
    }