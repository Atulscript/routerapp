import type { GatewayIp, Brand, Isp, RouterModel } from './types';

export const GATEWAY_IPS: GatewayIp[] = [
  {
    ip: '192.168.1.1',
    slug: '192-168-1-1',
    title: '192.168.1.1 Router Admin Login & Setup Guide',
    description: 'Access your router configuration panel at 192.168.1.1. Step-by-step default login credentials, WiFi password change, and troubleshooting.',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    commonBrands: ['TP-Link', 'ASUS', 'Linksys', 'Huawei', 'ZTE', 'Nokia', 'Airtel', 'BSNL', 'Keenetic', 'Digisol', 'Palo Alto', 'Juniper'],
    steps: [
      'Connect your PC or smartphone to the router WiFi network or via Ethernet cable.',
      'Open your web browser (Chrome, Safari, Edge, or Firefox).',
      'Type http://192.168.1.1 into the URL address bar and press Enter.',
      'Enter the default username (admin) and password (admin or password).',
      'Navigate to Wireless Settings to change your WiFi SSID name and password.'
    ],
    faqs: [
      {
        question: 'Why does 192.168.1.1 show "Site cannot be reached"?',
        answer: 'Ensure your device is connected to your router WiFi/Ethernet. Verify your default gateway using ipconfig in Command Prompt.'
      },
      {
        question: 'What if "admin/admin" doesn\'t work?',
        answer: 'Check the physical sticker on the bottom of your router for custom factory credentials. If changed, hold the Reset button for 10 seconds to restore factory defaults.'
      },
      {
        question: 'Is it 192.168.l.l or 192.168.1.1?',
        answer: 'IP addresses only contain numbers! 192.168.l.l uses lowercase letter "L" by mistake and will result in a search engine query instead of opening your router.'
      }
    ]
  },
  {
    ip: '192.168.0.1',
    slug: '192-168-0-1',
    title: '192.168.0.1 Router Admin Login & Setup Guide',
    description: 'Default IP address for D-Link, Netgear, Tenda, and TP-Link routers. Find default passwords and login instructions.',
    defaultUser: 'admin',
    defaultPass: 'admin / password / (blank)',
    commonBrands: ['D-Link', 'Netgear', 'Tenda', 'TP-Link', 'Mercusys', 'Motorola', 'Totolink', 'Hitron', 'Humax'],
    steps: [
      'Ensure your computer or mobile is connected to the router network.',
      'Open your internet browser and go to http://192.168.0.1 in the address bar.',
      'Enter admin as the username and admin or leave blank for the password.',
      'Click Login to access your admin dashboard.'
    ],
    faqs: [
      {
        question: 'What is the difference between 192.168.0.1 and 192.168.1.1?',
        answer: 'They belong to different Class C subnets. Router manufacturers designate one of these as the default local gateway address.'
      },
      {
        question: 'How to reset 192.168.0.1 password?',
        answer: 'Press and hold the small Reset pinhole button on the back of the router for 10-15 seconds until the LED lights blink.'
      }
    ]
  },
  {
    ip: '192.168.2.1',
    slug: '192-168-2-1',
    title: '192.168.2.1 Router Admin Login & Setup Guide',
    description: 'Default gateway IP for Belkin, SMC, Siemens, and Philips routers. Default passwords and troubleshooting steps.',
    defaultUser: 'admin',
    defaultPass: '(blank) / admin / smcadmin',
    commonBrands: ['Belkin', 'SMC', 'Siemens', 'Philips', 'Digisol'],
    steps: [
      'Connect to your Belkin or SMC router via WiFi or LAN cable.',
      'Open http://192.168.2.1 in your browser.',
      'Leave password blank or enter admin, then click Submit.'
    ],
    faqs: [
      {
        question: 'What is the default Belkin password at 192.168.2.1?',
        answer: 'Most Belkin routers have no default password out of the box. Just leave the password field blank and click Submit.'
      }
    ]
  },
  {
    ip: '192.168.1.254',
    slug: '192-168-1-254',
    title: '192.168.1.254 Router Admin Login & Setup Guide',
    description: 'Default IP address for Technicolor, Thomson, BT Home Hub, Plusnet, Billion, Vantiva, and AT&T Fiber modems.',
    defaultUser: 'admin',
    defaultPass: 'admin / (serial number) / Access Code',
    commonBrands: ['Technicolor', 'Thomson', 'BT Home Hub', 'Plusnet', 'AT&T Fiber', 'Billion', 'Vantiva'],
    steps: [
      'Connect your device to the modem router via WiFi or cable.',
      'Visit http://192.168.1.254 in your web browser.',
      'Enter the admin credentials found on your modem rear label.'
    ],
    faqs: [
      {
        question: 'Where can I find my 192.168.1.254 admin password for BT/Plusnet?',
        answer: 'Look at the pull-out card or sticker on the back of your BT Hub / Plusnet router.'
      }
    ]
  },
  {
    ip: '10.0.0.1',
    slug: '10-0-0-1',
    title: '10.0.0.1 Router Admin Login & Setup Guide',
    description: 'Default gateway address for Xfinity/Comcast, Cisco, and Apple AirPort routers. Quick setup and login guide.',
    defaultUser: 'admin',
    defaultPass: 'password',
    commonBrands: ['Xfinity (Comcast)', 'Cisco', 'Apple AirPort'],
    steps: [
      'Connect to your Xfinity gateway or Cisco router network.',
      'Navigate to http://10.0.0.1 in your web browser.',
      'Enter username "admin" and password "password" on the login page.',
      'Set a new secure password upon your first login.'
    ],
    faqs: [
      {
        question: 'What is the default Xfinity 10.0.0.1 login?',
        answer: 'Username: admin, Password: password. Xfinity prompts you to change this during the initial setup.'
      }
    ]
  },
  {
    ip: '192.168.29.1',
    slug: '192-168-29-1',
    title: '192.168.29.1 JioFiber Router Login & Config Guide',
    description: 'Default admin IP for JioFiber Home Gateway routers in India. WiFi setup, port forwarding, and password instructions.',
    defaultUser: 'admin',
    defaultPass: 'Jiocentrum',
    commonBrands: ['JioFiber (Reliance Jio)'],
    steps: [
      'Connect to your JioFiber WiFi or LAN.',
      'Open http://192.168.29.1 in your browser.',
      'Login with username: admin and password: Jiocentrum (or your MyJio OTP login).',
      'Manage 2.4GHz / 5GHz bands and connected clients.'
    ],
    faqs: [
      {
        question: 'What is the default password for JioFiber 192.168.29.1?',
        answer: 'The default username is "admin" and password is "Jiocentrum". Alternatively, you can manage settings using the MyJio app.'
      }
    ]
  },
  {
    ip: '192.168.178.1',
    slug: '192-168-178-1',
    title: '192.168.178.1 FRITZ!Box Router Admin Login & Setup Guide',
    description: 'Access AVM FRITZ!Box router configuration dashboard at 192.168.178.1 (fritz.box). Default login passwords, mesh setup, and troubleshooting.',
    defaultUser: 'admin',
    defaultPass: 'Printed on sticker / (blank)',
    commonBrands: ['AVM FRITZ!Box'],
    steps: [
      'Connect your device to your FRITZ!Box Wi-Fi network or via LAN cable.',
      'Open your internet browser and type http://192.168.178.1 or http://fritz.box.',
      'Enter the FRITZ!Box admin password printed on the sticker underneath the device.',
      'Access the FRITZ!OS dashboard to configure Wi-Fi, Mesh networking, and DECT telephony.'
    ],
    faqs: [
      {
        question: 'How do I access my FRITZ!Box if 192.168.178.1 does not open?',
        answer: 'You can type http://fritz.box in your browser or use the emergency recovery IP 169.254.1.1.'
      },
      {
        question: 'Where is the default password for FRITZ!Box 192.168.178.1?',
        answer: 'Look at the sticker located on the base/underside of your FRITZ!Box router labeled "FRITZ!Box password".'
      }
    ]
  },
  {
    ip: '192.168.31.1',
    slug: '192-168-31-1',
    title: '192.168.31.1 Xiaomi & Redmi Router Admin Login Guide',
    description: 'Default gateway IP for Xiaomi Mi Router and Redmi WiFi gateways (miwifi.com). Setup instructions, default credentials, and MiWiFi guide.',
    defaultUser: 'admin',
    defaultPass: 'Set during initial setup',
    commonBrands: ['Xiaomi', 'Redmi'],
    steps: [
      'Connect to your Xiaomi / Redmi Wi-Fi SSID (e.g., Xiaomi_XXXX).',
      'Open your browser and navigate to http://192.168.31.1 or http://miwifi.com.',
      'Enter your administrator password configured during initial setup or use the Mi Home / MiWiFi app.',
      'Configure dual-band Wi-Fi 6 settings, Mesh interconnect, and QoS bandwidth control.'
    ],
    faqs: [
      {
        question: 'What is the default password for Xiaomi router 192.168.31.1?',
        answer: 'Xiaomi routers do not come with a default password. You are prompted to set an admin password during the initial setup wizard.'
      },
      {
        question: 'Can I manage 192.168.31.1 using a smartphone app?',
        answer: 'Yes, download the Mi Home or MiWiFi app on Android or iOS and connect to your router network to manage settings.'
      }
    ]
  },
  {
    ip: '192.168.8.1',
    slug: '192-168-8-1',
    title: '192.168.8.1 Huawei, GL.iNet & ZTE 4G/5G Router Login Guide',
    description: 'Login guide for 192.168.8.1 default IP address used by GL.iNet travel routers, Huawei 4G/5G CPE modems, and ZTE mobile hotspots.',
    defaultUser: 'admin / root',
    defaultPass: 'admin / (printed on label)',
    commonBrands: ['GL.iNet', 'Huawei', 'ZTE', 'Teltonika'],
    steps: [
      'Connect your laptop or mobile to the router Wi-Fi or LAN port.',
      'Open a web browser and go to http://192.168.8.1.',
      'Enter username (admin or root) and password (admin or printed on the back/battery compartment).',
      'Manage VPN client (WireGuard/OpenVPN), mobile broadband SIM APN, and Wi-Fi repeater settings.'
    ],
    faqs: [
      {
        question: 'What devices use 192.168.8.1 as default IP?',
        answer: 'GL.iNet travel routers (Beryl, Slate, Flint), Huawei 4G LTE CPE routers (B310, B535), and many portable ZTE LTE/5G Wi-Fi hotspots.'
      },
      {
        question: 'How do I log into GL.iNet at 192.168.8.1?',
        answer: 'On first startup at 192.168.8.1, choose your language and set a master admin password for the Admin Panel.'
      }
    ]
  },
  {
    ip: '192.168.100.1',
    slug: '192-168-100-1',
    title: '192.168.100.1 Huawei EchoLife & Arris Cable Modem Login Guide',
    description: 'Access ONT fiber modems and SURFboard cable modems at 192.168.100.1. Default telecomadmin credentials and diagnostic instructions.',
    defaultUser: 'telecomadmin / admin',
    defaultPass: 'admintelecom / password',
    commonBrands: ['Huawei', 'Arris', 'Motorola', 'ZTE'],
    steps: [
      'Connect your computer directly to the modem/ONT LAN 1 port via Ethernet.',
      'Open a browser and navigate to http://192.168.100.1.',
      'Enter username telecomadmin and password admintelecom (for Huawei GPON) or admin / password (for Arris/Motorola).',
      'Inspect downstream/upstream DOCSIS power levels or GPON optical Rx/Tx power.'
    ],
    faqs: [
      {
        question: 'Why is 192.168.100.1 used by cable and fiber modems?',
        answer: '192.168.100.1 is the standard diagnostic management IP for DOCSIS cable modems (Arris SURFboard, Motorola) and FTTH GPON ONTs (Huawei EchoLife).'
      },
      {
        question: 'What is the telecomadmin password for Huawei 192.168.100.1?',
        answer: 'Default username is "telecomadmin" and password is "admintelecom". For standard user access, use "root" and "admin".'
      }
    ]
  },
  {
    ip: '192.168.88.1',
    slug: '192-168-88-1',
    title: '192.168.88.1 MikroTik RouterOS & WinBox Login Guide',
    description: 'Default IP address for MikroTik RouterBOARD, hAP, and Cloud Core Routers. WebFig, WinBox connection, and default admin login instructions.',
    defaultUser: 'admin',
    defaultPass: '(blank) / printed on sticker',
    commonBrands: ['MikroTik'],
    steps: [
      'Connect your computer to Ether2, Ether3, or Wi-Fi (do not connect to Ether1 / WAN).',
      'Open a web browser to http://192.168.88.1 or download and open the MikroTik WinBox utility.',
      'Login with username "admin" and leave the password blank.',
      'Use WebFig or QuickSet to configure IP firewall, NAT, DHCP server, and wireless interfaces.'
    ],
    faqs: [
      {
        question: 'Why can\'t I connect to 192.168.88.1 on Ether1?',
        answer: 'In default RouterOS configuration, Ether1 is reserved as the WAN port with the firewall enabled. Always plug into Ether2 or LAN ports.'
      },
      {
        question: 'What is the default password for MikroTik 192.168.88.1?',
        answer: 'By default, the username is "admin" with NO password (blank). Newer models may have a unique password printed on the sticker.'
      }
    ]
  },
  {
    ip: '192.168.18.1',
    slug: '192-168-18-1',
    title: '192.168.18.1 Nokia GPON & FTTH Optical Router Login Guide',
    description: 'Default IP gateway for Nokia ONT fiber optical modems (G-2425G-A). Default AdminGPON login credentials and optical signal diagnostics.',
    defaultUser: 'AdminGPON / admin',
    defaultPass: 'ALC#FBRG@H / admin',
    commonBrands: ['Nokia', 'Alcatel-Lucent', 'Keenetic'],
    steps: [
      'Connect to the Nokia ONT Wi-Fi or connect via LAN port.',
      'Open your web browser and visit http://192.168.18.1.',
      'Enter Username: AdminGPON and Password: ALC#FBRG@H (or admin / admin).',
      'Check Optical Rx Power, WAN GPON status, and Wi-Fi 2.4/5GHz configuration.'
    ],
    faqs: [
      {
        question: 'What is the default AdminGPON password for Nokia 192.168.18.1?',
        answer: 'For Nokia G-2425G-A and Alcatel-Lucent ONTs, the superadmin username is "AdminGPON" and password is "ALC#FBRG@H".'
      },
      {
        question: 'How to fix 192.168.18.1 login timeout?',
        answer: 'Ensure your computer is assigned an IP in the 192.168.18.x range (e.g., 192.168.18.100) via DHCP.'
      }
    ]
  },
  {
    ip: '192.168.10.1',
    slug: '192-168-10-1',
    title: '192.168.10.1 TRENDnet, Cudy & Wavlink Router Admin Login Guide',
    description: 'Default gateway IP for TRENDnet TEW series, Cudy Wi-Fi routers, Wavlink range extenders, and Repotec hardware. Default passwords and setup steps.',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    commonBrands: ['TRENDnet', 'Cudy', 'Wavlink', 'Repotec'],
    steps: [
      'Connect your device to the TRENDnet or Cudy wireless network.',
      'Open your web browser and type http://192.168.10.1 or http://cudy.net.',
      'Enter username "admin" and password "admin" (or "password").',
      'Follow the setup wizard to configure wireless encryption and WAN connection type.'
    ],
    faqs: [
      {
        question: 'What is the default password for 192.168.10.1?',
        answer: 'For TRENDnet, Cudy, and Wavlink devices, both username and password default to "admin".'
      },
      {
        question: 'Can I access Wavlink range extender at 192.168.10.1?',
        answer: 'Yes, when in AP or Repeater configuration mode, Wavlink extenders default to 192.168.10.1 or wifi.wavlink.com.'
      }
    ]
  },
  {
    ip: '192.168.11.1',
    slug: '192-168-11-1',
    title: '192.168.11.1 Buffalo AirStation Router Admin Login Guide',
    description: 'Access Buffalo AirStation wireless router configuration at 192.168.11.1. Default credentials, AOSS wireless setup, and firmware management.',
    defaultUser: 'admin / root',
    defaultPass: 'password / (blank)',
    commonBrands: ['Buffalo AirStation'],
    steps: [
      'Connect to your Buffalo AirStation via Wi-Fi or Ethernet cable.',
      'Open your web browser and go to http://192.168.11.1.',
      'Enter Username: admin and Password: password (or Username: root and leave password blank on older units).',
      'Configure AOSS Wi-Fi security, guest network, and Internet WAN settings.'
    ],
    faqs: [
      {
        question: 'What is the default login for Buffalo 192.168.11.1?',
        answer: 'Newer Buffalo routers use admin/password, while classic AirStation models use username "root" with no password.'
      }
    ]
  },
  {
    ip: '10.0.1.1',
    slug: '10-0-1-1',
    title: '10.0.1.1 Apple AirPort & WatchGuard Admin Login Guide',
    description: 'Default gateway IP for Apple AirPort Extreme, Time Capsule, and WatchGuard Firebox security appliances.',
    defaultUser: 'admin',
    defaultPass: 'public / readwrite',
    commonBrands: ['Apple', 'WatchGuard'],
    steps: [
      'Connect your PC or Mac to the AirPort or WatchGuard Interface 1.',
      'For WatchGuard, open https://10.0.1.1:8080 in your web browser.',
      'Enter Username: admin and Password: readwrite (or use Apple AirPort Utility for AirPort devices).',
      'Configure security policies and network routing.'
    ],
    faqs: [
      {
        question: 'How do I access WatchGuard Firebox at 10.0.1.1:8080?',
        answer: 'Navigate to https://10.0.1.1:8080 and accept the SSL certificate, then log in with admin / readwrite.'
      }
    ]
  },
  {
    ip: '192.168.86.1',
    slug: '192-168-86-1',
    title: '192.168.86.1 Google Nest WiFi & Google WiFi Router Setup Guide',
    description: 'Default gateway subnet for Google Nest WiFi Pro (Wi-Fi 6E), Google Nest WiFi router, and Google WiFi points. Configuration instructions via Google Home.',
    defaultUser: 'Google Home App',
    defaultPass: 'Google Account Authentication',
    commonBrands: ['Google (Nest WiFi)'],
    steps: [
      'Connect your smartphone or tablet to your Google Nest WiFi / Google WiFi network.',
      'Open the Google Home app on iOS or Android.',
      'Tap on the Wi-Fi icon -> Network settings to configure DNS, port forwarding, and Family Wi-Fi pause.',
      'Access status diagnostics and speed tests directly in the Google Home app.'
    ],
    faqs: [
      {
        question: 'Can I log into 192.168.86.1 using a browser?',
        answer: 'Google Nest WiFi devices show a status page at http://192.168.86.1/api/v1/status in a browser, but all configuration is performed inside the Google Home mobile app.'
      }
    ]
  },
  {
    ip: '192.168.4.1',
    slug: '192-168-4-1',
    title: '192.168.4.1 Amazon eero Mesh Router Setup & Login Guide',
    description: 'Default gateway IP address for Amazon eero Max 7 (Wi-Fi 7), eero Pro 6E, eero 6+, and eero mesh networking systems. eero app setup guide.',
    defaultUser: 'eero App',
    defaultPass: 'Amazon / eero Account',
    commonBrands: ['Amazon (eero)'],
    steps: [
      'Connect your smartphone to your eero mesh Wi-Fi network.',
      'Open the official eero app on iOS or Android.',
      'Log in with your Amazon account or registered mobile number OTP.',
      'Manage Guest Network, eero Plus security, UPnP, and Bandwidth reservations.'
    ],
    faqs: [
      {
        question: 'Does eero have a browser web admin interface at 192.168.4.1?',
        answer: 'eero routers are strictly cloud-managed via the official eero mobile application for iOS and Android.'
      }
    ]
  },
  {
    ip: '192.168.110.1',
    slug: '192-168-110-1',
    title: '192.168.110.1 Ruijie Reyee Cloud Router Admin Login Guide',
    description: 'Default IP address for Ruijie Reyee RG-EW series Wi-Fi 6 routers, Reyee Mesh, and cloud gateways. Step-by-step ReyeeOS login guide.',
    defaultUser: 'admin',
    defaultPass: 'admin / (setup password)',
    commonBrands: ['Ruijie (Reyee)'],
    steps: [
      'Connect your computer or phone to Reyee Wi-Fi (Reyee-sXXXX) or LAN port.',
      'Open your web browser and navigate to http://192.168.110.1.',
      'Create an administrator password or login with username: admin and password: admin.',
      'Configure Reyee Mesh, Reyee Cloud remote management, and Smart Flow control.'
    ],
    faqs: [
      {
        question: 'What is the default IP address for Ruijie Reyee routers?',
        answer: 'Ruijie Reyee home and commercial routers use 192.168.110.1 as their default factory management IP.'
      }
    ]
  },
  {
    ip: '192.168.1.99',
    slug: '192-168-1-99',
    title: '192.168.1.99 Fortinet FortiGate Firewall Admin Login Guide',
    description: 'Default internal management IP address for Fortinet FortiGate 40F, 60F, 70F, and 100F Next-Generation Firewalls and security appliances.',
    defaultUser: 'admin',
    defaultPass: '(blank)',
    commonBrands: ['Fortinet (FortiGate)'],
    steps: [
      'Connect your PC Ethernet cable to FortiGate Port 1 / Internal MGMT interface.',
      'Assign your PC a static IP address: 192.168.1.100 (Subnet mask: 255.255.255.0).',
      'Open your browser and navigate to https://192.168.1.99.',
      'Log in with Username: admin and leave the Password field blank, then set a strong new password.'
    ],
    faqs: [
      {
        question: 'Why must I set a static IP to connect to 192.168.1.99?',
        answer: 'By default, FortiGate firewalls do not run a DHCP server on management ports. You must configure static IP 192.168.1.100 on your PC.'
      }
    ]
  },
  {
    ip: '192.168.168.168',
    slug: '192-168-168-168',
    title: '192.168.168.168 SonicWall Firewall Router Admin Login Guide',
    description: 'Default LAN management IP address for SonicWall TZ270, TZ370, TZ470, and NSA series Next-Gen firewalls. SonicOS setup guide.',
    defaultUser: 'admin',
    defaultPass: 'password',
    commonBrands: ['SonicWall'],
    steps: [
      'Connect your computer to the SonicWall X0 (LAN) port using an Ethernet cable.',
      'Configure your PC network adapter to static IP 192.168.168.200 (Subnet: 255.255.255.0).',
      'Open your web browser and go to https://192.168.168.168.',
      'Enter Username: admin and Password: password to access the SonicOS dashboard.'
    ],
    faqs: [
      {
        question: 'What is the default login for SonicWall 192.168.168.168?',
        answer: 'Username: admin, Password: password.'
      }
    ]
  },
  {
    ip: '172.16.16.16',
    slug: '172-16-16-16',
    title: '172.16.16.16 Sophos Firewall WebAdmin Login & Setup Guide',
    description: 'Default management IP and port 4444 portal for Sophos XGS 87, 107, 116, and Cyberoam security gateways. Sophos Firewall OS guide.',
    defaultUser: 'admin',
    defaultPass: 'admin',
    commonBrands: ['Sophos'],
    steps: [
      'Connect your PC Ethernet cable to Sophos Port 1 (LAN).',
      'Set your PC static IP address to 172.16.16.100 (Subnet: 255.255.255.0).',
      'Open your browser and navigate to https://172.16.16.16:4444.',
      'Log in with Username: admin and Password: admin, then accept the EULA and set a master administrator password.'
    ],
    faqs: [
      {
        question: 'Why do I need to type :4444 after 172.16.16.16?',
        answer: 'Sophos WebAdmin uses HTTPS on custom TCP port 4444 (https://172.16.16.16:4444) for secure administrator access.'
      }
    ]
  },
  {
    ip: '192.168.68.1',
    slug: '192-168-68-1',
    title: '192.168.68.1 TP-Link Deco & Mercusys Halo Mesh Login Guide',
    description: 'Default gateway IP address for TP-Link Deco (BE85, XE75, X50, M4) and Mercusys Halo whole-home mesh Wi-Fi systems.',
    defaultUser: 'admin / TP-Link ID',
    defaultPass: 'Cloud Password / (blank)',
    commonBrands: ['TP-Link', 'Mercusys'],
    steps: [
      'Connect to your TP-Link Deco or Mercusys Halo mesh Wi-Fi network.',
      'Open your web browser and navigate to http://192.168.68.1 or http://tplinkdeco.net.',
      'Enter your TP-Link ID password or Deco admin password.',
      'View connected clients, mesh signal backhaul quality, and firmware versions.'
    ],
    faqs: [
      {
        question: 'Can I access TP-Link Deco settings via web browser at 192.168.68.1?',
        answer: 'Yes! The Deco web interface at 192.168.68.1 allows checking status, firmware updates, and logs.'
      }
    ]
  },
  {
    ip: '192.168.5.1',
    slug: '192-168-5-1',
    title: '192.168.5.1 Tenda Nova Mesh Router Admin Login Guide',
    description: 'Default gateway IP address for Tenda Nova MW3, MW6, MW12, and MX series whole-home Wi-Fi mesh systems. Tenda WiFi app setup.',
    defaultUser: 'admin',
    defaultPass: 'admin / (blank)',
    commonBrands: ['Tenda'],
    steps: [
      'Connect your phone or laptop to the Nova Mesh Wi-Fi (Nova_XXXXX).',
      'Open your browser and type http://192.168.5.1 or open the Tenda WiFi app.',
      'Enter your admin login password or complete the initial onboarding wizard.',
      'Configure seamless mesh roaming, parental controls, and guest access.'
    ],
    faqs: [
      {
        question: 'Why does Tenda Nova use 192.168.5.1 instead of 192.168.0.1?',
        answer: 'Tenda Nova mesh units use 192.168.5.1 to avoid IP address conflicts with upstream ISP modems running on 192.168.0.1 or 192.168.1.1.'
      }
    ]
  },
  {
    ip: '192.168.80.1',
    slug: '192-168-80-1',
    title: '192.168.80.1 Grandstream GWN Router Admin Login Guide',
    description: 'Default IP address for Grandstream GWN7062 Wi-Fi 6 routers, GWN7052 Gigabit VPN routers, and GWN enterprise access points.',
    defaultUser: 'admin',
    defaultPass: 'admin / (printed on sticker)',
    commonBrands: ['Grandstream'],
    steps: [
      'Connect your PC to the Grandstream GWN router LAN port or Wi-Fi.',
      'Open your web browser and go to https://192.168.80.1 or https://gwn.local.',
      'Enter Username: admin and Password printed on the device rear label.',
      'Access the GWN management console to configure Multi-WAN failover, VPN tunnels, and captive portals.'
    ],
    faqs: [
      {
        question: 'Where is the default password for Grandstream 192.168.80.1?',
        answer: 'Look at the barcode label on the underside of your Grandstream GWN router for the unique factory admin password.'
      }
    ]
  },
  {
    ip: '192.168.12.1',
    slug: '192-168-12-1',
    title: '192.168.12.1 T-Mobile 5G Home Internet Gateway Login Guide',
    description: 'Default admin IP for T-Mobile 5G Home Internet Gateways (Arcadyan KVD21, Sagemcom Fast 5688W, Nokia 5G21). Cellular signal stats and setup.',
    defaultUser: 'admin',
    defaultPass: 'Printed on gateway sticker',
    commonBrands: ['T-Mobile', 'Arcadyan', 'Sagemcom', 'Nokia'],
    steps: [
      'Connect to your T-Mobile 5G Wi-Fi network.',
      'Open your browser and navigate to http://192.168.12.1.',
      'Enter the administrator password printed on the sticker underneath the gateway.',
      'Check 5G cellular signal metrics (RSRP, RSRQ, SINR) and connected devices.'
    ],
    faqs: [
      {
        question: 'What is the default login for T-Mobile 192.168.12.1?',
        answer: 'Username: admin, Password: (look at the laser-etched label on the underside/back of the gateway).'
      }
    ]
  },
  {
    ip: '192.168.3.1',
    slug: '192-168-3-1',
    title: '192.168.3.1 Huawei HiLink & Sub-Router Admin Login Guide',
    description: 'Default gateway IP for Huawei WiFi AX3, HiLink mesh sub-routers, and secondary wireless access points.',
    defaultUser: 'admin',
    defaultPass: 'Set during initial setup / admin',
    commonBrands: ['Huawei'],
    steps: [
      'Connect to your Huawei Wi-Fi network.',
      'Open http://192.168.3.1 in your web browser.',
      'Enter your router login password configured during the setup wizard.',
      'Configure HarmonyOS Mesh+ interconnect and Wi-Fi 6 Plus parameters.'
    ],
    faqs: [
      {
        question: 'What is the default password for Huawei 192.168.3.1?',
        answer: 'Huawei prompts you to choose an admin password during first-time Wi-Fi setup.'
      }
    ]
  },
  {
    ip: '192.168.254.254',
    slug: '192-168-254-254',
    title: '192.168.254.254 Siemens Gigaset & Netopia Modem Login Guide',
    description: 'Default gateway IP address for Siemens Gigaset, Motorola Netopia Cayman, and SpeedStream DSL routers.',
    defaultUser: 'admin',
    defaultPass: 'admin / (blank)',
    commonBrands: ['Siemens', 'Netopia', 'SpeedStream'],
    steps: [
      'Connect your PC to the modem LAN port with an Ethernet cable.',
      'Open your browser and type http://192.168.254.254.',
      'Enter default username: admin and password: admin (or leave blank).',
      'Configure VPI/VCI parameters and PPPoE authentication.'
    ],
    faqs: [
      {
        question: 'What is the default login for 192.168.254.254?',
        answer: 'Most Siemens and Netopia routers default to username "admin" and password "admin".'
      }
    ]
  },
  {
    ip: '192.168.123.254',
    slug: '192-168-123-254',
    title: '192.168.123.254 Sitecom & LevelOne Router Admin Login Guide',
    description: 'Default IP address for Sitecom broadband routers, LevelOne networking hardware, and IP sharing gateways.',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    commonBrands: ['Sitecom', 'LevelOne'],
    steps: [
      'Connect to your Sitecom or LevelOne router network.',
      'Open http://192.168.123.254 in your web browser.',
      'Enter Username: admin and Password: admin (or password).',
      'Configure LAN/WAN routing and wireless encryption.'
    ],
    faqs: [
      {
        question: 'What is the default password for Sitecom 192.168.123.254?',
        answer: 'Username: admin, Password: admin (or check the security card inside the product packaging).'
      }
    ]
  },
  {
    ip: '192.168.15.1',
    slug: '192-168-15-1',
    title: '192.168.15.1 Linksys & Cisco VoIP ATA Router Login Guide',
    description: 'Default management IP for Linksys SPA2102, PAP2T, and Cisco VoIP telephone adapter gateways.',
    defaultUser: 'admin',
    defaultPass: 'admin / (blank)',
    commonBrands: ['Linksys', 'Cisco', 'Vonage'],
    steps: [
      'Connect your computer to the Ethernet LAN port of the VoIP adapter.',
      'Open http://192.168.15.1 in your browser.',
      'Click "Admin Login" and "Advanced" to access SIP voice lines and codec settings.'
    ],
    faqs: [
      {
        question: 'What is the default login for Linksys VoIP ATA at 192.168.15.1?',
        answer: 'Username: admin, Password: (blank / no password required).'
      }
    ]
  },
  {
    ip: '192.168.254.1',
    slug: '192-168-254-1',
    title: '192.168.254.1 CenturyLink & Westell DSL Modem Login Guide',
    description: 'Default IP address for CenturyLink Zyxel/Actiontec modems and Westell ProLine broadband gateways.',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    commonBrands: ['CenturyLink', 'Westell'],
    steps: [
      'Connect to your CenturyLink or Westell modem via Ethernet.',
      'Open http://192.168.254.1 in your web browser.',
      'Enter Username: admin and Password found on the modem sticker.',
      'Configure Transparent Bridging or PPPoE credentials.'
    ],
    faqs: [
      {
        question: 'What is the default password for CenturyLink 192.168.254.1?',
        answer: 'The Admin Username is "admin" and Admin Password is printed on the modem label.'
      }
    ]
  }
,
  {
    ip: '192.168.0.254',
    slug: '192-168-0-254',
    title: '192.168.0.254 TP-Link & Netgear Access Point Setup Guide',
    description: 'Default IP address for TP-Link outdoor CPE access points (Pharos), Netgear range extenders, and DrayTek secondary subnets.',
    defaultUser: 'admin',
    defaultPass: 'admin / (blank)',
    commonBrands: ["TP-Link (Pharos / CPE)", "Netgear (Extenders)", "DrayTek"],
    steps: [
      "Connect your computer via Ethernet to the access point LAN/PoE port.",
      "Set your PC static IP to 192.168.0.100 (Subnet: 255.255.255.0).",
      "Open http://192.168.0.254 in your web browser.",
      "Enter default Username: admin and Password: admin."
],
    faqs: [
      {
            "question": "What devices use 192.168.0.254 as their default IP?",
            "answer": "TP-Link Pharos outdoor CPE bridges (CPE210, CPE510, CPE710), Netgear Wi-Fi range extenders, and TP-Link Omada access points in standalone mode."
      }
]
  },
  {
    ip: '192.168.225.1',
    slug: '192-168-225-1',
    title: '192.168.225.1 JioFi 4G Hotspot Admin Login Guide',
    description: 'Default admin portal IP for JioFi 2, JioFi 3, JioFi 4, and Jio Dongle 4G portable Wi-Fi hotspot devices (jiofi.local.html).',
    defaultUser: 'administrator',
    defaultPass: 'administrator',
    commonBrands: ["JioFi (Reliance Jio)"],
    steps: [
      "Connect your smartphone or laptop to your JioFi Wi-Fi SSID.",
      "Open your browser and navigate to http://192.168.225.1 or http://jiofi.local.html.",
      "Click on 'Login' in the top-right corner.",
      "Enter Username: administrator and Password: administrator.",
      "Change your JioFi Wi-Fi password and view 4G signal strength and battery percentage."
],
    faqs: [
      {
            "question": "What is the default username and password for JioFi 192.168.225.1?",
            "answer": "Default Username is 'administrator' and Password is 'administrator'."
      }
]
  },
  {
    ip: '10.1.10.1',
    slug: '10-1-10-1',
    title: '10.1.10.1 Comcast Business Gateway Admin Login Guide',
    description: 'Default internal management IP address for Comcast Business Class Internet routers and Cisco/SMC commercial gateways.',
    defaultUser: 'cusadmin',
    defaultPass: 'highspeed / CantTouchThis',
    commonBrands: ["Comcast Business", "Cisco", "SMC Networks"],
    steps: [
      "Connect your computer to any Ethernet LAN port on the Comcast Business gateway.",
      "Open http://10.1.10.1 in your web browser.",
      "Enter Username: cusadmin and Password: highspeed (or CantTouchThis on older models).",
      "Configure Static IP pass-through, True Static Subnets, and firewall rules."
],
    faqs: [
      {
            "question": "What is the default login for Comcast Business 10.1.10.1?",
            "answer": "Username: cusadmin, Password: highspeed. For technician level access, username is 'mso'."
      }
]
  },
  {
    ip: '172.20.10.1',
    slug: '172-20-10-1',
    title: '172.20.10.1 Apple iPhone Personal Hotspot Gateway Guide',
    description: 'Default IP gateway assigned when sharing internet through an Apple iPhone or iPad Personal Hotspot.',
    defaultUser: 'iOS System Managed',
    defaultPass: 'Set on iPhone Screen',
    commonBrands: ["Apple (iPhone / iPad)"],
    steps: [
      "Enable Personal Hotspot in Settings -> Personal Hotspot on your iPhone.",
      "Connect your laptop to the iPhone Wi-Fi network or via USB cable.",
      "Your laptop will automatically receive default gateway 172.20.10.1.",
      "All tethering bandwidth and client controls are managed directly in iOS Settings."
],
    faqs: [
      {
            "question": "Can I open a web configuration page at 172.20.10.1?",
            "answer": "No, Apple Personal Hotspot does not host a web admin panel. Hotspot security and connected clients are viewed inside iOS Settings."
      }
]
  },
  {
    ip: '192.168.43.1',
    slug: '192-168-43-1',
    title: '192.168.43.1 Android Wi-Fi Hotspot Gateway Guide',
    description: 'Default gateway IP address allocated by Android smartphones when enabling Portable Wi-Fi Hotspot tethering.',
    defaultUser: 'Android System Managed',
    defaultPass: 'Configured on Android Phone',
    commonBrands: ["Android (Samsung, Google Pixel, Xiaomi, OnePlus)"],
    steps: [
      "Turn on 'Portable Hotspot' in Android Settings -> Network & Internet.",
      "Connect your laptop or other devices to the Android hotspot SSID.",
      "Check connected devices and data limits in the Android hotspot settings menu."
],
    faqs: [
      {
            "question": "Why is my default gateway 192.168.43.1?",
            "answer": "192.168.43.1 is the standard DHCP server IP used by Android OS for Wi-Fi hotspot routing."
      }
]
  }
,
  {
    ip: '192.168.100.100',
    slug: '192-168-100-100',
    title: '192.168.100.100 FTTH Optical ONT Diagnostic Login Guide',
    description: 'Default diagnostic IP for Huawei EchoLife, ZTE, and Fiberhome GPON optical network terminals (ONTs).',
    defaultUser: 'telecomadmin',
    defaultPass: 'admintelecom',
    commonBrands: ["Huawei (EchoLife)", "ZTE", "Fiberhome"],
    steps: [
      "Connect an Ethernet cable directly from your PC to the LAN 1 port of the ONT modem.",
      "Assign your PC static IP 192.168.100.10 (Subnet: 255.255.255.0).",
      "Open http://192.168.100.100 in your web browser.",
      "Enter superadmin credentials: telecomadmin / admintelecom.",
      "Check Optical Rx/Tx power levels and OMCI status."
],
    faqs: [
      {
            "question": "What is 192.168.100.100 used for?",
            "answer": "192.168.100.100 is the dedicated diagnostic management IP used by telecommunication field technicians to inspect GPON fiber line optical power."
      }
]
  },
  {
    ip: '192.168.1.250',
    slug: '192-168-1-250',
    title: '192.168.1.250 HP ProCurve & HPE Aruba Switch Login Guide',
    description: 'Default management IP for HP ProCurve, HPE OfficeConnect, and Aruba smart managed network switches.',
    defaultUser: 'admin',
    defaultPass: '(blank) / admin',
    commonBrands: ["HP (ProCurve)", "HPE Aruba", "OfficeConnect"],
    steps: [
      "Connect your PC to Port 1 or the dedicated MGMT port.",
      "Set your PC IP to 192.168.1.100 (Subnet: 255.255.255.0).",
      "Open http://192.168.1.250 in your browser.",
      "Leave password blank or enter admin and configure VLAN interfaces."
],
    faqs: [
      {
            "question": "What is the default login for HP 192.168.1.250?",
            "answer": "Default Username is 'admin' and Password is blank (press Enter)."
      }
]
  },
  {
    ip: '192.168.0.50',
    slug: '192-168-0-50',
    title: '192.168.0.50 D-Link Access Point & Extender Setup Guide',
    description: 'Default static setup IP for D-Link DAP series wireless access points, Wi-Fi range extenders, and powerline adapters.',
    defaultUser: 'admin',
    defaultPass: '(blank)',
    commonBrands: ["D-Link (DAP Series)"],
    steps: [
      "Plug your PC directly into the D-Link DAP access point Ethernet port.",
      "Assign your PC static IP 192.168.0.10 (Subnet: 255.255.255.0).",
      "Open http://192.168.0.50 or http://dlinkap.local in your web browser.",
      "Leave password blank and click Log In to launch the wireless configuration wizard."
],
    faqs: [
      {
            "question": "Why can't I open 192.168.0.50?",
            "answer": "Ensure your computer network adapter is manually configured to static IP 192.168.0.10 with subnet 255.255.255.0."
      }
]
  },
  {
    ip: '192.168.1.20',
    slug: '192-168-1-20',
    title: '192.168.1.20 Ubiquiti UniFi Access Point Fallback IP Guide',
    description: 'Default fallback IP address for unadopted Ubiquiti UniFi Access Points (U6-Pro, U6-Mesh, U7-Pro, AC-Pro) when DHCP is unavailable.',
    defaultUser: 'ubnt',
    defaultPass: 'ubnt',
    commonBrands: ["Ubiquiti (UniFi)"],
    steps: [
      "Power the UniFi AP via a PoE injector or PoE switch.",
      "Connect your PC to the LAN port with static IP 192.168.1.100.",
      "SSH into the AP using `ssh ubnt@192.168.1.20` (Password: ubnt).",
      "Run `set-inform http://[your-controller-ip]:8080/inform` to adopt the AP into your UniFi Network Controller."
],
    faqs: [
      {
            "question": "What is 192.168.1.20 on UniFi devices?",
            "answer": "When a factory-reset UniFi AP fails to receive an IP via DHCP, it automatically falls back to static IP 192.168.1.20."
      }
]
  },
  {
    ip: '10.0.0.138',
    slug: '10-0-0-138',
    title: '10.0.0.138 Telstra Thomson & SpeedTouch Modem Login Guide',
    description: 'Default gateway IP address for Telstra Thomson SpeedTouch, TG582n, and TG782T ADSL broadband modems in Australia.',
    defaultUser: 'admin',
    defaultPass: 'admin / (blank)',
    commonBrands: ["Thomson", "SpeedTouch", "Telstra"],
    steps: [
      "Connect to the Thomson/SpeedTouch modem via Ethernet.",
      "Open http://10.0.0.138 in your web browser.",
      "Log in with Username: admin and Password: admin (or leave password blank).",
      "Configure BigPond ADSL credentials and Wi-Fi security."
],
    faqs: [
      {
            "question": "What is the default password for 10.0.0.138?",
            "answer": "Username: admin, Password: admin (or blank on unbranded SpeedTouch modems)."
      }
]
  },
  {
    ip: '192.168.16.1',
    slug: '192-168-16-1',
    title: '192.168.16.1 Western Digital My Net Router Login Guide',
    description: 'Default gateway IP address for Western Digital My Net N900, N750, and N600 HD dual-band media routers.',
    defaultUser: 'admin',
    defaultPass: 'password / admin',
    commonBrands: ["Western Digital"],
    steps: [
      "Connect to My Net router Wi-Fi or LAN port.",
      "Open http://192.168.16.1 or http://wdrouter in your browser.",
      "Enter Username: admin and Password: password.",
      "Manage FasTrack Plus QoS gaming and media acceleration."
],
    faqs: [
      {
            "question": "What is the default login for WD My Net at 192.168.16.1?",
            "answer": "Username: admin, Password: password."
      }
]
  }
];

export const BRANDS: Brand[] = [
  {
    name: '3WARE',
    slug: '3ware',
    defaultIp: '192.168.1.1',
    defaultUser: 'Administrator',
    defaultPass: '3ware',
    description: 'Default login credentials and configurations for 3WARE 3DM network storage controller devices.',
    models: [
      { brand: '3WARE', model: '3DM', protocol: 'HTTP', ip: '192.168.1.1', username: 'Administrator', password: '3ware' },
      { brand: '3WARE', model: '3DM2', protocol: 'HTTPS', ip: '192.168.1.1', username: 'administrator', password: '3ware' }
    ],
    guide: [
      'Connect to your network management interface.',
      'Open http://192.168.1.1:8080 or https://localhost:888 in browser.',
      'Log in with username: Administrator and password: 3ware.'
    ]
  },
  {
    name: '3Com',
    slug: '3com',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default login passwords and management portals for 3Com OfficeConnect and SuperStack routers.',
    models: [
      { brand: '3Com', model: 'OfficeConnect Wireless 11g', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: '3Com', model: 'SuperStack II', protocol: 'Telnet', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: '3Com', model: '3CRWER100-75', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect via LAN port to 3Com router.',
      'Navigate to http://192.168.1.1.',
      'Enter default username: admin and password: admin.'
    ]
  },
  {
    name: 'Actiontec',
    slug: 'actiontec',
    defaultIp: '192.168.0.1 / 192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Default login credentials for Actiontec Verizon FiOS and DSL modem routers.',
    models: [
      { brand: 'Actiontec', model: 'MI424WR (Verizon FiOS)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Actiontec', model: 'C1000A / C2000A', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Actiontec', model: 'GT784WN', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' }
    ],
    guide: [
      'Connect to Actiontec modem/router.',
      'Open http://192.168.1.1 or http://192.168.0.1 in browser.',
      'Log in with admin / password or check rear sticker.'
    ]
  },
  {
    name: 'Adtran',
    slug: 'adtran',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Default credentials, AOS configuration, and setup guides for Adtran Total Access, NetVanta, and SDX optical ONTs.',
    models: [
      { brand: 'Adtran', model: 'SDX 620 (10G XGS-PON ONT)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Adtran', model: 'Total Access 908e IP Business Gateway', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Adtran', model: 'NetVanta 3140 Gigabit Router', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'password' }
    ],
    guide: [
      'Connect your computer to the Adtran ETH port.',
      'Open https://192.168.1.1 in your browser.',
      'Log in with Username: admin and Password: password.',
      'Use the AOS GUI to configure voice trunks and routing.'
    ]
  },
  {
    name: 'Alcatel-Lucent',
    slug: 'alcatel-lucent',
    defaultIp: '192.168.1.1 / 192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'admin / alcatel',
    description: 'Default logins and configurations for Alcatel-Lucent OmniAccess Stellar, OmniSwitch, and CellPipe routers.',
    models: [
      { brand: 'Alcatel-Lucent', model: 'OmniAccess Stellar AP1201 / AP1301', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Alcatel-Lucent', model: 'OmniSwitch 6350 Enterprise Switch/Router', protocol: 'SSH / HTTPS', ip: '192.168.1.1', username: 'admin', password: 'switch' },
      { brand: 'Alcatel-Lucent', model: 'CellPipe 7130 VDSL2 Gateway', protocol: 'HTTP', ip: '192.168.1.254', username: 'admin', password: 'alcatel' }
    ],
    guide: [
      'Connect your PC to the LAN interface.',
      'Open http://192.168.1.1 or http://192.168.1.254 in your browser.',
      'Enter default credentials to manage enterprise routing.'
    ]
  },
  {
    name: 'Amazon (eero)',
    slug: 'eero',
    defaultIp: '192.168.4.1',
    defaultUser: 'eero App',
    defaultPass: 'Amazon Account / OTP',
    description: 'Amazon eero Max 7 Wi-Fi 7, eero Pro 6E, and eero 6+ mesh Wi-Fi system setup and configuration guide.',
    models: [
      { brand: 'Amazon (eero)', model: 'eero Max 7 (Tri-Band Wi-Fi 7 Mesh)', protocol: 'eero App', ip: '192.168.4.1', username: 'eero App', password: 'Amazon Account' },
      { brand: 'Amazon (eero)', model: 'eero Pro 6E (Tri-Band Wi-Fi 6E)', protocol: 'eero App', ip: '192.168.4.1', username: 'eero App', password: 'Amazon Account' },
      { brand: 'Amazon (eero)', model: 'eero 6+ (Gigabit Dual-Band Wi-Fi 6)', protocol: 'eero App', ip: '192.168.4.1', username: 'eero App', password: 'Amazon Account' },
      { brand: 'Amazon (eero)', model: 'eero Pro (AC2200 Tri-Band)', protocol: 'eero App', ip: '192.168.4.1', username: 'eero App', password: 'Amazon Account' },
      { brand: 'Amazon (eero)', model: 'eero PoE 6 (Power over Ethernet AP)', protocol: 'eero App', ip: '192.168.4.1', username: 'eero App', password: 'Amazon Account' }
    ],
    guide: [
      'Download and install the official eero app from iOS App Store or Google Play Store.',
      'Connect the gateway eero node to your modem via Ethernet and plug into power.',
      'Log in with your Amazon account and follow the in-app pairing instructions.',
      'Place additional mesh beacons around your home for seamless TrueMesh coverage.'
    ]
  },
  {
    name: 'Apple',
    slug: 'apple',
    defaultIp: '10.0.1.1',
    defaultUser: 'admin',
    defaultPass: 'public',
    description: 'AirPort Extreme, AirPort Express, and Time Capsule setup guides and default logins.',
    models: [
      { brand: 'Apple', model: 'AirPort Extreme 802.11ac', protocol: 'AirPort App', ip: '10.0.1.1', username: 'admin', password: 'public' },
      { brand: 'Apple', model: 'AirPort Time Capsule (2TB/3TB)', protocol: 'AirPort App', ip: '10.0.1.1', username: 'admin', password: 'public' },
      { brand: 'Apple', model: 'AirPort Express (2nd Gen)', protocol: 'AirPort App', ip: '10.0.1.1', username: 'admin', password: 'public' }
    ],
    guide: [
      'Open AirPort Utility on macOS, iOS, or Windows.',
      'Select your base station.',
      'Enter the base station password (default is "public" or custom).'
    ]
  },
  {
    name: 'Arris',
    slug: 'arris',
    defaultIp: '192.168.0.1 / 192.168.100.1',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Default credentials and setup guide for Arris SURFboard cable modems, DOCSIS gateways, and Touchstone telephony devices.',
    models: [
      { brand: 'Arris', model: 'SURFboard SBG8300 (Wi-Fi 6 DOCSIS 3.1)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' },
      { brand: 'Arris', model: 'SURFboard G36 (Wi-Fi 6 Multi-Gigabit)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' },
      { brand: 'Arris', model: 'SURFboard SBG10 (AC1600 DOCSIS 3.0)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' },
      { brand: 'Arris', model: 'Touchstone TG3452 Telephony Gateway', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' },
      { brand: 'Arris', model: 'SURFboard SB8200 (Modem Diagnostic)', protocol: 'HTTP', ip: '192.168.100.1', username: 'admin', password: 'password' }
    ],
    guide: [
      'Connect your computer to the Arris gateway via Ethernet cable or Wi-Fi.',
      'Open http://192.168.0.1 or http://192.168.100.1 in your web browser.',
      'Enter Username: admin and Password: password (or custom password on device sticker).',
      'Configure Wi-Fi network settings, parental controls, and firewall rules.'
    ]
  },
  {
    name: 'Askey',
    slug: 'askey',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin / 1234',
    defaultPass: '1234 / Printed on sticker',
    description: 'Default passwords and setup guides for Askey Home Gateway Units (HGU Fibra) and 5G cellular CPE gateways.',
    models: [
      { brand: 'Askey', model: 'RTF8115VW (Movistar/Telefónica HGU)', protocol: 'HTTP', ip: '192.168.1.1', username: '1234', password: 'Printed on sticker' },
      { brand: 'Askey', model: 'Askey 5G NR ODU/IDU Sub-6 Gateway', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Askey', model: 'AP5100 (Wi-Fi 6 Mesh Access Point)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Askey Wi-Fi or LAN port.',
      'Open http://192.168.1.1 in your web browser.',
      'Enter credentials printed on the base barcode label.'
    ]
  },
  {
    name: 'ASUS',
    slug: 'asus',
    defaultIp: '192.168.1.1 / router.asus.com',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default credentials, ASUSWRT configuration, and WiFi setup for ASUS RT and ROG Rapture routers.',
    models: [
      { brand: 'ASUS', model: 'ROG Rapture GT-BE98 (Wi-Fi 7 Quad-Band)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'RT-BE96U (Wi-Fi 7 Tri-Band)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'ROG Rapture GT-AX6000 / GT-AX11000 Pro', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'ZenWiFi BQ16 Pro (Wi-Fi 7 Mesh)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'ZenWiFi AX (XT8 / XD4)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'RT-AX86U / RT-AX88U Pro', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'RT-AX55 / RT-AX58U', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'RT-AC68U / RT-AC86U', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to your ASUS WiFi network or Ethernet port.',
      'Navigate to http://router.asus.com or http://192.168.1.1 in your browser.',
      'Log in with username: admin and password: admin.',
      'Access ASUSWRT to manage AiProtection, QoS, and Wireless configuration.'
    ]
  },
  {
    name: 'AVM (FRITZ!Box)',
    slug: 'avm-fritzbox',
    defaultIp: '192.168.178.1 / fritz.box',
    defaultUser: 'admin',
    defaultPass: 'Printed on sticker',
    description: 'Default passwords, FRITZ!OS configuration, and setup guides for AVM FRITZ!Box DSL, Fiber, Cable, and LTE routers.',
    models: [
      { brand: 'AVM (FRITZ!Box)', model: 'FRITZ!Box 7590 AX (DSL / Wi-Fi 6)', protocol: 'HTTPS', ip: '192.168.178.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'AVM (FRITZ!Box)', model: 'FRITZ!Box 6690 Cable (DOCSIS 3.1)', protocol: 'HTTPS', ip: '192.168.178.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'AVM (FRITZ!Box)', model: 'FRITZ!Box 5590 Fiber (GPON/AON)', protocol: 'HTTPS', ip: '192.168.178.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'AVM (FRITZ!Box)', model: 'FRITZ!Box 4060 (Tri-Band Wi-Fi 6 Router)', protocol: 'HTTPS', ip: '192.168.178.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'AVM (FRITZ!Box)', model: 'FRITZ!Repeater 6000 / 3000 AX (Mesh)', protocol: 'HTTPS', ip: '192.168.178.1', username: 'admin', password: 'Printed on sticker' }
    ],
    guide: [
      'Connect to your FRITZ!Box Wi-Fi or plug into any LAN port.',
      'Open your web browser and visit http://fritz.box or http://192.168.178.1.',
      'Enter the FRITZ!Box password printed on the card or sticker beneath the router.',
      'Configure Internet connection parameters, DECT cordless phones, and Smart Home automation.'
    ]
  },
  {
    name: 'Belkin',
    slug: 'belkin',
    defaultIp: '192.168.2.1',
    defaultUser: 'admin',
    defaultPass: '(blank)',
    description: 'Default passwords and setup steps for Belkin N150, N300, N600, and AC1200 routers.',
    models: [
      { brand: 'Belkin', model: 'N150 / N300 / N450', protocol: 'HTTP', ip: '192.168.2.1', username: 'admin', password: '(blank)' },
      { brand: 'Belkin', model: 'AC1200 / AC1800 Dual Band', protocol: 'HTTP', ip: '192.168.2.1', username: 'admin', password: '(blank)' },
      { brand: 'Belkin', model: 'Play Max / Surf N300', protocol: 'HTTP', ip: '192.168.2.1', username: 'admin', password: '(blank)' }
    ],
    guide: [
      'Connect to Belkin WiFi network.',
      'Open http://192.168.2.1 in your browser.',
      'Leave password field blank and click Submit.'
    ]
  },
  {
    name: 'Billion',
    slug: 'billion',
    defaultIp: '192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default logins and setup instructions for Billion BiPAC Triple-WAN, VDSL2, and fibre broadband gateways.',
    models: [
      { brand: 'Billion', model: 'BiPAC 8800NL (VDSL2/ADSL2+ Triple-WAN)', protocol: 'HTTP', ip: '192.168.1.254', username: 'admin', password: 'admin' },
      { brand: 'Billion', model: 'BiPAC 7800DXL (Wireless Gigabit Triple-WAN)', protocol: 'HTTP', ip: '192.168.1.254', username: 'admin', password: 'admin' },
      { brand: 'Billion', model: 'BiPAC 8900AX-2400 (AC2400 VDSL2/Fibre)', protocol: 'HTTP', ip: '192.168.1.254', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect your PC to the Billion BiPAC LAN port.',
      'Open http://192.168.1.254 in your web browser.',
      'Log in with Username: admin and Password: admin.',
      'Configure WAN interfaces and Multi-WAN failover rules.'
    ]
  },
  {
    name: 'Buffalo',
    slug: 'buffalo',
    defaultIp: '192.168.11.1',
    defaultUser: 'admin / root',
    defaultPass: 'password / (blank)',
    description: 'Default logins and AirStation setup instructions for Buffalo WXR, WSR, and AirStation HighPower series routers.',
    models: [
      { brand: 'Buffalo', model: 'AirStation WXR-5950AX12 (Wi-Fi 6)', protocol: 'HTTP', ip: '192.168.11.1', username: 'admin', password: 'password' },
      { brand: 'Buffalo', model: 'AirStation WSR-3200AX4S', protocol: 'HTTP', ip: '192.168.11.1', username: 'admin', password: 'password' },
      { brand: 'Buffalo', model: 'AirStation WZR-HP-G450H', protocol: 'HTTP', ip: '192.168.11.1', username: 'root', password: '(blank)' },
      { brand: 'Buffalo', model: 'AirStation WHR-1166D', protocol: 'HTTP', ip: '192.168.11.1', username: 'admin', password: 'password' }
    ],
    guide: [
      'Connect to the Buffalo AirStation Wi-Fi or Ethernet LAN port.',
      'Open http://192.168.11.1 in your web browser.',
      'Log in with Username: admin and Password: password (or root with blank password).',
      'Use the AirStation web console to configure wireless SSIDs and WAN connection.'
    ]
  },
  {
    name: 'Calix',
    slug: 'calix',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / Printed on sticker',
    description: 'Default credentials, GigaSpire CommandIQ setup, and FTTH configuration for Calix optical networking gateways.',
    models: [
      { brand: 'Calix', model: 'GigaSpire BLAST u6 (Wi-Fi 6 Optical Gateway)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Calix', model: 'GigaSpire BLAST u4 (Compact Wi-Fi 6 Gateway)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Calix', model: 'GigaCenter 844G (GPON Residential Gateway)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Calix', model: '716GE Optical Network Terminal (ONT)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect your PC or mobile to Calix GigaSpire Wi-Fi.',
      'Open http://192.168.1.1 in your browser.',
      'Enter Username: admin and Password printed on device sticker (or use CommandIQ app).'
    ]
  },
  {
    name: 'Cisco',
    slug: 'cisco',
    defaultIp: '192.168.1.1 / 10.0.0.1 / 192.168.15.1',
    defaultUser: 'cisco / admin',
    defaultPass: 'cisco / password',
    description: 'Default logins for Cisco Small Business, RV Series, Catalyst, and Meraki Go routers.',
    models: [
      { brand: 'Cisco', model: 'RV160 / RV260 / RV340 Gigabit VPN Router', protocol: 'HTTPS', ip: '192.168.1.1', username: 'cisco', password: 'cisco' },
      { brand: 'Cisco', model: 'Meraki Go GX20 / GX50 Security Gateway', protocol: 'Meraki Go App', ip: '192.168.1.1', username: 'admin', password: 'Set in app' },
      { brand: 'Cisco', model: 'DPC3941T (Xfinity Gateway)', protocol: 'HTTP', ip: '10.0.0.1', username: 'admin', password: 'password' },
      { brand: 'Cisco', model: 'WRVS4400N Wireless-N Gigabit Router', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Cisco', model: 'SPA2102 / PAP2T VoIP Telephone Adapter', protocol: 'HTTP', ip: '192.168.15.1', username: 'admin', password: '(blank)' },
      { brand: 'Cisco', model: 'Catalyst 2960 / 3750 Layer 3 Switch', protocol: 'Telnet/SSH', ip: '192.168.1.1', username: 'cisco', password: 'cisco' }
    ],
    guide: [
      'Connect via Ethernet cable to Cisco router LAN port 1.',
      'Open https://192.168.1.1 in browser.',
      'Login with username: cisco and password: cisco.'
    ]
  },
  {
    name: 'Comtrend',
    slug: 'comtrend',
    defaultIp: '192.168.1.1',
    defaultUser: 'root / admin',
    defaultPass: '12345 / admin',
    description: 'Default logins, VDSL2 configurations, and G.hn Powerline setup for Comtrend gateways.',
    models: [
      { brand: 'Comtrend', model: 'NexusLink 3112 (Bonded VDSL2 Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Comtrend', model: 'AR-5381u (Wireless ADSL2+ Router)', protocol: 'HTTP', ip: '192.168.1.1', username: 'root', password: '12345' },
      { brand: 'Comtrend', model: 'VR-3033 (Multi-DSL Wireless Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect PC to Comtrend LAN port.',
      'Navigate to http://192.168.1.1 in your browser.',
      'Log in with Username: root and Password: 12345 (or admin / admin).'
    ]
  },
  {
    name: 'Cudy',
    slug: 'cudy',
    defaultIp: '192.168.10.1 / cudy.net',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default IP credentials, Cudy Wi-Fi 6 mesh setup, and 4G/5G cellular gateway instructions.',
    models: [
      { brand: 'Cudy', model: 'Cudy WR3000 (AX3000 Wi-Fi 6 Router)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'Cudy', model: 'Cudy LT18 (4G LTE Cat 18 Gigabit Router)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'Cudy', model: 'Cudy M1800 (Whole Home Mesh Wi-Fi 6)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'Cudy', model: 'Cudy WR1300 (AC1200 Gigabit Dual Band)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Cudy Wi-Fi network (Cudy_XXXX).',
      'Open http://cudy.net or http://192.168.10.1 in your browser.',
      'Enter default password "admin" and follow the quick setup wizard.',
      'Configure VPN Client (WireGuard, OpenVPN, Zerotier) and DNS over TLS.'
    ]
  },
  {
    name: 'Digisol',
    slug: 'digisol',
    defaultIp: '192.168.1.1 / 192.168.2.1',
    defaultUser: 'admin',
    defaultPass: 'admin / admin1234',
    description: 'Default credentials and FTTH XPON ONT configuration for Digisol wireless routers and optical modems.',
    models: [
      { brand: 'Digisol', model: 'DG-GR1321 (XPON GPON/EPON ONT + Wi-Fi)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin1234' },
      { brand: 'Digisol', model: 'DG-HR3400 (300Mbps Wireless Router)', protocol: 'HTTP', ip: '192.168.2.1', username: 'admin', password: 'admin' },
      { brand: 'Digisol', model: 'DG-BG4300NU (ADSL2+ Broadband Router)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Digisol', model: 'DG-GR1010 (Single Port Gigabit ONU)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect your PC to the Digisol ONT LAN port.',
      'Open http://192.168.1.1 or http://192.168.2.1 in your browser.',
      'Enter Username: admin and Password: admin (or admin1234).',
      'Set WAN connection mode (PPPoE / IPoE) and configure optical VLANs.'
    ]
  },
  {
    name: 'D-Link',
    slug: 'd-link',
    defaultIp: '192.168.0.1 / dlinkrouter.local',
    defaultUser: 'admin',
    defaultPass: '(blank) / admin',
    description: 'Find default logins and configuration instructions for D-Link DIR, AQUILA PRO AI, COVR, and DSL routers.',
    models: [
      { brand: 'D-Link', model: 'AQUILA PRO AI M30 / M60 (Wi-Fi 6 Mesh)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'D-Link', model: 'EAGLE PRO AI AX3200 (R32)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'D-Link', model: 'DIR-615 / DIR-825 / DIR-842', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: '(blank) / admin' },
      { brand: 'D-Link', model: 'EXO AX1500 / AX1800', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'D-Link', model: 'DSL-2750U / 2877AL', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'D-Link', model: 'COVR-1100 / COVR-2200 (Mesh)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: '(blank)' }
    ],
    guide: [
      'Connect to your D-Link router network.',
      'Visit http://192.168.0.1 or http://dlinkrouter.local in your web browser.',
      'Enter admin as the username and leave the password empty (or enter admin).',
      'Configure Internet and WiFi settings via the setup wizard.'
    ]
  },
  {
    name: 'DrayTek',
    slug: 'draytek',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default passwords and setup for DrayTek Vigor 2862, 2927, and 2962 business routers.',
    models: [
      { brand: 'DrayTek', model: 'Vigor 2862 / 2865', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'DrayTek', model: 'Vigor 2927 / 2962 Dual-WAN', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'DrayTek', model: 'VigorAP 903 / 960C', protocol: 'HTTP', ip: '192.168.1.2', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to DrayTek LAN.',
      'Open https://192.168.1.1.',
      'Log in with admin / admin.'
    ]
  },
  {
    name: 'DZS (Zhone)',
    slug: 'dzs-zhone',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'zhone / admin',
    description: 'Default passwords and FTTH GPON configuration for DZS (DASAN Zhone Solutions) optical network terminals.',
    models: [
      { brand: 'DZS (Zhone)', model: 'zNID GPON 2426A (Dual Band Wi-Fi ONT)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'zhone' },
      { brand: 'DZS (Zhone)', model: 'zNID GPON 2428A1 (Gigabit GPON Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'zhone' },
      { brand: 'DZS (Zhone)', model: 'zNID 2608T Indoor ONT', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to DZS ONT LAN port.',
      'Open http://192.168.1.1 in your web browser.',
      'Log in with Username: admin and Password: zhone.'
    ]
  },
  {
    name: 'Fortinet (FortiGate)',
    slug: 'fortinet',
    defaultIp: '192.168.1.99',
    defaultUser: 'admin',
    defaultPass: '(blank)',
    description: 'Default logins, initial provisioning, and FortiOS configuration for Fortinet FortiGate enterprise firewalls.',
    models: [
      { brand: 'Fortinet (FortiGate)', model: 'FortiGate 40F (Next-Gen Firewall)', protocol: 'HTTPS', ip: '192.168.1.99', username: 'admin', password: '(blank)' },
      { brand: 'Fortinet (FortiGate)', model: 'FortiGate 60F (SD-WAN Security Gateway)', protocol: 'HTTPS', ip: '192.168.1.99', username: 'admin', password: '(blank)' },
      { brand: 'Fortinet (FortiGate)', model: 'FortiGate 70F (Threat Protection)', protocol: 'HTTPS', ip: '192.168.1.99', username: 'admin', password: '(blank)' },
      { brand: 'Fortinet (FortiGate)', model: 'FortiWiFi 60E (UTM + Wi-Fi)', protocol: 'HTTPS', ip: '192.168.1.99', username: 'admin', password: '(blank)' }
    ],
    guide: [
      'Connect your PC Ethernet cable to FortiGate Port 1.',
      'Set static IP on your PC: 192.168.1.100, Netmask: 255.255.255.0.',
      'Open https://192.168.1.99 in your web browser.',
      'Log in with Username: admin and leave the password blank.'
    ]
  },
  {
    name: 'GL.iNet',
    slug: 'gl-inet',
    defaultIp: '192.168.8.1',
    defaultUser: 'root / admin',
    defaultPass: 'admin',
    description: 'Setup guides and default logins for GL.iNet OpenWrt travel routers, security gateways, and Wi-Fi 6 home routers.',
    models: [
      { brand: 'GL.iNet', model: 'Flint 2 (GL-MT6000 Wi-Fi 6)', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'GL.iNet', model: 'Beryl AX (GL-MT3000 Travel Router)', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'GL.iNet', model: 'Slate AX (GL-AXT1800)', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'GL.iNet', model: 'Brume 2 (GL-MT2500 Security Gateway)', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'GL.iNet', model: 'Shadow (GL-AR300M16)', protocol: 'HTTP', ip: '192.168.8.1', username: 'root', password: 'admin' }
    ],
    guide: [
      'Connect to GL.iNet Wi-Fi (GL-XXXXX) or plug into LAN port.',
      'Navigate to http://192.168.8.1 in your browser.',
      'Select system language and configure the Admin Panel master password.',
      'Configure WireGuard / OpenVPN client, AdGuard Home, or Wi-Fi Repeater mode.'
    ]
  },
  {
    name: 'Google (Nest WiFi)',
    slug: 'google-nest',
    defaultIp: '192.168.86.1',
    defaultUser: 'Google Home App',
    defaultPass: 'Google Account Authentication',
    description: 'Google Nest WiFi Pro Wi-Fi 6E, Nest WiFi Router, and Google WiFi point mesh configuration instructions.',
    models: [
      { brand: 'Google (Nest WiFi)', model: 'Nest WiFi Pro (Wi-Fi 6E Tri-Band Mesh)', protocol: 'Google Home App', ip: '192.168.86.1', username: 'Google Home App', password: 'Google Account' },
      { brand: 'Google (Nest WiFi)', model: 'Nest WiFi Router (AC2200 Mesh Base)', protocol: 'Google Home App', ip: '192.168.86.1', username: 'Google Home App', password: 'Google Account' },
      { brand: 'Google (Nest WiFi)', model: 'Google WiFi Point (AC1200 Mesh System)', protocol: 'Google Home App', ip: '192.168.86.1', username: 'Google Home App', password: 'Google Account' }
    ],
    guide: [
      'Plug your Nest WiFi router into power and connect to your modem using Ethernet.',
      'Open the Google Home app on your smartphone.',
      'Tap "+" -> Set up device -> New device, and scan the QR code on the bottom of your Nest WiFi router.',
      'Set your Wi-Fi name and password and link mesh points around your home.'
    ]
  },
  {
    name: 'Grandstream',
    slug: 'grandstream',
    defaultIp: '192.168.80.1',
    defaultUser: 'admin',
    defaultPass: 'admin / Printed on sticker',
    description: 'Default credentials, Multi-WAN failover, and GWN management for Grandstream enterprise routers and APs.',
    models: [
      { brand: 'Grandstream', model: 'GWN7062 (Dual-Band Wi-Fi 6 Multi-WAN)', protocol: 'HTTPS', ip: '192.168.80.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Grandstream', model: 'GWN7052 (Dual-Band Gigabit VPN Router)', protocol: 'HTTPS', ip: '192.168.80.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Grandstream', model: 'GWN7000 (Enterprise Multi-WAN Router)', protocol: 'HTTPS', ip: '192.168.80.1', username: 'admin', password: 'admin' },
      { brand: 'Grandstream', model: 'GWN7660 (Wi-Fi 6 Ceiling AP)', protocol: 'HTTPS', ip: '192.168.80.1', username: 'admin', password: 'Printed on sticker' }
    ],
    guide: [
      'Connect PC to Grandstream GWN LAN port.',
      'Open https://192.168.80.1 or https://gwn.local.',
      'Enter Username: admin and Password printed on device sticker.',
      'Configure GWN Cloud management or local controller settings.'
    ]
  },
  {
    name: 'Hitron',
    slug: 'hitron',
    defaultIp: '192.168.0.1',
    defaultUser: 'cusadmin',
    defaultPass: 'password / highspeed',
    description: 'Default logins and DOCSIS 3.1 Gigabit gateway configuration for Hitron CODA and CGNM cable modems.',
    models: [
      { brand: 'Hitron', model: 'CODA-4582 (DOCSIS 3.1 Gigabit Gateway)', protocol: 'HTTP', ip: '192.168.0.1', username: 'cusadmin', password: 'password' },
      { brand: 'Hitron', model: 'CODA-56 (Multi-Gigabit DOCSIS 3.1 Modem)', protocol: 'HTTP', ip: '192.168.100.1', username: 'cusadmin', password: 'password' },
      { brand: 'Hitron', model: 'CGNM-2250 (Dual-Band AC Gateway)', protocol: 'HTTP', ip: '192.168.0.1', username: 'cusadmin', password: 'password' }
    ],
    guide: [
      'Connect PC to Hitron cable modem via Ethernet.',
      'Open http://192.168.0.1 in browser.',
      'Enter Username: cusadmin and Password: password (or passphrase on sticker).'
    ]
  },
  {
    name: 'Huawei',
    slug: 'huawei',
    defaultIp: '192.168.1.1 / 192.168.100.1 / 192.168.8.1 / 192.168.3.1',
    defaultUser: 'admin / telecomadmin',
    defaultPass: 'admin / admintelecom',
    description: 'Default credentials for Huawei HG8145V5, EchoLife ONT, and 4G/5G CPE routers.',
    models: [
      { brand: 'Huawei', model: 'EchoLife HG8145V5 / HG8245H', protocol: 'HTTP', ip: '192.168.100.1', username: 'telecomadmin', password: 'admintelecom' },
      { brand: 'Huawei', model: 'WiFi AX3 / AX3 Pro', protocol: 'HTTP', ip: '192.168.3.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Huawei', model: '4G Router B310 / B315 / B535', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'admin' },
      { brand: 'Huawei', model: '5G CPE Pro 2 (H122-373)', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Huawei WiFi or LAN.',
      'Open http://192.168.100.1 or http://192.168.8.1.',
      'Log in with admin credentials.'
    ]
  },
  {
    name: 'Humax',
    slug: 'humax',
    defaultIp: '192.168.0.1 / 192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'password / 1234',
    description: 'Default credentials and setup guides for Humax Quantum Wi-Fi routers, cable modems, and FTTH gateways.',
    models: [
      { brand: 'Humax', model: 'Quantum T9 (AC2400 Dual Band Router)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' },
      { brand: 'Humax', model: 'HG100R (DOCSIS 3.0 Cable Gateway)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' },
      { brand: 'Humax', model: 'BG-1000 (Gigabit FTTH Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: '1234' }
    ],
    guide: [
      'Connect to Humax Wi-Fi or LAN port.',
      'Open http://192.168.0.1 in your browser.',
      'Log in with Username: admin and Password: password.'
    ]
  },
  {
    name: 'Juniper',
    slug: 'juniper',
    defaultIp: '192.168.1.1',
    defaultUser: 'root',
    defaultPass: '(blank)',
    description: 'Default logins, J-Web browser management, and Junos OS setup for Juniper SRX series security gateways.',
    models: [
      { brand: 'Juniper', model: 'SRX300 (Enterprise Branch Gateway)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'root', password: '(blank)' },
      { brand: 'Juniper', model: 'SRX320 (Secure Router with LTE)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'root', password: '(blank)' },
      { brand: 'Juniper', model: 'SRX340 / SRX550 Services Gateway', protocol: 'HTTPS', ip: '192.168.1.1', username: 'root', password: '(blank)' }
    ],
    guide: [
      'Connect PC to Juniper ge-0/0/0 port.',
      'Open https://192.168.1.1 in your browser to launch J-Web.',
      'Log in with Username: root and leave Password empty.'
    ]
  },
  {
    name: 'Keenetic',
    slug: 'keenetic',
    defaultIp: '192.168.1.1 / 192.168.18.1',
    defaultUser: 'admin',
    defaultPass: 'admin / (setup password)',
    description: 'Default login credentials, KeeneticOS setup, and multi-WAN configuration for Keenetic Titan, Hero, and Hopper routers.',
    models: [
      { brand: 'Keenetic', model: 'Keenetic Titan (KN-1811 AX3200 Wi-Fi 6)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Keenetic', model: 'Keenetic Hero (KN-1011 AX1800 Gigabit)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Keenetic', model: 'Keenetic Hopper (KN-3810 AX1800 Dual Band)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Keenetic', model: 'Keenetic Carrier (KN-1711 AC1200 Mesh)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' }
    ],
    guide: [
      'Connect to the Keenetic Wi-Fi network or Ethernet LAN port.',
      'Open http://192.168.1.1 or http://keenetic.net in your browser.',
      'Follow the KeeneticOS initial setup wizard to configure the administrator password.',
      'Enable Multi-WAN failover, Mesh Wi-Fi system, and cloud remote access.'
    ]
  },
  {
    name: 'Linksys',
    slug: 'linksys',
    defaultIp: '192.168.1.1 / myrouter.local',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default passwords and setup instructions for Linksys Velop Pro 7, Hydra, and MR series routers.',
    models: [
      { brand: 'Linksys', model: 'Velop Pro 7 (Wi-Fi 7 Mesh MBE7000)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Linksys', model: 'Hydra Pro 6E (MR7500)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Linksys', model: 'Velop WHW0301 / MX4200 (Mesh)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Linksys', model: 'Hydra Pro 6 / MR7350', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Linksys', model: 'WRT54G / WRT1900AC / WRT3200ACM', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Linksys', model: 'E1200 / E2500 / EA6900', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Linksys WiFi or LAN port.',
      'Visit http://192.168.1.1 or http://myrouter.local.',
      'Enter username: admin and password: admin.'
    ]
  },
  {
    name: 'Mercusys',
    slug: 'mercusys',
    defaultIp: '192.168.1.1 / 192.168.0.1 / mwlogin.net',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default passwords and setup guides for Mercusys Wi-Fi 6 routers, Halo Mesh systems, and wireless range extenders.',
    models: [
      { brand: 'Mercusys', model: 'MR80X (AX3000 Wi-Fi 6)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Mercusys', model: 'MR50G (AC1900 Dual Band)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Mercusys', model: 'Halo H80X / H50G (Whole Home Mesh)', protocol: 'MERCUSYS App', ip: '192.168.68.1', username: 'admin', password: 'admin' },
      { brand: 'Mercusys', model: 'MW305R / MW325R', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to your Mercusys Wi-Fi or Ethernet cable.',
      'Open http://mwlogin.net or http://192.168.1.1 in your browser.',
      'Create or enter your admin password to access the management interface.',
      'Configure wireless security and internet connection parameters.'
    ]
  },
  {
    name: 'MikroTik',
    slug: 'mikrotik',
    defaultIp: '192.168.88.1',
    defaultUser: 'admin',
    defaultPass: '(blank)',
    description: 'Default credentials and WinBox connection guide for MikroTik RouterBOARD and hAP series.',
    models: [
      { brand: 'MikroTik', model: 'hAP ac2 / ac3 / ax2 / ax3', protocol: 'HTTP / WinBox', ip: '192.168.88.1', username: 'admin', password: '(blank)' },
      { brand: 'MikroTik', model: 'RouterBOARD RB750 / RB3011 / RB4011', protocol: 'WinBox / SSH', ip: '192.168.88.1', username: 'admin', password: '(blank)' },
      { brand: 'MikroTik', model: 'Cloud Core Router (CCR2004 / CCR2116)', protocol: 'WebFig / SSH', ip: '192.168.88.1', username: 'admin', password: '(blank)' },
      { brand: 'MikroTik', model: 'Chateau 5G / LTE12', protocol: 'HTTP / WinBox', ip: '192.168.88.1', username: 'admin', password: '(blank)' }
    ],
    guide: [
      'Connect PC to Ether2 (LAN) port.',
      'Open http://192.168.88.1 or connect via WinBox application.',
      'Login with username: admin, password: (blank).'
    ]
  },
  {
    name: 'MitraStar',
    slug: 'mitrastar',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin / 1234',
    defaultPass: '1234 / Printed on sticker',
    description: 'Default logins and setup instructions for MitraStar GPT and HGW series FTTH optical routers.',
    models: [
      { brand: 'MitraStar', model: 'GPT-2541GNAC (HGU Fibra Movistar)', protocol: 'HTTP', ip: '192.168.1.1', username: '1234', password: 'Printed on sticker' },
      { brand: 'MitraStar', model: 'HGW-2501GN-R2 (Dual Band GPON Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to MitraStar ONT Wi-Fi.',
      'Open http://192.168.1.1 in browser.',
      'Enter credentials printed on the base barcode label.'
    ]
  },
  {
    name: 'Motorola',
    slug: 'motorola',
    defaultIp: '192.168.0.1 / 192.168.100.1',
    defaultUser: 'admin',
    defaultPass: 'motorola',
    description: 'Default login passwords and setup instructions for Motorola MG series DOCSIS cable modem routers and MB standalone modems.',
    models: [
      { brand: 'Motorola', model: 'MG8702 (DOCSIS 3.1 AC3200 Modem + Wi-Fi)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'motorola' },
      { brand: 'Motorola', model: 'MG7700 (DOCSIS 3.0 AC1900 Gigabit Gateway)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'motorola' },
      { brand: 'Motorola', model: 'MB8611 (Multi-Gigabit DOCSIS 3.1 Modem)', protocol: 'HTTP', ip: '192.168.100.1', username: 'admin', password: 'motorola' },
      { brand: 'Motorola', model: 'MT7711 (2-in-1 Cable Modem + Voice Gateway)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'motorola' },
      { brand: 'Motorola', model: 'MH7022 (Whole Home Mesh Wi-Fi System)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'motorola' }
    ],
    guide: [
      'Connect your computer to the Motorola cable modem router via Ethernet cable.',
      'Open http://192.168.0.1 or http://192.168.100.1 in your browser.',
      'Enter Username: admin and Password: motorola (or check rear label).',
      'Configure Wi-Fi SSID, security passphrases, and check downstream coaxial signal levels.'
    ]
  },
  {
    name: 'Netgear',
    slug: 'netgear',
    defaultIp: '192.168.1.1 / routerlogin.net',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Default passwords and setup instructions for Netgear Nighthawk Wi-Fi 7, Orbi Quad-Band Mesh, and RAX series routers.',
    models: [
      { brand: 'Netgear', model: 'Nighthawk RS700S (Wi-Fi 7 BE19000)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Netgear', model: 'Orbi 970 Series (RBE973 Wi-Fi 7 Mesh)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Netgear', model: 'Nighthawk RAXE500 (Wi-Fi 6E Tri-Band)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Netgear', model: 'Nighthawk R7000 / RAX40 / RAX80', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Netgear', model: 'Orbi RBK50 / RBK750 / RBK850', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Netgear', model: 'WNR2000 / JWNR2010', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Netgear', model: 'NightHawk Pro Gaming XR500 / XR1000', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'password' }
    ],
    guide: [
      'Connect your device to your Netgear router WiFi.',
      'Open http://routerlogin.net or http://192.168.1.1 in a browser.',
      'Enter username: admin and password: password.',
      'Use the Genie or Nighthawk dashboard to manage your network settings.'
    ]
  },
  {
    name: 'Netlink',
    slug: 'netlink',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / stdONUi0i$',
    description: 'Default logins and FTTH GPON/EPON configuration instructions for Netlink optical network terminals.',
    models: [
      { brand: 'Netlink', model: 'HG323RGW (GPON ONT + Wi-Fi)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Netlink', model: 'V2801SG (1GE EPON/GPON ONT)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'stdONUi0i$' },
      { brand: 'Netlink', model: 'HG326x Dual Band Gigabit ONT', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect PC to Netlink ONT via LAN cable.',
      'Open http://192.168.1.1 in your browser.',
      'Log in with admin / admin (or stdONUi0i$ for superadmin).',
      'Configure PPPoE credentials and optical VLAN tags.'
    ]
  },
  {
    name: 'Nokia',
    slug: 'nokia',
    defaultIp: '192.168.1.1 / 192.168.18.1 / 192.168.12.1',
    defaultUser: 'AdminGPON / admin',
    defaultPass: 'ALC#FBRG@H / admin',
    description: 'Default passwords, GPON settings, and Wi-Fi configuration guides for Nokia optical ONT gateways and Nokia WiFi Beacons.',
    models: [
      { brand: 'Nokia', model: 'G-2425G-A (Dual Band GPON ONT)', protocol: 'HTTP', ip: '192.168.18.1', username: 'AdminGPON', password: 'ALC#FBRG@H' },
      { brand: 'Nokia', model: 'Nokia 5G21 (T-Mobile 5G Home Gateway)', protocol: 'HTTP', ip: '192.168.12.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Nokia', model: 'G-140W-ME (GPON Optical Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Nokia', model: 'Nokia WiFi Beacon 6 (Wi-Fi 6 Mesh)', protocol: 'Nokia WiFi App', ip: '192.168.1.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Nokia', model: 'Nokia WiFi Beacon 1 / Beacon 2', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'Printed on sticker' }
    ],
    guide: [
      'Connect to Nokia ONT Wi-Fi or plug into LAN 1.',
      'Open http://192.168.18.1 or http://192.168.1.1 in browser.',
      'Enter Username: AdminGPON and Password: ALC#FBRG@H (or check provider sticker).',
      'Access optical status, port forwarding, and 2.4/5GHz Wi-Fi controls.'
    ]
  },
  {
    name: 'Optilink',
    slug: 'optilink',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / stdONUi0i$',
    description: 'Default logins and FTTH XPON ONT configuration for Optilink broadband optical network terminals.',
    models: [
      { brand: 'Optilink', model: 'OP-XONT 71110 (XPON ONT 1GE+1FE+Wi-Fi)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Optilink', model: 'OP-GONT 71100 (Single Port GPON ONT)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'stdONUi0i$' },
      { brand: 'Optilink', model: 'OP-XONT 71000 (Dual Band Gigabit XPON)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect PC to Optilink ONT via Ethernet.',
      'Open http://192.168.1.1 in your browser.',
      'Log in with Username: admin and Password: admin (or stdONUi0i$).',
      'Set up PPPoE WAN connection and Wi-Fi security keys.'
    ]
  },
  {
    name: 'Palo Alto',
    slug: 'palo-alto',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default credentials, PAN-OS web interface, and provisioning guide for Palo Alto PA-series Next-Generation Firewalls.',
    models: [
      { brand: 'Palo Alto', model: 'PA-440 / PA-460 Next-Gen Firewall', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Palo Alto', model: 'PA-220 (Branch Security Appliance)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Palo Alto', model: 'PA-850 Enterprise Security Gateway', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect PC to Palo Alto MGT port via Ethernet.',
      'Set static IP 192.168.1.2 on PC adapter.',
      'Open https://192.168.1.1 in browser and log in with admin / admin.'
    ]
  },
  {
    name: 'Ruijie (Reyee)',
    slug: 'ruijie-reyee',
    defaultIp: '192.168.110.1',
    defaultUser: 'admin',
    defaultPass: 'admin / (setup password)',
    description: 'Default IP credentials, ReyeeOS cloud dashboard setup, and Wi-Fi 6 mesh instructions for Ruijie Reyee routers.',
    models: [
      { brand: 'Ruijie (Reyee)', model: 'Reyee RG-EW3200GX PRO (Wi-Fi 6 Mesh)', protocol: 'HTTP', ip: '192.168.110.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Ruijie (Reyee)', model: 'Reyee RG-EW1200G PRO (Gigabit Smart Router)', protocol: 'HTTP', ip: '192.168.110.1', username: 'admin', password: 'admin' },
      { brand: 'Ruijie (Reyee)', model: 'Reyee RG-E5 (Wi-Fi 6 AX3200 Whole Home)', protocol: 'HTTP', ip: '192.168.110.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Ruijie (Reyee)', model: 'Ruijie RG-EG105G-P (Cloud PoE Gateway)', protocol: 'HTTP', ip: '192.168.110.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Reyee Wi-Fi (Reyee-sXXXX) or LAN port.',
      'Open http://192.168.110.1 in your web browser.',
      'Create administrator credentials and configure Wi-Fi SSIDs.',
      'Connect to Ruijie Cloud app for mobile remote management.'
    ]
  },
  {
    name: 'Sagemcom',
    slug: 'sagemcom',
    defaultIp: '192.168.1.1 / 192.168.12.1',
    defaultUser: 'admin',
    defaultPass: 'admin / printed on sticker',
    description: 'Default passwords and gateway management for Sagemcom FAST series fiber and 5G cellular modems.',
    models: [
      { brand: 'Sagemcom', model: 'FAST 5688W (T-Mobile 5G Home Gateway)', protocol: 'HTTP', ip: '192.168.12.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Sagemcom', model: 'FAST 5260 / 5370', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Sagemcom', model: 'FAST 5655 / 5670 FTTH', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Sagemcom gateway.',
      'Open http://192.168.1.1 or http://192.168.12.1 in browser.',
      'Login with credentials from the rear sticker.'
    ]
  },
  {
    name: 'Sercomm',
    slug: 'sercomm',
    defaultIp: '192.168.1.1 / 192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'admin / Printed on sticker',
    description: 'Default credentials, ONT configuration, and router setup for Sercomm FTTH gateways and Vodafone Station modems.',
    models: [
      { brand: 'Sercomm', model: 'Sercomm FG1000 (GPON Wi-Fi 6 Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Sercomm', model: 'Sercomm H500-s (Vodafone Wi-Fi Hub)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'Vodafone password' },
      { brand: 'Sercomm', model: 'Speedport Smart (Telekom Fiber Gateway)', protocol: 'HTTP', ip: '192.168.2.1', username: 'admin', password: 'Printed on sticker' }
    ],
    guide: [
      'Connect to Sercomm Wi-Fi or LAN.',
      'Open http://192.168.1.1 in browser.',
      'Enter credentials from rear label.'
    ]
  },
  {
    name: 'SonicWall',
    slug: 'sonicwall',
    defaultIp: '192.168.168.168',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Default credentials, SonicOS management, and provisioning guide for SonicWall TZ and NSA series firewalls.',
    models: [
      { brand: 'SonicWall', model: 'SonicWall TZ270 (Next-Gen Firewall Router)', protocol: 'HTTPS', ip: '192.168.168.168', username: 'admin', password: 'password' },
      { brand: 'SonicWall', model: 'SonicWall TZ370 (Multi-Gigabit Firewall)', protocol: 'HTTPS', ip: '192.168.168.168', username: 'admin', password: 'password' },
      { brand: 'SonicWall', model: 'SonicWall TZ470 / TZ570 (SD-WAN Gateway)', protocol: 'HTTPS', ip: '192.168.168.168', username: 'admin', password: 'password' }
    ],
    guide: [
      'Connect your PC to SonicWall X0 (LAN) port.',
      'Assign static IP 192.168.168.200 to your computer.',
      'Open https://192.168.168.168 in your browser.',
      'Enter Username: admin and Password: password to access SonicOS.'
    ]
  },
  {
    name: 'Sophos',
    slug: 'sophos',
    defaultIp: '172.16.16.16',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default logins and WebAdmin setup for Sophos XGS Next-Generation Firewalls and security appliances.',
    models: [
      { brand: 'Sophos', model: 'Sophos XGS 87 / 87w (Firewall with Wi-Fi)', protocol: 'HTTPS', ip: '172.16.16.16', username: 'admin', password: 'admin' },
      { brand: 'Sophos', model: 'Sophos XGS 107 / 107w (Hardware Firewall)', protocol: 'HTTPS', ip: '172.16.16.16', username: 'admin', password: 'admin' },
      { brand: 'Sophos', model: 'Sophos XGS 116 (Business Security Gateway)', protocol: 'HTTPS', ip: '172.16.16.16', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect your PC to Sophos Port 1 (LAN).',
      'Set static IP 172.16.16.100 on your PC adapter.',
      'Navigate to https://172.16.16.16:4444 in your web browser.',
      'Log in with Username: admin and Password: admin.'
    ]
  },
  {
    name: 'Synology',
    slug: 'synology',
    defaultIp: '192.168.1.1 / router.synology.com',
    defaultUser: 'admin',
    defaultPass: 'admin / (setup password)',
    description: 'Synology Router Manager (SRM) login instructions for RT2600ac, RT6600ax, and WRX560.',
    models: [
      { brand: 'Synology', model: 'RT6600ax / RT2600ac', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Synology', model: 'WRX560 (Mesh Router)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' }
    ],
    guide: [
      'Connect to Synology router network.',
      'Visit http://router.synology.com or http://192.168.1.1.',
      'Follow Synology SRM setup wizard.'
    ]
  },
  {
    name: 'Syrotech',
    slug: 'syrotech',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / stdONUi0i$',
    description: 'Default logins and FTTH GPON/EPON ONT setup instructions for Syrotech fiber optic routers.',
    models: [
      { brand: 'Syrotech', model: 'SY-GPON-1110-WDONT (Wi-Fi GPON ONT)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Syrotech', model: 'SY-GPON-2020-WADONT (Dual Band)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Syrotech', model: 'SY-ROUTER-1200 Gigabit Dual Band', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect your PC to Syrotech ONT via Ethernet cable.',
      'Visit http://192.168.1.1 in your web browser.',
      'Log in with Username: admin and Password: admin (or stdONUi0i$).',
      'Set up PPPoE Internet account, VLAN ID, and Wi-Fi security.'
    ]
  },
  {
    name: 'Technicolor',
    slug: 'technicolor',
    defaultIp: '192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'admin / (serial number)',
    description: 'Default settings and login portals for Technicolor TG and DGA series gateway modems.',
    models: [
      { brand: 'Technicolor', model: 'TG588v v2 / TG589vn', protocol: 'HTTP', ip: '192.168.1.254', username: 'admin', password: 'admin' },
      { brand: 'Technicolor', model: 'DGA0122 / DGA4130', protocol: 'HTTP', ip: '192.168.1.254', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Technicolor gateway.',
      'Open http://192.168.1.254 in browser.',
      'Login with username: admin and password: admin.'
    ]
  },
  {
    name: 'Teltonika',
    slug: 'teltonika',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin01',
    description: 'Default credentials, RutOS configuration, and industrial cellular gateway setup for Teltonika Networks RUT routers.',
    models: [
      { brand: 'Teltonika', model: 'RUTX50 (5G Dual SIM Industrial Router)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin01' },
      { brand: 'Teltonika', model: 'RUT240 / RUT241 (4G LTE Industrial IoT)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin01' },
      { brand: 'Teltonika', model: 'RUT950 / RUT955 (Dual-SIM 4G Enterprise)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin01' },
      { brand: 'Teltonika', model: 'RUTX11 (Gigabit Dual-Band Wi-Fi LTE-A)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin01' }
    ],
    guide: [
      'Connect to the Teltonika router LAN port or Wi-Fi (RUTXXXX).',
      'Open https://192.168.1.1 in your browser.',
      'Log in with Username: admin and Password: admin01.',
      'Follow RutOS wizard to configure APN, mobile data limit, and VPN tunnels.'
    ]
  },
  {
    name: 'Tenda',
    slug: 'tenda',
    defaultIp: '192.168.0.1 / tendawifi.com',
    defaultUser: 'admin',
    defaultPass: 'admin / (blank)',
    description: 'Setup guides and default login passwords for Tenda AC, Nova Mesh, and F-series routers.',
    models: [
      { brand: 'Tenda', model: 'AC10 / AC19 / AC23', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'Tenda', model: 'Nova MW3 / MW6 / MW12 (Mesh)', protocol: 'HTTP', ip: '192.168.5.1', username: 'admin', password: 'admin' },
      { brand: 'Tenda', model: 'Tenda F3 / F9', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: '(blank)' },
      { brand: 'Tenda', model: 'TX3 / TX9 Pro (WiFi 6)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to your Tenda router WiFi network.',
      'Open http://tendawifi.com or http://192.168.0.1.',
      'Enter admin as the password (or leave blank if prompted on first boot).'
    ]
  },
  {
    name: 'Totolink',
    slug: 'totolink',
    defaultIp: '192.168.0.1 / itotolink.net',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default logins and setup instructions for Totolink Wi-Fi 6 routers, range extenders, and wireless gateways.',
    models: [
      { brand: 'Totolink', model: 'Totolink X5000R (AX1800 Dual Band Wi-Fi 6)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'Totolink', model: 'Totolink A3002RU (AC1200 Dual Band Gigabit)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'Totolink', model: 'Totolink N300RT (300Mbps Wireless N)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'Totolink', model: 'Totolink EX1200T (AC1200 Range Extender)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Totolink Wi-Fi (TOTOLINK_XXXX).',
      'Open http://itotolink.net or http://192.168.0.1 in browser.',
      'Enter default password: admin.',
      'Complete the Easy Setup wizard to configure internet access.'
    ]
  },
  {
    name: 'TP-Link',
    slug: 'tp-link',
    defaultIp: '192.168.1.1 / 192.168.0.1 / tplinkwifi.net',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Complete default login credentials and setup guides for TP-Link Archer Wi-Fi 7, Deco Mesh, and WR series routers.',
    models: [
      { brand: 'TP-Link', model: 'Archer BE800 / BE900 (Wi-Fi 7)', protocol: 'HTTPS', ip: '192.168.0.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'TP-Link', model: 'Archer AXE75 / AXE95 (Wi-Fi 6E)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'TP-Link', model: 'Deco XE75 / BE85 (Wi-Fi 6E/7 Mesh)', protocol: 'Tether App', ip: '192.168.68.1', username: 'TP-Link ID', password: 'Cloud Password' },
      { brand: 'TP-Link', model: 'Archer AX10 / AX20 / AX50 / AX73', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'TP-Link', model: 'Archer C6 / C7 / C80 / A6', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'TP-Link', model: 'TL-WR841N / TL-WR845N / TL-WR940N', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'TP-Link', model: 'Deco M4 / M5 / X20 / X50 (Mesh)', protocol: 'Tether App', ip: '192.168.68.1', username: 'TP-Link ID', password: 'Cloud Password' },
      { brand: 'TP-Link', model: 'TD-W8961N / TD-W9970 (ADSL/VDSL)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to the TP-Link WiFi or plug in via LAN cable.',
      'Open a browser and navigate to http://tplinkwifi.net or http://192.168.0.1.',
      'Enter the default username and password (admin / admin).',
      'Go to Wireless -> Wireless Settings to configure your SSID and WPA2/WPA3 password.'
    ]
  },
  {
    name: 'TRENDnet',
    slug: 'trendnet',
    defaultIp: '192.168.10.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default logins, setup instructions, and firmware management for TRENDnet TEW wireless AC and N routers.',
    models: [
      { brand: 'TRENDnet', model: 'TEW-827DRU (AC2600 StreamBoost)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'TRENDnet', model: 'TEW-831DR (AC1200 Dual Band)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'TRENDnet', model: 'TEW-731BR (N300 Wireless Router)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to TRENDnet router Wi-Fi or LAN port.',
      'Open http://192.168.10.1 in your browser.',
      'Enter Username: admin and Password: admin.',
      'Complete the setup wizard for internet and wireless security.'
    ]
  },
  {
    name: 'Ubiquiti',
    slug: 'ubiquiti',
    defaultIp: '192.168.1.1',
    defaultUser: 'ubnt / root',
    defaultPass: 'ubnt',
    description: 'Default credentials for UniFi Dream Machine, EdgeRouter, and airMAX devices.',
    models: [
      { brand: 'Ubiquiti', model: 'UniFi Dream Machine (UDM / UDM Pro / SE)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'root / ui.com account', password: 'ubnt' },
      { brand: 'Ubiquiti', model: 'UniFi Express (UX Cloud Gateway)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'root / ui.com account', password: 'ubnt' },
      { brand: 'Ubiquiti', model: 'EdgeRouter X / Lite / 4 / 6P', protocol: 'HTTPS', ip: '192.168.1.1', username: 'ubnt', password: 'ubnt' },
      { brand: 'Ubiquiti', model: 'NanoStation / LiteBeam (airMAX)', protocol: 'HTTPS', ip: '192.168.1.20', username: 'ubnt', password: 'ubnt' }
    ],
    guide: [
      'Connect PC to eth0 or eth1.',
      'Navigate to https://192.168.1.1 in your browser.',
      'Log in with username: ubnt and password: ubnt.'
    ]
  },
  {
    name: 'Vantiva',
    slug: 'vantiva',
    defaultIp: '192.168.1.1 / 192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'admin / (serial number)',
    description: 'Default credentials and gateway configuration for Vantiva 5G gateways, Falcon Wi-Fi 6E, and SmartView broadband hubs.',
    models: [
      { brand: 'Vantiva', model: 'Cobra 5G Gateway (Sub-6 & mmWave)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Vantiva', model: 'Falcon Wi-Fi 6E Broadband Gateway', protocol: 'HTTPS', ip: '192.168.1.254', username: 'admin', password: 'admin' },
      { brand: 'Vantiva', model: 'SmartView FTTH Gigabit Optical Hub', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Vantiva Wi-Fi or LAN port.',
      'Open http://192.168.1.1 or http://192.168.1.254 in your browser.',
      'Log in with Username: admin and Password found on product label.'
    ]
  },
  {
    name: 'WatchGuard',
    slug: 'watchguard',
    defaultIp: '10.0.1.1',
    defaultUser: 'admin',
    defaultPass: 'readwrite',
    description: 'Default logins, Web UI configuration on port 8080, and Fireware OS setup for WatchGuard Firebox security appliances.',
    models: [
      { brand: 'WatchGuard', model: 'Firebox T20 / T25 (Desktop UTM Firewall)', protocol: 'HTTPS', ip: '10.0.1.1', username: 'admin', password: 'readwrite' },
      { brand: 'WatchGuard', model: 'Firebox T40 / T45 (High-Performance Branch)', protocol: 'HTTPS', ip: '10.0.1.1', username: 'admin', password: 'readwrite' },
      { brand: 'WatchGuard', model: 'Firebox T80 / T85 (Multi-Gigabit Firewall)', protocol: 'HTTPS', ip: '10.0.1.1', username: 'admin', password: 'readwrite' },
      { brand: 'WatchGuard', model: 'Firebox M270 / M370 (Rackmount Appliance)', protocol: 'HTTPS', ip: '10.0.1.1', username: 'admin', password: 'readwrite' }
    ],
    guide: [
      'Connect PC to Firebox Interface 1 (Trusted).',
      'Set static IP 10.0.1.2 on PC.',
      'Open https://10.0.1.1:8080 in browser.',
      'Log in with Username: admin and Password: readwrite (status user: readonly).'
    ]
  },
  {
    name: 'Wavlink',
    slug: 'wavlink',
    defaultIp: '192.168.10.1 / wifi.wavlink.com',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default passwords and setup instructions for Wavlink high-power outdoor APs, Halo mesh, and quantum range extenders.',
    models: [
      { brand: 'Wavlink', model: 'Aerial HD4 (High Power Outdoor AP/Repeater)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'Wavlink', model: 'Halo Base AC1200 Whole Home Mesh', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'Wavlink', model: 'Quantum D4G AC1200 Gigabit Router', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Wavlink Wi-Fi (WAVLINK-N / WAVLINK-AC).',
      'Open http://wifi.wavlink.com or http://192.168.10.1 in browser.',
      'Enter default password "admin" to launch setup.'
    ]
  },
  {
    name: 'Xiaomi',
    slug: 'xiaomi',
    defaultIp: '192.168.31.1 / miwifi.com',
    defaultUser: 'admin',
    defaultPass: 'Set during initial setup',
    description: 'Default IP logins, MiWiFi dashboard setup, and firmware configuration for Xiaomi and Redmi AX-series routers.',
    models: [
      { brand: 'Xiaomi', model: 'Mi AIoT Router AX3600 (Wi-Fi 6)', protocol: 'HTTP', ip: '192.168.31.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Xiaomi', model: 'Xiaomi Router AX6000', protocol: 'HTTP', ip: '192.168.31.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Xiaomi', model: 'Xiaomi Router AX3000 / AX3200', protocol: 'HTTP', ip: '192.168.31.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Xiaomi', model: 'Redmi Gaming Router AX5400', protocol: 'HTTP', ip: '192.168.31.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Xiaomi', model: 'Mi Router 4A Gigabit Edition', protocol: 'HTTP', ip: '192.168.31.1', username: 'admin', password: 'Set during initial setup' }
    ],
    guide: [
      'Connect to the Xiaomi / Redmi default Wi-Fi network.',
      'Open http://miwifi.com or http://192.168.31.1 in your browser.',
      'Follow the on-screen wizard to create an admin password and configure Wi-Fi SSID.',
      'Use the MiWiFi or Mi Home mobile app for remote management and Mesh networking.'
    ]
  },
  {
    name: 'ZTE',
    slug: 'zte',
    defaultIp: '192.168.1.1 / 192.168.0.1 / 192.168.8.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default login credentials for ZTE ZXHN ONT and 4G/5G wireless routers.',
    models: [
      { brand: 'ZTE', model: 'ZXHN F660 / F670 / F680 FTTH', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ZTE', model: 'MF283 / MF286 (4G LTE Router)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'ZTE', model: 'MU5001 / MC801A (5G Indoor CPE)', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to ZTE router network.',
      'Visit http://192.168.1.1 in browser.',
      'Log in with username: admin and password: admin.'
    ]
  },
  {
    name: 'ZyXEL',
    slug: 'zyxel',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: '1234 / admin',
    description: 'Default logins for ZyXEL prestige, Armor, and USG security routers.',
    models: [
      { brand: 'ZyXEL', model: 'Armor G1 / G5 (AX6000)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: '1234' },
      { brand: 'ZyXEL', model: 'VMG3925 / VMG8825', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: '1234' },
      { brand: 'ZyXEL', model: 'USG FLEX 100 / 200 (Firewall)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: '1234' }
    ],
    guide: [
      'Connect to ZyXEL router LAN port.',
      'Open http://192.168.1.1 in your browser.',
      'Enter username: admin and password: 1234.'
    ]
  }
,
  {
    name: 'Google',
    slug: 'google',
    defaultIp: '192.168.86.1',
    defaultUser: 'admin',
    defaultPass: 'Google Account',
    description: 'Default login credentials, admin IP addresses, and setup guides for Google routers.',
    models: [
      {
            "brand": "Google",
            "model": "Nest Wifi Pro (Wi-Fi 6E)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.86.1",
            "username": "admin",
            "password": "Google Account"
      },
      {
            "brand": "Google",
            "model": "Nest Wifi Router",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.86.1",
            "username": "admin",
            "password": "Google Account"
      },
      {
            "brand": "Google",
            "model": "Google Wifi Router",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.86.1",
            "username": "admin",
            "password": "Google Account"
      }
],
    guide: [
      "Connect to your Google router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.86.1 in your web browser.",
      "Log in with Username: admin and Password: Google Account.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Amazon Eero',
    slug: 'amazon-eero',
    defaultIp: '192.168.4.1',
    defaultUser: 'admin',
    defaultPass: 'Amazon / eero App',
    description: 'Default login credentials, admin IP addresses, and setup guides for Amazon Eero routers.',
    models: [
      {
            "brand": "Amazon Eero",
            "model": "eero Max 7",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.4.1",
            "username": "admin",
            "password": "Amazon / eero App"
      },
      {
            "brand": "Amazon Eero",
            "model": "eero Pro 6E",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.4.1",
            "username": "admin",
            "password": "Amazon / eero App"
      },
      {
            "brand": "Amazon Eero",
            "model": "eero Pro 6",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.4.1",
            "username": "admin",
            "password": "Amazon / eero App"
      },
      {
            "brand": "Amazon Eero",
            "model": "eero 6+",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.4.1",
            "username": "admin",
            "password": "Amazon / eero App"
      },
      {
            "brand": "Amazon Eero",
            "model": "eero PoE Gateway",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.4.1",
            "username": "admin",
            "password": "Amazon / eero App"
      }
],
    guide: [
      "Connect to your Amazon Eero router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.4.1 in your web browser.",
      "Log in with Username: admin and Password: Amazon / eero App.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'GL.iNet',
    slug: 'glinet',
    defaultIp: '192.168.8.1',
    defaultUser: 'root',
    defaultPass: 'Set during setup',
    description: 'Default login credentials, admin IP addresses, and setup guides for GL.iNet routers.',
    models: [
      {
            "brand": "GL.iNet",
            "model": "Flint 2 (GL-MT6000)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.8.1",
            "username": "root",
            "password": "Set during setup"
      },
      {
            "brand": "GL.iNet",
            "model": "Flint (GL-AX1800)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.8.1",
            "username": "root",
            "password": "Set during setup"
      },
      {
            "brand": "GL.iNet",
            "model": "Beryl AX (GL-MT3000)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.8.1",
            "username": "root",
            "password": "Set during setup"
      },
      {
            "brand": "GL.iNet",
            "model": "Slate AX (GL-AXT1800)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.8.1",
            "username": "root",
            "password": "Set during setup"
      },
      {
            "brand": "GL.iNet",
            "model": "Spitz AX (GL-X3000)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.8.1",
            "username": "root",
            "password": "Set during setup"
      }
],
    guide: [
      "Connect to your GL.iNet router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.8.1 in your web browser.",
      "Log in with Username: root and Password: Set during setup.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Peplink',
    slug: 'peplink',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default login credentials, admin IP addresses, and setup guides for Peplink routers.',
    models: [
      {
            "brand": "Peplink",
            "model": "Balance Two",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "admin"
      },
      {
            "brand": "Peplink",
            "model": "Balance 20X",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "admin"
      },
      {
            "brand": "Peplink",
            "model": "MAX BR1 Pro 5G",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.50.1",
            "username": "admin",
            "password": "admin"
      },
      {
            "brand": "Peplink",
            "model": "MAX Transit Duo",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.50.1",
            "username": "admin",
            "password": "admin"
      },
      {
            "brand": "Peplink",
            "model": "Balance 380",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "admin"
      }
],
    guide: [
      "Connect to your Peplink router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.1.1 in your web browser.",
      "Log in with Username: admin and Password: admin.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Netgate (pfSense)',
    slug: 'netgate',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'pfsense',
    description: 'Default login credentials, admin IP addresses, and setup guides for Netgate (pfSense) routers.',
    models: [
      {
            "brand": "Netgate (pfSense)",
            "model": "Netgate 1100 (SG-1100)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "pfsense"
      },
      {
            "brand": "Netgate (pfSense)",
            "model": "Netgate 2100 (SG-2100)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "pfsense"
      },
      {
            "brand": "Netgate (pfSense)",
            "model": "Netgate 4100",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "pfsense"
      },
      {
            "brand": "Netgate (pfSense)",
            "model": "Netgate 6100",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "pfsense"
      },
      {
            "brand": "Netgate (pfSense)",
            "model": "Netgate 8200",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "pfsense"
      }
],
    guide: [
      "Connect to your Netgate (pfSense) router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.1.1 in your web browser.",
      "Log in with Username: admin and Password: pfsense.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'OPNsense',
    slug: 'opnsense',
    defaultIp: '192.168.1.1',
    defaultUser: 'root',
    defaultPass: 'opnsense',
    description: 'OPNsense DEC appliance, firewall setup, default credentials, and WebGUI configuration guide.',
    models: [
      {
            "brand": "OPNsense",
            "model": "DEC675 OPNsense Desktop",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "root",
            "password": "opnsense"
      },
      {
            "brand": "OPNsense",
            "model": "DEC750 OPNsense Desktop",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "root",
            "password": "opnsense"
      },
      {
            "brand": "OPNsense",
            "model": "DEC850 OPNsense Rackmount",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "root",
            "password": "opnsense"
      }
],
    guide: [
      "Connect your computer to the LAN interface (Port 1).",
      "Open https://192.168.1.1 in your web browser.",
      "Log in with Username: root and Password: opnsense.",
      "Run through the initial setup wizard to configure WAN connection, DNS, and NTP servers."
]
  },
  {
    name: 'AVM (FRITZ!Box)',
    slug: 'avm',
    defaultIp: '192.168.178.1',
    defaultUser: 'admin',
    defaultPass: 'Printed on bottom sticker',
    description: 'Default login credentials, admin IP addresses, and setup guides for AVM (FRITZ!Box) routers.',
    models: [
      {
            "brand": "AVM (FRITZ!Box)",
            "model": "FRITZ!Box 7590 AX",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.178.1",
            "username": "admin",
            "password": "Printed on bottom sticker"
      },
      {
            "brand": "AVM (FRITZ!Box)",
            "model": "FRITZ!Box 7530 AX",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.178.1",
            "username": "admin",
            "password": "Printed on bottom sticker"
      },
      {
            "brand": "AVM (FRITZ!Box)",
            "model": "FRITZ!Box 5590 Fiber",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.178.1",
            "username": "admin",
            "password": "Printed on bottom sticker"
      },
      {
            "brand": "AVM (FRITZ!Box)",
            "model": "FRITZ!Box 6690 Cable",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.178.1",
            "username": "admin",
            "password": "Printed on bottom sticker"
      },
      {
            "brand": "AVM (FRITZ!Box)",
            "model": "FRITZ!Box 4060",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.178.1",
            "username": "admin",
            "password": "Printed on bottom sticker"
      }
],
    guide: [
      "Connect to your AVM (FRITZ!Box) router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.178.1 in your web browser.",
      "Log in with Username: admin and Password: Printed on bottom sticker.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'CenturyLink',
    slug: 'centurylink',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'Printed on sticker',
    description: 'Default login credentials, admin IP addresses, and setup guides for CenturyLink routers.',
    models: [
      {
            "brand": "CenturyLink",
            "model": "C4000XG (Wi-Fi 6 xPON)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.0.1",
            "username": "admin",
            "password": "Printed on sticker"
      },
      {
            "brand": "CenturyLink",
            "model": "C3000A (DSL & Fiber)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.0.1",
            "username": "admin",
            "password": "Printed on sticker"
      }
],
    guide: [
      "Connect to your CenturyLink router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.0.1 in your web browser.",
      "Log in with Username: admin and Password: Printed on sticker.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Xfinity (Comcast)',
    slug: 'xfinity',
    defaultIp: '10.0.0.1',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Default login credentials, admin IP addresses, and setup guides for Xfinity (Comcast) routers.',
    models: [
      {
            "brand": "Xfinity (Comcast)",
            "model": "Xfinity xFi Gateway (XB8)",
            "protocol": "HTTP/HTTPS",
            "ip": "10.0.0.1",
            "username": "admin",
            "password": "password"
      },
      {
            "brand": "Xfinity (Comcast)",
            "model": "Xfinity xFi Gateway (XB7)",
            "protocol": "HTTP/HTTPS",
            "ip": "10.0.0.1",
            "username": "admin",
            "password": "password"
      },
      {
            "brand": "Xfinity (Comcast)",
            "model": "Xfinity xFi Gateway (XB6)",
            "protocol": "HTTP/HTTPS",
            "ip": "10.0.0.1",
            "username": "admin",
            "password": "password"
      }
],
    guide: [
      "Connect to your Xfinity (Comcast) router via Wi-Fi or Ethernet cable.",
      "Open http://10.0.0.1 in your web browser.",
      "Log in with Username: admin and Password: password.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Spectrum (Charter)',
    slug: 'spectrum',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'My Spectrum App',
    description: 'Default login credentials, admin IP addresses, and setup guides for Spectrum (Charter) routers.',
    models: [
      {
            "brand": "Spectrum (Charter)",
            "model": "Spectrum WiFi 6 Router (SAX1V1K)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "My Spectrum App"
      },
      {
            "brand": "Spectrum (Charter)",
            "model": "Spectrum Wave 2 Router (RAC2V1S)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "admin"
      }
],
    guide: [
      "Connect to your Spectrum (Charter) router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.1.1 in your web browser.",
      "Log in with Username: admin and Password: My Spectrum App.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'BT (British Telecom)',
    slug: 'bt',
    defaultIp: '192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'Printed on pull-out card',
    description: 'Default login credentials, admin IP addresses, and setup guides for BT (British Telecom) routers.',
    models: [
      {
            "brand": "BT (British Telecom)",
            "model": "BT Smart Hub 2",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.254",
            "username": "admin",
            "password": "Printed on pull-out card"
      }
],
    guide: [
      "Connect to your BT (British Telecom) router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.1.254 in your web browser.",
      "Log in with Username: admin and Password: Printed on pull-out card.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Virgin Media',
    slug: 'virgin-media',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'Printed on base sticker',
    description: 'Default login credentials, admin IP addresses, and setup guides for Virgin Media routers.',
    models: [
      {
            "brand": "Virgin Media",
            "model": "Virgin Media Hub 5 (Wi-Fi 6)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.0.1",
            "username": "admin",
            "password": "Printed on base sticker"
      }
],
    guide: [
      "Connect to your Virgin Media router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.0.1 in your web browser.",
      "Log in with Username: admin and Password: Printed on base sticker.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Vodafone',
    slug: 'vodafone',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'Vodafone password on card',
    description: 'Default login credentials, admin IP addresses, and setup guides for Vodafone routers.',
    models: [
      {
            "brand": "Vodafone",
            "model": "Vodafone Ultra Hub (Wi-Fi 6E)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "Vodafone password on card"
      }
],
    guide: [
      "Connect to your Vodafone router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.1.1 in your web browser.",
      "Log in with Username: admin and Password: Vodafone password on card.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Bell Canada',
    slug: 'bell',
    defaultIp: '192.168.2.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default login credentials, admin IP addresses, and setup guides for Bell Canada routers.',
    models: [
      {
            "brand": "Bell Canada",
            "model": "Bell Giga Hub (Wi-Fi 6E)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.2.1",
            "username": "admin",
            "password": "admin"
      }
],
    guide: [
      "Connect to your Bell Canada router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.2.1 in your web browser.",
      "Log in with Username: admin and Password: admin.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Ruijie',
    slug: 'ruijie',
    defaultIp: '192.168.110.1',
    defaultUser: 'admin',
    defaultPass: 'admin / Set during setup',
    description: 'Default login credentials, admin IP addresses, and setup guides for Ruijie routers.',
    models: [
      {
            "brand": "Ruijie",
            "model": "Reyee RG-EW3200GX PRO",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.110.1",
            "username": "admin",
            "password": "admin / Set during setup"
      },
      {
            "brand": "Ruijie",
            "model": "Reyee RG-EG210G-E",
            "protocol": "HTTP/HTTPS / Reyee Cloud",
            "ip": "192.168.110.1",
            "username": "admin",
            "password": "admin"
      }
],
    guide: [
      "Connect to your Ruijie router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.110.1 in your web browser.",
      "Log in with Username: admin and Password: admin / Set during setup.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Cradlepoint',
    slug: 'cradlepoint',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'Printed on bottom label',
    description: 'Default credentials, NetCloud OS setup, and 5G cellular configuration for Cradlepoint E3000, E300, and IBR series gateways.',
    models: [
      {
            "brand": "Cradlepoint",
            "model": "Cradlepoint E3000 5G",
            "protocol": "HTTPS / NetCloud",
            "ip": "192.168.0.1",
            "username": "admin",
            "password": "Printed on bottom label"
      },
      {
            "brand": "Cradlepoint",
            "model": "Cradlepoint E300 5G",
            "protocol": "HTTPS / NetCloud",
            "ip": "192.168.0.1",
            "username": "admin",
            "password": "Printed on bottom label"
      }
],
    guide: [
      "Connect your laptop to the Cradlepoint LAN port or Wi-Fi network.",
      "Open http://192.168.0.1 or http://cp in your browser.",
      "Enter Username: admin and Password found on the barcode sticker under the device.",
      "Register the router with NetCloud Manager for cloud orchestration and zero-trust policies."
]
  },
  {
    name: 'Aruba (HPE)',
    slug: 'aruba',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin / Aruba Cloud App',
    defaultPass: 'Set during setup',
    description: 'Aruba Instant On AP22, AP25, and enterprise wireless access point setup and cloud portal login.',
    models: [
      {
            "brand": "Aruba",
            "model": "Aruba Instant On AP25",
            "protocol": "HTTPS / Mobile App",
            "ip": "192.168.1.1",
            "username": "admin / Aruba Cloud App",
            "password": "Set during setup"
      },
      {
            "brand": "Aruba",
            "model": "Aruba Instant On AP22",
            "protocol": "HTTPS / Mobile App",
            "ip": "192.168.1.1",
            "username": "admin / Aruba Cloud App",
            "password": "Set during setup"
      }
],
    guide: [
      "Connect your Aruba Instant On access point to your PoE switch or router.",
      "Open the Aruba Instant On mobile app or visit https://myaudit.instant-on.arubanetworks.com.",
      "Scan the QR code on the back of the AP to adopt it into your cloud site.",
      "Configure guest networks, captive portals, and WPA3 security."
]
  },
  {
    name: 'Ruckus (CommScope)',
    slug: 'ruckus',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'password / Unleashed Setup',
    description: 'Ruckus Unleashed R750, R650, and R550 BeamFlex Wi-Fi 6 access point setup and controllerless login.',
    models: [
      {
            "brand": "Ruckus",
            "model": "Ruckus Unleashed R750",
            "protocol": "HTTPS / SSH",
            "ip": "192.168.0.1",
            "username": "admin",
            "password": "password / Unleashed Setup"
      },
      {
            "brand": "Ruckus",
            "model": "Ruckus Unleashed R550",
            "protocol": "HTTPS / SSH",
            "ip": "192.168.0.1",
            "username": "admin",
            "password": "password / Unleashed Setup"
      }
],
    guide: [
      "Connect your PC to the Ruckus AP network (Configure.Me-XXXXXX).",
      "Open https://unleashed.ruckuswireless.com or https://192.168.0.1 in your browser.",
      "Follow the Unleashed setup wizard to create your master network SSID and administrator password.",
      "Add additional Ruckus APs for automatic self-forming, self-healing mesh coverage."
]
  },
  {
    name: 'EnGenius',
    slug: 'engenius',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'EnGenius Cloud ECW230, FitXpress, and EnMesh business access point and router setup instructions.',
    models: [
      {
            "brand": "EnGenius",
            "model": "EnGenius ECW230",
            "protocol": "HTTPS / Cloud App",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "admin"
      }
],
    guide: [
      "Connect to the EnGenius LAN port or setup Wi-Fi.",
      "Open http://192.168.1.1 or use the EnGenius Cloud To-Go mobile app.",
      "Log in with Username: admin and Password: admin.",
      "Register device to EnGenius Cloud for remote multi-site management."
]
  },
  {
    name: 'Arcadyan',
    slug: 'arcadyan',
    defaultIp: '192.168.12.1',
    defaultUser: 'admin',
    defaultPass: 'Printed on gateway rear label',
    description: 'Default login credentials, admin IP addresses, and setup guides for Arcadyan routers.',
    models: [
      {
            "brand": "Arcadyan",
            "model": "Arcadyan KVD21 (T-Mobile 5G Gateway)",
            "protocol": "HTTP",
            "ip": "192.168.12.1",
            "username": "admin",
            "password": "Printed on gateway rear label"
      },
      {
            "brand": "Arcadyan",
            "model": "Arcadyan LH1000 (Telstra Smart Modem Gen 2)",
            "protocol": "HTTP",
            "ip": "192.168.0.1",
            "username": "admin",
            "password": "admin / Telstra setup"
      }
],
    guide: [
      "Connect to your Arcadyan router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.12.1 in your web browser.",
      "Log in with Username: admin and Password: Printed on gateway rear label.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'VSOL',
    slug: 'vsol',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'VSOL XPON ONT Wi-Fi 6 router configuration, default logins, and GPON fiber diagnostics.',
    models: [
      {
            "brand": "VSOL",
            "model": "VSOL V2804AX",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "admin"
      }
],
    guide: [
      "Connect to the VSOL Wi-Fi network or plug an Ethernet cable into LAN 1.",
      "Open http://192.168.1.1 in your web browser.",
      "Log in with Username: admin and Password: admin.",
      "Inspect Optical Rx Power and configure high-speed Wi-Fi 6 wireless parameters."
]
  },
  {
    name: 'Amped Wireless',
    slug: 'amped-wireless',
    defaultIp: '192.168.1.240',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Amped Wireless high-power long-range router and range extender setup guides and default credentials.',
    models: [
      {
            "brand": "Amped Wireless",
            "model": "Amped Wireless ATHENA-R2",
            "protocol": "HTTP",
            "ip": "192.168.1.240",
            "username": "admin",
            "password": "admin"
      }
],
    guide: [
      "Connect to the Amped Wireless Wi-Fi network.",
      "Open http://setup.ampedwireless.com or http://192.168.1.240 in your browser.",
      "Log in with Username: admin and Password: admin.",
      "Configure high-power signal amplifiers and wireless channel widths."
]
  }
,
  {
    name: 'Check Point',
    slug: 'check-point',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default login credentials, admin IP addresses, and setup guides for Check Point routers.',
    models: [
      {
            "brand": "Check Point",
            "model": "Quantum Spark 1590",
            "protocol": "HTTPS (Port 4434) / SSH",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "admin"
      },
      {
            "brand": "Check Point",
            "model": "Quantum Spark 1570",
            "protocol": "HTTPS (Port 4434) / SSH",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "admin"
      }
],
    guide: [
      "Connect to your Check Point router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.1.1 in your web browser.",
      "Log in with Username: admin and Password: admin.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Inseego',
    slug: 'inseego',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'Printed on gateway base label',
    description: 'Default login credentials, admin IP addresses, and setup guides for Inseego routers.',
    models: [
      {
            "brand": "Inseego",
            "model": "Wavemaker PRO FG2000",
            "protocol": "HTTP/HTTPS / Inseego App",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "Printed on gateway base label"
      },
      {
            "brand": "Inseego",
            "model": "MiFi X PRO 5G",
            "protocol": "HTTP/HTTPS / Touchscreen",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "Printed on screen / battery"
      }
],
    guide: [
      "Connect to your Inseego router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.1.1 in your web browser.",
      "Log in with Username: admin and Password: Printed on gateway base label.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Digi International',
    slug: 'digi-international',
    defaultIp: '192.168.210.1',
    defaultUser: 'admin',
    defaultPass: 'Printed on label',
    description: 'Default login credentials, admin IP addresses, and setup guides for Digi International routers.',
    models: [
      {
            "brand": "Digi International",
            "model": "Digi IX20",
            "protocol": "HTTPS / SSH",
            "ip": "192.168.210.1",
            "username": "admin",
            "password": "Printed on label"
      }
],
    guide: [
      "Connect to your Digi International router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.210.1 in your web browser.",
      "Log in with Username: admin and Password: Printed on label.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Sierra Wireless',
    slug: 'sierra-wireless',
    defaultIp: '192.168.13.31',
    defaultUser: 'admin',
    defaultPass: 'Printed on device label',
    description: 'Default login credentials, admin IP addresses, and setup guides for Sierra Wireless routers.',
    models: [
      {
            "brand": "Sierra Wireless",
            "model": "AirLink XR90 5G",
            "protocol": "HTTPS (Port 9443) / SSH",
            "ip": "192.168.13.31",
            "username": "admin",
            "password": "Printed on device label"
      }
],
    guide: [
      "Connect to your Sierra Wireless router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.13.31 in your web browser.",
      "Log in with Username: admin and Password: Printed on device label.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Netis',
    slug: 'netis',
    defaultIp: '192.168.1.1',
    defaultUser: 'guest / admin',
    defaultPass: 'guest / password',
    description: 'Default login credentials, admin IP addresses, and setup guides for Netis routers.',
    models: [
      {
            "brand": "Netis",
            "model": "Netis N2",
            "protocol": "HTTP",
            "ip": "192.168.1.1",
            "username": "guest / admin",
            "password": "guest / password"
      }
],
    guide: [
      "Connect to your Netis router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.1.1 in your web browser.",
      "Log in with Username: guest / admin and Password: guest / password.",
      "Configure your wireless network and administrator credentials."
]
  },
  {
    name: 'Westell',
    slug: 'westell',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Default login credentials, admin IP addresses, and setup guides for Westell routers.',
    models: [
      {
            "brand": "Westell",
            "model": "Westell ProLine 6100",
            "protocol": "HTTP",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "password"
      }
],
    guide: [
      "Connect to your Westell router via Wi-Fi or Ethernet cable.",
      "Open http://192.168.1.1 in your web browser.",
      "Log in with Username: admin and Password: password.",
      "Configure your wireless network and administrator credentials."
]
  }
,
  {
    name: '2Wire',
    slug: '2wire',
    defaultIp: '192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'admin / (blank)',
    description: 'Default login passwords and setup guides for 2Wire HomePortal and AT&T U-verse DSL gateways.',
    models: [
      {
            "brand": "2Wire",
            "model": "2Wire 2701HG-B",
            "protocol": "HTTP",
            "ip": "192.168.1.254",
            "username": "admin",
            "password": "Printed on sticker"
      },
      {
            "brand": "2Wire",
            "model": "2Wire 3801HGV",
            "protocol": "HTTP",
            "ip": "192.168.1.254",
            "username": "admin",
            "password": "Printed on sticker"
      }
],
    guide: [
      "Connect your PC to 2Wire LAN port or Wi-Fi.",
      "Open http://192.168.1.254 or http://gateway.2wire.net in your browser.",
      "Enter system password found on the yellow label on the gateway base.",
      "Configure PPPoE credentials and wireless encryption."
]
  },
  {
    name: 'Edimax',
    slug: 'edimax',
    defaultIp: '192.168.2.1',
    defaultUser: 'admin',
    defaultPass: '1234',
    description: 'Edimax BR-series Wi-Fi routers, Gemini whole-home mesh, and Pro access point login credentials and setup.',
    models: [
      {
            "brand": "Edimax",
            "model": "Edimax BR-6473AX",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.2.1",
            "username": "admin",
            "password": "1234"
      },
      {
            "brand": "Edimax",
            "model": "Edimax Gemini RG21S",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.2.1",
            "username": "admin",
            "password": "1234"
      }
],
    guide: [
      "Connect to the Edimax router network via Wi-Fi or Ethernet.",
      "Open http://192.168.2.1 or http://edimax.setup in your web browser.",
      "Enter Username: admin and Password: 1234 (or 'admin').",
      "Use the iQ Setup wizard to establish your WAN Internet connection."
]
  },
  {
    name: 'QNAP',
    slug: 'qnap',
    defaultIp: '192.168.100.1',
    defaultUser: 'admin',
    defaultPass: 'admin / MAC Address',
    description: 'QNAP QHora-301W and QHora-322 10GbE SD-WAN router setup guides and QuRouter OS login credentials.',
    models: [
      {
            "brand": "QNAP",
            "model": "QNAP QHora-301W",
            "protocol": "HTTPS",
            "ip": "192.168.100.1",
            "username": "admin",
            "password": "MAC address / admin"
      },
      {
            "brand": "QNAP",
            "model": "QNAP QHora-322",
            "protocol": "HTTPS / SSH",
            "ip": "192.168.100.1",
            "username": "admin",
            "password": "MAC address / admin"
      }
],
    guide: [
      "Connect your computer to QHora LAN Port 1.",
      "Open https://192.168.100.1 or https://qnaprouter.local in your browser.",
      "Log in with Username: admin and Password: (first MAC address of device without colons in uppercase or 'admin').",
      "Configure QuWAN SD-WAN mesh and 10GbE multi-gigabit routing."
]
  },
  {
    name: 'Allied Telesis',
    slug: 'allied-telesis',
    defaultIp: '192.168.1.1',
    defaultUser: 'manager',
    defaultPass: 'friend',
    description: 'Default credentials, AlliedWare Plus CLI, and configuration guides for Allied Telesis AR-Series Next-Gen UTM Firewalls and routers.',
    models: [
      {
            "brand": "Allied Telesis",
            "model": "Allied Telesis AT-AR4050S",
            "protocol": "HTTPS / SSH / CLI",
            "ip": "192.168.1.1",
            "username": "manager",
            "password": "friend"
      }
],
    guide: [
      "Connect via console cable or Ethernet port 1.",
      "Open https://192.168.1.1 or connect via SSH to 192.168.1.1.",
      "Log in with Username: manager and Password: friend.",
      "Use AlliedWare Plus CLI or Web GUI to configure SD-WAN and AMF security."
]
  },
  {
    name: 'Barracuda Networks',
    slug: 'barracuda',
    defaultIp: '192.168.200.200',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Barracuda CloudGen Firewall and Secure Connector router setup, default IP, and Barracuda NextGen Admin access.',
    models: [
      {
            "brand": "Barracuda",
            "model": "Barracuda CloudGen F180",
            "protocol": "Barracuda Admin / HTTPS",
            "ip": "192.168.200.200",
            "username": "admin",
            "password": "admin"
      }
],
    guide: [
      "Connect your PC to Barracuda Port 0 (MGMT).",
      "Set your PC IP to 192.168.200.10 (Subnet: 255.255.255.0).",
      "Open Barracuda NextGen Admin utility or navigate to https://192.168.200.200 in browser.",
      "Enter Username: admin and Password: admin."
]
  },
  {
    name: 'Extreme Networks',
    slug: 'extreme-networks',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'aerohive / admin',
    description: 'ExtremeCloud IQ, Aerohive, and Extreme Networks Wi-Fi 6 enterprise access point and security router setup.',
    models: [
      {
            "brand": "Extreme Networks",
            "model": "Extreme Networks AP4000",
            "protocol": "HTTPS / SSH",
            "ip": "192.168.0.1",
            "username": "admin",
            "password": "aerohive / admin"
      }
],
    guide: [
      "Connect your AP/Router to a PoE+ switch port.",
      "Open https://extremecloudiq.com or local console at https://192.168.0.1.",
      "Log in with Username: admin and Password: admin (or aerohive on legacy units).",
      "Adopt into ExtremeCloud IQ for AI-powered wireless management."
]
  },
  {
    name: 'Samsung',
    slug: 'samsung',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / 4-digit code on sticker',
    description: 'Samsung Connect Home, SmartThings Wifi mesh, and Samsung LTE mobile hotspot setup and login instructions.',
    models: [
      {
            "brand": "Samsung",
            "model": "Samsung SmartThings Wifi (ET-WV525)",
            "protocol": "SmartThings App / HTTP",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "Set via SmartThings App"
      }
],
    guide: [
      "Download and open the Samsung SmartThings app on your Android or iOS device.",
      "Power on your Samsung Connect Home or SmartThings Wifi hub.",
      "Tap 'Add Device' -> 'Wi-Fi Hub' and scan the QR code under the router.",
      "Manage SmartThings Zigbee/Z-Wave automations and Plume AI mesh Wi-Fi."
]
  },
  {
    name: 'USRobotics',
    slug: 'usrobotics',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default passwords and configuration guides for USRobotics SureConnect, MAXg, and Wireless ADSL2+ gateways.',
    models: [
      {
            "brand": "USRobotics",
            "model": "USRobotics USR9108 MAXg",
            "protocol": "HTTP",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "admin"
      }
],
    guide: [
      "Connect to USRobotics router via LAN cable.",
      "Open http://192.168.1.1 or http://192.168.101.1 in your browser.",
      "Enter Username: admin and Password: admin.",
      "Configure MAXg wireless security and ADSL parameters."
]
  },
  {
    name: 'Fiberhome',
    slug: 'fiberhome',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / %0admin#',
    description: 'Default login passwords and OMCI configurations for Fiberhome AN5506 and HG6245 GPON FTTH optical routers.',
    models: [
      {
            "brand": "Fiberhome",
            "model": "Fiberhome HG6245D",
            "protocol": "HTTP",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "%0admin# / admin"
      }
],
    guide: [
      "Connect your computer to Fiberhome LAN 1 port.",
      "Open http://192.168.1.1 in your web browser.",
      "Enter Username: admin and Password: %0admin# (or admin / admin).",
      "Configure GPON LOID registration and VLAN triple-play settings."
]
  },
  {
    name: 'Genexis',
    slug: 'genexis',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'Printed on bottom label',
    description: 'Default logins and configurations for Genexis Platinum, FiberBox, and Pulse European fiber optic gateways.',
    models: [
      {
            "brand": "Genexis",
            "model": "Genexis Platinum 7840",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "Printed on label"
      }
],
    guide: [
      "Connect to the Genexis router Wi-Fi or LAN port.",
      "Open http://192.168.1.1 in your browser.",
      "Enter the Admin password printed on the sticker on the back of the device.",
      "Configure Gigabit fiber settings and Wi-Fi security."
]
  },
  {
    name: 'Western Digital',
    slug: 'western-digital',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'password / admin',
    description: 'Western Digital My Net N900, N750, and N600 HD dual-band streaming router setup and login credentials.',
    models: [
      {
            "brand": "Western Digital",
            "model": "Western Digital My Net N900",
            "protocol": "HTTP",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "password"
      }
],
    guide: [
      "Connect to My Net router network.",
      "Open http://wdrouter or http://192.168.1.1 (or http://192.168.16.1) in your browser.",
      "Enter Username: admin and Password: password (or admin).",
      "Configure FasTrack Plus HD video and gaming QoS priority."
]
  }
,
  {
    name: 'Starlink',
    slug: 'starlink',
    defaultIp: '192.168.1.1',
    defaultUser: 'Starlink App',
    defaultPass: 'Configured in Starlink App',
    description: 'Starlink Satellite Gen 3 Wi-Fi 6 router, Gen 2 Mesh, and Starlink Dishy administration and bypass mode guide.',
    models: [
      {
            "brand": "Starlink",
            "model": "Starlink Gen 3 Wi-Fi 6 Router (UTR-231)",
            "protocol": "HTTP / Starlink App",
            "ip": "192.168.1.1",
            "username": "Starlink App",
            "password": "Set via Starlink App"
      },
      {
            "brand": "Starlink",
            "model": "Starlink Gen 2 Mesh Router (UTR-211)",
            "protocol": "Starlink App / HTTP",
            "ip": "192.168.1.1",
            "username": "Starlink App",
            "password": "Set via Starlink App"
      }
],
    guide: [
      "Download and open the official Starlink app on iOS or Android.",
      "Connect to your Starlink Wi-Fi network (STLINK-XXXXX).",
      "Set your custom Wi-Fi SSID and password in the Starlink app.",
      "Enable 'Bypass Mode' if connecting your own third-party router or firewall via Ethernet adapter."
]
  },
  {
    name: 'Greenwave Systems',
    slug: 'greenwave',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'Admin password on sticker',
    description: 'Greenwave Systems C4000LG, C4000BG, and Verizon FiOS Quantum G1100 broadband gateway login instructions.',
    models: [
      {
            "brand": "Greenwave",
            "model": "Greenwave C4000LG (CenturyLink Wi-Fi 6)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.0.1",
            "username": "admin",
            "password": "Printed on sticker"
      },
      {
            "brand": "Greenwave",
            "model": "Greenwave FiOS-G1100 (Verizon Quantum Gateway)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "Printed on sticker"
      }
],
    guide: [
      "Connect your PC to the Greenwave gateway LAN port or Wi-Fi.",
      "Open http://192.168.0.1 or http://192.168.1.1 in your browser.",
      "Enter Username: admin and Password printed on the gateway sticker.",
      "Configure Wi-Fi 6 4x4 channels, guest network, and parental controls."
]
  },
  {
    name: 'Pace',
    slug: 'pace',
    defaultIp: '192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'Access Code printed on label',
    description: 'Default passwords and DMZplus configuration for Pace 5268AC and AT&T U-verse residential gateways.',
    models: [
      {
            "brand": "Pace",
            "model": "Pace 5268AC (AT&T U-verse Gateway)",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.254",
            "username": "admin",
            "password": "Device Access Code on label"
      }
],
    guide: [
      "Connect your PC to the Pace gateway via Ethernet or Wi-Fi.",
      "Open http://192.168.1.254 in your web browser.",
      "When prompted, enter the Device Access Code found on the gateway rear sticker.",
      "Configure DMZplus IP passthrough if using an external router."
]
  },
  {
    name: 'GX Group',
    slug: 'gx-group',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / gx@123',
    description: 'GX Group Titanium and Earth series GPON/XPON ONT fiber router setup and default login credentials.',
    models: [
      {
            "brand": "GX Group",
            "model": "GX Group Titanium-2121",
            "protocol": "HTTP",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "admin / gx@123"
      }
],
    guide: [
      "Connect your PC to LAN 1 of the GX Titanium ONT.",
      "Open http://192.168.1.1 in your web browser.",
      "Enter Username: admin and Password: admin (or gx@123 / std1234).",
      "Configure WAN connection with BSNL, RailWire, or local FTTH provider VLAN credentials."
]
  },
  {
    name: 'DBC Technologies',
    slug: 'dbc-technologies',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'DBC Technologies GPON and EPON ONT fiber router login guide, optical power check, and Wi-Fi configuration.',
    models: [
      {
            "brand": "DBC",
            "model": "DBC DBC-GPON-ONT-24",
            "protocol": "HTTP",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "admin"
      }
],
    guide: [
      "Connect to DBC ONT Wi-Fi or LAN 1.",
      "Open http://192.168.1.1 in your web browser.",
      "Enter Username: admin and Password: admin.",
      "Set up PPPoE dial-up credentials and Wi-Fi SSID."
]
  },
  {
    name: 'Alphion',
    slug: 'alphion',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Alphion AOL-244 and AOL-144 GPON ONT terminal login passwords and BSNL Bharat Fiber setup guide.',
    models: [
      {
            "brand": "Alphion",
            "model": "Alphion AOL-244 GPON ONT",
            "protocol": "HTTP",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "admin"
      }
],
    guide: [
      "Connect via Ethernet to Alphion LAN port.",
      "Open http://192.168.1.1 in your browser.",
      "Log in with Username: admin and Password: admin.",
      "Configure Optical OMCI and BSNL Bharat Fiber PPPoE."
]
  },
  {
    name: 'NEC (Aterm)',
    slug: 'nec-aterm',
    defaultIp: '192.168.10.1',
    defaultUser: 'admin',
    defaultPass: 'admin / Setup Password',
    description: 'NEC Aterm WX11000T12 (Wi-Fi 7), WX7800T8, and WX5400HP Japanese high-performance router setup and login.',
    models: [
      {
            "brand": "NEC (Aterm)",
            "model": "NEC Aterm WX11000T12",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.10.1",
            "username": "admin",
            "password": "Set during setup"
      },
      {
            "brand": "NEC (Aterm)",
            "model": "NEC Aterm WX7800T8",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.10.1",
            "username": "admin",
            "password": "Set during setup"
      }
],
    guide: [
      "Connect to NEC Aterm Wi-Fi network (aterm-xxxxxx).",
      "Open http://192.168.10.1 or http://aterm.me in your browser.",
      "Enter Username: admin and your master administrator password set on first boot.",
      "Configure 10Gbps WAN/LAN, IPv6 IPoE (v6plus/OCN Virtual Connect), and Mesh backhaul."
]
  },
  {
    name: 'I-O DATA',
    slug: 'io-data',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: '(blank) / admin',
    description: 'I-O DATA WN-DAX series Wi-Fi 6 and 10Gbps optical routers default passwords, login guide, and IPv6 setup.',
    models: [
      {
            "brand": "I-O DATA",
            "model": "I-O DATA WN-DAX6000XR",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.0.1",
            "username": "admin",
            "password": "(blank)"
      }
],
    guide: [
      "Connect your PC to I-O DATA LAN port or Wi-Fi.",
      "Open http://192.168.0.1 or http://iodata.router in your web browser.",
      "Enter Username: admin and leave password blank (or enter admin).",
      "Set up IPv6 IPoE (transix / v6plus) and 360-degree high-power antennas."
]
  },
  {
    name: 'Yamaha',
    slug: 'yamaha',
    defaultIp: '192.168.100.1',
    defaultUser: '(blank)',
    defaultPass: '(blank) / admin',
    description: 'Yamaha RTX1300, RTX830, and NVR510 enterprise gigabit VPN router setup guides and CLI/WebGUI login.',
    models: [
      {
            "brand": "Yamaha",
            "model": "Yamaha RTX1300",
            "protocol": "HTTP/HTTPS / Telnet / SSH",
            "ip": "192.168.100.1",
            "username": "(blank)",
            "password": "(blank)"
      },
      {
            "brand": "Yamaha",
            "model": "Yamaha RTX830",
            "protocol": "HTTP/HTTPS / SSH",
            "ip": "192.168.100.1",
            "username": "(blank)",
            "password": "(blank)"
      }
],
    guide: [
      "Connect your PC to Yamaha LAN Port 1.",
      "Open http://192.168.100.1 in your browser.",
      "Leave User and Password blank, then click Login.",
      "Configure IPsec VPN, multi-WAN failover, and VLAN segmentation in Yamaha GUI."
]
  },
  {
    name: 'Freebox (Free)',
    slug: 'freebox',
    defaultIp: '192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'Set on Freebox Touchscreen',
    description: 'Freebox Ultra (Wi-Fi 7), Freebox Pop, and Freebox Delta fiber router setup and Freebox OS login.',
    models: [
      {
            "brand": "Freebox",
            "model": "Freebox Ultra (Wi-Fi 7 10G EPON)",
            "protocol": "HTTP/HTTPS / Freebox Connect App",
            "ip": "192.168.1.254",
            "username": "admin",
            "password": "Set on OLED Screen"
      },
      {
            "brand": "Freebox",
            "model": "Freebox Pop (Wi-Fi 6 Fiber Gateway)",
            "protocol": "HTTP/HTTPS / Freebox App",
            "ip": "192.168.1.254",
            "username": "admin",
            "password": "Set on screen"
      }
],
    guide: [
      "Connect to your Freebox Wi-Fi or LAN port.",
      "Open http://192.168.1.254 or http://mafreebox.freebox.fr in your browser.",
      "Confirm the security request displayed on the Freebox front OLED display.",
      "Create your master password for Freebox OS management."
]
  },
  {
    name: 'NetComm Wireless',
    slug: 'netcomm',
    defaultIp: '192.168.20.1',
    defaultUser: 'admin',
    defaultPass: 'admin / Printed on barcode',
    description: 'NetComm NF20MESH, NF18MESH, and Australian NBN VDSL2/FTTC gateway login credentials and setup.',
    models: [
      {
            "brand": "NetComm",
            "model": "NetComm NF20MESH",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.20.1",
            "username": "admin",
            "password": "Printed on label"
      }
],
    guide: [
      "Connect to NetComm Wi-Fi or LAN 1.",
      "Open http://192.168.20.1 in your browser.",
      "Enter Username: admin and Password printed on your NetComm gateway label.",
      "Configure NBN connection type (VDSL2, FTTP, HFC, Fixed Wireless)."
]
  },
  {
    name: 'Kaon Broadband',
    slug: 'kaon',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    description: 'Kaon Broadband AR2140, CG3000, and Claro / Telecom Argentina GPON and DOCSIS 3.1 gateway setup.',
    models: [
      {
            "brand": "Kaon",
            "model": "Kaon AR2140",
            "protocol": "HTTP/HTTPS",
            "ip": "192.168.1.1",
            "username": "admin",
            "password": "admin"
      }
],
    guide: [
      "Connect to Kaon router Wi-Fi.",
      "Open http://192.168.1.1 in your browser.",
      "Log in with Username: admin and Password found on the device sticker.",
      "Configure Wi-Fi mesh pods and parental controls."
]
  }
];

export const ISPS: Isp[] = [
  {
    name: 'JioFiber',
    slug: 'jio',
    defaultIp: '192.168.29.1',
    defaultUser: 'admin',
    defaultPass: 'Jiocentrum',
    description: 'Reliance Jio JioFiber ONT gateway router configuration and default settings.',
    instructions: [
      'Connect to JioFiber WiFi network.',
      'Go to http://192.168.29.1 in your browser.',
      'Login with username: admin and password: Jiocentrum.',
      'Manage SSID, 2.4/5GHz band steering, and firewall.'
    ]
  },
  {
    name: 'Airtel Xstream Fiber',
    slug: 'airtel',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / airtel',
    description: 'Airtel Xstream Fiber Nokia / ZTE / Huawei ONT router configuration guide.',
    instructions: [
      'Connect to Airtel WiFi network.',
      'Open http://192.168.1.1.',
      'Enter username: admin and password: airtel or admin.',
      'Check optical power, bridge mode, and WiFi passwords.'
    ]
  },
  {
    name: 'BSNL FTTH Bharat Fiber',
    slug: 'bsnl',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    description: 'BSNL Bharat Fiber Syrotech, Netlink, and Digisol ONT router login and PPPoE setup.',
    instructions: [
      'Connect to your BSNL ONT router.',
      'Visit http://192.168.1.1 in your browser.',
      'Enter username: admin and password: admin or password.',
      'Configure WAN PPPoE username and password.'
    ]
  },
  {
    name: 'ACT Fibernet',
    slug: 'act-fibernet',
    defaultIp: '192.168.1.1 / 192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'admin / act@123',
    description: 'ACT Fibernet TP-Link / ACT Home Gateway login instructions and portal setup.',
    instructions: [
      'Connect to ACT Fibernet WiFi.',
      'Visit http://192.168.1.1 or http://192.168.0.1.',
      'Enter username: admin and password: act@123 or admin.',
      'Authenticate with your ACT portal username/password.'
    ]
  },
  {
    name: 'Tata Play Fiber',
    slug: 'tata-play-fiber',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Tata Play Fiber (Tata Sky Broadband) ONT gateway router default login and settings.',
    instructions: [
      'Connect to Tata Play Fiber WiFi.',
      'Open http://192.168.1.1.',
      'Login with username: admin and password: admin.'
    ]
  },
  {
    name: 'AT&T Fiber',
    slug: 'att-fiber',
    defaultIp: '192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'Access Code on Sticker',
    description: 'AT&T Fiber BGW210 / BGW320 / NVG589 gateway login, IP Passthrough, and Wi-Fi configuration.',
    instructions: [
      'Connect to your AT&T Wi-Fi or plug into an Ethernet port.',
      'Navigate to http://192.168.1.254 in your web browser.',
      'When prompted for modifications, enter the Device Access Code printed on the gateway sticker.',
      'Configure IP Passthrough, NAT gaming rules, or Wi-Fi security keys.'
    ]
  },
  {
    name: 'Xfinity Comcast',
    slug: 'xfinity',
    defaultIp: '10.0.0.1',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Xfinity xFi Wireless Gateway (XB6, XB7, XB8) admin dashboard login and bridge mode guide.',
    instructions: [
      'Connect to your Xfinity home wireless network.',
      'Open http://10.0.0.1 in any desktop or mobile browser.',
      'Log in with Username: admin and Password: password (or custom password set during initial boot).',
      'Manage connected devices, parental controls, and MoCA coax settings.'
    ]
  },
  {
    name: 'Verizon Fios',
    slug: 'verizon-fios',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'Printed on router sticker',
    description: 'Verizon Fios CR1000A / G3100 / G1100 Quantum Gateway login and optical ONT settings.',
    instructions: [
      'Connect your device to Verizon Fios Wi-Fi.',
      'Open http://192.168.1.1 or http://myfiosgateway.com.',
      'Enter the admin password printed on the router label.',
      'Adjust SON (Self-Organizing Network) Wi-Fi steering and port forwarding.'
    ]
  },
  {
    name: 'Spectrum Internet',
    slug: 'spectrum',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    description: 'Charter Spectrum WiFi 6 Router (SAX1V1K / SAC2V1K) administration and My Spectrum app guide.',
    instructions: [
      'Connect to your Spectrum Wi-Fi network.',
      'Open http://192.168.1.1 in your web browser.',
      'Enter admin credentials or manage advanced settings through the My Spectrum mobile app.',
      'Configure DNS servers, UPnP, and guest networks.'
    ]
  },
  {
    name: 'Virgin Media UK',
    slug: 'virgin-media',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'Settings password on hub base',
    description: 'Virgin Media UK Superhub 3, Hub 4, and Hub 5 fiber gateway login and modem mode guide.',
    instructions: [
      'Connect to Virgin Media Wi-Fi or LAN cable.',
      'Navigate to http://192.168.0.1 in your browser.',
      'Enter the Settings Password printed on the sticker underneath the Hub base.',
      'Enable Modem Mode if using a third-party mesh router system.'
    ]
  },
  {
    name: 'BT Broadband UK',
    slug: 'bt-broadband',
    defaultIp: '192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'Admin password on hub card',
    description: 'BT Smart Hub 2 and Home Hub 5/6 fiber broadband router login and Smart Setup configuration.',
    instructions: [
      'Connect to your BT Smart Hub Wi-Fi.',
      'Open http://192.168.1.254 or http://bthomehub.home.',
      'Enter the Admin Password found on the pull-out plastic card on the back of the Smart Hub.',
      'Disable Smart Setup if connecting non-standard smart home devices.'
    ]
  }
,
  {
    name: 'Telstra Broadband Australia',
    slug: 'telstra-australia',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'admin / Telstra setup password',
    description: 'Telstra Smart Modem Gen 2 & Gen 3 NBN gateway configuration, Wi-Fi booster pairing, and 4G backup diagnostics.',
    instructions: [
      "Connect your device to Telstra Wi-Fi or plug into a LAN port.",
      "Open http://192.168.0.1 or http://telstra.gateway in your browser.",
      "Enter Username: admin and Password: admin (or the custom password set during initial setup).",
      "Monitor NBN sync speeds, manage Guest Wi-Fi, and check 4G backup status."
]
  },
  {
    name: 'Optus Broadband Australia',
    slug: 'optus-australia',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'admin / Printed on modem barcode',
    description: 'Optus Ultra WiFi Gen 2 & Sagemcom 5366 TN gateway login and NBN VoIP telephone configuration.',
    instructions: [
      "Connect to Optus Wi-Fi network.",
      "Navigate to http://192.168.0.1 or http://optus.gateway in your browser.",
      "Log in with Username: admin and the Admin Password printed on your modem sticker.",
      "Configure Wi-Fi security keys, parental controls, and band steering."
]
  },
  {
    name: 'Rogers Ignite Canada',
    slug: 'rogers-ignite',
    defaultIp: '10.0.0.1',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Rogers Ignite WiFi Gateway (XB6, XB7, XB8) admin dashboard login, bridge mode, and Ignite HomeConnect guide.',
    instructions: [
      "Connect to your Rogers Ignite Wi-Fi network.",
      "Open http://10.0.0.1 in any web browser.",
      "Enter Username: admin and Password: password.",
      "Enable Bridge Mode if connecting a third-party mesh Wi-Fi system."
]
  },
  {
    name: 'Sky Broadband UK',
    slug: 'sky-broadband',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'sky / Wi-Fi password',
    description: 'Sky Broadband Hub (SR203 / SR204) and Sky Q Hub admin portal login and Wi-Fi channel selection guide.',
    instructions: [
      "Connect to Sky Wi-Fi or plug in via Ethernet.",
      "Open http://192.168.0.1 or http://skyhub.fast in your web browser.",
      "Enter Username: admin and Password: sky (or the default Wi-Fi password printed on the back on newer hubs).",
      "Adjust Wi-Fi 5GHz channel widths and inspect downstream line attenuation."
]
  },
  {
    name: 'TalkTalk UK',
    slug: 'talktalk-broadband',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'Wi-Fi password on router card',
    description: 'TalkTalk Wi-Fi Hub (FAST 5364 / Amazon eero) admin login, port forwarding, and line sync diagnostics.',
    instructions: [
      "Connect your computer to the TalkTalk router network.",
      "Open http://192.168.1.1 in your browser.",
      "Enter Username: admin and the unique router password found on the pull-out card.",
      "Configure port forwarding rules, firewall security, and parental filters."
]
  },
  {
    name: 'Deutsche Telekom Germany',
    slug: 'deutsche-telekom',
    defaultIp: '192.168.2.1',
    defaultUser: 'admin',
    defaultPass: 'Device password on rear label',
    description: 'Deutsche Telekom Speedport Smart 4, Smart 3, and Speedport Pro router setup at 192.168.2.1 (speedport.ip).',
    instructions: [
      "Connect your device to Speedport Wi-Fi.",
      "Open http://192.168.2.1 or http://speedport.ip in your browser.",
      "Enter the Device Password (Ger\u00e4tepasswort) printed on the sticker on the back of the Speedport.",
      "Configure DSL / Fiber access credentials, DECT telephones, and WLAN guest access."
]
  },
  {
    name: 'Vodafone Germany / UK',
    slug: 'vodafone-station',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'Printed on gateway sticker',
    description: 'Vodafone Station Wi-Fi 6 (DOCSIS 3.1 & DSL) and Vodafone Power Station admin portal login guide.',
    instructions: [
      "Connect to Vodafone Wi-Fi or LAN port.",
      "Open http://192.168.0.1 in your browser.",
      "Enter the administrator password printed on the sticker underneath the Vodafone Station.",
      "Configure SuperWLAN mesh pods, guest Wi-Fi, and bridge mode."
]
  },
  {
    name: 'Orange France (Livebox)',
    slug: 'orange-livebox',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'First 8 characters of Wi-Fi key',
    description: 'Orange Livebox 6 (Wi-Fi 6E) and Livebox 7 (Wi-Fi 7) 10G optical fiber gateway setup and admin configuration.',
    instructions: [
      "Connect to Orange Livebox Wi-Fi.",
      "Open http://192.168.1.1 or http://livebox.home in your browser.",
      "Log in with Username: admin and Password: the first 8 characters of the default Wi-Fi security key printed on the Livebox label.",
      "Manage Wi-Fi 6E / Wi-Fi 7 frequency bands, Livebox touch screen, and optical ONT status."
]
  },
  {
    name: 'Cox Communications',
    slug: 'cox-panoramic',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Cox Panoramic WiFi Gateway (PW7 / PW8) admin login, bridge mode, and Panoramic WiFi mobile app guide.',
    instructions: [
      "Connect to Cox Panoramic Wi-Fi.",
      "Open http://192.168.0.1 in your web browser.",
      "Enter Username: admin and Password: password.",
      "Manage advanced networking features, MoCA coax, and bridge mode."
]
  }
];

export { ROUTER_MODELS } from './router-models-data';
import { ROUTER_MODELS } from './router-models-data';

export async function getAllSlugs() {
  const ipSlugs = GATEWAY_IPS
    .filter(item => item.slug !== '192-168-1-1')
    .map(item => ({
      params: { slug: item.slug },
      props: { type: 'ip' as const, data: item }
    }));

  const brandSlugs = BRANDS.map(item => ({
    params: { slug: item.slug },
    props: { type: 'brand' as const, data: item }
  }));

  const ispSlugs = ISPS.map(item => ({
    params: { slug: item.slug },
    props: { type: 'isp' as const, data: item }
  }));

  const modelSlugs = ROUTER_MODELS.map(item => ({
    params: { slug: item.slug },
    props: { type: 'model' as const, data: item }
  }));

  return [...ipSlugs, ...brandSlugs, ...ispSlugs, ...modelSlugs];
}

// Helpers for interlinking
export function getBrandSlug(name?: string | null): string | null {
  if (!name) return null;
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const found = BRANDS.find(b => 
    b.name.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized ||
    b.slug.replace(/[^a-z0-9]/g, '') === normalized
  );
  return found ? found.slug : null;
}

export function getIpSlug(ip?: string | null): string | null {
  if (!ip) return null;
  const clean = ip.trim();
  const found = GATEWAY_IPS.find(g => g.ip === clean);
  if (found) {
    return found.ip === '192.168.1.1' ? '' : found.slug;
  }
  return null;
}

export function getIspSlug(name?: string | null): string | null {
  if (!name) return null;
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const found = ISPS.find(i => 
    i.name.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized ||
    i.slug.replace(/[^a-z0-9]/g, '') === normalized
  );
  return found ? found.slug : null;
}

export function getModelsForIp(targetIp: string): RouterModel[] {
  if (!targetIp) return [];
  return ROUTER_MODELS.filter(m => m.ip === targetIp);
}

export function getModelsForBrand(brandSlug: string): RouterModel[] {
  return ROUTER_MODELS.filter(m => m.brandSlug === brandSlug);
}

export function getModelSlug(brand?: string | null, model?: string | null): string | null {
  if (!model) return null;
  const cleanModel = model.toLowerCase().trim();
  const cleanBrand = (brand || '').toLowerCase().trim();

  // 1. Direct match on slug
  const directSlug = cleanModel.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const foundBySlug = ROUTER_MODELS.find(m => m.slug === directSlug || m.slug === `${cleanBrand}-${directSlug}`);
  if (foundBySlug) return foundBySlug.slug;

  // 2. Direct match on model & brand
  const found = ROUTER_MODELS.find(m => {
    const mModel = m.model.toLowerCase().trim();
    const mBrand = m.brand.toLowerCase().trim();
    if (mModel === cleanModel) {
      if (!cleanBrand || mBrand === cleanBrand || mBrand.includes(cleanBrand) || cleanBrand.includes(mBrand)) {
        return true;
      }
    }
    return false;
  });
  if (found) return found.slug;

  // 3. Partial / contains match
  const fuzzy = ROUTER_MODELS.find(m => {
    const mModel = m.model.toLowerCase().trim();
    return cleanModel.includes(mModel) || mModel.includes(cleanModel);
  });
  if (fuzzy) return fuzzy.slug;

  return null;
}

export function formatModelTitle(brand?: string | null, model?: string | null): string {
  if (!model) return brand || '';
  if (!brand) return model;
  const cleanModel = model.trim();
  const cleanBrand = brand.trim();
  if (cleanModel.toLowerCase().startsWith(cleanBrand.toLowerCase())) {
    return cleanModel;
  }
  return `${cleanBrand} ${cleanModel}`;
}


