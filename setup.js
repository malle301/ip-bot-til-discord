const fs = require('fs');
const path = require('path');

// Definer mapper og filer
const MAPPERS = {
    dataDir: path.join(__dirname, 'data'), // Mapper til at gemme data
    userDataFile: path.join(__dirname, 'data', 'user_data.json'), // Fil til brugerdata
    keysFile: path.join(__dirname, 'data', 'keys.json') // Fil til nøgler
};

// Funktion til at sikre, at mapperne og filerne eksisterer
function ensureDirectoriesAndFiles() {
    // Opret data-mappen, hvis den ikke eksisterer
    if (!fs.existsSync(MAPPERS.dataDir)) {
        fs.mkdirSync(MAPPERS.dataDir, { recursive: true });
        console.log('Oprettet mappe: data');
    }

    // Opret user_data.json, hvis den ikke eksisterer
    if (!fs.existsSync(MAPPERS.userDataFile)) {
        fs.writeFileSync(MAPPERS.userDataFile, JSON.stringify([], null, 4), 'utf-8');
        console.log('Oprettet fil: user_data.json');
    }

    // Opret keys.json, hvis den ikke eksisterer
    if (!fs.existsSync(MAPPERS.keysFile)) {
        fs.writeFileSync(MAPPERS.keysFile, JSON.stringify([], null, 4), 'utf-8');
        console.log('Oprettet fil: keys.json');
    }
}

// Kald funktionen for at sikre, at mapper og filer eksisterer
ensureDirectoriesAndFiles();
