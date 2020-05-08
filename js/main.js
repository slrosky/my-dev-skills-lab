// create a table with no current/existing rows
// Add skill button should be clickable
// when button is clicked
    // capture string input 
//add a row with input string "newSkill"
// 
$(document).ready(function() {

    var removedSkills = [];

    $('#add').click((event) =>{
        var bla = $('#myInput').val();
        var newRow =  `<tr>
                        <td><button class="removeSkill">X</button></td>
                        <td>${bla}</td>
                    </tr>`;
        $('#skills tbody').append(newRow);
    })
    $('#skills tbody').on('click', 'button', function(e) {
        $(e.target).closest('tr').remove();
    });

    $('#skills tbody').on('click', 'button', function() {
        var row = $(this).closest('tr');
        // Before we remove the row, save it's outerHTML
        removedSkills.push(row[0].outerHTML);
        row.fadeOut(500, function() {
          row.remove();
        });
        // Ensure that the "Restore Removed Skills" button is enabled
        $('#restoreSkills').removeAttr('disabled');
      });

});