function change_content(id) {
  $('.content').removeClass('active');
  $('#' + id).addClass('active');

}
function highlight(item) {
  $('.mmi').removeClass('current');
  item.addClass('current');
}
