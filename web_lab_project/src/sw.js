self.addEventListener("fetch", e => {
    console.log(`Intercepting ${e.request.method} to ${e.request.url}`)
})
