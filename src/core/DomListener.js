export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      // тоже что и addEventListener
      this.$root.on(listener, () => {})
    })
  }

  removeDOMListeners() {

  }
}
