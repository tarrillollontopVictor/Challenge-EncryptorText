document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const outputContent = document.getElementById('outputContent');
    const copyBtn = document.getElementById('copyBtn');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const imgOutputContent = document.getElementById('outputContent-img');



    // Encriptamos el texto 
    const encrypt = (text) => {
        if(text === '') {
            return 'Por favor, ingresa el texto que deseas encriptar o desencriptar';
            
        }
        else{
            return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        }
        

    };

    // Desencriptamos el texto
    const decrypt = (text) => {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    };

    //Modificamos el output
    const updateOutput = (text) => {
        outputContent.innerHTML = `<p>${text}</p>`;
        copyBtn.style.display = 'inline-block';       
        
    };

    encryptBtn.addEventListener('click', () => {
        const text = inputText.value.toLowerCase();
        updateOutput(encrypt(text));
        imgOutputContent.style.display = 'none';
        inputText.value = '' ;
        
    });

    decryptBtn.addEventListener('click', () => {
        const text = inputText.value.toLowerCase();
        updateOutput(decrypt(text));
        inputText.value = '';
        imgOutputContent.style.display = 'none';

    });

    copyBtn.addEventListener('click', () => {
        const text = outputContent.textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert('Texto copiado al portapapeles');
        });
        outputContent.innerHTML = `
        <p>Ningún texto fue encontrado</p>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>`;
        imgOutputContent.style.display = 'inline-block';
        copyBtn.style.display = 'none';
        
    });


    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        
        var image = document.getElementById('logo');
        if (image.src.includes('Img/logo_ALura.png')) {
            image.src = 'Img/aluraBlando.png';
            image.style.width = '55px';
        } else {
            image.src = 'Img/logo_ALura.png';
            image.style.width = '30px';
        }

    });

    inputText.addEventListener('input', () => {
        inputText.value = inputText.value.toLowerCase().replace(/[áéíóúü]/g, match => {
            return {'á':'a', 'é':'e', 'í':'i', 'ó':'o', 'ú':'u', 'ü':'u'}[match];
        });
    });
});