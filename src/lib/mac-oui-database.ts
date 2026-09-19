// Curated high-performance offline OUI database for common network hardware & IoT vendors.

export interface OuiEntry {
  vendor: string;
  category: 'Mobile / PC' | 'Router & Gateway' | 'Smart Home & IoT' | 'Gaming & Entertainment' | 'Enterprise / Server';
  country?: string;
  isPopular?: boolean;
}

export const OUI_DATABASE: Record<string, OuiEntry> = {
  // Apple Inc.
  '000393': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States', isPopular: true },
  '000502': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  '0010FA': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  '0017F2': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  '001E52': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  '002312': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  '002500': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  '0026BB': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  '3C0754': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  '40A6D9': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  '70EE50': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  'A483E7': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States', isPopular: true },
  'ACBC32': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  'B8E856': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  'D0034B': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  'F01898': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },
  'F4F15A': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States', isPopular: true },
  'F81EDF': { vendor: 'Apple, Inc.', category: 'Mobile / PC', country: 'United States' },

  // Samsung Electronics
  '0007AB': { vendor: 'Samsung Electronics', category: 'Mobile / PC', country: 'South Korea' },
  '001247': { vendor: 'Samsung Electronics', category: 'Mobile / PC', country: 'South Korea' },
  '001599': { vendor: 'Samsung Electronics', category: 'Mobile / PC', country: 'South Korea' },
  '00166C': { vendor: 'Samsung Electronics', category: 'Mobile / PC', country: 'South Korea' },
  '0023D7': { vendor: 'Samsung Electronics', category: 'Mobile / PC', country: 'South Korea' },
  '08373D': { vendor: 'Samsung Electronics', category: 'Mobile / PC', country: 'South Korea', isPopular: true },
  '2C4D54': { vendor: 'Samsung Electronics', category: 'Mobile / PC', country: 'South Korea' },
  '5001D9': { vendor: 'Samsung Electronics', category: 'Mobile / PC', country: 'South Korea' },
  '94652D': { vendor: 'Samsung Electronics', category: 'Mobile / PC', country: 'South Korea' },
  'BC72B7': { vendor: 'Samsung Electronics', category: 'Mobile / PC', country: 'South Korea', isPopular: true },
  'F47B5E': { vendor: 'Samsung Electronics', category: 'Mobile / PC', country: 'South Korea' },

  // TP-Link
  '001D0F': { vendor: 'TP-Link Technologies', category: 'Router & Gateway', country: 'China', isPopular: true },
  '002127': { vendor: 'TP-Link Technologies', category: 'Router & Gateway', country: 'China' },
  '0023CD': { vendor: 'TP-Link Technologies', category: 'Router & Gateway', country: 'China' },
  '14CC20': { vendor: 'TP-Link Technologies', category: 'Router & Gateway', country: 'China' },
  '30B5C2': { vendor: 'TP-Link Technologies', category: 'Router & Gateway', country: 'China' },
  '50C7BF': { vendor: 'TP-Link Technologies', category: 'Router & Gateway', country: 'China', isPopular: true },
  '60A44C': { vendor: 'TP-Link Technologies', category: 'Router & Gateway', country: 'China' },
  '704F57': { vendor: 'TP-Link Technologies', category: 'Router & Gateway', country: 'China' },
  '984827': { vendor: 'TP-Link Technologies', category: 'Router & Gateway', country: 'China' },
  'B04E26': { vendor: 'TP-Link Technologies', category: 'Router & Gateway', country: 'China' },
  'D807B6': { vendor: 'TP-Link Technologies', category: 'Router & Gateway', country: 'China' },
  'E4C32A': { vendor: 'TP-Link Technologies', category: 'Router & Gateway', country: 'China' },

  // Intel Corporation
  '0002B3': { vendor: 'Intel Corporation', category: 'Mobile / PC', country: 'United States' },
  '000347': { vendor: 'Intel Corporation', category: 'Mobile / PC', country: 'United States' },
  '000E08': { vendor: 'Intel Corporation', category: 'Mobile / PC', country: 'United States' },
  '001302': { vendor: 'Intel Corporation', category: 'Mobile / PC', country: 'United States' },
  '001500': { vendor: 'Intel Corporation', category: 'Mobile / PC', country: 'United States' },
  '001B21': { vendor: 'Intel Corporation', category: 'Mobile / PC', country: 'United States' },
  '00216A': { vendor: 'Intel Corporation', category: 'Mobile / PC', country: 'United States' },
  '0024D7': { vendor: 'Intel Corporation', category: 'Mobile / PC', country: 'United States' },
  '2816A8': { vendor: 'Intel Corporation', category: 'Mobile / PC', country: 'United States' },
  '3413E8': { vendor: 'Intel Corporation', category: 'Mobile / PC', country: 'United States' },
  '4851B7': { vendor: 'Intel Corporation', category: 'Mobile / PC', country: 'United States', isPopular: true },
  '680571': { vendor: 'Intel Corporation', category: 'Mobile / PC', country: 'United States' },
  'A44CC8': { vendor: 'Intel Corporation', category: 'Mobile / PC', country: 'United States' },

  // Cisco Systems
  '00000C': { vendor: 'Cisco Systems', category: 'Enterprise / Server', country: 'United States', isPopular: true },
  '000142': { vendor: 'Cisco Systems', category: 'Enterprise / Server', country: 'United States' },
  '000143': { vendor: 'Cisco Systems', category: 'Enterprise / Server', country: 'United States' },
  '000163': { vendor: 'Cisco Systems', category: 'Enterprise / Server', country: 'United States' },
  '000164': { vendor: 'Cisco Systems', category: 'Enterprise / Server', country: 'United States' },
  '000216': { vendor: 'Cisco Systems', category: 'Enterprise / Server', country: 'United States' },
  '000217': { vendor: 'Cisco Systems', category: 'Enterprise / Server', country: 'United States' },
  '00024A': { vendor: 'Cisco Systems', category: 'Enterprise / Server', country: 'United States' },
  '00024B': { vendor: 'Cisco Systems', category: 'Enterprise / Server', country: 'United States' },
  '00127F': { vendor: 'Cisco Systems', category: 'Enterprise / Server', country: 'United States' },
  '001B0C': { vendor: 'Cisco Systems', category: 'Enterprise / Server', country: 'United States' },
  '0026CB': { vendor: 'Cisco Systems', category: 'Enterprise / Server', country: 'United States' },

  // Raspberry Pi Foundation
  'B827EB': { vendor: 'Raspberry Pi Foundation', category: 'Mobile / PC', country: 'United Kingdom', isPopular: true },
  'DCA632': { vendor: 'Raspberry Pi Trading Ltd', category: 'Mobile / PC', country: 'United Kingdom', isPopular: true },
  'E45F01': { vendor: 'Raspberry Pi Trading Ltd', category: 'Mobile / PC', country: 'United Kingdom' },
  '28CDC1': { vendor: 'Raspberry Pi Trading Ltd', category: 'Mobile / PC', country: 'United Kingdom' },

  // Espressif Inc (Smart Plugs, Tuya, Smart Bulbs, ESP32/ESP8266)
  '240AC4': { vendor: 'Espressif Inc (Smart IoT)', category: 'Smart Home & IoT', country: 'China', isPopular: true },
  '2462AB': { vendor: 'Espressif Inc (Smart IoT)', category: 'Smart Home & IoT', country: 'China' },
  '246F28': { vendor: 'Espressif Inc (Smart IoT)', category: 'Smart Home & IoT', country: 'China' },
  '30AEA4': { vendor: 'Espressif Inc (Smart IoT)', category: 'Smart Home & IoT', country: 'China', isPopular: true },
  '840D8E': { vendor: 'Espressif Inc (Smart IoT)', category: 'Smart Home & IoT', country: 'China' },
  'A4CF12': { vendor: 'Espressif Inc (Smart IoT)', category: 'Smart Home & IoT', country: 'China' },
  'CC50E3': { vendor: 'Espressif Inc (Smart IoT)', category: 'Smart Home & IoT', country: 'China' },
  'E8DB84': { vendor: 'Espressif Inc (Smart IoT)', category: 'Smart Home & IoT', country: 'China' },

  // Google / Nest
  '001A11': { vendor: 'Google LLC', category: 'Smart Home & IoT', country: 'United States', isPopular: true },
  '3C5AB4': { vendor: 'Google LLC (Chromecast / Home)', category: 'Smart Home & IoT', country: 'United States' },
  '546009': { vendor: 'Google LLC (Nest)', category: 'Smart Home & IoT', country: 'United States' },
  'F40304': { vendor: 'Google LLC', category: 'Smart Home & IoT', country: 'United States' },
  'F4F5D8': { vendor: 'Google LLC (Pixel / Nest)', category: 'Mobile / PC', country: 'United States', isPopular: true },

  // Amazon Technologies (Echo, Fire TV, Kindle)
  '00FC8B': { vendor: 'Amazon Technologies Inc.', category: 'Smart Home & IoT', country: 'United States' },
  '38F73D': { vendor: 'Amazon Technologies Inc.', category: 'Smart Home & IoT', country: 'United States' },
  '40B4CD': { vendor: 'Amazon Technologies Inc.', category: 'Smart Home & IoT', country: 'United States' },
  '44650D': { vendor: 'Amazon Technologies Inc. (Fire TV / Echo)', category: 'Smart Home & IoT', country: 'United States', isPopular: true },
  '6837E9': { vendor: 'Amazon Technologies Inc.', category: 'Smart Home & IoT', country: 'United States' },
  '747548': { vendor: 'Amazon Technologies Inc.', category: 'Smart Home & IoT', country: 'United States' },
  '8871E5': { vendor: 'Amazon Technologies Inc.', category: 'Smart Home & IoT', country: 'United States' },
  'AC63BE': { vendor: 'Amazon Technologies Inc.', category: 'Smart Home & IoT', country: 'United States', isPopular: true },

  // Netgear
  '00095B': { vendor: 'NETGEAR', category: 'Router & Gateway', country: 'United States', isPopular: true },
  '000FB5': { vendor: 'NETGEAR', category: 'Router & Gateway', country: 'United States' },
  '00146C': { vendor: 'NETGEAR', category: 'Router & Gateway', country: 'United States' },
  '00184D': { vendor: 'NETGEAR', category: 'Router & Gateway', country: 'United States' },
  '001F33': { vendor: 'NETGEAR', category: 'Router & Gateway', country: 'United States' },
  '0024B2': { vendor: 'NETGEAR', category: 'Router & Gateway', country: 'United States' },
  '04A151': { vendor: 'NETGEAR', category: 'Router & Gateway', country: 'United States' },
  '10DA43': { vendor: 'NETGEAR', category: 'Router & Gateway', country: 'United States' },
  '204E7F': { vendor: 'NETGEAR', category: 'Router & Gateway', country: 'United States' },
  '4494FC': { vendor: 'NETGEAR', category: 'Router & Gateway', country: 'United States' },
  '841B5E': { vendor: 'NETGEAR', category: 'Router & Gateway', country: 'United States' },

  // ASUSTeK Computer
  '000C6E': { vendor: 'ASUSTeK Computer Inc.', category: 'Router & Gateway', country: 'Taiwan' },
  '00112F': { vendor: 'ASUSTeK Computer Inc.', category: 'Router & Gateway', country: 'Taiwan' },
  '0015F2': { vendor: 'ASUSTeK Computer Inc.', category: 'Router & Gateway', country: 'Taiwan' },
  '0018F3': { vendor: 'ASUSTeK Computer Inc.', category: 'Router & Gateway', country: 'Taiwan' },
  '001BFC': { vendor: 'ASUSTeK Computer Inc.', category: 'Router & Gateway', country: 'Taiwan' },
  '04D9F5': { vendor: 'ASUSTeK Computer Inc.', category: 'Router & Gateway', country: 'Taiwan', isPopular: true },
  '10BF48': { vendor: 'ASUSTeK Computer Inc.', category: 'Router & Gateway', country: 'Taiwan' },
  '1C872C': { vendor: 'ASUSTeK Computer Inc.', category: 'Router & Gateway', country: 'Taiwan' },
  '40167E': { vendor: 'ASUSTeK Computer Inc.', category: 'Router & Gateway', country: 'Taiwan' },
  '6045CB': { vendor: 'ASUSTeK Computer Inc.', category: 'Router & Gateway', country: 'Taiwan' },

  // D-Link Corporation
  '00055D': { vendor: 'D-Link Corporation', category: 'Router & Gateway', country: 'Taiwan' },
  '000D88': { vendor: 'D-Link Corporation', category: 'Router & Gateway', country: 'Taiwan' },
  '001195': { vendor: 'D-Link Corporation', category: 'Router & Gateway', country: 'Taiwan' },
  '001346': { vendor: 'D-Link Corporation', category: 'Router & Gateway', country: 'Taiwan' },
  '0015E9': { vendor: 'D-Link Corporation', category: 'Router & Gateway', country: 'Taiwan' },
  '00179A': { vendor: 'D-Link Corporation', category: 'Router & Gateway', country: 'Taiwan' },
  '00195B': { vendor: 'D-Link Corporation', category: 'Router & Gateway', country: 'Taiwan' },
  '001CF0': { vendor: 'D-Link Corporation', category: 'Router & Gateway', country: 'Taiwan' },
  '1C7EE5': { vendor: 'D-Link Corporation', category: 'Router & Gateway', country: 'Taiwan', isPopular: true },
  '28107B': { vendor: 'D-Link Corporation', category: 'Router & Gateway', country: 'Taiwan' },

  // Huawei Technologies
  '001882': { vendor: 'Huawei Technologies', category: 'Router & Gateway', country: 'China' },
  '001E10': { vendor: 'Huawei Technologies', category: 'Router & Gateway', country: 'China' },
  '00259E': { vendor: 'Huawei Technologies', category: 'Router & Gateway', country: 'China' },
  '0425C5': { vendor: 'Huawei Technologies', category: 'Router & Gateway', country: 'China' },
  '0C96BF': { vendor: 'Huawei Technologies', category: 'Router & Gateway', country: 'China' },
  '101B54': { vendor: 'Huawei Technologies', category: 'Router & Gateway', country: 'China' },
  '200BC7': { vendor: 'Huawei Technologies', category: 'Router & Gateway', country: 'China' },
  '3400A3': { vendor: 'Huawei Technologies', category: 'Router & Gateway', country: 'China', isPopular: true },
  '707BE8': { vendor: 'Huawei Technologies', category: 'Router & Gateway', country: 'China' },
  '80B686': { vendor: 'Huawei Technologies', category: 'Router & Gateway', country: 'China' },

  // Xiaomi Communications
  '00EC0A': { vendor: 'Xiaomi Communications', category: 'Mobile / PC', country: 'China' },
  '14F65A': { vendor: 'Xiaomi Communications', category: 'Mobile / PC', country: 'China' },
  '286C07': { vendor: 'Xiaomi Communications', category: 'Mobile / PC', country: 'China' },
  '34CE00': { vendor: 'Xiaomi Communications', category: 'Mobile / PC', country: 'China', isPopular: true },
  '50642B': { vendor: 'Xiaomi Communications', category: 'Mobile / PC', country: 'China' },
  '640980': { vendor: 'Xiaomi Communications', category: 'Mobile / PC', country: 'China' },
  '7C49EB': { vendor: 'Xiaomi Communications', category: 'Mobile / PC', country: 'China' },
  '98FAE3': { vendor: 'Xiaomi Communications', category: 'Mobile / PC', country: 'China' },

  // Sony Interactive & Electronics (PlayStation, Bravia TVs)
  '00014A': { vendor: 'Sony Corporation', category: 'Gaming & Entertainment', country: 'Japan' },
  '00041F': { vendor: 'Sony Interactive Entertainment (PlayStation)', category: 'Gaming & Entertainment', country: 'Japan', isPopular: true },
  '001315': { vendor: 'Sony Interactive Entertainment', category: 'Gaming & Entertainment', country: 'Japan' },
  '0019C5': { vendor: 'Sony Corporation', category: 'Gaming & Entertainment', country: 'Japan' },
  '00248D': { vendor: 'Sony Corporation', category: 'Gaming & Entertainment', country: 'Japan' },
  '280DFC': { vendor: 'Sony Interactive Entertainment', category: 'Gaming & Entertainment', country: 'Japan', isPopular: true },
  '709E29': { vendor: 'Sony Interactive Entertainment (PS5/PS4)', category: 'Gaming & Entertainment', country: 'Japan', isPopular: true },
  'FC0FE6': { vendor: 'Sony Interactive Entertainment', category: 'Gaming & Entertainment', country: 'Japan' },

  // Microsoft (Xbox, Surface)
  '000D3A': { vendor: 'Microsoft Corporation', category: 'Gaming & Entertainment', country: 'United States' },
  '00125A': { vendor: 'Microsoft Corporation', category: 'Gaming & Entertainment', country: 'United States' },
  '0017FA': { vendor: 'Microsoft Corporation', category: 'Gaming & Entertainment', country: 'United States' },
  '0050F2': { vendor: 'Microsoft Corporation', category: 'Gaming & Entertainment', country: 'United States' },
  '281878': { vendor: 'Microsoft Corporation (Xbox)', category: 'Gaming & Entertainment', country: 'United States', isPopular: true },
  '501AC5': { vendor: 'Microsoft Corporation (Surface)', category: 'Mobile / PC', country: 'United States' },
  '7C1E52': { vendor: 'Microsoft Corporation (Xbox Series X/S)', category: 'Gaming & Entertainment', country: 'United States', isPopular: true },
  'B831B5': { vendor: 'Microsoft Corporation', category: 'Gaming & Entertainment', country: 'United States' },

  // Nintendo
  '0009BF': { vendor: 'Nintendo Co., Ltd.', category: 'Gaming & Entertainment', country: 'Japan' },
  '001656': { vendor: 'Nintendo Co., Ltd.', category: 'Gaming & Entertainment', country: 'Japan' },
  '0017AB': { vendor: 'Nintendo Co., Ltd.', category: 'Gaming & Entertainment', country: 'Japan' },
  '0019FD': { vendor: 'Nintendo Co., Ltd.', category: 'Gaming & Entertainment', country: 'Japan' },
  '001E35': { vendor: 'Nintendo Co., Ltd.', category: 'Gaming & Entertainment', country: 'Japan' },
  '70480F': { vendor: 'Nintendo Co., Ltd. (Switch)', category: 'Gaming & Entertainment', country: 'Japan', isPopular: true },
  '98B6E9': { vendor: 'Nintendo Co., Ltd. (Switch)', category: 'Gaming & Entertainment', country: 'Japan', isPopular: true },

  // Ubiquiti Inc.
  '002722': { vendor: 'Ubiquiti Inc.', category: 'Router & Gateway', country: 'United States', isPopular: true },
  '0418D6': { vendor: 'Ubiquiti Inc.', category: 'Router & Gateway', country: 'United States' },
  '24A43C': { vendor: 'Ubiquiti Inc.', category: 'Router & Gateway', country: 'United States', isPopular: true },
  '68D79A': { vendor: 'Ubiquiti Inc.', category: 'Router & Gateway', country: 'United States' },
  '788A20': { vendor: 'Ubiquiti Inc.', category: 'Router & Gateway', country: 'United States' },
  'AC8BA9': { vendor: 'Ubiquiti Inc. (UniFi AP)', category: 'Router & Gateway', country: 'United States', isPopular: true },
  'B4FBE4': { vendor: 'Ubiquiti Inc.', category: 'Router & Gateway', country: 'United States' },

  // MikroTik
  '000C42': { vendor: 'MikroTik (RouterOS)', category: 'Router & Gateway', country: 'Latvia', isPopular: true },
  '2C9569': { vendor: 'MikroTik (RouterOS)', category: 'Router & Gateway', country: 'Latvia' },
  '488F5A': { vendor: 'MikroTik (RouterOS)', category: 'Router & Gateway', country: 'Latvia' },
  '64D154': { vendor: 'MikroTik (RouterOS)', category: 'Router & Gateway', country: 'Latvia' },
  'B869F4': { vendor: 'MikroTik (RouterOS)', category: 'Router & Gateway', country: 'Latvia', isPopular: true },
  'CC2DE0': { vendor: 'MikroTik (RouterOS)', category: 'Router & Gateway', country: 'Latvia' },

  // Linksys
  '000625': { vendor: 'Linksys Group, Inc.', category: 'Router & Gateway', country: 'United States' },
  '000C41': { vendor: 'Linksys Group, Inc.', category: 'Router & Gateway', country: 'United States', isPopular: true },
  '0014BF': { vendor: 'Linksys Group, Inc.', category: 'Router & Gateway', country: 'United States' },
  '001839': { vendor: 'Linksys Group, Inc.', category: 'Router & Gateway', country: 'United States' },
  '002129': { vendor: 'Linksys Group, Inc.', category: 'Router & Gateway', country: 'United States' },
  '002369': { vendor: 'Linksys Group, Inc.', category: 'Router & Gateway', country: 'United States' },
  '149182': { vendor: 'Linksys Group, Inc.', category: 'Router & Gateway', country: 'United States' },
  'C05627': { vendor: 'Linksys Group, Inc. (Velop)', category: 'Router & Gateway', country: 'United States', isPopular: true },

  // Smart TV & Media Players (Roku, LG, Sonos)
  '000D4B': { vendor: 'Roku, Inc.', category: 'Gaming & Entertainment', country: 'United States', isPopular: true },
  '080581': { vendor: 'Roku, Inc.', category: 'Gaming & Entertainment', country: 'United States' },
  '20A680': { vendor: 'Roku, Inc.', category: 'Gaming & Entertainment', country: 'United States' },
  '000E58': { vendor: 'Sonos, Inc.', category: 'Gaming & Entertainment', country: 'United States', isPopular: true },
  '5C0979': { vendor: 'Sonos, Inc.', category: 'Gaming & Entertainment', country: 'United States' },
  '7828CA': { vendor: 'Sonos, Inc.', category: 'Gaming & Entertainment', country: 'United States' },
  '001C62': { vendor: 'LG Electronics (webOS TV)', category: 'Gaming & Entertainment', country: 'South Korea', isPopular: true },
  '10683F': { vendor: 'LG Electronics', category: 'Gaming & Entertainment', country: 'South Korea' },
  '203DB0': { vendor: 'LG Electronics', category: 'Gaming & Entertainment', country: 'South Korea' },

  // PC & Laptop Vendors (Dell, HP, Lenovo)
  '001422': { vendor: 'Dell Inc.', category: 'Mobile / PC', country: 'United States', isPopular: true },
  '00188B': { vendor: 'Dell Inc.', category: 'Mobile / PC', country: 'United States' },
  '180373': { vendor: 'Dell Inc.', category: 'Mobile / PC', country: 'United States' },
  '000BDB': { vendor: 'HP Inc.', category: 'Mobile / PC', country: 'United States' },
  '001E0B': { vendor: 'HP Inc.', category: 'Mobile / PC', country: 'United States', isPopular: true },
  '3CD92B': { vendor: 'HP Inc.', category: 'Mobile / PC', country: 'United States' },
  '001A6B': { vendor: 'Lenovo', category: 'Mobile / PC', country: 'China', isPopular: true },
  '54EE75': { vendor: 'Lenovo', category: 'Mobile / PC', country: 'China' },
  '70723C': { vendor: 'Lenovo', category: 'Mobile / PC', country: 'China' },

  // Storage / NAS (Synology, QNAP)
  '001132': { vendor: 'Synology Incorporated', category: 'Enterprise / Server', country: 'Taiwan', isPopular: true },
  '00089B': { vendor: 'QNAP Systems, Inc.', category: 'Enterprise / Server', country: 'Taiwan', isPopular: true },

  // Tuya Smart (Hundreds of smart home OEM re-brands)
  '102C6B': { vendor: 'Tuya Smart (Smart Home OEM)', category: 'Smart Home & IoT', country: 'China', isPopular: true },
  '508A06': { vendor: 'Tuya Smart (Smart Home OEM)', category: 'Smart Home & IoT', country: 'China' },
  '68572D': { vendor: 'Tuya Smart (Smart Home OEM)', category: 'Smart Home & IoT', country: 'China' },
  'D81F12': { vendor: 'Tuya Smart (Smart Home OEM)', category: 'Smart Home & IoT', country: 'China' }
};

export interface MacLookupResult {
  raw: string;
  cleaned: string;
  oui: string;
  vendor: string;
  category?: string;
  country?: string;
  isFound: boolean;
  isRandomized: boolean; // Locally Administered / Private MAC address
  isMulticast: boolean;  // Broadcast / Multicast frame
  formatted: {
    colon: string;
    hyphen: string;
    dot: string;
    bare: string;
  };
}

export function parseAndLookupMac(input: string): MacLookupResult | null {
  if (!input) return null;

  // Strip anything that is not hex [0-9a-fA-F]
  const cleanHex = input.replace(/[^0-9a-fA-F]/g, '').toUpperCase();
  if (cleanHex.length < 6) return null;

  // Extract 6-char OUI (24 bits)
  const oui = cleanHex.substring(0, 6);

  // Check U/L (Universally vs Locally Administered) bit
  // In the first octet, bit 1 indicates local administration (randomized MAC address)
  // Second hex character has bit 1 set if it is 2, 6, A, or E
  const secondChar = cleanHex[1];
  const isRandomized = ['2', '6', 'A', 'E'].includes(secondChar);

  // Check I/G (Individual vs Group / Multicast) bit
  // In the first octet, bit 0 indicates multicast (1, 3, 5, 7, 9, B, D, F)
  const isMulticast = ['1', '3', '5', '7', '9', 'B', 'D', 'F'].includes(secondChar);

  // Lookup in database
  const match = OUI_DATABASE[oui];

  // Standardize formats (if full 12 chars available, format 12 chars; else format 6 chars)
  const lengthToFormat = cleanHex.length >= 12 ? 12 : 6;
  const targetHex = cleanHex.substring(0, lengthToFormat);

  const pairs: string[] = [];
  for (let i = 0; i < targetHex.length; i += 2) {
    pairs.push(targetHex.substr(i, 2));
  }

  const colon = pairs.join(':');
  const hyphen = pairs.join('-');
  const dot = lengthToFormat === 12 
    ? `${cleanHex.substr(0, 4)}.${cleanHex.substr(4, 4)}.${cleanHex.substr(8, 4)}` 
    : colon;

  let vendorName = 'Unknown Manufacturer (Unregistered or Private OUI)';
  if (match) {
    vendorName = match.vendor;
  } else if (isRandomized) {
    vendorName = 'Private / Randomized Device Address (Apple Private Wi-Fi or Android MAC Randomization)';
  }

  return {
    raw: input,
    cleaned: cleanHex,
    oui: `${oui.substr(0, 2)}:${oui.substr(2, 2)}:${oui.substr(4, 2)}`,
    vendor: vendorName,
    category: match?.category,
    country: match?.country,
    isFound: !!match,
    isRandomized,
    isMulticast,
    formatted: {
      colon,
      hyphen,
      dot,
      bare: targetHex
    }
  };
}

