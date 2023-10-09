$(function(){
  let count = 1;

  $('#button-input-data').click(function() {
    const name = prompt('Bạn tên gì?')
    const tableBody = $('#table-body')

    const row = `<tr>
      <th scope="row">${count++}</th>
      <td>${name}</td>
    </tr>`

    tableBody.append(row)
  });
});