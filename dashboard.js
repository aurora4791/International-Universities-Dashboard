document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const card = btn.closest('.university-card');
      card.classList.toggle('expanded');
      btn.querySelector('i').classList.toggle('fa-chevron-down');
      btn.querySelector('i').classList.toggle('fa-chevron-up');
    });
  });
});
