//非同期処理

//Promise

//Promiseの状態
//pending: 未決
//fulfilled: 成功
//rejected: 失敗

//Promiseのメソッド
//then: 成功時の処理
//catch: 失敗時の処理
//finally: 成功失敗に関わらず最後に実行される処理

//await async



async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData().then(data => {
  console.log(data);
});


