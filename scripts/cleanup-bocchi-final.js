const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// Function to process all files recursively
function processFiles(dir, exclude = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip excluded directories
      if (exclude.some(ex => fullPath.includes(ex))) {
        continue;
      }
      processFiles(fullPath, exclude);
    } else {
      // Process files with relevant extensions
      if (item.match(/\.(ts|tsx|js|jsx|json|html)$/)) {
        processFile(fullPath);
      }
    }
  }
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updated = content;
    
    // Replace all remaining Bocchi references
    updated = updated.replace(/bocchi-temp/g, 'kochan-temp');
    updated = updated.replace(/bocchi-bulk-download/g, 'kochan-bulk-download');
    updated = updated.replace(/bocchi-url-imports/g, 'kochan-url-imports');
    updated = updated.replace(/bocchi-extract-temp/g, 'kochan-extract-temp');
    updated = updated.replace(/bocchi-theme-config/g, 'kochan-theme-config');
    
    // Update remaining translation strings
    updated = updated.replace(/إظهار Bocchi/g, 'إظهار KOCHAN');
    updated = updated.replace(/إخفاء Bocchi/g, 'إخفاء KOCHAN');
    updated = updated.replace(/إنهاء Bocchi/g, 'إنهاء KOCHAN');
    updated = updated.replace(/Zobrazit Bocchi/g, 'Zobrazit KOCHAN');
    updated = updated.replace(/Skrýt Bocchi/g, 'Skrýt KOCHAN');
    updated = updated.replace(/Ukončit Bocchi/g, 'Ukončit KOCHAN');
    updated = updated.replace(/Bocchi anzeigen/g, 'KOCHAN anzeigen');
    updated = updated.replace(/Bocchi verstecken/g, 'KOCHAN verstecken');
    updated = updated.replace(/Bocchi beenden/g, 'KOCHAN beenden');
    updated = updated.replace(/Εμφάνιση Bocchi/g, 'Εμφάνιση KOCHAN');
    updated = updated.replace(/Απόκρυψη Bocchi/g, 'Απόκρυψη KOCHAN');
    updated = updated.replace(/Έξοδος από Bocchi/g, 'Έξοδος από KOCHAN');
    updated = updated.replace(/結束 Bocchi/g, '結束 KOCHAN');
    updated = updated.replace(/Sair do Bocchi/g, 'Sair do KOCHAN');
    
    // Update descriptions in all languages
    updated = updated.replace(/إصدار جديد من Bocchi متاح للتحميل/g, 'إصدار جديد من KOCHAN متاح للتحميل');
    updated = updated.replace(/Nová verze Bocchi je k dispozici ke stažení/g, 'Nová verze KOCHAN je k dispozici ke stažení');
    updated = updated.replace(/Eine neue Version von Bocchi ist zum Download verfügbar/g, 'Eine neue Version von KOCHAN ist zum Download verfügbar');
    updated = updated.replace(/Μια νέα έκδοση του Bocchi είναι διαθέσιμη για λήψη/g, 'Μια νέα έκδοση του KOCHAN είναι διαθέσιμη για λήψη');
    updated = updated.replace(/Uma nova versão do Bocchi está disponível para download/g, 'Uma nova versão do KOCHAN está disponível para download');
    
    // Update repo references in updaterService
    updated = updated.replace(/const repo = 'bocchi'/g, "const repo = 'kochanlolskins'");
    updated = updated.replace(/const owner = 'hoangvu12'/g, "const owner = 'melihkochan'");
    
    // Update DLL notices in English
    updated = updated.replace(/Due to a recent DMCA takedown, Bocchi can no longer distribute/g, 'Due to a recent DMCA takedown, KOCHAN can no longer distribute');
    updated = updated.replace(/To use Bocchi, you must provide/g, 'To use KOCHAN, you must provide');
    updated = updated.replace(/Without this file, Bocchi cannot function/g, 'Without this file, KOCHAN cannot function');
    
    // Update comments
    updated = updated.replace(/Original Bocchi required/g, 'Original KOCHAN required');
    updated = updated.replace(/This modal is disabled in KOCHAN/g, 'This modal is disabled in KOCHAN');
    
    if (content !== updated) {
      fs.writeFileSync(filePath, updated);
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log('Cleaning up all remaining Bocchi references...');
processFiles(rootDir, ['node_modules', 'out', 'dist', '.git', 'scripts']);
console.log('Cleanup complete!');