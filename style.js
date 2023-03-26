let serial = 0;
document.getElementById('btn-Calculate').addEventListener('click', function () {
    serial += 1;

    const triangleName = document.getElementById('trianglename').innerText;
    const triangleBase = document.getElementById('triangle-b').value;
    const triangleBases = parseFloat(triangleBase);
    const triangleHeight = document.getElementById('triangle-h').value;
    if (triangleBases == "" || triangleHeight == "" || triangleBases <= 0 || triangleHeight <= 0) {
        return alert("please enter any valid number")
    }
    const triangleArea = 0.5 * parseFloat(triangleBase) * parseFloat(triangleHeight);
    let triangleAreas = triangleArea.toFixed(2);

    displaydataa(serial, triangleName, triangleAreas)


})


document.getElementById('btn-rectangle').addEventListener('click', function () {
    serial += 1;
    const rectangleName = document.getElementById('rectanglename').innerText;
    const rectanglewidth = document.getElementById('rectangle-w').value;
    const rectanglelarge = document.getElementById('rectangle-l').value;
    if (rectanglewidth == "" || rectanglelarge == "" || rectanglewidth <= 0 || rectanglelarge <= 0) {
        return alert("please enter any valid number")
    }


    const rectangleArea = rectanglewidth * rectanglelarge;
    let rectangleAreas = rectangleArea.toFixed(2);

    displaydataa(serial, rectangleName, rectangleAreas);

})
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    serial += 1;
    const parallelogramName = document.getElementById('parallelogramname').innerText;

    const parallelogrambase = document.getElementById('parallelogram-b').value;
    const parallelogramheight = document.getElementById('parallelogram-h').value;
    const parallelogramArea = parallelogrambase * parallelogramheight;
    let paralleogramAreas = parallelogramArea.toFixed(2);


    displaydataa(serial, parallelogramName, paralleogramAreas);


})
document.getElementById('btn-rhombus').addEventListener('click', function () {
    serial += 1;
    const rhombusName = document.getElementById('rhombusname').innerText;

    const rhombusD1 = document.getElementById('rhombus-d1').value;
    const rhombusD2 = document.getElementById('rhombus-d2').value;
    const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
    let rhombusAreas = rhombusArea.toFixed(2);

    displaydataa(serial, rhombusName, rhombusAreas);

})
document.getElementById('btn-pentagon').addEventListener('click', function () {
    serial += 1;
    const pentagonName = document.getElementById('pentagonname').innerText;
    const pentagonP = document.getElementById('pentagon-p').value;
    const pentagonD = document.getElementById('pentagon-b').value;
    const pentagonArea = 0.5 * pentagonP * pentagonD;
    let pentagonAreas = pentagonArea.toFixed(2);

    displaydataa(serial, pentagonName, pentagonAreas);

})
document.getElementById('btn-ellipse').addEventListener('click', function () {
    serial += 1;
    const ellipseName = document.getElementById('ellipsename').innerText;
    const ellipseA = document.getElementById('ellipse-a').value;
    const ellipseB = document.getElementById('ellipse-b').value;
    const ellispeArea = 3.1416 * ellipseA * ellipseB;
    let ellispeAreas = ellispeArea.toFixed(2);

    displaydataa(serial, ellipseName, ellispeAreas);

})
document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = "blog.html";
})

function displaydataa(serial, triangleName, triangleArea, button) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    
    <td>${triangleName}</td>
    <td>${triangleArea}cm<sup>2</sup></td>
    <td><button class="btn btn-blue">convrt m<sup>2</sup></td>
    `;
    container.appendChild(tr);

}

function randomColor(random) {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

document.getElementById('hover').addEventListener("mouseover", function () {
    document.random.style.backgroundColor = randomColor();
});

document.querySelector('random').addEventListener('mouseover', event => {
    event.random.style.fill = randomColor();
});

