document.addEventListener('DOMContentLoaded', () => {
    // Format dates to local string
    document.querySelectorAll('.format-date').forEach(el => {
        const originalText = el.textContent.trim();
        if (originalText && originalText !== 'null') {
            const date = new Date(originalText);
            if (!isNaN(date.getTime())) {
                el.textContent = date.toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            }
        } else {
            el.textContent = 'N/A';
        }
    });

    // Auto-dismiss alerts if any (can be added later)
});
