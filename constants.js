import { getLaughStickerIds } from './utils.js';

export const STRICT_KEYWORDS = ['ыы', 'ыыы', 'лол', 'кек', 'lol', 'kek', 'ржал', 'ржу', 'угар', 'угарно', 'лул', 'rofl', 'lmao', 'жжош'];

export const COMMON_KEYWORDS = [
  'ржач', 'прикол', 'ржака',
  'смешно', 'ржал', 'угарал', 'смеялся',
  'рассмешил', 'рофл', 'смехота',
  'прекол', 'в голос', 'ыыыы', 'потеха', 'умора', 
  'уморительно', 'норм мем', 'это мем', 'шутка',
  'ржомба', 
  'проиграл с подливой', '&#129315;', '&#128514;', '&#128518;', '&#128512;', '&#128569;', '😂', '😹', '😀', '😆', '🤣',
  'обхохочешься'
];

export const MARKED_STICKERS = getLaughStickerIds();