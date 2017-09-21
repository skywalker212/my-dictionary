$.ajax({
  url: "request",
  dataType: "json",
  success: function(data) {
    var html = '';
    data.forEach(function(x) {
      html += `
        <div class="entry">
          <a id="entry-button" href="#"><div class="word">${x.word}</div></a>
          <div class="description">${x.desc}</div>
        </div>
      `;
    });
    $('.words').html(html);
  }
});


$('#entry-button').on('click',function () {
  console.log("button was clicked");
});
