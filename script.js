(() => {
  const flash = document.querySelector('.flash');
  const cabinets = document.querySelectorAll('.cabinet:not(.locked)');
  const pressStart = document.querySelector('.press-start');

  function fireFlash(then) {
    if (!flash) { if (then) then(); return; }
    flash.classList.remove('fire');
    void flash.offsetWidth;
    flash.classList.add('fire');
    setTimeout(() => { if (then) then(); }, 350);
  }

  cabinets.forEach((cab) => {
    cab.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      fireFlash();
      cab.animate(
        [
          { transform: 'translate(0,0)' },
          { transform: 'translate(-6px,-6px)' },
          { transform: 'translate(0,0)' }
        ],
        { duration: 220, easing: 'steps(4, end)' }
      );
    });
  });

  if (pressStart) {
    pressStart.addEventListener('click', (e) => {
      e.preventDefault();
      fireFlash(() => {
        document.querySelector('#cabinets')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'f') {
      fireFlash();
    }
  });

  const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let idx = 0;
  document.addEventListener('keydown', (e) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (k === konami[idx]) {
      idx++;
      if (idx === konami.length) {
        document.body.style.filter = 'hue-rotate(45deg) saturate(1.3)';
        fireFlash();
        idx = 0;
      }
    } else {
      idx = 0;
    }
  });
})();
