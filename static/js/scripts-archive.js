function displayImages() {
    console.log("call displayImages function")
    var p1Small = document.getElementById("p1-small");
    var p1Wide = document.getElementById("p1-wide");

    // var s1_1 = document.getElementById("s1_1");
    // var s2_1 = document.getElementById("s2_1");
    // var s3_1 = document.getElementById("s3_1");
    // var s4_1 = document.getElementById("s4_1");
    // var s5_1 = document.getElementById("s5_1");
    // var s6_1 = document.getElementById("s6_1");
    // var s7_1 = document.getElementById("s7_1");

    // var s1_2 = document.getElementById("s1_2");
    // var s2_2 = document.getElementById("s2_2");
    // var s3_2 = document.getElementById("s3_2");
    // var s4_2 = document.getElementById("s4_2");
    // var s5_2 = document.getElementById("s5_2");
    // var s6_2 = document.getElementById("s6_2");
    // var s7_2 = document.getElementById("s7_2");

    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var s3 = document.getElementById("s3");
    var s4 = document.getElementById("s4");
    var s5 = document.getElementById("s5");
    var s6 = document.getElementById("s6");
    var s7 = document.getElementById("s7");

    // var images = document.querySelectorAll("img");

    var preview_pane = document.getElementById("preview_pane")
    // var images_id = []
    // images.forEach(function(image) {
    //     images_id.push(image.id)
    // })
    // console.log(images)
    // console.log(images_id)

    // var component_arr = [
    //     p1Small, 
    //     p1Wide, 
    //     s1_1, 
    //     s2_1, 
    //     s3_1, 
    //     s4_1, 
    //     s5_1, 
    //     s6_1, 
    //     s7_1, 
    //     s1_2, 
    //     s2_2, 
    //     s3_2, 
    //     s4_2, 
    //     s5_2, 
    //     s6_2, 
    //     s7_2
    // ]
    var component_arr = [
        p1Small, 
        p1Wide, 
        s1, 
        s2, 
        s3, 
        s4, 
        s5, 
        s6, 
        s7
    ]
    console.log(component_arr)

    html_comp_arr = [
        '<img style="display: block;" id="p1-small" src=https://braze-images.com/appboy/communication/assets/image_assets/images/661e1fd58b8b9c005886ced3/original.png?1713250258" alt="">',
        '<img style="display: block;" id="p1-wide" src=https://braze-images.com/appboy/communication/assets/image_assets/images/661e1fd58b8b9c005886ced3/original.png?1713250258" alt="">',
        '<img style="display: block;" id="s1" src=https://braze-images.com/appboy/communication/assets/image_assets/images/661e1fd58b8b9c005886ced3/original.png?1713250258" alt="">',
        '<img style="display: block;" id="s2" src=https://braze-images.com/appboy/communication/assets/image_assets/images/661e1fd58b8b9c005886ced3/original.png?1713250258" alt="">',
        '<img style="display: block;" id="s3" src=https://braze-images.com/appboy/communication/assets/image_assets/images/661e1fd58b8b9c005886ced3/original.png?1713250258" alt="">',
        '<img style="display: block;" id="s4" src=https://braze-images.com/appboy/communication/assets/image_assets/images/661e1fd58b8b9c005886ced3/original.png?1713250258" alt="">',
        '<img style="display: block;" id="s5" src=https://braze-images.com/appboy/communication/assets/image_assets/images/661e1fd58b8b9c005886ced3/original.png?1713250258" alt="">',
        '<img style="display: block;" id="s6" src=https://braze-images.com/appboy/communication/assets/image_assets/images/661e1fd58b8b9c005886ced3/original.png?1713250258" alt="">',
        '<img style="display: block;" id="s7" src=https://braze-images.com/appboy/communication/assets/image_assets/images/661e1fd58b8b9c005886ced3/original.png?1713250258" alt="">'
    ]
    
    // images.forEach((image, index) => {
    //     component = component_arr[index];
    //     if (component.selected == true) {
    //         image.style.display = "block"
    //         console.log(image)
    //     } else {
    //         image.style.display = "none"
    //     }
    // })

    selections = [
        document.getElementById("primary-select"),
        document.getElementById("secondary-select1"),
        document.getElementById("secondary-select2")
    ]

    var complete_render = ""
    component_arr.forEach((component, index) => {
        comp_render = html_comp_arr[index];
        if (component.selected == true) {
            console.log(component.id, "is true")
            complete_render = complete_render.concat(comp_render)
            preview_pane.innerHTML = complete_render
        }
    })
}

document.getElementById("primary-select").addEventListener("change", displayImages);
document.getElementById("secondary-select1").addEventListener("change", displayImages);
document.getElementById("secondary-select2").addEventListener("change", displayImages);
// document.getElementById("secondary-select3").addEventListener("change", displayImages);
document.getElementById("tertiary-select1").addEventListener("change", displayImages);
document.getElementById("tertiary-select2").addEventListener("change", displayImages);
// document.getElementById("tertiary-select3").addEventListener("change", displayImages);