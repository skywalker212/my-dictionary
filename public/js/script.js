makeAjaxRequest();

$('form').submit(function() {
  $.post($(this).attr('action'), $(this).serialize(), function(response) {
    makeAjaxRequest();
  }, 'json');
  $('#word').val('');
  $('#desc').val('');
  return false;
});

function clickFunction(id) {
  $.ajax({
    url: "request/" + id,
    dataType: "json",
    type: 'DELETE',
    success: function(data) {
      var html = '';
      data.forEach(function(x) {
        html += `
          <div class="entry">
            <a id='${x.word}' class='word' href="" onclick="clickFunction(this.id)">${x.word}</a>
            <div class="description">${x.desc}</div>
          </div>
        `;
      });
      $('.words').html(html);
    }
  });
}

function makeAjaxRequest() {
  $.ajax({
    url: "request",
    dataType: "json",
    success: function(data) {
      var html = '';
      data.forEach(function(x) {
        html += `
          <div class="entry">
            <div class="word"><a id='${x.word}' href="" onclick="clickFunction(this.id)" >${x.word}</a></div>
            <div class="description">${x.desc}</div>
          </div>
        `;
      });
      $('.words').html(html);
    }
  });
}
