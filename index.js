function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }


  function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    console.log("Found win:", win); 
    return win ? win.year : undefined;
  }
