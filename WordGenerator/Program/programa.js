const sExercicio = process.argv.indexOf("-exercicio") !== -1
const sRandom = process.argv.indexOf("-aleatório") !== -1
const sAll = process.argv.indexOf("-all") !== -1
const aLesson1 = ["1) Self-Introduction", "2) Nationality", "3) Numbers", "4) Cardinal Direction", "5) Classroom",
    "6) Word Of The Day", "7) Reading Exercise", "8) Colors"]
const aLesson2 = ["0) Expressions", "1 to 10 for random words"]
var sLessons = "",
    sChoose = "Escolhe uma das seguintes lições:"

const generate = require("./0generate"),
    words = require("./0words.js"),
    phrases = require("./0phrases.js")

const sWords = "words",
    sNumbers = "numbers",
    sPhrases = "phrases"

if (sExercicio) {
    for (i in aLesson1) {
        sLessons += `${aLesson1[i]}, `
    }

    sLesson = sLessons.slice(0, sLessons.length - 2)

    process.stdout.write(`${sChoose} ${sLesson}.\n`)
    process.stdout.write("Lição: ")

    process.stdin.on("data", data => {
        const nomeDaLicao = data.toString().replace("\n", "").replace("\r", "")

        switch (nomeDaLicao) {

            case "1":
                console.log(generate(sWords, words.selfIntroduction, words.selfIntroduction.length, false))
                break

            case "2":
                console.log(generate(sWords, words.country, words.country.length, false))
                break

            case "3":
                console.log(generate(sNumbers))
                break

            case "4":
                console.log(generate(sWords, words.cardinalDirection, words.cardinalDirection.length, false))
                break

            case "5":
                console.log(generate(sWords, words.classroom, words.classroom.length, false))
                break

            case "6":
                console.log(generate(sWords, words.wordOfTheDay, words.wordOfTheDay.length, false))
                break

            case "7":
                console.log(generate(sWords, phrases.phrases, phrases.phrases.length, true))
                break

            case "8":
                console.log(generate(sPhrases, words.colors, words.colors.length, false))
                break
            default:
                process.stdout.write(`A lição ${nomeDaLicao} não existe`)
        }

        process.exit()
    })

} else if (sRandom) {
    for (i in aLesson2) {
        sLessons += `${aLesson2[i]}, `
    }

    sLesson = sLessons.slice(0, sLessons.length - 2)

    process.stdout.write(`${sChoose} ${sLesson}.\n`)
    process.stdout.write("Lição: ")

    process.stdin.on("data", data => {
        const nomeDaLicao = data.toString().replace("\n", "").replace("\r", "")

        switch (nomeDaLicao) {
            case "0":
                console.log(generate(sWords, words.expressions, words.expressions.length, true))
                break
            case "1":
                console.log(generate(sWords, words.characters, words.characters.length, true))
                break
            case "2":
                console.log(generate(sWords, words.characters2, words.characters2.length, true))
                break
            case "3":
                console.log(generate(sWords, words.characters3, words.characters3.length, true))
                break
            case "4":
                console.log(generate(sWords, words.characters4, words.characters4.length, true))
                break
            case "5":
                console.log(generate(sWords, words.characters5, words.characters5.length, true))
                break
            case "6":
                console.log(generate(sWords, words.characters6, words.characters6.length, true))
                break
            case "7":
                console.log(generate(sWords, words.characters7, words.characters7.length, true))
                break
            case "8":
                console.log(generate(sWords, words.characters8, words.characters8.length, true))
                break
            case "9":
                console.log(generate(sWords, words.characters9, words.characters9.length, true))
                break
            case "10":
                console.log(generate(sWords, words.characters10, words.characters10.length, true))
                break
            default:
                process.stdout.write(`A lição ${nomeDaLicao} não existe`)
        }
        process.exit()
    })
} else if (sAll) {
    let aCharacters = words.characters.concat(words.characters2, words.characters3, words.characters4, words.characters5, words.characters6, 
        words.characters7, words.characters8, words.characters9, words.characters10)

    console.log(aCharacters.length, generate(sWords, aCharacters, aCharacters.length, true))
}