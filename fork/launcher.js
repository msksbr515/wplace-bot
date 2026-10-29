// Fork-only addition (not part of the upstream pull request).
// Floating entry point for the Seven Seals importer.
// Deliberately does not wait for globalThis.wbot: that promise only resolves
// once the bot has finished initialising, and the panel button exists long
// before that. It clicks the panel's own button instead, so it works even when
// initialisation is slow, stuck, or the panel is covered by another copy.
;(() => {
  const ID = 'wbot-seals-launcher'
  const findPanelButton = () => {
    for (const element of document.body.children) {
      const button = element.shadowRoot && element.shadowRoot.querySelector('.seven-seals')
      if (button) return button
    }
    return null
  }
  const mount = () => {
    if (document.getElementById(ID)) return true
    if (!document.body || !findPanelButton()) return false
    const button = document.createElement('button')
    button.id = ID
    button.type = 'button'
    button.textContent = '+ Seven Seals'
    button.title = 'Open the Seven Seals importer'
    button.style.cssText = [
      'position:fixed',
      'left:12px',
      'bottom:70px',
      'z-index:2147483000',
      'padding:6px 12px',
      'border:2px solid #422e2c',
      'border-radius:0',
      'background:#66bbb4',
      'color:#422e2c',
      'font-family:Tiny5,sans-serif',
      'font-size:16px',
      'line-height:1.2',
      'cursor:pointer',
      'box-shadow:0 4px 10px -4px #422e2c',
    ].join(';')
    button.addEventListener('click', () => {
      const target = findPanelButton()
      // dispatchEvent reaches the listener even while the button is disabled
      // (disabled only blocks user-initiated activation), so the importer opens
      // before the bot has finished initialising too.
      if (target) target.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
    })
    document.body.append(button)
    return true
  }
  let tries = 0
  const timer = setInterval(() => {
    tries += 1
    if (mount() || tries > 240) clearInterval(timer)
  }, 500)
})()
