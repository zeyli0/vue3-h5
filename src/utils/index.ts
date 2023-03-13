export const fixrem = () => {
  //按照宽度375图算， 1rem = 100px;
  (function (win: Window, doc: Document) {
    function changeSize() {
      doc.documentElement.style.fontSize = doc.documentElement.clientWidth / 3.75 + 'px';
      console.log(doc.documentElement.clientWidth / 3.75);
    }
    changeSize();
    win.addEventListener('resize', changeSize, false);
  })(window, document);
};
