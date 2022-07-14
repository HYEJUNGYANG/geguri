const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
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
};
