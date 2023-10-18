import fs from 'fs';

const uploadDirectory = './uploads';

// Verificar se o diretório de uploads existe, criar se não existir
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
}