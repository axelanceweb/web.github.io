const input = document.querySelector('input');
document.addEventListener('keydown', function(e) {
  if(e.keyCode === 13 && input.value){
    var node = document.createElement("DIV");  
    node.style.color = "#888";
    node.style.fontSize = "12px";
    node.style.paddingLeft = '5px';
    
    if(input.value === 'help'){
      const para = document.createElement("p");
      para.style.display = 'block';
const text = document.createTextNode('Supported commands: about, experience, education, projects, skills, contact');
para.appendChild(text);
            document.querySelector(".commands").appendChild(para);
    }

if(input.value === 'about')
{
const para = document.createElement("p");
      para.style.display = 'block';
const text = document.createTextNode('21 yaşında Sosyal Medya ile ilgilenen, Boş zamanlarında kodlama yapan bir yazılımcı.');
para.appendChild(text);
            document.querySelector(".commands").appendChild(para);

}

else{
      const para = document.createElement("p");
      para.style.display = 'block';
const text = document.createTextNode('→ command not found:' + input.value);
para.appendChild(text);
            document.querySelector(".commands").appendChild(para);
    }
    input.value = "";
  }
});

function f(){ document.querySelector('input').focus();
}
