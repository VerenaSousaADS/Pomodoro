// DOM
// Document Object Model

// refatoração: mudar um código para deixá-lo mais entendível
// deixar o código mais performático
// SEM ALTERAR suas funcionalidades


import Controls from "./controls.js"
import Sound from "./sounds.js"
import  Timer  from "./timer.js"
import Events from "./events.js"
import{
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    buttonStop,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

// Event-driven
// programação imperativa
// callback

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})


const timer = Timer ({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})