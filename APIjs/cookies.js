class Cookie {
    static set(name, value, expires, path, domain, secure) {
        let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
        if (expires instanceof Date) {
            cookieText += ` expires=${expires.toGMTString()}`
        }
        if (path) cookieText += ` path=${path}`
        if (domain) cookieText += ` domain=${domain}`
        if (secure) cookieText += ` secure`
        document.cookie = cookieText
    }
    static get(name) {
        const cookie = decodeURIComponent(document.cookie)
        return cookie.replaceAll(';', '')
            .replaceAll('=', ':')
            .split(' ')
            .find(e => e.slice(0, name.length) == name)
            .slice(name.length + 1);
    }
    static remove(name, path, domain, secure) {
        Cookie.set(name, '', new Date(0), path, domain, secure)
    }
}
console.clear()
// set a cookie
Cookie.set('username', 'adminw')
Cookie.set('aaaa', '222')
Cookie.set('bbb', '2333')
Cookie.set('dddd', '4444')
Cookie.set('iiii', '5555')
Cookie.set('yyyy', '6666')
// get a cookie 
const st = document.cookie //Cookie.get('username')
console.log(Cookie.get('username')) 
console.log(Cookie.get('edad')) 
console.log(Cookie.get('username'))
console.log(Cookie.get('aaaa'))
console.log(Cookie.get('bbb'))
console.log(Cookie.get('dddd'))
console.log(Cookie.get('iiii'))
console.log(Cookie.get('yyyy'))
console.log('st', st) 
// remove a cookie by a name
//Cookie.remove('username') 