window.addEventListener('DOMContentLoaded', function() {
  var input = document.querySelector('.ui-search-input input');
  input.addEventListener('focus', showHistory);
  input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13 && this.value !== '') {
      saveHistory(this.value);
      this.value = '';
      showHistory();
    }
  });
  input.addEventListener('blur', hideHistory);
})

function getData(data) {
  return data !== null ? data.split(",") : [];
}

function showHistory() {
  console.log(localStorage.getItem('history'));
  var history = getData(localStorage.getItem('history')).reverse();
  var historyHtml = '';
  for (item of history) {
    historyHtml += `<li>${item}<a href="javascript:;">delete</a></li>`
  }
  var inputHistory = document.querySelector('.ui-search-input__history');
  inputHistory.innerHTML = historyHtml;
  inputHistory.style.display = 'block';
  // console.log(inputHistory);
}

function hideHistory() {
  var inputHistory = document.querySelector('.ui-search-input__history');
  inputHistory.style.display = 'none';
}

function saveHistory(data) {
  var history = localStorage.getItem('history');
  history !== null ? history += ',' + data : history = data;
  // console.log(history);
  localStorage.setItem('history', history);
}

function reserveFiveData(data) {
  //筛选，去重
}