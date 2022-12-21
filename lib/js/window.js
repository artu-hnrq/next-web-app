import setRootCustomProperty from './utils'


const set = setRootCustomProperty

export function propagateScroll(){
    set('scroll-y', window.scrollY)
    set('scroll-x', window.scrollX)

    const offsetHeight = document.body.offsetHeight - window.innerHeight
    set('scroll-offsetHeight', offsetHeight)
    set('scroll-rate', window.scrollY / offsetHeight)
}

export function propagateWindow() {
    set('win-innerHeight', window.innerHeight)
    set('win-innerWidth', window.innerWidth)
}


export function trackScroll(){
    propagateScroll()
    document.addEventListener('scroll', propagateScroll)
}

export function trackWindow(){
    propagateWindow()
    document.addEventListener('window', propagateWindow)
}
