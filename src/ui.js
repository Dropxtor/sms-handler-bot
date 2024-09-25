require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=         🚀 SMS Handler Bot 🚀        ='.cyan);
  console.log('=     Created by Dropxtor      ='.cyan);
  console.log('=    https://t.me/dropxtor     ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

module.exports = { displayHeader };
