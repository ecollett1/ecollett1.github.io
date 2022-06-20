$('#clickme').click(() => {
  $.ajax({url: 'https://jsonplaceholder.typicode.com/posts/1', success: (data) => {
    $('#response').text(data.title);
  }})
});