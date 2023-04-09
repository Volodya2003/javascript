
 paragraph = document.getElementsByTagName('p');

  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].addEventListener('click', func);
  }

  function func() {
    this.innerHTML = this.innerHTML * this.innerHTML;
  }