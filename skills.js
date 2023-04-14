const tabs = document.querySelectorAll('[data-target]'),
    tabcontent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabcontent.forEach(tabcontents => {
                tabcontents.classList.remove('skills-active')
            })

            target.classList.add('skills-active')

            
            tabs.forEach(tab => {
                tab.classList.remove('skills-active')
            })

            tab.classList.add('skills-active')
        })
    })
