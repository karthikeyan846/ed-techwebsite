function myFunction() {
    const element = document.getElementById("home");
    element.scrollIntoView();
  }

document.querySelector('.menu-button').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('.nav-items').classList.toggle('show');
});
