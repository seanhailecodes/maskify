function maskify(cc) {
    let i = 0
    let lastReplacedIndex = -1
    let filledMask = cc.replace(/#/g, (_, x) => {
      if (i >= cc.length) { 
        return '#'
        }
        lastReplacedIndex = x
        return value[i++]
        })
        return filledMask.substring(0, lastReplacedIndex + 1)
  }