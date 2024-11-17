<script src="static/js/embla.umd.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize Embla carousel
    const emblaNode = document.querySelector('.embla');
    const embla = EmblaCarousel(emblaNode, { loop: false });

    // Tab functionality
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active state from currently active tab and panel
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        tabPanels.forEach(panel => panel.setAttribute('data-state', 'inactive'));
        tabPanels.forEach(panel => panel.setAttribute('hidden', ''));

        // Set active state to clicked tab and corresponding panel
        tab.setAttribute('aria-selected', 'true');
        const panel = document.getElementById(tab.getAttribute('aria-controls'));
        panel.setAttribute('data-state', 'active');
        panel.removeAttribute('hidden');
      });
    });
  });
</script>
