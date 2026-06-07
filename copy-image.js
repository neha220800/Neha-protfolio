const fs = require('fs');
const path = require('path');

const src = 'C:/Users/Hello!!/.gemini/antigravity-ide/brain/8eb3590c-ea17-410b-9143-9a651c81a8ea/profile_placeholder_1780532036355.png';
const dest = path.join(__dirname, 'public', 'profile.png');

try {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied the profile image to public/profile.png');
} catch (err) {
  console.error('Error copying file:', err);
}
