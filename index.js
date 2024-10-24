const pdf = require('pdf-poppler');
const fs = require('fs');
const path = require('path');


async function convertPdfToPng(pdfPath, outputDir) {
    try {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);  
        }

        
        let options = {
            format: 'png',
            out_dir: outputDir,  
            out_prefix: path.basename(pdfPath, path.extname(pdfPath)),  
            page: null  
        };

        console.log(`Mengonversi file: ${pdfPath}...`);

        
        await pdf.convert(pdfPath, options);
        console.log('Konversi selesai.');
    } catch (error) {
        console.error('Terjadi kesalahan saat mengonversi PDF:', error);
    }
}


const pdfFilePath = 'a.pdf';  
const outputDirectory = './output';  


convertPdfToPng(pdfFilePath, outputDirectory);
