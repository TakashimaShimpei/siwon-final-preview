document.getElementById('startBtn').addEventListener('click', () => {
    const trigger = document.getElementById('triggerInput').value.trim();
    if (trigger === '起動シヲン20250807') {
        document.getElementById('trigger').style.display = 'none';
        document.getElementById('uiSection').style.display = 'block';
        alert('起動を確認しました。モードIDと選択肢の入力をお願いします。');
    } else {
        alert('トリガーが違います');
    }
});

document.getElementById('autoFillBtn').addEventListener('click', () => {
    alert('自動入力が実行されました（サンプル）');
});

document.getElementById('finishBtn').addEventListener('click', () => {
    alert('終了しました。総合評価ロジック＆CSV出力は本番で動作します。');
});
