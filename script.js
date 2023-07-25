const input = document.querySelector('input');

        document.addEventListener('keydown', function (e) {
            if (e.keyCode === 13 && input.value) {
                var node = document.createElement('DIV');
                node.style.color = '#888';
                node.style.fontSize = '12px';
                node.style.paddingLeft = '5px';

                if (input.value.toLowerCase() === 'help') {
                    const para = createParagraph('Supported commands: about, contact');
                    document.querySelector('.commands').appendChild(para);
                } else if (input.value.toLowerCase() === 'about') {
    const para = createParagraph('21 yaşında Sosyal Medya ile ilgilenen, Boş zamanlarında kodlama yapan bir yazılımcı.');
    document.querySelector('.commands').appendChild(para);
} else if (input.value.toLowerCase() === 'contact') {
    const para = createParagraph('ulasmak isteyen herkes discord adresime gelsin. baska hicbir sekilde ulasamazsiniz.');
    document.querySelector('.commands').appendChild(para);
}
 else {
                    const para = createParagraph('→ command not found: ' + input.value);
                    document.querySelector('.commands').appendChild(para);
                }

                input.value = '';
            }
        });

        function createParagraph(text) {
            const para = document.createElement('p');
            para.style.display = 'block';
            const paraText = document.createTextNode(text);
            para.appendChild(paraText);
            return para;
        }
