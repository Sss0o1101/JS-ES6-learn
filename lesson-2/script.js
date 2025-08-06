/* クラスの概要 ------------------------------------------------------------------------------------------*/

  //独自のデータ型を作るための仕組み

  //クラスで定義した独自のデータ型から作られる値をそのクラスのインスタンス、そしてそのデータ型に特化した独自の命令はそのクラスのメソッドと呼ぶ。

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* Userという独自のデータ型を定義し、インスタンスを作成 ------------------------------------------------------------------------------------------*/

  {
    class User {

    }

    const user1 = new User();
    const user2 = new User();
  }
/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* 前回作ったインスタンスにプロパティをセット ------------------------------------------------------------------------------------------*/

  {
    class User {

    }

    const user1 = new User();
    user1.name = 'Taro';
    user1.score = 70;

    const user2 = new User();
    user2.name = 'Jiro';
    user2.score = 80;


    console.log(user1.name);  //Taro
    console.log(user1.score); //70
    console.log(user2.name);  //Jiro
    console.log(user2.score); //80
  }
/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* 前回作ったインスタンスにプロパティをセット ------------------------------------------------------------------------------------------*/

  {
    class User {

    }

    const user1 = new User();
    user1.name = 'Taro';
    user1.score = 70;

    const user2 = new User();
    user2.name = 'Jiro';
    user2.score = 80;


    console.log(user1.name);  //Taro
    console.log(user1.score); //70
    console.log(user2.name);  //Jiro
    console.log(user2.score); //80
  }
/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* newしたときに実行されるコンストラクタについて ------------------------------------------------------------------------------------------*/

  {
    class User {
      // constructor (nameFromNew, scoreFormNew) {
      //   this.name = nameFromNew;
      //   this.score = scoreFormNew;
      // }
      constructor (name, score) {
        this.name = name;
        this.score = score;
      }
    }

    const user1 = new User('Taro',70);
    const user2 = new User('Jiro',80);


    console.log(user1.name);  //Taro
    console.log(user1.score); //70
    console.log(user2.name);  //Jiro
    console.log(user2.score); //80
  }

/* 質問の例 -------------------------------------------*/

  {
    class User {
      constructor({name, score, rank}) {
        this.name = name;
        this.score = score;
        this.rank = rank;
      }
    };

    const user1 = new User({
      name: 'Hanako',
      score: 70,
      rank: 'B',
    });
    const user2 = new User({
      name: 'Jiro',
      score: 80,
      rank: 'A',
    });

    console.log(user1.name);  //Hanako
    console.log(user1.score); //70
    console.log(user1.rank);  //B
    console.log(user2.name);  //Jiro
    console.log(user2.score); //80
    console.log(user2.rank);  //A
  }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* UserクラスにgetUserString()というメソッドを定義する方法 ------------------------------------------------------------------------------------------*/

  //name と score を 2 行ではなくて、1 行でまとめて表示したい場合。
  //そのための文字列を作るメソッドを定義

  {
    class User {
      constructor (name, score) {
        this.name = name;
        this.score = score;
      }

      getUserString() {
        return `${this.name} ${this.score}`;
      }
    }

    const user1 = new User('Taro',70);
    const user2 = new User('Jiro',80);

    console.log(user1.getUserString());  //Taro 70
    console.log(user2.getUserString());  //jiro 80
  }
/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
