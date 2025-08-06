const snsUser2 = {
  id: 1,
  userName: 'Taro',
  post: function (contents) {
    return contents + 'を投稿しました by ...' + this.userName;
  }
}

console.log(snsUser2.post('プログラミングなう。'));

// ------------------------------------------------------------------------------------------------

