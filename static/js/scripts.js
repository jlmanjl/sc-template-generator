var p1SmallPreview = '<img style="display: block;" id="p1-small-img" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee463612c50058569344/original.png?1715138117" alt="p1Small">'
var p1WidePreview = '<img style="display: block;" id="p1-wide" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee46a889be0058f37198/original.png?1715138117" alt="p1Wide">'

var s1Preview = '<img style="display: block;" id="s1" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee451ed9be005972f72f/original.png?1715138117" alt="s1">'
var s2Preview = '<img style="display: block;" id="s2" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee46cea9aa0059194e82/original.png?1715138118" alt="s2">'
var s3Preview = '<img style="display: block;" id="s3" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee46cbc2a10059715832/original.png?1715138118" alt="s3">'
var s4Preview = '<img style="display: block;" id="s4" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee46385448005843abc2/original.png?1715138118" alt="s4">'
var s5Preview = '<img style="display: block;" id="s5" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee47292c7e00583ea2d2/original.png?1715138119" alt="s5">'
var s6Preview = '<img style="display: block;" id="s6" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee473b2d4a0058c2ccf6/original.png?1715138119" alt="s6">'
var s7Preview = '<img style="display: block;" id="s7" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee453b2d4a0058c2ccf5/original.png?1715138117" alt="s7">'

var t2Preview = '<img style="display: block;" id="t2" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee47a6d7cb00584ea9e4/original.png?1715138119" alt="t2">'
var t3Preview = '<img style="display: block;" id="t3" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee4695f2740062841bb5/original.png?1715138118" alt="t3">'
var tCSPreview = '<img style="display: block;" id="t_csrequest" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee47385448005843abc3/original.png?1715138118" alt="t_csrequest">'
var tCertified = '<img style="display: block;" id="t_sccertified" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee4777d3510059de4552/original.png?1715138118" alt="t_sccertified">'
var tInboundPreview = '<img style="display: block;" id="t_inbounddemo" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee4795f2740062841bb6/original.png?1715138118" alt="t_inbounddemo">'
var tLiveWebPreview = '<img style="display: block;" id="t_livewebinars" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee47cbc2a10059715833/original.png?1715138119" alt="t_livewebinars">'
var tIntegrationPreview = '<img style="display: block;" id="t_integrations" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee4798058b0058b579be/original.png?1715138119" alt="t_integrations">'
var tFreeSeatPreview = '<img style="display: block;" id="t_freeseats" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee47727e8c0059420b38/original.png?1715138119" alt="t_freeseats">'
var tSensorsPreview = '<img style="display: block;" id="t_sensors" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee462674dd00589689a3/original.png?1715138118" alt="t_sensors">'
var tCommunityPreview = '<img style="display: block;" id="t_community" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663aee4798058b0058b579bd/original.png?1715138118" alt="t_community">'

// var trilinePreview = '<img style="display: block;" id="t_community" src="https://braze-images.com/appboy/communication/assets/image_assets/images/663b5bd4f02db1005999e18e/original.png?1715166163" alt=triline>'

var previewPane = document.getElementById("preview")
var previewText = document.getElementById("preview-text")

var selectBoxes = [
    document.getElementById("primary-select"),
    document.getElementById("secondary-select1"),
    document.getElementById("secondary-select2"),
    document.getElementById("tertiary-select1"),
    document.getElementById("tertiary-select2")
]

function displayImages() {
    console.log("Run displayImages")
    
    // string for the full render
    var completeRender = ''

    //iterate over the select boxes
    selectBoxes.forEach((selectBox) => {
        console.log("Running script for:", selectBox.id)
        var selectId = selectBox.options[selectBox.selectedIndex].id

        // add to the render string if id is selected
        if (selectId === "p1-small") {
            completeRender = completeRender.concat(p1WidePreview)
            debugLoop(selectId)
        } else if (selectId === "p1-wide") {
            completeRender = completeRender.concat(p1WidePreview)
            debugLoop(selectId) 
        } else if (selectId === "s1") {
            completeRender = completeRender.concat(s1Preview)
            debugLoop(selectId)
        } else if (selectId === "s2") {
            completeRender = completeRender.concat(s2Preview)
            debugLoop(selectId)
        } else if (selectId === "s3") {
            completeRender = completeRender.concat(s3Preview)
            debugLoop(selectId)
        } else if (selectId === "s4") {
            completeRender = completeRender.concat(s4Preview)
            debugLoop(selectId)
        } else if (selectId === "s5") {
            completeRender = completeRender.concat(s5Preview)
            debugLoop(selectId)
        } else if (selectId === "s6") {
            completeRender = completeRender.concat(s6Preview)
            debugLoop(selectId)
        } else if (selectId === "s7") {
            completeRender = completeRender.concat(s7Preview)
            debugLoop(selectId)
        } else if (selectId === "t2") {
            completeRender = completeRender.concat(t2Preview)
            debugLoop(selectId)
        } else if (selectId === "t3") {
            completeRender = completeRender.concat(t3Preview)
            debugLoop(selectId)
        } else if (selectId === "t_csrequest") {
            completeRender = completeRender.concat(tCSPreview)
            debugLoop(selectId)
        } else if (selectId === "t_sccertified") {
            completeRender = completeRender.concat(tCertified)
            debugLoop(selectId)
        } else if (selectId === "t_inbounddemo") {
            completeRender = completeRender.concat(tCertified)
            debugLoop(selectId)
        } else if (selectId === "t_livewebinars") {
            completeRender = completeRender.concat(tLiveWebPreview)
            debugLoop(selectId)
        } else if (selectId === "t_integrations") {
            completeRender = completeRender.concat(tIntegrationPreview)
            debugLoop(selectId)
        } else if (selectId === "t_freeseats") {
            completeRender = completeRender.concat(tFreeSeatPreview)
            debugLoop(selectId)
        } else if (selectId === "t_sensors") {
            completeRender = completeRender.concat(tSensorsPreview)
            debugLoop(selectId)
        } else if (selectId === "t_community") {
            completeRender = completeRender.concat(tCommunityPreview)
            debugLoop(selectId)
        }
    })
    previewPane.innerHTML = completeRender
    console.log(completeRender.toString())
    if (completeRender != '') {
        previewText.style.display = "none"
    } else {
        previewText.style.display = "block"
    }
}

function debugLoop (selectId) {
    console.log("you have selected:", selectId)
    console.log("concat for: ", selectId)
}

document.getElementById("primary-select").addEventListener("change", displayImages);
document.getElementById("secondary-select1").addEventListener("change", displayImages);
document.getElementById("secondary-select2").addEventListener("change", displayImages);
document.getElementById("tertiary-select1").addEventListener("change", displayImages);
document.getElementById("tertiary-select2").addEventListener("change", displayImages);