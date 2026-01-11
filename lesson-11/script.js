//組み込みオブジェクト

Math.random();  //ランダム
Math.floor();  //切り捨て
Math.ceil();  //切り上げ
Math.round();  //四捨五入
Math.abs();  //絶対値
Math.max();  //最大値
Math.min();  //最小値
Math.pow();  //累乗
Math.sqrt();  //平方根
Math.log();  //対数
Math.exp();  //指数

Date.now();  //現在の日時
Date.parse();  //日時をミリ秒で返す
Date.UTC();  //UTCの日時

Date.prototype.toLocaleString();  //日時をロケールに合わせて表示
Date.prototype.toLocaleDateString();  //日時をロケールに合わせて日付のみ表示
Date.prototype.toLocaleTimeString();  //日時をロケールに合わせて時間のみ表示
Date.prototype.toISOString();  //ISO 8601形式の日時
DOMException.prototype.toString();  //エラーの内容を文字列で返す
DOMException.prototype.name;  //エラーの名前
DOMException.prototype.message;  //エラーのメッセージ
DOMException.prototype.stack;  //エラーのスタックトレース
DOMException.prototype.constructor;  //エラーのコンストラクタ
DOMException.prototype.prototype;  //エラーのプロトタイプ
DOMException.prototype.toJSON();  //エラーをJSON形式で返す
DOMException.prototype.toSource();  //エラーをソースコード形式で返す
DOMException.prototype.toString();  //エラーの内容を文字列で返す
DOMException.prototype.toExponential();  //エラーを指数形式で返す
DOMException.prototype.toFixed();  //エラーを固定小数点形式で返す
DOMException.prototype.toPrecision();  //エラーを精度形式で返す
DOMException.prototype.toLocaleString();  //エラーをロケールに合わせて表示
DOMException.prototype.toLocaleDateString();  //エラーをロケールに合わせて日付のみ表示
DOMException.prototype.toLocaleTimeString();  //エラーをロケールに合わせて時間のみ表示
DOMException.prototype.toISOString();  //エラーをISO 8601形式で返す
DOMException.prototype.toUTCString();  //エラーをUTC形式で返す


Document.prototype.createElement();  //要素を作成
Document.prototype.createTextNode();  //テキストノードを作成
Document.prototype.createComment();  //コメントノードを作成
Document.prototype.createDocumentFragment();  //ドキュメントフラグメントを作成
Document.prototype.createAttribute();  //属性を作成

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

Math.PI;  //円周率
Math.E;  //自然対数の底
Math.LN2;  //2の自然対数
Math.LN10;  //10の自然対数
Math.LOG2E;  //2の底のeの対数
Math.LOG10E;  //10の底のeの対数
Math.SQRT1_2;  //1/2の平方根

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

Date.now();  //現在の日時
Date.parse();  //日時をミリ秒で返す
Date.UTC();  //UTCの日時
Date.prototype.toLocaleString();  //日時をロケールに合わせて表示
Date.prototype.toLocaleDateString();  //日時をロケールに合わせて日付のみ表示
Date.prototype.toLocaleTimeString();  //日時をロケールに合わせて時間のみ表示
Date.prototype.toISOString();  //ISO 8601形式の日時
Date.prototype.toUTCString();  //UTC形式の日時
Date.prototype.toJSON();  //日時をJSON形式で返す
Date.prototype.toSource();  //日時をソースコード形式で返す
Date.prototype.toString();  //日時を文字列で返す
Date.prototype.toExponential();  //日時を指数形式で返す
Date.prototype.toFixed();  //日時を固定小数点形式で返す
Date.prototype.toPrecision();  //日時を精度形式で返す
Date.prototype.toLocaleString();  //日時をロケールに合わせて表示
Date.prototype.toLocaleDateString();  //日時をロケールに合わせて日付のみ表示
Date.prototype.toLocaleTimeString();  //日時をロケールに合わせて時間のみ表示

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

Element.prototype.appendChild();  //要素を追加
Element.prototype.insertBefore();  //要素を挿入
Element.prototype.replaceChild();  //要素を置換
Element.prototype.cloneNode();  //要素を複製
Element.prototype.getAttribute();  //要素の属性を取得
Element.prototype.setAttribute();  //要素の属性を設定
Element.prototype.removeAttribute();  //要素の属性を削除
Element.prototype.hasAttribute();  //要素の属性が存在するかどうかを判定
Element.prototype.getAttributeNode();  //要素の属性を取得
Element.prototype.setAttributeNode();  //要素の属性を設定

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

querySelector();  //要素を取得
querySelectorAll();  //要素の全てを取得
EventTarget.prototype.removeEventListener();  //イベントを削除
EventTarget.prototype.dispatchEvent();  //イベントを発火
EventTarget.prototype.onerror();  //エラーを捕捉
EventTarget.prototype.onmessage();  //メッセージを捕捉
EventTarget.prototype.onmessageerror();  //メッセージエラーを捕捉
EventTarget.prototype.onreadystatechange();  //読み込み状態が変化したときに発火
EventTarget.prototype.onabort();  //中断されたときに発火
EventTarget.prototype.oncanplay();  //再生可能になったときに発火
EventTarget.prototype.oncanplaythrough();  //再生可能になったときに発火
EventTarget.prototype.onchange();  //変更されたときに発火
EventTarget.prototype.oncontextmenu();  //コンテキストメニューが表示されたときに発火
EventTarget.prototype.oncopy();  //コピーされたときに発火
EventTarget.prototype.oncut();  //切り取られたときに発火
EventTarget.prototype.onpaste();  //貼り付けられたときに発火
EventTarget.prototype.oninput();  //入力されたときに発火
EventTarget.prototype.oninvalid();  //無効なときに発火
EventTarget.prototype.onreset();  //リセットされたときに発火
EventTarget.prototype.onsubmit();  //送信されたときに発火
EventTarget.prototype.onfocus();  //フォーカスされたときに発火
EventTarget.prototype.onblur();  //フォーカスが外れたときに発火
EventTarget.prototype.onfocusin();  //フォーカスが外れたときに発火
EventTarget.prototype.onfocusout();  //フォーカスが外れたときに発火
EventTarget.prototype.onscroll();  //スクロールされたときに発火
EventTarget.prototype.onresize();  //リサイズされたときに発火
EventTarget.prototype.onscrollend();  //スクロールが終了したときに発火
// EventTarget.prototype.onscrollstart();  //スクロールが開始したときに発火
