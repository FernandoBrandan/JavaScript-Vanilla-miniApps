(() => {
    const lengthMaxColumns = () => {
        let auxMax
        for (let i = 1; i <= 3; i++) {
            document.querySelectorAll(`.column-${i}`).forEach(element => {
                if (auxMax === undefined) auxMax = element.children.length
                if (auxMax < element.children.length) auxMax = element.children.length
            })
        }
        return auxMax
    }

    for (let i = 1; i <= 3; i++) {
        document.querySelectorAll(`.column-${i}`).forEach(element => {
            if (element.children.length < lengthMaxColumns()) {
                let diff = lengthMaxColumns() - element.children.length
                for (let j = 1; j <= diff; j++) {
                    var newElem = document.createElement('div')
                    newElem.textContent = "Intro"
                    newElem.className = `content-info`
                    var body = document.querySelector(`.column-${i}`)
                    body.appendChild(newElem)
                }
            }
        })
    }
})()
