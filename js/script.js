window.onload = ()=> {
    const body = document.querySelector('body');

    const buttons = document.querySelectorAll('button');

    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const modalContent = document.getElementById('modal-content');

    function openInfo() {
        modal.style.display = 'flex';
        modalContent.innerHTML= `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dRpXEc-EJow" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        body.style.overflow = "hidden";
    }

    function watchVideo(id) {
        const videoLink = checkId(id);
        modal.style.display = 'flex';
        modalContent.innerHTML= `<iframe width="100%" height="100%" src=${videoLink} title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        body.style.overflow = "hidden";
    }

    function checkId(id) {
        switch(id) {
            case 'main-watch-now':
                return 'https://www.youtube.com/embed/iRkh2ycL-d0';
            case 'one-watch-now':
                return 'https://www.youtube.com/embed/lOms6ZZ8fZc';
            case 'two-watch-now':
                return 'https://www.youtube.com/embed/SLke5iuLhAs';
            case 'three-watch-now':
                return 'https://www.youtube.com/embed/UiB3q7xLbcU';
            case 'four-watch-now':
                return 'https://www.youtube.com/embed/yvD4h1UfwRo';
            case 'five-watch-now':
                return 'https://www.youtube.com/embed/wZ-T3BpaUUA';
            case 'six-watch-now':
                return 'https://www.youtube.com/embed/HpIxtwzgJeM';
            case 'seven-watch-now':
                return 'https://www.youtube.com/embed/LULTrLPjzZk';
            default:
                return 'https://www.youtube.com/embed/iRkh2ycL-d0';
        }
        
    }

    buttons.forEach(button=> {
        button.addEventListener('click', (e)=>{
            if(e.target.id !== 'main-more-info') {
                watchVideo(e.target.id);
            }else {
                openInfo();
            }
        })
    })

    closeModal.addEventListener('click', ()=> {
        modal.style.display = 'none';
        modalContent.innerHTML= "";
        body.style.overflow = "visible";
    })
}