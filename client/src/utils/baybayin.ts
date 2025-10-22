const BAYBAYIN_MAP: Record<string, string> = {
  'a': 'ᜀ',
  'e': 'ᜁ',
  'i': 'ᜁ',
  'o': 'ᜂ',
  'u': 'ᜂ',
  
  'ba': 'ᜊ',
  'be': 'ᜊᜒ',
  'bi': 'ᜊᜒ',
  'bo': 'ᜊᜓ',
  'bu': 'ᜊᜓ',
  
  'ka': 'ᜃ',
  'ke': 'ᜃᜒ',
  'ki': 'ᜃᜒ',
  'ko': 'ᜃᜓ',
  'ku': 'ᜃᜓ',
  
  'da': 'ᜇ',
  'de': 'ᜇᜒ',
  'di': 'ᜇᜒ',
  'do': 'ᜇᜓ',
  'du': 'ᜇᜓ',
  
  'ga': 'ᜄ',
  'ge': 'ᜄᜒ',
  'gi': 'ᜄᜒ',
  'go': 'ᜄᜓ',
  'gu': 'ᜄᜓ',
  
  'ha': 'ᜑ',
  'he': 'ᜑᜒ',
  'hi': 'ᜑᜒ',
  'ho': 'ᜑᜓ',
  'hu': 'ᜑᜓ',
  
  'la': 'ᜎ',
  'le': 'ᜎᜒ',
  'li': 'ᜎᜒ',
  'lo': 'ᜎᜓ',
  'lu': 'ᜎᜓ',
  
  'ma': 'ᜋ',
  'me': 'ᜋᜒ',
  'mi': 'ᜋᜒ',
  'mo': 'ᜋᜓ',
  'mu': 'ᜋᜓ',
  
  'na': 'ᜈ',
  'ne': 'ᜈᜒ',
  'ni': 'ᜈᜒ',
  'no': 'ᜈᜓ',
  'nu': 'ᜈᜓ',
  
  'nga': 'ᜅ',
  'nge': 'ᜅᜒ',
  'ngi': 'ᜅᜒ',
  'ngo': 'ᜅᜓ',
  'ngu': 'ᜅᜓ',
  
  'pa': 'ᜉ',
  'pe': 'ᜉᜒ',
  'pi': 'ᜉᜒ',
  'po': 'ᜉᜓ',
  'pu': 'ᜉᜓ',
  
  'ra': 'ᜍ',
  're': 'ᜍᜒ',
  'ri': 'ᜍᜒ',
  'ro': 'ᜍᜓ',
  'ru': 'ᜍᜓ',
  
  'sa': 'ᜐ',
  'se': 'ᜐᜒ',
  'si': 'ᜐᜒ',
  'so': 'ᜐᜓ',
  'su': 'ᜐᜓ',
  
  'ta': 'ᜆ',
  'te': 'ᜆᜒ',
  'ti': 'ᜆᜒ',
  'to': 'ᜆᜓ',
  'tu': 'ᜆᜓ',
  
  'wa': 'ᜏ',
  'we': 'ᜏᜒ',
  'wi': 'ᜏᜒ',
  'wo': 'ᜏᜓ',
  'wu': 'ᜏᜓ',
  
  'ya': 'ᜌ',
  'ye': 'ᜌᜒ',
  'yi': 'ᜌᜒ',
  'yo': 'ᜌᜓ',
  'yu': 'ᜌᜓ'
}

export const translateToBaybayin = (text: string): string => {
  if (!text.trim()) return ''
  
  const normalized = text.toLowerCase().replace(/[^a-z]/g, '')
  let result = ''
  let position = 0

  while (position < normalized.length) {
    const threeChar = normalized.slice(position, position + 3)
    const twoChar = normalized.slice(position, position + 2)
    const oneChar = normalized.slice(position, position + 1)

    if (BAYBAYIN_MAP[threeChar]) {
      result += BAYBAYIN_MAP[threeChar]
      position += 3
    } else if (BAYBAYIN_MAP[twoChar]) {
      result += BAYBAYIN_MAP[twoChar]
      position += 2
    } else if (BAYBAYIN_MAP[oneChar]) {
      result += BAYBAYIN_MAP[oneChar]
      position += 1
    } else {
      position += 1
    }
  }

  return result
}
