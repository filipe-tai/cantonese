module.exports = (sType, aList, iArrayLength, sRandom) => {

    let rand = 0
    /* palavras.splice(rand, 1)
    console.log(palavras, palavras[rand]) */
    if (sType === "words") {
        let i = 0,
            shuffle = [],
            arrayLength = 0

        if(sRandom) {
            arrayLength = 12
        } else {
            arrayLength = iArrayLength
        }

        while (i < arrayLength) {
            rand = Math.round(Math.random() * (aList.length - 1))
            let word = shuffle.indexOf(aList[rand])

            if (word = -1) {
                var sWord = aList[rand],
                    bAlreadyExists = shuffle.lastIndexOf(sWord)
                if (bAlreadyExists = -1) {
                    shuffle.push(`${i + 1}) ${sWord}`)
                    aList.splice(rand, 1) //remove 
                    i++
                }

            } else {
                console.log("Não entra no if", word)
            }
        }
        return shuffle

    } else if (sType === "numbers") {
        let iIndex = 0
        let aNumber = [0]
        let aMultiplier = []

        while (iIndex <= 13) {

            if (iIndex <= 3) {
                aNumber.push(Math.round(Math.random() * (99 - 0) + 0))
            } else if (iIndex <= 6) {
                aNumber.push(Math.round(Math.random() * (999 - 100) + 100))
            } else if (iIndex <= 9) {
                aNumber.push(Math.round(Math.random() * (9999 - 1000) + 1000))
            } else if (iIndex <= 12) {
                aNumber.push(Math.round(Math.random() * (99999 - 10000) + 10000))
            }
            iIndex++
        }

        return aNumber

    } else if (sType === "phrases") {
        let aText = []

        while (aList.length > 0) {
            rand = Math.round(Math.random() * (aList.length - 1))
            aText.push(aList[rand])
            aList.splice(rand, 1)
        }
        console.log(aText.length)
        return aText
    }
}
