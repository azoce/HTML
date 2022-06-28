// 表示要素
let displayTimer = document.getElementById('timer');

// ボタン要素
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let resume = document.getElementById('resume');
let reset = document.getElementById('reset');

// 表示データ
// ストップウォッチデータ
let time = '00:00.00';
let min_element = 0;
let sec_element = 0;
let ms_element = 0;
let controller;?

displayTimer.innerHTML = time;

// ストップウォッチスタート処理
start.addEventListener('click', function ()
{
   // タイマースタート (TimerEvent関数呼び出し)
   controller = setInterval(TimerEvent, 10);
   // 画面に表示・非表示
   start.classList.add('hidden');
   stop.classList.remove('hidden');
});

// ストップウォッチ停止処理
stop.addEventListener('click', function ()
{
   // タイマー停止
   controller = clearInterval(controller);
   // 画面に表示・非表示
   stop.classList.add('hidden');
   resume.classList.remove('hidden');
   reset.classList.remove('hidden');
});

// ストップウォッチ再開処理
resume.addEventListener('click', function ()
{
   // タイマー再開 (TimerEvent関数呼び出し)
   controller = setInterval(TimerEvent, 10);
   // 画面表示・非表示
   resume.classList.add('hidden');
   reset.classList.add('hidden');
   stop.classList.remove('hidden');
});

// ストップウォッチリセット処理
reset.addEventListener('click', function ()
{
   // リセット
   min_element = 0;
   sec_element = 0;
   ms_element = 0;
   timer.innerHTML = time;

   // 画面表示・非表示
   resume.classList.add('hidden');
   reset.classList.add('hidden');
   start.classList.remove('hidden');
});

// 時間カウント
function TimerEvent ()
{
   // 時間増加
   ms_element++;
   // 桁の繰り上げ ミリ秒->秒
   if (ms_element == 100) {
       ms_element = 0;
       sec_element++;
   }
   // 桁の繰り上げ 秒->分
   if (sec_element == 60) {
       sec_element = 0;
       min_element++;
   }
   // DisplayTimer関数呼び出し
   DisplayTimer();
}

// 表示するデータのレスポンス処理
function DisplayTimer ()
{
   let ms = ms_element;
   let sec = sec_element;
   let min = min_element;

   // 表示処理
   if (ms < 10) {
       ms = '0' + ms_element;
   }
   if (sec < 10) {
       sec = '0' + sec_element;
   }
   if (min < 10) {
       min = '0' + min_element;
   }
   // データを画面で表示
   displayTimer.innerHTML = min + ':' + sec + '.' + ms;
}

