// Data
const $madlibscontainer = document.getElementById("madlibscontainer");
const form = document.getElementById("form");
const $stories = document.getElementById('stories');
const $mainheader = document.getElementById("mainheader");

// Buttons
$mainheader.innerHTML = `
<h2 id="text">Choose a story:</h2>
<button id="mission-statement">Mission Statement</button>
<button id="lunch-room">Lunch Room!</button>
<button id="weather-report">Weather Report</button>`;

// Mission Statement Story Button
let missionStatementButton = document.getElementById("mission-statement")
missionStatementButton.addEventListener("click", function() {
    innerHTML = missionStatementButton.style.display = 'none'
    innerHTML = lunchRoomButton.style.display = 'none'
    innerHTML = weatherReportButton.style.display = 'none'
    innerHTML = text.style.display = 'none'
})
// Lunch Room Story Button
let lunchRoomButton = document.getElementById("lunch-room")
lunchRoomButton.addEventListener("click", function() {
    innerHTML = missionStatementButton.style.display = 'none'
    innerHTML = lunchRoomButton.style.display = 'none'
    innerHTML = weatherReportButton.style.display = 'none'
    innerHTML = text.style.display = 'none'
})

// Weather Report Story Button
let weatherReportButton = document.getElementById("weather-report")
weatherReportButton.addEventListener("click", function() {
    innerHTML = missionStatementButton.style.display = 'none'
    innerHTML = lunchRoomButton.style.display = 'none'
    innerHTML = weatherReportButton.style.display = 'none'
    innerHTML = text.style.display = 'none';
})

// Forms

// Mission Statement Story Form
missionStatementButton.addEventListener("click", function() {
    // Data
    const story = stories[0];
    const words = story.words
    const adjective = words[0]
    const verb1 = words[1]
    const verb2 = words[2]
    const pluralnoun1 = words[3]
    const pluralnoun2 = words[4]
    const pluralnoun3 = words[5]
    const data = {
        'Adjective': '',
        'Verb 1': '',
        'Verb 2': '',
        'Plural Noun 1': '',
        'Plural Noun 2': '',
        'Plural Noun 3': ''
    }

    $mainheader.innerHTML = `
    
    <h2>Provide the following words:</h2>`
    form.innerHTML = `
    <input type="text" name="${adjective}" id="adjective" placeholder="${adjective}"><br>
    <input type="text" name="${verb1}" id="verb1" placeholder="${verb1}"><br>
    <input type="text" name="${verb2}" id="verb2" placeholder="${verb2}"><br>
    <input type="text" name="${pluralnoun1}" id="pluralnoun1" placeholder="${pluralnoun1}"><br>
    <input type="text" name="${pluralnoun2}" id="pluralnoun2" placeholder="${pluralnoun2}"><br>
    <input type="text" name="${pluralnoun3}" id="pluralnoun3" placeholder="${pluralnoun3}"><br>
    <br>
    <button id="generatestorybutton" type="submit">Generate Story</button>`

    let gstory = document.getElementById("generatestorybutton")

    gstory.addEventListener("click", function() {
        // Replace words with user input
        data['Adjective'] = document.getElementById('adjective').value;
        data['Verb 1'] = document.getElementById('verb1').value;
        data['Verb 2'] = document.getElementById('verb2').value;
        data['Plural Noun 1'] = document.getElementById('pluralnoun1').value;
        data['Plural Noun 2'] = document.getElementById('pluralnoun2').value;
        data['Plural Noun 3'] = document.getElementById('pluralnoun3').value;
        console.log(words)
        console.log(data)

        $mainheader.innerHTML = stories[0].title + ':'
        
        // Output Story
        form.innerHTML = story.output(data)

        // Reset Button
        $madlibscontainer.innerHTML = `<div class='buttons'>
        <button id='reset'>Create Another Story</button>
        </div>`
        const $reset = document.getElementById('reset')
        $reset.addEventListener('click', function() {
            location.reload()
        })
    })
})

// Lunch Room Story Form
lunchRoomButton.addEventListener("click", function() {
    // Data
    const story = stories[1];
    const words = story.words
    const animal = words[0]
    const adjective1 = words[1]
    const adjective2 = words[2]
    const vegetable1 = words[3]
    const vegetable2 = words[4]
    const noun = words[5]
    const container = words[6]
    const data = {
        'Animal': '',
        'Adjective 1': '',
        'Adjective 2': '',
        'Vegetable 1': '',
        'Vegetable 2': '',
        'Noun': '',
        'Container': ''
    }

    $mainheader.innerHTML = `
    
    <h2>Provide the following words:</h2>`
    form.innerHTML = `
    <input type="text" name="${animal}" id="animal" placeholder="${animal}"><br>
    <input type="text" name="${adjective1}" id="adjective1" placeholder="${adjective1}"><br>
    <input type="text" name="${adjective2}" id="adjective2" placeholder="${adjective2}"><br>
    <input type="text" name="${vegetable1}" id="vegetable1" placeholder="${vegetable1}"><br>
    <input type="text" name="${vegetable2}" id="vegetable2" placeholder="${vegetable2}"><br>
    <input type="text" name="${noun}" id="noun" placeholder="${noun}"><br>
    <input type="text" name="${container}" id="container" placeholder="${container}"><br>
    <br>
    <button id="generatestorybutton" type="submit">Generate Story</button>`

    let gstory = document.getElementById("generatestorybutton")

    gstory.addEventListener("click", function() {
        // Replace words with user input
        data['Animal'] = document.getElementById('animal').value;
        data['Adjective 1'] = document.getElementById('adjective1').value;
        data['Adjective 2'] = document.getElementById('adjective2').value;
        data['Vegetable 1'] = document.getElementById('vegetable1').value;
        data['Vegetable 2'] = document.getElementById('vegetable2').value;
        data['Noun'] = document.getElementById('noun').value;
        data['Container'] = document.getElementById('container').value;
        console.log(words)
        console.log(data)

        $mainheader.innerHTML = stories[1].title + ':'

        // Output Story
        form.innerHTML = story.output(data)

        // Reset Button
        $madlibscontainer.innerHTML = `<div class='buttons'>
        <button id='reset'>Create Another Story</button>
        </div>`
        const $reset = document.getElementById('reset')
        $reset.addEventListener('click', function() {
            location.reload()
        })
    })
})

// Weather Report Story Form
weatherReportButton.addEventListener("click", function() {
    // Data
    const story = stories[2];
    const words = story.words
    const adjective1 = words[0]
    const adjective2 = words[1]
    const articleofclothing = words[2]
    const number1 = words[3]
    const number2 = words[4]
    const pluralnoun1 = words[5]
    const pluralnoun2 = words[6]
    const data = {
        'Adjective 1': '',
        'Adjective 2': '',
        'Article of Clothing': '',
        'Number 1': '',
        'Number 2': '',
        'Plural Noun 1': '',
        'Plural Noun 2': ''
    }

    $mainheader.innerHTML = `

    <h2>Provide the following words:</h2>`
    form.innerHTML = `
    <input type="text" name="${adjective1}" id="adjective1" placeholder="${adjective1}"><br>
    <input type="text" name="${adjective2}" id="adjective2" placeholder="${adjective2}"><br>
    <input type="text" name="${articleofclothing}" id="articleofclothing" placeholder="${articleofclothing}"><br>
    <input type="text" name="${number1}" id="number1" placeholder="${number1}"><br>
    <input type="text" name="${number2}" id="number2" placeholder="${number2}"><br>
    <input type="text" name="${pluralnoun1}" id="pluralnoun1" placeholder="${pluralnoun1}"><br>
    <input type="text" name="${pluralnoun2}" id="pluralnoun2" placeholder="${pluralnoun2}"><br>
    <br>
    <button id="generatestorybutton" type="submit">Generate Story</button>`

    let gstory = document.getElementById("generatestorybutton")

    gstory.addEventListener("click", function() {
        // Replace words with user input
        data['Adjective 1'] = document.getElementById('adjective1').value;
        data['Adjective 2'] = document.getElementById('adjective2').value;
        data['Article of Clothing'] = document.getElementById('articleofclothing').value;
        data['Number 1'] = document.getElementById('number1').value;
        data['Number 2'] = document.getElementById('number2').value;
        data['Plural Noun 1'] = document.getElementById('pluralnoun1').value;
        data['Plural Noun 2'] = document.getElementById('pluralnoun2').value;
        console.log(words)
        console.log(data)

        // Output Story
        form.innerHTML = story.output(data)

        // Reset Button
        $madlibscontainer.innerHTML = `<div class='buttons'>
    <button id='reset'>Create Another Story</button>
    </div>`
        const $reset = document.getElementById('reset')
        $reset.addEventListener('click', function() {
            location.reload()
        })
    })
})