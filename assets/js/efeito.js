  const textPart1 = "Atualmente, sou Desenvolvedor Front-End com experiência em criar interfaces";
  const textPart2 = "intuitivas e responsivas que proporcionam experiências de usuário excepcionais.";
  const typingText = document.getElementById('typing-text');

  if (window.innerWidth > 768) {
    let index1 = 0;
    let index2 = 0;
    let isSecondPart = false;

    function type() {
      if (index1 < textPart1.length) {
        typingText.innerHTML += textPart1.charAt(index1);
        index1++;
        setTimeout(type, 50);
      } else if (!isSecondPart) {
        typingText.innerHTML += "<br>";
        isSecondPart = true;
        setTimeout(type, 50);
      } else if (index2 < textPart2.length) {
        typingText.innerHTML += textPart2.charAt(index2);
        index2++;
        setTimeout(type, 50);
      }
    }

    type();
  } else {
    typingText.style.display = 'none';
  }


  
