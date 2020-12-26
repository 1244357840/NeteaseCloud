class lyric {
  constructor(lyric, index, el, h) {
    this._lyric = lyric
    this.el = el
    this.lyric = null
    this.date = []
    this.index = index
    this.h = h
    this.nowTimer = 0
    this.elTop = 0
    this.allTimer = null
    this.timerInterval = 0
    this._top = 0
    this.formatLyric()
  }

  formatLyric() {
    if (!this._lyric) return;
    // console.log(!!this._lyric);
    this.lyric = this._lyric.split('\n')
    let reg = /.*?\[(.*?)\].*?/i
    let reg2 = /\](.*?)/i
    this.lyric.forEach((item, index) => {
      let ts = reg.exec(item)
      let timer = (ts && ts.length >= 2 && ts[1]) || '00:00.000';
      this.date.push({
        timer,
        text: item.substr(timer.length + 2)
      })
    })
    if (this.date[this.date.length - 1].timer <= this.date[this.date.length - 2].timer) {
      this.date.pop()
    }
    this.date.forEach((item, index) => {
      let one = item.timer.substr(0, 2) * 60000
      let two = item.timer.substr(3) * 1000
      item.timer = one + two
    })
  }

  initEL() {
    if (!this._lyric) return;
    this.el.innerHTML = ''
    this.el.style.top = '50%'
    let that = this
    this.date.forEach((item, index) => {
      that.el.innerHTML += `<div>&nbsp;${item.text}&nbsp;</div>`
    })
    // this.elTop = this.el.offsetTop
    this._top = this.el.offsetTop
    this.h = this.el.children[0].offsetHeight
  }

  // setLyric() {
  //   this.nowTimer = date[this.index].timer
  //   this.elTop = el.offsetTop
  //   if (this.allTimer) clearInterval(this.allTimer)
  //   this.allTimer = setInterval(function (){
  //     this.nowTimer += 10
  //     if (this.nowTimer >= this.date[this.index + 1].timer) {
  //       this.index ++
  //       if (this.index >= this.date.length - 1) clearInterval(this.allTimer)
  //       this.elTop = el.offsetTop
  //     }
  //     this.scrollLyric(this.nowTimer, this.index)
  //   }, 10)
  // }

  scrollLyric(timer) {
    if (!this._lyric) return;
    this.nowTimer = timer
    for (let i = 0; i < this.date.length; i++) {
      if (i < this.date.length - 1) {
        if (this.nowTimer >= this.date[i].timer && this.nowTimer < this.date[i + 1].timer) {
          this.index = i;
          break;
        }
      } else if (timer < this.date[0].timer) {
        this.index = 0
      }
    }
    this.timerInterval = this.date[this.index + 1].timer - this.date[this.index].timer
    this.el.style.top = this._top - (this.h * this.index) - (this.h * ((timer - this.date[this.index].timer) / this.timerInterval)) +
      'px'
  }
}

export default lyric
