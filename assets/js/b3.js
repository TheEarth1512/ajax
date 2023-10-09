$(function(){
  $('#button-choice').click(function() {
    const option = parseInt(prompt('Bạn chọn trang web gì?'))

    if (option === 1) {
      window.location.href = 'https://vtiacademy.edu.vn/'
    } else if (option === 2) {
      window.location.href = 'https://w3schools.com'
    } else if (option === 3) {
      window.location.href = 'https://google.com'
    } else if (option === 4) {
      window.location.href = 'https://dantri.com.vn'
    } else if (option === 5) {
      window.location.href = 'https://tuoitre.vn'
    } else {
      alert('Bạn chọn sai rồi!')
    }
  });
});