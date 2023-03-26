function startVideoFromCamera() {

    const specs = {video:{width:550, height: 350}}

    navigator.mediaDevices.getUserMedia(specs).then(stream => {

        const videoElement = document.querySelector('#video')
        videoElement.srcObject = stream

        const VideoModifiedElement = document.querySelector('#videoModified')
        VideoModifiedElement.srcObject = stream

    }).catch(error=>{
        console.log(error)
    })

}

window.addEventListener("DOMContentLoaded", startVideoFromCamera)

const video = document.querySelector('#videoModified')

function changeFilter(filter) {
    video.className = ''
    video.classList.add(filter)
}

function resetar() {
    video.className = ''
}