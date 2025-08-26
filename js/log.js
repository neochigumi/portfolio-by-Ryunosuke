document.querySelectorAll(".log").forEach(log => {
  const log = link.getAttributes("a");//logを囲ってるaタグを取得
  // attributes=属性

  if (log) {
    log.addEventListener("click", function(e) {
      e.preventDefault(); // →飛ばさない
    });
  }
});


// if(!href || href === "#" || href === "about:blank")
// ||はorの時に使う

// forEachは全体の中で満遍なく指示を出したい時、ループしたいときに使う