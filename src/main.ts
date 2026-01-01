import './style.css'
import { renderHomePage } from './home'
import { renderAboutPage } from './about'

const app = document.querySelector<HTMLDivElement>('#app')!

// Simple client-side router
function router() {
  const path = window.location.pathname

  if (path === '/about') {
    app.innerHTML = renderAboutPage()
  } else {
    app.innerHTML = renderHomePage()
  }
}

// Handle navigation
function setupNavigation() {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const link = target.closest('a')
    
    if (link && link.href) {
      try {
        const url = new URL(link.href)
        
        // Only handle same-origin links that aren't hash links
        if (url.origin === window.location.origin && !url.hash) {
          e.preventDefault()
          window.history.pushState({}, '', url.pathname)
          router()
          window.scrollTo(0, 0)
        }
      } catch (error) {
        // Invalid URL, let default navigation handle it
        console.error('Invalid URL:', error)
      }
    }
  })
}

// Handle browser back/forward buttons
window.addEventListener('popstate', router)

// Initialize
router()
setupNavigation()
