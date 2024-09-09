const chainLink = 'C:/Users/melom/Dropbox/Dropbox/COLLAB_Dodd_Balas/materials for tasks/jsPsych-Tasks/vNOMT-GreeblesAsym/experiment.html' // Add link here if you want to link to another experiment/site at finish
const maxAttentionFails = 1000 // Knock out participants if more than this attention fails
const knockoutLink = ''
const doAttentionCheck = true

const studyTime = 3000
const reviewTime = 20000

let knockedOut = false
const jsPsych = initJsPsych({
    on_finish: function () {
        if (knockedOut && knockoutLink !== '') {
            // TODO: Make sure this is properly supported by Prolific if using it
            window.location = knockoutLink
        }

        if (!chainLink == '' && !knockedOut) {
            window.location = chainLink + "?id=" + sbjID + "&num=" + attentionFails + "&src=" + source + '&study=' + study
        }//"&attn=" --> "&num="
    }
});

let study = jsPsych.data.getURLVariable('study')
if (study === undefined) {
    study = 'unknown'
}

// Make id
let sbjID = jsPsych.data.getURLVariable('id');
if (sbjID === undefined) {
    sbjID = jsPsych.randomization.randomID(10)
}

// Get attention check counter
let attentionFails = Number(jsPsych.data.getURLVariable('num')) //attn --> num
if (isNaN(attentionFails)) {
    attentionFails = 0
}

// Get source of participant
let source = jsPsych.data.getURLVariable('src')
if (source === undefined) {
    source = 'unknown'
}

jsPsych.data.addProperties({
    "study": study,
    "sbjID": sbjID,
    "source": source
})

// Timeline
const timeline = []

// Preload 
const images = [
    `./stimuli/AA_Review_image.jpg`,
    `./stimuli/attention1_1.jpg`,
    `./stimuli/attention1_2.jpg`,
    `./stimuli/attention1_3.jpg`,
    `./stimuli/attention2_1.jpg`,
    `./stimuli/attention2_2.jpg`,
    `./stimuli/attention2_3.jpg`,
]
for (trial of trials) {
    if (trial.corrRes == -1) { // Study trial
        images.push(`./stimuli/${trial.image}.jpg`)
    } else { // Test trial
        images.push(`./stimuli/${trial.image}_1.jpg`)
        images.push(`./stimuli/${trial.image}_2.jpg`)
        images.push(`./stimuli/${trial.image}_3.jpg`)
    }
}

// Preload
timeline.push({
    type: jsPsychPreload,
    auto_preload: true,
    images: images
})

// Enter full screen
timeline.push({
    type: jsPsychFullscreen,
    fullscreen_mode: true
})

// Check browser
timeline.push({
    type: jsPsychBrowserCheck,
    inclusion_function: (data) => {
        return !data.mobile
    },
    exclusion_message: (data) => {
        return `
        <p>You must use a desktop/laptop computer to participate in this 
        experiment.</p>
        <p>Please restart the experiment on a desktop/laptop computer.</p>
    `;
    }
})

// Add title page
timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <h1>Cambridge Memory Test for Faces</h1>
        <p>Brad Duchaine & Ken Nakayama</p>
        <p>Copyright 2004</p>
        <p>Not to be distributed</p>
    `,
    choices: [],
    trial_duration: 5000,
    post_trial_gap: 1000
})

function makeStudyTrial(image, testTrial = true) {
    return {
        type: jsPsychHtmlButtonResponse,
        stimulus: `
            <p>Study</p>
            <img src="./stimuli/${image}.jpg"/>
        `,
        choices: [],
        trial_duration: studyTime,
        post_trial_gap: 1000
    }
}

function makeTestTrial(trial, testTrial = true) {
    return {
        type: jsPsychHtmlButtonResponse,
        stimulus: `
            <p>Test</p>
            <p>Which face did you just view?</p>
        `,
        choices: [`${trial.image}_1.jpg`, `${trial.image}_2.jpg`, `${trial.image}_3.jpg`],
        button_html: [
            `<input type="image" src="./stimuli/%choice%" style="margin: 0px -8px;"/>`,
            `<input type="image" src="./stimuli/%choice%" style="margin: 0px -8px;"/>`,
            `<input type="image" src="./stimuli/%choice%" style="margin: 0px -8px;"/>`
        ],
        data: {
            trial: trial.trialN,
            corrRes: trial.corrRes,
            trialType: trial.trialType,
            testTrial: testTrial
        },
        on_finish: function (data) {
            data.correct = data.response == data.corrRes
        }
    }
}

practiceTimeline = []
practiceTimeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <h1>Practice</h1>
        <p>Memorize the face in the next three images.</p>
        <p>A test will follow.</p>
    `,
    choices: ["Click to continue"],
})

const practiceStudies = trials.filter(d => d.trialType == "practiceStudy")
for (const pracStudyTrial of practiceStudies) {
    practiceTimeline.push(makeStudyTrial(pracStudyTrial.image, testTrial = false))
}

const practiceTrials = trials.filter(d => d.trialType == "practiceTest")
for (const practialTrial of practiceTrials) {
    practiceTimeline.push(makeTestTrial(practialTrial, testTrial = false))
}

practiceTimeline.push({
    timeline: [{
        type: jsPsychHtmlButtonResponse,
        stimulus: `
            You did not answer all the practice problems correctly. Please try again.
        `,
        choices: [],
        trial_duration: 1000,
    }],
    conditional_function: function () {
        return jsPsych.data.get().last(3).filter({ trialType: "practiceTest", correct: true }).count() != 3
    }
})

timeline.push({
    timeline: practiceTimeline,
    loop_function: function (data) {
        return data.last(4).filter({ trialType: "practiceTest", correct: true }).count() != 3
    }
})

timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <p>You answered all the practice problems correctly.</p>
        <p>Great! Let's go on and do the actual test.</p>
        <p>In this test, you will learn to recognize six people.</p>
    `,
    choices: ["Click to continue"],
})

const reviewSlide = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <p>Review the faces (20 seconds)</p>
        <img src="./stimuli/AA_Review_image.jpg"/>
    `,
    choices: [],
    trial_duration: reviewTime,
    post_trial_gap: 1000,
}

nonPracTrials = trials.filter(d => !d.trialType.includes("practice"))
for (const trial of nonPracTrials) {
    if (trial.trialN % 1 == 0.1) { // Study instructions
        timeline.push({
            type: jsPsychHtmlButtonResponse,
            stimulus: `
                <p>Memorize the following face.</p>
            `,
            choices: ["Click to continue"],
        })
    } else if (trial.trialN == 19) { // Review phase
        timeline.push({
            type: jsPsychHtmlButtonResponse,
            stimulus: `
                <p>Next you will review the same six people for 20 seconds.</p>
            `,
            choices: ["Click to continue"],
        })

        timeline.push(reviewSlide)

        timeline.push({
            type: jsPsychHtmlButtonResponse,
            stimulus: `
                <p>Now your memory of those faces will be tested.</p>
                <p>In the remaining trials, the correct answer can be any of the six faces.</p>
                <p>The incorrect faces are sometimes very similar to the target faces, so be sure to look at each face prior to answering.</p>
            `,
            choices: ["Click to continue"],
        })
    } else if (trial.trialN == 49) { // Midway review
        timeline.push(reviewSlide)
    } else if (doAttentionCheck && trial.trialN == 45) { // First attention check
        attTrial = {
            "trialN": -1,
            "corrRes": 0,
            "image": "attention1",
            "trialType": "attentionCheck"
        }

        attentionCheckSlide = makeTestTrial(attTrial, testTrial = false)
        attentionCheckSlide.on_finish = function (data) {
            data.correct = data.response == data.corrRes

            // Add extra success column
            data.success = data.correct

            attentionFails += data.success ? 0 : 1
            data.attentionFails = attentionFails

            if (data.attentionFails > maxAttentionFails && knockoutLink !== '') {
                knockedOut = true
                jsPsych.endExperiment("This experiment was ended due to missing too many attention checks.")
            }
        }

        timeline.push(attentionCheckSlide)
    } else if (doAttentionCheck && trial.trialN == 85) { // Second attention check
        attTrial = {
            "trialN": -1,
            "corrRes": 1,
            "image": "attention2",
            "trialType": "attentionCheck"
        }

        attentionCheckSlide = makeTestTrial(attTrial, testTrial = false)
        attentionCheckSlide.on_finish = function (data) {
            data.correct = data.response == data.corrRes

            // Add extra success column
            data.success = data.correct

            attentionFails += data.success ? 0 : 1
            data.attentionFails = attentionFails

            if (data.attentionFails > maxAttentionFails && knockoutLink !== '') {
                knockedOut = true
                jsPsych.endExperiment("This experiment was ended due to missing too many attention checks.")
            }
        }

        timeline.push(attentionCheckSlide)
    }

    // Make trials
    if (trial.trialN % 1 != 0) { // Study
        timeline.push(makeStudyTrial(trial.image, testTrial = true))
    } else { // Test
        timeline.push(makeTestTrial(trial, testTrial = true))
    }
}

// Add end slide
timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <p>You have completed this task!</p>
        <p>Loading the next task.</p>
        <p>Do not click away until the next task.</p>
    `,
    choices: [],
    trial_duration: 5000,
})

timeline.push({
    type: jsPsychFullscreen,
    fullscreen_mode: false
})

jsPsych.run(timeline);