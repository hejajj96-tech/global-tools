export interface Category {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  overview: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
}

export const categoriesData: Category[] = [
  {
    slug: 'image-tools',
    name: 'Image Tools',
    icon: '▣',
    tagline: 'Fast, client-side image editing and format conversions',
    description:
      'Compress, resize, convert, and sanitize your images directly in your browser without uploading to external servers.',
    overview:
      'Our suite of image utilities leverages the browser HTML5 Canvas API and modern image codecs to perform lossy and lossless transformations locally. Because operations execute on your client machine, your visual assets and photos stay completely private.',
    highlights: [
      'Zero server upload: images never leave your local device',
      'Supports modern formats: JPG, PNG, WebP with custom compression rates',
      'Instant dimensions adjustment with proportional aspect-ratio scaling',
      'Metadata stripping: remove sensitive EXIF geolocation and camera tags',
    ],
    faqs: [
      {
        question: 'Are my images uploaded to any remote server?',
        answer:
          'No. All image operations on ToolAtlas use browser-side HTML5 Canvas and Web APIs. Your images are processed directly in your browser memory and never uploaded to any cloud server.',
      },
      {
        question: 'What image formats can I convert between?',
        answer:
          'ToolAtlas supports converting between standard web formats including JPG, PNG, and WebP, with customizable output quality and background fills for transparent PNGs.',
      },
      {
        question: 'What is EXIF data and why should I remove it?',
        answer:
          'EXIF data includes metadata embedded by digital cameras and smartphones such as GPS coordinates, capture dates, camera models, and exposure settings. Removing EXIF data protects your privacy before sharing photos online.',
      },
    ],
  },
  {
    slug: 'pdf-tools',
    name: 'PDF Tools',
    icon: '▤',
    tagline: 'Merge, split, rotate, and optimize documents locally',
    description:
      'Powerful PDF utilities powered by WebAssembly and pdf-lib. Merge multiple documents, extract pages, rotate orientations, and convert images to PDF.',
    overview:
      'ToolAtlas PDF tools run locally in your web browser utilizing WebAssembly-powered PDF parsing libraries. Unlike traditional PDF services that require uploading confidential contracts or personal scans to unknown servers, ToolAtlas operates completely offline on your device.',
    highlights: [
      'Combine multiple PDF files into one clean document',
      'Extract specific pages or page ranges from large documents',
      'Rotate misaligned landscape or portrait pages in 90-degree increments',
      'Convert single or batch JPG images into high-resolution PDF documents',
    ],
    faqs: [
      {
        question: 'Is it safe to process confidential documents on ToolAtlas?',
        answer:
          'Yes. Because our PDF engine is powered by client-side JavaScript and pdf-lib, document bytes are processed in your local browser sandbox and are never sent over the network.',
      },
      {
        question: 'How many PDF files can I merge at once?',
        answer:
          'You can select multiple PDF files simultaneously. Processing speed depends entirely on your local device CPU and available memory.',
      },
      {
        question: 'Can I reorder or rotate specific pages?',
        answer:
          'Yes, our Rotate PDF and Split PDF tools allow you to change page orientations and extract specific pages effortlessly.',
      },
    ],
  },
  {
    slug: 'developer-tools',
    name: 'Developer Tools',
    icon: '{}',
    tagline: 'Essential utilities for web developers and software engineers',
    description:
      'Format and validate JSON, encode Base64, encode URLs, generate RFC 4122 UUIDs, test regular expressions, and convert Unix timestamps.',
    overview:
      'Engineered for software engineers, devops teams, and QA specialists who need instant, lightweight utilities without ads slowing them down or sensitive API payloads leaving their workstation.',
    highlights: [
      'JSON formatter with auto-indentation and detailed syntax validation errors',
      'Base64 encoder and decoder with full UTF-8 character encoding support',
      'Cryptographically secure UUID v4 generation using Web Crypto APIs',
      'Unix timestamp converter supporting seconds and milliseconds epoch formats',
    ],
    faqs: [
      {
        question: 'Are UUIDs generated cryptographically secure?',
        answer:
          'Yes. ToolAtlas uses the standard browser crypto.randomUUID() and Web Crypto API, which leverages OS-level entropy to generate RFC 4122 v4 UUIDs.',
      },
      {
        question: 'Does the Base64 encoder support UTF-8 and special characters?',
        answer:
          'Yes. Our Base64 utility properly encodes and decodes multibyte UTF-8 characters including accents, emojis, and international alphabets.',
      },
      {
        question: 'What regular expression flavors are supported in the Regex Tester?',
        answer:
          'The regex tester runs on JavaScript RegExp engine with support for standard flags: global (g), case-insensitive (i), multiline (m), dotAll (s), and unicode (u).',
      },
    ],
  },
  {
    slug: 'text-tools',
    name: 'Text Tools',
    icon: 'Aa',
    tagline: 'Text manipulation, word statistics, and formatting cleaners',
    description:
      'Count words and characters, analyze reading time, convert case styles, and clean up messy formatting and excessive white space.',
    overview:
      'Designed for copywriters, editors, translators, and students. Quickly count characters for social media constraints, inspect sentence complexity, change casing, and normalize whitespace in large text blocks.',
    highlights: [
      'Instant live word, character, sentence, and line count statistics',
      'Estimated reading time calculations based on average reading rates',
      'Transform text between UPPERCASE, lowercase, Title Case, and Sentence case',
      'Clean duplicate empty lines, tab indents, and inconsistent spaces with one click',
    ],
    faqs: [
      {
        question: 'How is reading time calculated in the Word Counter?',
        answer:
          'Reading time is calculated based on an international average reading speed of 200 words per minute for adult readers, providing an accurate estimate for articles and speeches.',
      },
      {
        question: 'Does the Text Cleaner remove hidden tabs and line breaks?',
        answer:
          'Yes, the Text Cleaner strips multiple consecutive blank lines, converts tab characters into spaces, and removes trailing spaces from every line.',
      },
    ],
  },
  {
    slug: 'typing-and-tests',
    name: 'Typing & Tests',
    icon: '⌨',
    tagline: 'Benchmark your keyboard, typing speed, and human reaction time',
    description:
      'Measure your Words Per Minute (WPM), test clicks per second (CPS), verify all keyboard keys, and test your millisecond reflex speed.',
    overview:
      'Benchmark your input hardware and motor skills. Measure your typing cadence, diagnose broken physical keyboard keys, measure click rates, and gauge reflex response times with precise high-resolution timers.',
    highlights: [
      'Interactive 30-second typing speed test with live WPM calculation',
      'CPS test to measure mouse click frequency and jitter-clicking skills',
      'Full visual keyboard tester to detect stuck or unresponsive keys',
      'Reaction time test using performance.now() sub-millisecond precision',
    ],
    faqs: [
      {
        question: 'How accurate is the Reaction Time Test?',
        answer:
          'The test uses the browser performance.now() high-resolution timestamp API, providing sub-millisecond precision for measuring human visual response times.',
      },
      {
        question: 'Can the Keyboard Test detect ghosting or multiple key presses?',
        answer:
          'Yes. The keyboard visualizer listens to native keydown events, highlighting each key pressed so you can check for rollover limits and mechanical switch issues.',
      },
    ],
  },
  {
    slug: 'qr-tools',
    name: 'QR Tools',
    icon: '▦',
    tagline: 'Generate standard QR codes, Wi-Fi connectors, and barcodes',
    description:
      'Create high-contrast QR codes for websites and text, generate one-tap Wi-Fi connection QR codes, and create Code 128 barcodes.',
    overview:
      'QR codes provide seamless bridges between physical mediums and digital experiences. Generate clean vector or raster QR codes ready for printing on menus, packaging, business cards, or storefronts.',
    highlights: [
      'Instant QR code generation with standard error correction',
      'Dedicated Wi-Fi QR code generator supporting WPA, WPA2, and WEP protocols',
      'Barcode generator with clean vector rendering for inventory tracking',
      'High-resolution downloads suitable for print materials and digital displays',
    ],
    faqs: [
      {
        question: 'Do generated QR codes expire?',
        answer:
          'No! ToolAtlas creates static QR codes containing raw text, URLs, or Wi-Fi credentials. Static QR codes never expire and require no ongoing subscription or account.',
      },
      {
        question: 'How do Wi-Fi QR codes work on smartphones?',
        answer:
          'Modern iOS and Android camera apps automatically decode the WIFI: protocol embedded in the QR code, prompting the user to join the network with one tap without typing the password.',
      },
    ],
  },
  {
    slug: 'security-tools',
    name: 'Security Tools',
    icon: '⌘',
    tagline: 'Generate cryptographically strong passwords and credentials',
    description:
      'Generate random, high-entropy passwords with custom character sets directly in your browser using cryptographic random number generators.',
    overview:
      'Protect your online accounts with cryptographically secure passwords. Our generator utilizes the Web Crypto API getRandomValues() method to ensure true unpredictability, with zero transmission over the Internet.',
    highlights: [
      'High-entropy random generation using crypto.getRandomValues()',
      'Customizable length from 8 to 128 characters',
      'Flexible character sets: uppercase, lowercase, numbers, and symbols',
      'Immediate one-click clipboard copy with privacy protection',
    ],
    faqs: [
      {
        question: 'Are passwords generated by ToolAtlas stored or logged?',
        answer:
          'Never. Passwords are generated exclusively inside your browser sandbox and are discarded as soon as you close or refresh the page.',
      },
      {
        question: 'How long should a strong password be?',
        answer:
          'Cybersecurity authorities recommend a minimum length of 16 to 20 characters combining letters, numbers, and special symbols to prevent brute-force attacks.',
      },
    ],
  },
  {
    slug: 'design-tools',
    name: 'Design Tools',
    icon: '●',
    tagline: 'Color inspection, conversion, and digital design utilities',
    description:
      'Inspect colors, pick precise shades, and copy color values across HEX, RGB, and HSL formats for web design and CSS styling.',
    overview:
      'Streamline your digital design workflow with intuitive color tools. Preview hex values, inspect contrast, and convert shades directly for modern frontend stylesheets.',
    highlights: [
      'Interactive visual color picker with immediate live preview',
      'Direct copy-to-clipboard for HEX, RGB, and HSL values',
      'High contrast UI suitable for quick palette testing',
    ],
    faqs: [
      {
        question: 'What color formats can I copy?',
        answer:
          'ToolAtlas displays the hex color code and allows you to copy RGB and HSL representations for use in CSS, SVG, and design software.',
      },
    ],
  },
];

export const categorySlugMap: Record<string, string> = {
  'Image Tools': 'image-tools',
  'PDF Tools': 'pdf-tools',
  'Developer Tools': 'developer-tools',
  'Text Tools': 'text-tools',
  'Typing & Tests': 'typing-and-tests',
  'QR Tools': 'qr-tools',
  'Security Tools': 'security-tools',
  'Design Tools': 'design-tools',
};

export function getCategoryBySlug(slug: string): Category | undefined {
  return categoriesData.find((c) => c.slug === slug);
}
