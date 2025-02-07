document.getElementById('imageInput').addEventListener('change', function(event) {// obtém elemento de input e addicionar um listener
    const file = event.target.files[0]; // obtem o primeiro arquivo selecionado caso usuário selecione mais de um
    if (file) {
        const img = new Image();
        img.onload = function() { // executa func quando terminar de carregar img
            const width = img.width;   // armazena largura
            const height = img.height; // armazena altura
            let orientation;
            
            if (width > height) { // condicional para retornar orientação
                orientation = 'Paisagem';
            } else if (height > width) {
                orientation = 'Retrato';
            } else {
                orientation = 'Quadrada';
            }
            
            //exibe em tela resultado
            document.getElementById('output').innerText = `Largura: ${width}px, Altura: ${height}px, Orientação: ${orientation}`;
        };
        img.src = URL.createObjectURL(file);
    }
});