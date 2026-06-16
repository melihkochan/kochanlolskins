const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'src', 'renderer', 'src', 'locales');

// Function to recursively replace Bocchi with KOCHAN in JSON files
function replaceBocchiInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;

    // Replace patterns
    updatedContent = updatedContent.replace(/Show Bocchi/g, 'Show KOCHAN');
    updatedContent = updatedContent.replace(/Hide Bocchi/g, 'Hide KOCHAN'); 
    updatedContent = updatedContent.replace(/Quit Bocchi/g, 'Quit KOCHAN');
    updatedContent = updatedContent.replace(/Exit Bocchi/g, 'Exit KOCHAN');
    updatedContent = updatedContent.replace(/Close Bocchi/g, 'Close KOCHAN');
    
    // Localized versions
    updatedContent = updatedContent.replace(/Mostrar Bocchi/g, 'Mostrar KOCHAN'); // Spanish
    updatedContent = updatedContent.replace(/Ocultar Bocchi/g, 'Ocultar KOCHAN'); // Spanish
    updatedContent = updatedContent.replace(/Salir de Bocchi/g, 'Salir de KOCHAN'); // Spanish
    
    updatedContent = updatedContent.replace(/Afficher Bocchi/g, 'Afficher KOCHAN'); // French
    updatedContent = updatedContent.replace(/Masquer Bocchi/g, 'Masquer KOCHAN'); // French
    updatedContent = updatedContent.replace(/Quitter Bocchi/g, 'Quitter KOCHAN'); // French
    
    updatedContent = updatedContent.replace(/Mostra Bocchi/g, 'Mostra KOCHAN'); // Italian
    updatedContent = updatedContent.replace(/Nascondi Bocchi/g, 'Nascondi KOCHAN'); // Italian
    updatedContent = updatedContent.replace(/Esci da Bocchi/g, 'Esci da KOCHAN'); // Italian
    
    updatedContent = updatedContent.replace(/Zeige Bocchi/g, 'Zeige KOCHAN'); // German
    updatedContent = updatedContent.replace(/Verstecke Bocchi/g, 'Verstecke KOCHAN'); // German
    updatedContent = updatedContent.replace(/Bocchi beenden/g, 'KOCHAN beenden'); // German
    
    updatedContent = updatedContent.replace(/显示 Bocchi/g, '显示 KOCHAN'); // Chinese Simplified
    updatedContent = updatedContent.replace(/隐藏 Bocchi/g, '隐藏 KOCHAN'); // Chinese Simplified
    updatedContent = updatedContent.replace(/退出 Bocchi/g, '退出 KOCHAN'); // Chinese Simplified
    
    updatedContent = updatedContent.replace(/顯示 Bocchi/g, '顯示 KOCHAN'); // Chinese Traditional
    updatedContent = updatedContent.replace(/隱藏 Bocchi/g, '隱藏 KOCHAN'); // Chinese Traditional
    updatedContent = updatedContent.replace(/退出 Bocchi/g, '退出 KOCHAN'); // Chinese Traditional
    
    updatedContent = updatedContent.replace(/Bocchiを表示/g, 'KOCHANを表示'); // Japanese
    updatedContent = updatedContent.replace(/Bocchiを非表示/g, 'KOCHANを非表示'); // Japanese  
    updatedContent = updatedContent.replace(/Bocchiを終了/g, 'KOCHANを終了'); // Japanese
    
    updatedContent = updatedContent.replace(/Bocchi 보이기/g, 'KOCHAN 보이기'); // Korean
    updatedContent = updatedContent.replace(/Bocchi 숨기기/g, 'KOCHAN 숨기기'); // Korean
    updatedContent = updatedContent.replace(/Bocchi 종료/g, 'KOCHAN 종료'); // Korean
    
    updatedContent = updatedContent.replace(/Показать Bocchi/g, 'Показать KOCHAN'); // Russian
    updatedContent = updatedContent.replace(/Скрыть Bocchi/g, 'Скрыть KOCHAN'); // Russian
    updatedContent = updatedContent.replace(/Выйти из Bocchi/g, 'Выйти из KOCHAN'); // Russian
    
    updatedContent = updatedContent.replace(/Tampilkan Bocchi/g, 'Tampilkan KOCHAN'); // Indonesian
    updatedContent = updatedContent.replace(/Sembunyikan Bocchi/g, 'Sembunyikan KOCHAN'); // Indonesian
    updatedContent = updatedContent.replace(/Keluar dari Bocchi/g, 'Keluar dari KOCHAN'); // Indonesian
    
    updatedContent = updatedContent.replace(/Hiện Bocchi/g, 'Hiện KOCHAN'); // Vietnamese
    updatedContent = updatedContent.replace(/Ẩn Bocchi/g, 'Ẩn KOCHAN'); // Vietnamese
    updatedContent = updatedContent.replace(/Thoát Bocchi/g, 'Thoát KOCHAN'); // Vietnamese
    
    updatedContent = updatedContent.replace(/แสดง Bocchi/g, 'แสดง KOCHAN'); // Thai
    updatedContent = updatedContent.replace(/ซ่อน Bocchi/g, 'ซ่อน KOCHAN'); // Thai
    updatedContent = updatedContent.replace(/ออกจาก Bocchi/g, 'ออกจาก KOCHAN'); // Thai
    
    updatedContent = updatedContent.replace(/Pokaż Bocchi/g, 'Pokaż KOCHAN'); // Polish
    updatedContent = updatedContent.replace(/Ukryj Bocchi/g, 'Ukryj KOCHAN'); // Polish
    updatedContent = updatedContent.replace(/Wyjdź z Bocchi/g, 'Wyjdź z KOCHAN'); // Polish
    
    updatedContent = updatedContent.replace(/Arată Bocchi/g, 'Arată KOCHAN'); // Romanian
    updatedContent = updatedContent.replace(/Ascunde Bocchi/g, 'Ascunde KOCHAN'); // Romanian
    updatedContent = updatedContent.replace(/Ieși din Bocchi/g, 'Ieși din KOCHAN'); // Romanian
    
    updatedContent = updatedContent.replace(/Bocchi megjelenítése/g, 'KOCHAN megjelenítése'); // Hungarian
    updatedContent = updatedContent.replace(/Bocchi elrejtése/g, 'KOCHAN elrejtése'); // Hungarian
    updatedContent = updatedContent.replace(/Bocchi kilépés/g, 'KOCHAN kilépés'); // Hungarian
    
    // Update descriptions
    updatedContent = updatedContent.replace(/A new version of Bocchi is available/g, 'A new version of KOCHAN is available');
    updatedContent = updatedContent.replace(/Bocchi's new version/g, "KOCHAN's new version");
    updatedContent = updatedContent.replace(/Bocchi의 새 버전/g, 'KOCHAN의 새 버전'); // Korean
    updatedContent = updatedContent.replace(/Bocchiの新しいバージョン/g, 'KOCHANの新しいバージョン'); // Japanese
    updatedContent = updatedContent.replace(/Новая версия Bocchi/g, 'Новая версия KOCHAN'); // Russian
    updatedContent = updatedContent.replace(/Una nueva versión de Bocchi/g, 'Una nueva versión de KOCHAN'); // Spanish
    updatedContent = updatedContent.replace(/Une nouvelle version de Bocchi/g, 'Une nouvelle version de KOCHAN'); // French  
    updatedContent = updatedContent.replace(/Una nuova versione di Bocchi/g, 'Una nuova versione di KOCHAN'); // Italian
    updatedContent = updatedContent.replace(/Versi baru Bocchi/g, 'Versi baru KOCHAN'); // Indonesian
    updatedContent = updatedContent.replace(/มี Bocchi เวอร์ชันใหม่/g, 'มี KOCHAN เวอร์ชันใหม่'); // Thai
    updatedContent = updatedContent.replace(/有新版本的 Bocchi/g, '有新版本的 KOCHAN'); // Chinese
    updatedContent = updatedContent.replace(/Bocchi 的新版本/g, 'KOCHAN 的新版本'); // Chinese
    updatedContent = updatedContent.replace(/Đã có phiên bản mới của Bocchi/g, 'Đã có phiên bản mới của KOCHAN'); // Vietnamese
    updatedContent = updatedContent.replace(/Nowa wersja Bocchi/g, 'Nowa wersja KOCHAN'); // Polish
    updatedContent = updatedContent.replace(/O nouă versiune a lui Bocchi/g, 'O nouă versiune a lui KOCHAN'); // Romanian
    updatedContent = updatedContent.replace(/A Bocchi új verziója/g, 'A KOCHAN új verziója'); // Hungarian
    
    // Write back if changed
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent);
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all translation files
function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.endsWith('.json')) {
      replaceBocchiInFile(fullPath);
    }
  }
}

console.log('Replacing Bocchi references with KOCHAN...');
processDirectory(localesDir);
console.log('Done!');