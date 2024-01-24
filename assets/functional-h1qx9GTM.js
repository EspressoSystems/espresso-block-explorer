function*a(e,t){for(let n=e.next();!n.done;n=e.next())yield t(n.value)}function o(e,t){return a(e[Symbol.iterator](),t)}export{o as a,a as m};
