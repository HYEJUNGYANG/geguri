const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const p = document.querySelector('p');

yes.onclick = () => {
  alert('맞아요!!! 인정하셨군요!! 🐸 구리 ㄱㅇㅇ');
};
no.onmousemove = evt => {
  const x = parseInt(no.style.left);
  const y = parseInt(no.style.top);
  const dx = evt.offsetX;
  const dy = evt.offsetY;
  no.style.left = `${x - (dx - 40)}px`;
  no.style.top = `${y - (dy - 25)}px`;

  const size = no.getBoundingClientRect();
  if (
    size.left < 0 ||
    size.top < 0 ||
    window.innerHeight < size.bottom ||
    window.innerHeight - size.bottom < 20 ||
    window.innerWidth < size.right
  ) {
    p.style.display = 'block';
  }
};
no.onclick = () => {
  alert('이걸 클릭하다니 대단해!!! 네 한번만 눌러줘잉 🥺');
};
p.onclick = () => {
  p.style.display = 'none';
  no.style.left = 0;
  no.style.top = 0;
};
