const body = document.getElementById('background')
const hexadecimal = document.querySelectorAll('.hexa')
const rgbNumbers = document.querySelectorAll('.RGB')
const currentColor = document.querySelector('.currentColorValue')
const buttonStart = document.getElementById('buttonStart')
const colorInput = document.querySelector('.colorInput')

buttonStart.addEventListener('click', () => {
    colorsRules(hexadecimal, rgbNumbers, body, colorInput)

})

buttonDefault.addEventListener('click', () => {
    defaultFunction(hexadecimal, rgbNumbers, body, colorInput)

})


function defaultFunction(HEX, RGB, frame, colorInput) {
    frame.style.background = 'rgb(0, 0, 0)'

    for ( let i = 0; i != 3; i++) {
        HEX[i].value = '', RGB[i].value = ''

    }

    colorInput.style.background = `#000000`
    currentColor.innerHTML = '#000000'

    return

}

function colorsRules(HEX, RGB, frame, colorInput) {
    for ( hexa of HEX ) {
        for ( rgb of RGB ) {
            if ( hexa.value != '' && rgb.value == '' )  {
                hexadecimalChanger(HEX, frame, colorInput)
                for ( index in hexadecimal ) {
                    hexadecimal[index].value = ''

                }


            } else if ( hexa.value == '' && rgb.value != '' ) {
                rbgChanger(RGB, frame, colorInput)
                for ( index in rgbNumbers ) {
                    rgbNumbers[index].value = ''

                }

            } else if ( hexa.value != '' && rgb.value != '' ) {
                currentColor.innerHTML = 'invalid'
                return window.alert('ERROR, please only HEX characters or only RGB numbers')

            }
        }
    }
}

function hexadecimalChanger(HEX, frame, colorInput) {
    var index = 0
    
    for ( hexa of HEX ) {
        let hexaValue = (hexa.value).toUpperCase()
        index++

        switch(index) {
            case 1:
                if ( hexaValue == '' ) {
                    var hexaR = '00'
        
                } else {
                    var hexaR = hexaValue
                };
            

            case 2:
                if ( hexaValue == '' ) {
                    var hexaG = '00'
        
                } else {
                    var hexaG = hexaValue
                };
            

            case 3:
                if ( hexaValue == '' ) {
                    var hexaB = '00'
        
                } else {
                    var hexaB = hexaValue
                }
        }
    }

    currentColor.innerHTML = `#${hexaR}${hexaG}${hexaB}`
    colorInput.style.background = `#${hexaR}${hexaG}${hexaB}`
    frame.style.background = `#${hexaR}${hexaG}${hexaB}`

    return 
}

function rbgChanger(RGB, frame, colorInput) {
    var index = 0

    for ( rgb of RGB ) {
        index++

        switch(index) {
            case 1:
                if ( rgb.value == '' ) {
                    var r = '0'
        
                } else {
                    var r = rgb.value
                };
            

            case 2:
                if ( rgb.value == '' ) {
                    var g = '0'
        
                } else {
                    var g = rgb.value
                };
            

            case 3:
                if ( rgb.value == '' ) {
                    var b = '0'
        
                } else {
                    var b = rgb.value
                }
        }
    }
    
    currentColor.innerHTML = `rgb(${r}, ${g}, ${b})`
    colorInput.style.background = `rgb(${r}, ${g}, ${b})`
    frame.style.background = `rgb(${r}, ${g}, ${b})`
    
    return 
}
