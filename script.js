/* =========================================================
   MediCare Portal — shared frontend interactions
   No backend. No data is sent anywhere or stored in
   localStorage. Everything here is demo behaviour only.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- 1. Highlight the active nav link based on current page ---- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-medicare .nav-link').forEach(function (link) {
    var linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ---- 2. Patient Registration form: validation + demo submit ---- */
  var registrationForm = document.getElementById('registrationForm');

  if (registrationForm) {
    var successAlert = document.getElementById('registrationSuccessAlert');

    registrationForm.addEventListener('submit', function (event) {
      // Stop the browser from actually submitting / reloading the page.
      event.preventDefault();
      event.stopPropagation();

      if (!registrationForm.checkValidity()) {
        // Let Bootstrap's validation styles show which fields need attention.
        registrationForm.classList.add('was-validated');

        // Move focus to the first invalid field for accessibility.
        var firstInvalid = registrationForm.querySelector(':invalid');
        if (firstInvalid) {
          firstInvalid.focus();
        }
        if (successAlert) {
          successAlert.style.display = 'none';
        }
        return;
      }

      // All required fields are valid: show the demo success message.
      registrationForm.classList.add('was-validated');

      if (successAlert) {
        successAlert.style.display = 'block';
        successAlert.textContent = 'Patient registration submitted successfully. (Demo only — no data was sent to a server.)';
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    // Reset button: clear the form and hide the success message.
    registrationForm.addEventListener('reset', function () {
      registrationForm.classList.remove('was-validated');
      if (successAlert) {
        successAlert.style.display = 'none';
      }
    });
  }

});
