// JS for navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbarr');

menu.onclick = () =>
{
  menu.classList.toggle('bi-x');
  navbar.classList.toggle('open');
}

// <!-- ==================
// js for faq
// ===================== -->

$('#accordion').on('show.bs.collapse', function (e) {
$(e.target).prev('.card-header').find('.open-icon').hide();
$(e.target).prev('.card-header').find('.close-icon').show();
});
$('#accordion').on('hide.bs.collapse', function (e) {
$(e.target).prev('.card-header').find('.open-icon').show();
$(e.target).prev('.card-header').find('.close-icon').hide();
});

