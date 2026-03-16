// Hamburger nav toggle — used on all pages
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('navMobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // Highlight active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .nav-mobile-link').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
});

export function getBadgeClass(region) {
  const map = {
    shoulder: 'badge-shoulder',
    elbow: 'badge-elbow',
    'wrist-hand': 'badge-wrist',
    cervical: 'badge-cervical',
    thoracic: 'badge-thoracic',
    lumbar: 'badge-lumbar',
    hip: 'badge-hip',
    knee: 'badge-knee',
    foot: 'badge-foot'
  };
  return map[region] || 'badge-shoulder';
}

export function getRegionLabel(region) {
  const map = {
    shoulder: 'Shoulder',
    elbow: 'Elbow',
    'wrist-hand': 'Wrist / Hand',
    cervical: 'Cervical',
    thoracic: 'Thoracic',
    lumbar: 'Lumbar',
    hip: 'Hip',
    knee: 'Knee',
    foot: 'Foot / Ankle'
  };
  return map[region] || region;
}

export function getEndFeelClass(type) {
  const map = {
    'tissue-stretch-firm': 'end-feel-firm',
    'tissue-stretch-soft': 'end-feel-soft',
    'tissue-approximation': 'end-feel-approximation',
    'empty': 'end-feel-empty',
    'bony': 'end-feel-bony'
  };
  return map[type] || 'end-feel-firm';
}

export function getEndFeelLabel(type) {
  const map = {
    'tissue-stretch-firm': 'Tissue Stretch — Firm',
    'tissue-stretch-soft': 'Tissue Stretch — Soft',
    'tissue-approximation': 'Tissue Approximation',
    'empty': 'Empty',
    'bony': 'Bony'
  };
  return map[type] || type;
}

export function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
