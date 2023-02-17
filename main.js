/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

const queens = []

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Sydney Noh")
createQueen(3, "Christina Ashworth")
createQueen(4, "Aja Washington")

for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)
    console.log(hailMessage)
}

const tributeChest = []

const tribute = (tributeId, tributeDesc, queenId) => {
    const tributeObject = {
        id: tributeId,
        description: tributeDesc,
        queenid: queenId
    }

    tributeChest.push(tributeObject)
}
tribute(1, "Gold", 4)
tribute(2,"Gems", 3)
tribute(3, "Silver", 1)
tribute(4, "Platinum", 2)

for (const queenObject of queens) {
    for (const tributeObject of tributeChest) {
        if (tributeObject.queenid === queenObject.id) {
            console.log(`${queenObject.name} has tribute ${tributeObject.description}`)
        }
    }
}