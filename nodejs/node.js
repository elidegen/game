const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Pfad zum Ordner mit den Originalbildern
const inputFolder = './img/newRes';

// Pfad zum Ausgabeordner für die skalierten Bilder
const outputFolder = './img/characters/Knight_0/Hurt';

// Zielgröße der skalierten Bilder (z. B. 800x600)
const targetWidth = 500;
const targetHeight = 500;

// Funktion zum Skalieren eines einzelnen Bildes
async function resizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(targetWidth, targetHeight)
      .toFile(outputPath);
    console.log(`Bild ${inputPath} wurde skaliert und als ${outputPath} gespeichert.`);
  } catch (error) {
    console.error(`Fehler beim Skalieren von ${inputPath}: ${error}`);
  }
}

// Funktion zum Skalieren aller Bilder in einem Ordner
async function resizeImagesInFolder(folderPath) {
  try {
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
      const inputPath = path.join(folderPath, file);
      const outputPath = path.join(outputFolder, file);

      await resizeImage(inputPath, outputPath);
    }
  } catch (error) {
    console.error(`Fehler beim Skalieren der Bilder in ${folderPath}: ${error}`);
  }
}

// Skaliere Bilder im Input-Ordner
resizeImagesInFolder(inputFolder);
