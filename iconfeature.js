let isHidden = true;

function ref() {
  if (isHidden) {
    document.getElementById('menu-1').classList.add('show-menu-1');
    document.getElementById('menu-2').classList.add('show-menu-2');
    document.getElementById('menu-3').classList.add('show-menu-3');
    isHidden = false;
  } else {
    document.getElementById('menu-1').classList.remove('show-menu-1');
    document.getElementById('menu-2').classList.remove('show-menu-2');
    document.getElementById('menu-3').classList.remove('show-menu-3');
    isHidden = true;
  }
}
