# Discord Bot Projekt

Dette projekt er en Discord-bot, der er designet til at håndtere brugerdata og adgangsnøgler. Denne README beskriver, hvordan du opsætter projektet, herunder hvordan du opretter de nødvendige mapper og filer. lavet af malle

## Krav

- Node.js (version 16 eller nyere anbefales)
- Discord.js (version 14 eller nyere)

## Installation

1. **Klon projektet**

   Klon eller download projektet til din lokale maskine:
   
   git clone https://github.com/din-bruger/dit-projekt.git
   cd dit-projekt

2. **Installer afhængigheder**

   Installer de nødvendige Node.js-pakker:
   
   npm install

## Opsætning af Mapper og Filer

Projektet kræver, at visse mapper og filer eksisterer. Kør følgende script for at oprette dem:

1. **Opret en opsætningsfil**

   Opret en fil kaldet `setup.js` i roden af dit projekt og indsæt følgende kode:

   const fs = require('fs');
   const path = require('path');

   // Definer mapper og filer
   const MAPPERS = {
       dataDir: path.join(__dirname, 'data'),
       userDataFile: path.join(__dirname, 'data', 'user_data.json'),
       keysFile: path.join(__dirname, 'data', 'keys.json')
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

2. **Kør opsætningsscriptet**

   Kør scriptet for at oprette de nødvendige mapper og filer:
   
   node setup.js

## Konfiguration

1. **Indsæt din Discord Bot Token**

   Åbn din bot-fil (for eksempel `bot.js`) og indsæt din bot-token på den angivne linje:

   const TOKEN = 'DIN_DISCORD_TOKEN_HER';

2. **Konfigurer API-adgang (valgfrit)**

   Hvis du bruger en API til at tjekke IP-adresser, skal du opdatere din bot til at inkludere din API-URL og -nøgle.

## Kørsel af Bot

Når du har konfigureret din bot og oprettet de nødvendige filer, kan du starte din bot med:

node bot.js

## Brug

### Kommandoer

- /lookup - Find brugeroplysninger for en Discord ID.
- /ipsearch <IP-adresse> - Søg IP-adresse for detaljerede oplysninger.
- /commands - List alle tilgængelige kommandoer.
- /genkey - Generer en ny adgangsnøgle (kun ejere).
- /redeemkey <key> - Indløs en adgangsnøgle.
- /redeemedkeys - List alle indløste nøgler og deres varigheder (kun ejere).
- /removeaccess <@user> - Fjern adgang fra en bruger (kun ejere).

## Fejlfinding

Hvis du støder på problemer, skal du kontrollere følgende:

- Sørg for, at alle mapper og filer er oprettet korrekt.
- Kontrollér din bot-token og eventuelle API-nøgler for korrekthed.
- Se logfilen for fejlmeddelelser og spor dem til kildeproblemet.

## Licens

Dette projekt er licenseret under MIT License.

## Kontakt

For spørgsmål eller hjælp, kan du kontakte mig inde på https://discord.gg/bCez9GUsCw 