(function () {
  /* FAQ Accordion */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(function (q) {
      q.addEventListener('click', function () {
        var item = this.closest('.faq-item');
        item.classList.toggle('open');
      });
    });

    /* Help search filter */
    var searchInput = document.querySelector('.help-search');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        var q = this.value.toLowerCase().trim();
        document.querySelectorAll('.article-item').forEach(function (a) {
          var text = a.textContent.toLowerCase();
          a.style.display = (!q || text.includes(q)) ? '' : 'none';
        });
      });
    }
  });
})();
