// A pretty much entirely unnecessary function for making sure the DOM is ready
var domReady = (function () {
  var fns = [];
  var loaded = document.readyState === 'complete' ||
    (document.readyState !== 'loading' && !document.documentElement.doScroll);

  function completed() {
    loaded = true;
    document.removeEventListener('DOMContentLoaded', completed);
    window.removeEventListener('load', completed);
    var fn;
    while (fn = fns.shift()) fn();
  }

  if (!loaded) {
    document.addEventListener('DOMContentLoaded', completed);
    window.addEventListener('load', completed);
  }

  return function (cb) {
    if (loaded) window.setTimeout(cb, 0);
    else fns.push(cb);
  }
})();

domReady(function() {
  class IconProgress extends HTMLElement {
    static get observedAttributes() {
      return ['icon', 'value', 'max'];
    }

    constructor() {
      super();

      this.addEventListener('click', (event) => {
        if (event.target.dataset.value != null) {
          const oldValue = parseInt(this.getAttribute('value'), 10);
          const newValue = parseInt(event.target.dataset.value, 10);

          if (newValue > oldValue) {
            this.setAttribute('value', newValue);
          } else {
            this.setAttribute('value', newValue - 1);
          }
        }
      });

      this.renderIcons();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'icon') {
        this.iconChanged(oldValue, newValue);
      } else if (name === 'value') {
        this.valueChanged(oldValue, newValue);
      } else {
        this.renderIcons();
      }
    }

    iconChanged(oldValue, newValue) {
      if (newValue === oldValue) return;
      const className = newValue || 'fas fa-star';

      const $icons = this.querySelectorAll('i');
      for (const $icon of $icons) {
        $icon.className = className;
      }
    }

    valueChanged(oldValue, newValue) {
      const $icons = this.querySelectorAll('i');
      const value = parseInt(newValue, 10) || 0;
      for (const $icon of $icons) {
        if (value >= $icon.dataset.value) {
          $icon.style.opacity = '1';
        } else {
          $icon.style.opacity = '0.3';
        }
      }

      this.dispatchEvent(new CustomEvent('value-changed', { detail: value }));
    }

    renderIcons() {
      while (this.firstChild) {
        this.removeChild(this.lastChild);
      }

      const max = Math.max(
        parseInt(this.getAttribute('max'), 10) || 0,
        0
      );
      const value = Math.min(
        parseInt(this.getAttribute('value'), 10) || 0,
        max
      );
      const icon = this.getAttribute('icon') || 'fas fa-star';
      for (let i = 1; i <= max; i++) {
        const $icon = document.createElement('i');
        $icon.dataset.value = i;
        $icon.className = icon;
        if (value < i) {
          $icon.style.opacity = '0.3';
        }
        this.appendChild($icon);
      }
    }
  }

  window.customElements.define('icon-progress', IconProgress);
});
