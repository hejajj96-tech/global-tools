import { categorySlugMap } from './categories';

export interface ToolMeta {
  intro: string;
  steps: string[];
  accept?: string;
  formula?: string;
  useCases?: string[];
  practicalExample?: string;
  faqs?: { question: string; answer: string }[];
}

export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: string;
  categorySlug: string;
  icon: string;
  priority: number;
  kind: string;
  meta: ToolMeta;
}

const createTool = (
  slug: string,
  name: string,
  description: string,
  category: string,
  icon: string,
  priority: number,
  kind: string,
  meta: ToolMeta
): Tool => ({
  slug,
  name,
  description,
  category,
  categorySlug: categorySlugMap[category] || 'utilities',
  icon,
  priority,
  kind,
  meta,
});

export const tools: Tool[] = [
  // 1. Image Tools
  createTool(
    'image-compressor',
    'Image Compressor',
    'Compress JPG, PNG and WebP images in your browser with real-time size reduction.',
    'Image Tools',
    '▣',
    1,
    'image-compress',
    {
      intro:
        'Compress JPG, PNG, and WebP images directly in your browser. Reduce file size while keeping visual quality high, without sending your photos to any remote server.',
      steps: [
        'Select an image from your device.',
        'Adjust the compression quality slider (10% to 100%).',
        'Click Compress Image and download the optimized file immediately.',
      ],
      accept: 'image/*',
      useCases: [
        'Speeding up web page load times by reducing hero and gallery asset sizes',
        'Meeting strict email attachment and file upload size limitations',
        'Saving disk storage space when archiving photos',
      ],
      practicalExample:
        'A 2.5MB mobile photo compressed at 80% quality typically shrinks to under 450KB with virtually no noticeable visual loss.',
      faqs: [
        {
          question: 'Does this compressor compromise my photo privacy?',
          answer:
            'No. The compression happens entirely in your local browser sandbox using HTML5 Canvas. Your images are never transmitted across the network.',
        },
        {
          question: 'What is the recommended quality setting for web images?',
          answer:
            'A quality setting between 75% and 85% delivers the best balance between small file size and crisp visual fidelity for web usage.',
        },
      ],
    }
  ),

  createTool(
    'image-resizer',
    'Image Resizer',
    'Resize images to exact pixel dimensions in your browser.',
    'Image Tools',
    '↔',
    2,
    'image-resize',
    {
      intro:
        'Resize images to precise width and height dimensions directly in your browser. Perfect for social media banners, profile photos, and thumbnails.',
      steps: [
        'Choose an image file from your device.',
        'Enter your desired width and height in pixels.',
        'Click Resize Image and download your resized graphic.',
      ],
      accept: 'image/*',
      formula: 'New Height = Original Height × (New Width / Original Width)',
      useCases: [
        'Formatting images for Instagram (1080×1080), YouTube thumbnails (1280×720), or LinkedIn banners (1584×396)',
        'Scaling down oversized DSLR photos before publishing them on blog articles',
      ],
      practicalExample:
        'Downscale a 4000×3000 pixel image to 800×600 for fast mobile website rendering.',
      faqs: [
        {
          question: 'Can I upscale small images without losing quality?',
          answer:
            'Upscaling an image beyond its native resolution causes interpolation pixelation. For best visual results, resizing is best used for scaling down high-resolution images.',
        },
      ],
    }
  ),

  createTool(
    'jpg-to-png',
    'JPG to PNG',
    'Convert JPG images to PNG format locally with zero quality loss.',
    'Image Tools',
    '◈',
    3,
    'image-convert',
    {
      intro:
        'Convert JPG images to lossless PNG format directly in your browser without uploading to any server.',
      steps: [
        'Choose a JPG or JPEG image from your computer or phone.',
        'Click Convert Image.',
        'Download the converted PNG file instantly.',
      ],
      accept: 'image/jpeg,.jpg,.jpeg',
      useCases: [
        'Converting lossy JPEG graphics into PNG format for graphic editing in Figma or Photoshop',
        'Preparing images for workflows requiring PNG input format',
      ],
      faqs: [
        {
          question: 'Will converting JPG to PNG make the background transparent?',
          answer:
            'No. Standard JPG files do not contain an alpha transparency channel, so the converted PNG will maintain the solid background of the original JPG.',
        },
      ],
    }
  ),

  createTool(
    'png-to-jpg',
    'PNG to JPG',
    'Convert PNG images to JPG with customizable background color.',
    'Image Tools',
    '◈',
    4,
    'image-convert',
    {
      intro:
        'Convert PNG images to JPG format directly in your browser. Choose a custom background color to replace transparent areas cleanly.',
      steps: [
        'Choose a PNG image.',
        'Select a background color fill for transparent areas.',
        'Click Convert Image and download your compact JPG file.',
      ],
      accept: 'image/png,.png',
      useCases: [
        'Significantly reducing the file size of heavy PNG screenshots and graphics',
        'Flattening transparent logos onto solid white or branded backgrounds',
      ],
      faqs: [
        {
          question: 'Why do transparent PNG areas turn black or white in JPG?',
          answer:
            'JPG format does not support transparency. ToolAtlas allows you to select a background fill color (white by default) so transparent pixels render naturally.',
        },
      ],
    }
  ),

  createTool(
    'webp-to-jpg',
    'WebP to JPG',
    'Convert WebP images to standard JPG format locally.',
    'Image Tools',
    '◈',
    5,
    'image-convert',
    {
      intro:
        'Convert modern WebP images to universal JPG format directly in your browser for maximum compatibility with older software and print shops.',
      steps: [
        'Choose a WebP image file.',
        'Click Convert Image.',
        'Save the resulting JPG file to your device.',
      ],
      accept: 'image/webp,.webp',
      useCases: [
        'Opening WebP graphics downloaded from the web in legacy image editors or office software',
        'Submitting images to platforms that only accept JPG or PNG uploads',
      ],
      faqs: [
        {
          question: 'Why convert WebP to JPG?',
          answer:
            'While WebP is excellent for web performance, some desktop applications and photo printers only support standard JPG and PNG formats.',
        },
      ],
    }
  ),

  createTool(
    'remove-exif',
    'Remove EXIF Data',
    'Create a clean copy of an image without embedded metadata or GPS tags.',
    'Image Tools',
    '⌁',
    6,
    'image-exif',
    {
      intro:
        'Strip sensitive EXIF metadata from photos. By re-encoding the image in your browser, all embedded GPS coordinates, camera serial numbers, and capture timestamps are eliminated.',
      steps: [
        'Select an image from your device.',
        'Click Clean Metadata.',
        'Download the sanitized image with all EXIF tags removed.',
      ],
      accept: 'image/*',
      useCases: [
        'Preventing accidental disclosure of your home or office GPS location when uploading photos online',
        'Complying with privacy and safety regulations for published photography',
      ],
      faqs: [
        {
          question: 'What metadata is removed?',
          answer:
            'All EXIF, IPTC, and XMP metadata including GPS coordinates, camera model, exposure settings, serial numbers, and software tags are stripped clean.',
        },
      ],
    }
  ),

  // 2. PDF Tools
  createTool(
    'jpg-to-pdf',
    'JPG to PDF',
    'Turn one or more JPG images into a single printable PDF document.',
    'PDF Tools',
    '▤',
    7,
    'jpg-pdf',
    {
      intro:
        'Convert multiple JPG images into a single, high-quality PDF document directly in your browser. Ideal for digitizing receipts, homework, and scanned documents.',
      steps: [
        'Choose one or multiple JPG images.',
        'Click Create PDF.',
        'Download your merged multi-page PDF document.',
      ],
      accept: 'image/jpeg,.jpg,.jpeg',
      useCases: [
        'Assembling photos of receipts, invoices, or textbook pages into a single organized PDF',
        'Creating portfolios or photo booklets for printing and emailing',
      ],
      faqs: [
        {
          question: 'Can I include multiple photos in a single PDF?',
          answer:
            'Yes. Select multiple files in the file chooser, and ToolAtlas will combine each photo onto its own dedicated PDF page in sequence.',
        },
      ],
    }
  ),

  createTool(
    'merge-pdf',
    'Merge PDF',
    'Combine multiple PDF files into one PDF document locally.',
    'PDF Tools',
    '▤',
    8,
    'merge-pdf',
    {
      intro:
        'Combine two or more PDF files into one continuous document directly in your browser. Fast, private, and secure.',
      steps: [
        'Select two or more PDF files from your device.',
        'Click Process PDF.',
        'Download the unified PDF document.',
      ],
      accept: 'application/pdf,.pdf',
      useCases: [
        'Combining multiple report chapters, contract appendices, or bank statements into a single file',
        'Consolidating signed cover letters with job resumes',
      ],
      faqs: [
        {
          question: 'Is there a limit on how many PDF files I can merge?',
          answer:
            'There is no artificial limit. Because processing uses your computer memory, you can merge multiple documents without paying or signing up.',
        },
      ],
    }
  ),

  createTool(
    'split-pdf',
    'Split PDF',
    'Extract selected pages from a PDF document directly in your browser.',
    'PDF Tools',
    '▤',
    9,
    'split-pdf',
    {
      intro:
        'Extract individual pages from large PDF documents directly in your browser. Create lightweight excerpts from lengthy books, reports, or legal filings.',
      steps: [
        'Choose a PDF document.',
        'Enter page numbers or ranges to extract (e.g. 1, 3-5).',
        'Download the extracted PDF.',
      ],
      accept: 'application/pdf,.pdf',
      useCases: [
        'Extracting a single signature page or invoice from an extensive contractual package',
        'Sharing only specific slides or chapters with colleagues without sending the full deck',
      ],
      faqs: [
        {
          question: 'Does splitting affect document quality or text searchability?',
          answer:
            'No. The original vector fonts, high-resolution graphics, and text selectable streams are preserved exactly as in the source document.',
        },
      ],
    }
  ),

  createTool(
    'rotate-pdf',
    'Rotate PDF',
    'Rotate PDF pages by 90, 180 or 270 degrees and download the result.',
    'PDF Tools',
    '▤',
    10,
    'rotate-pdf',
    {
      intro:
        'Fix upside down or sideways PDF pages directly in your browser. Rotate individual or all pages in 90-degree increments.',
      steps: [
        'Choose your PDF file.',
        'Select the rotation angle (90°, 180°, or 270° clockwise).',
        'Download the properly oriented PDF document.',
      ],
      accept: 'application/pdf,.pdf',
      useCases: [
        'Fixing scanned documents that were fed upside down into the scanner',
        'Aligning architectural drawings, spreadsheets, or horizontal slides into landscape view',
      ],
      faqs: [
        {
          question: 'Can I rotate all pages at once?',
          answer:
            'Yes. ToolAtlas applies the rotation transform across all pages in the document simultaneously.',
        },
      ],
    }
  ),

  createTool(
    'compress-pdf',
    'Compress PDF',
    'Optimize simple PDFs by rebuilding pages directly in your browser.',
    'PDF Tools',
    '▤',
    11,
    'compress-pdf',
    {
      intro:
        'Optimize PDF documents by eliminating redundant structure and uncompressed objects directly in your browser.',
      steps: [
        'Select a PDF file.',
        'Click Process PDF to optimize the internal object streams.',
        'Download your compressed PDF.',
      ],
      accept: 'application/pdf,.pdf',
      useCases: [
        'Reducing PDF file size for government portals and university upload limits',
        'Optimizing scanned documents before emailing them as attachments',
      ],
      faqs: [
        {
          question: 'How does client-side PDF compression work?',
          answer:
            'The tool strips unused document object metadata and rebuilds page references cleanly in memory, reducing overhead while preserving document content.',
        },
      ],
    }
  ),

  // 3. Developer Tools
  createTool(
    'json-formatter',
    'JSON Formatter',
    'Format and validate JSON instantly with syntax highlighting and indent controls.',
    'Developer Tools',
    '{}',
    12,
    'json',
    {
      intro:
        'Format, beautify, and indent raw minified JSON into clean, human-readable structure directly in your browser.',
      steps: [
        'Paste your JSON string or payload into the input editor.',
        'Click Format JSON to beautify, or Minify to compact it.',
        'Copy the formatted output with one click.',
      ],
      useCases: [
        'Debugging messy REST API responses and GraphQL payloads',
        'Structuring configuration files (package.json, tsconfig.json, settings.json)',
      ],
      practicalExample:
        'Turns `{"user":{"id":1,"name":"Alice"}}` into an indented, readable multi-line structure.',
      faqs: [
        {
          question: 'Is my JSON data safe when pasted into ToolAtlas?',
          answer:
            'Yes. Formatting is done using JavaScript JSON.parse and JSON.stringify entirely within your browser window. No data is sent over the network.',
        },
      ],
    }
  ),

  createTool(
    'json-validator',
    'JSON Validator',
    'Check JSON syntax and get pinpoint readable error locations.',
    'Developer Tools',
    '{}',
    13,
    'json',
    {
      intro:
        'Validate JSON syntax instantly. Identifies missing commas, unquoted keys, trailing commas, and malformed arrays with pinpoint accuracy.',
      steps: [
        'Paste your candidate JSON text.',
        'Click Validate JSON.',
        'Review the immediate green validation pass or red diagnostic error message.',
      ],
      useCases: [
        'Verifying webhook payloads before deploying integrations',
        'Finding elusive syntax typos in complex nested configurations',
      ],
      faqs: [
        {
          question: 'Does this validator support comments or trailing commas?',
          answer:
            'Standard RFC 8259 JSON forbids comments and trailing commas. The validator adheres strictly to the official JSON specification.',
        },
      ],
    }
  ),

  createTool(
    'base64-encoder-decoder',
    'Base64 Encoder & Decoder',
    'Encode or decode Base64 text locally with full UTF-8 support.',
    'Developer Tools',
    '<>',
    14,
    'base64',
    {
      intro:
        'Convert plaintext to Base64 or decode Base64 back into readable UTF-8 text directly in your browser.',
      steps: [
        'Enter plaintext or Base64 string in the input box.',
        'Click Encode Base64 or Decode Base64.',
        'Copy your transformed string immediately.',
      ],
      useCases: [
        'Encoding basic authorization headers for API requests',
        'Decoding data URI strings, JWT token segments, and encoded email payloads',
      ],
      practicalExample:
        'Encoding "Hello, World!" yields "SGVsbG8sIFdvcmxkIQ==".',
      faqs: [
        {
          question: 'Does this encoder support non-ASCII characters and emojis?',
          answer:
            'Yes. ToolAtlas uses safe UTF-8 byte stream encoding before Base64 conversion, ensuring international characters and emojis decode perfectly.',
        },
      ],
    }
  ),

  createTool(
    'url-encoder-decoder',
    'URL Encoder & Decoder',
    'Encode or decode URL query strings and special characters safely.',
    'Developer Tools',
    '↗',
    15,
    'url',
    {
      intro:
        'Encode special characters into percent-encoded URL values or decode them back into human-readable strings directly in your browser.',
      steps: [
        'Enter text or a URL containing query parameters.',
        'Click Encode URL to percent-encode characters, or Decode URL to restore readable text.',
        'Copy the result.',
      ],
      useCases: [
        'Encoding query parameters with spaces, ampersands, or quotes for web links',
        'Decoding tracking parameters and redirect links in marketing URLs',
      ],
      practicalExample:
        '"search=apple & banana" encodes into "search%3Dapple%20%26%20banana".',
      faqs: [
        {
          question: 'What is percent-encoding?',
          answer:
            'Percent-encoding represents reserved URI characters with a percent sign (%) followed by the two-digit hexadecimal representation of their ASCII byte value.',
        },
      ],
    }
  ),

  createTool(
    'uuid-generator',
    'UUID Generator',
    'Generate cryptographically secure UUID v4 identifiers instantly.',
    'Developer Tools',
    '#',
    16,
    'uuid',
    {
      intro:
        'Generate RFC 4122 Version 4 Universally Unique Identifiers (UUIDs) locally in your browser using cryptographic random number generators.',
      steps: [
        'Select the number of UUIDs you want to generate (1 to 100).',
        'Click Generate UUIDs.',
        'Copy the generated identifiers directly to your clipboard.',
      ],
      formula: '128-bit random number: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
      useCases: [
        'Generating primary keys for database rows and API test mocks',
        'Creating unique transaction tokens, session IDs, and correlation IDs',
      ],
      practicalExample:
        'f47ac10b-58cc-4372-a567-0e02b2c3d479 (36 characters including hyphens).',
      faqs: [
        {
          question: 'What are the chances of a UUID v4 collision?',
          answer:
            'A collision is mathematically virtually impossible. With 122 random bits, you would need to generate over 1 billion UUIDs per second for 85 years to have a 50% probability of a single collision.',
        },
      ],
    }
  ),

  createTool(
    'regex-tester',
    'Regex Tester',
    'Test regular expressions against text with instant match highlights.',
    'Developer Tools',
    '.*',
    17,
    'regex',
    {
      intro:
        'Test regular expressions in real time directly in your browser. Inspect match counts and captured groups quickly.',
      steps: [
        'Enter your regular expression pattern.',
        'Toggle flags such as Global (g).',
        'Paste test text into the input field.',
        'Review matches and extracted patterns immediately.',
      ],
      useCases: [
        'Validating email, phone number, and postal code pattern formulas',
        'Extracting URLs, hashtags, or specific data fields from log files',
      ],
      practicalExample:
        'Pattern `\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b` matches valid email addresses.',
      faqs: [
        {
          question: 'What regex engine does this tool run?',
          answer:
            'The tester runs the native ECMAScript RegExp engine embedded in your web browser.',
        },
      ],
    }
  ),

  createTool(
    'timestamp-converter',
    'Unix Timestamp Converter',
    'Convert Unix epoch timestamps to human-readable dates and vice versa.',
    'Developer Tools',
    '◷',
    18,
    'timestamp',
    {
      intro:
        'Convert Unix timestamps (seconds or milliseconds) to standard UTC and local calendar dates, or convert current dates to epoch values.',
      steps: [
        'Enter a Unix timestamp number (e.g. 1700000000) or leave blank for current time.',
        'Click Convert.',
        'Review the converted ISO-8601 UTC and local timestamp strings.',
      ],
      formula: 'Epoch = Number of seconds elapsed since 1970-01-01T00:00:00Z',
      useCases: [
        'Debugging server log timestamps, JWT expiration claims (`exp`), and cache headers',
        'Translating database integer timestamps into human-readable event dates',
      ],
      practicalExample:
        'Timestamp `1700000000` corresponds to Wednesday, November 15, 2023 22:13:20 UTC.',
      faqs: [
        {
          question: 'Does this tool automatically detect milliseconds vs seconds?',
          answer:
            'Yes. Timestamps below 1,000,000,000,000 are treated as seconds; larger values are treated as milliseconds.',
        },
      ],
    }
  ),

  // 4. Text Tools
  createTool(
    'word-counter',
    'Word Counter',
    'Count words, characters, sentences, lines, and reading time in real time.',
    'Text Tools',
    'Aa',
    19,
    'word',
    {
      intro:
        'Get instant, live statistics on your text: total words, characters with and without spaces, sentences, paragraphs, and estimated reading time.',
      steps: [
        'Paste or type your text into the editor.',
        'View the live counters update immediately as you type.',
        'Review word count, character count, and estimated reading duration.',
      ],
      formula: 'Estimated Reading Time = Word Count ÷ 200 WPM',
      useCases: [
        'Checking character limits for Twitter (280 chars), meta descriptions (155 chars), or essays',
        'Timing speech presentations and script voiceovers based on reading speed',
      ],
      faqs: [
        {
          question: 'How does the counter distinguish words?',
          answer:
            'Words are defined as clusters of non-whitespace characters delimited by spaces, line breaks, or tabs.',
        },
      ],
    }
  ),

  createTool(
    'case-converter',
    'Case Converter',
    'Convert text between UPPERCASE, lowercase, Title Case and Sentence case.',
    'Text Tools',
    'Aa',
    20,
    'case',
    {
      intro:
        'Transform text casing with one click. Convert whole paragraphs to uppercase, lowercase, title case, or sentence case without retyping.',
      steps: [
        'Paste or type your text.',
        'Click UPPERCASE, lowercase, Title Case, or Sentence case.',
        'Copy the converted text.',
      ],
      useCases: [
        'Fixing accidentally typed ALL CAPS messages or headlines',
        'Standardizing blog post titles to Title Case for editorial consistency',
      ],
      practicalExample:
        '"hello world" converted to Title Case becomes "Hello World".',
      faqs: [
        {
          question: 'Does Sentence Case capitalize after question marks and exclamation points?',
          answer:
            'Yes. Our sentence case engine capitalizes the first letter of each sentence following periods, question marks, and exclamation marks.',
        },
      ],
    }
  ),

  createTool(
    'text-cleaner',
    'Text Cleaner',
    'Clean excessive spaces, blank lines, and formatting glitches from text.',
    'Text Tools',
    '✦',
    21,
    'clean',
    {
      intro:
        'Clean and normalize messy text. Strips redundant blank lines, collapses multiple consecutive spaces into single spaces, and trims trailing whitespace.',
      steps: [
        'Paste copied text from a PDF, email, or OCR scan.',
        'Click Clean Text.',
        'Copy your neatly normalized paragraph text.',
      ],
      useCases: [
        'Removing annoying double line-breaks when pasting text from PDF documents',
        'Sanitizing raw scraped data and forum posts before publication',
      ],
      faqs: [
        {
          question: 'Will this tool delete my intentional paragraphs?',
          answer:
            'No. It condenses three or more blank lines into a clean double line-break, preserving your standard paragraph separations.',
        },
      ],
    }
  ),

  // 5. Typing & Tests
  createTool(
    'typing-test',
    'Typing Speed Test',
    'Measure your typing speed (WPM) and accuracy in your browser.',
    'Typing & Tests',
    '⌨',
    22,
    'typing',
    {
      intro:
        'Measure your keyboard typing speed and accuracy. Type the displayed passage over 30 seconds to receive your Words Per Minute (WPM) benchmark.',
      steps: [
        'Click inside the typing box.',
        'Type the text as quickly and accurately as possible.',
        'Click Calculate WPM to view your speed score and word count.',
      ],
      formula: 'WPM = (Characters Typed ÷ 5) ÷ (Time in Minutes)',
      useCases: [
        'Benchmarking typing performance before taking civil service or transcription exams',
        'Tracking personal typing speed progression when learning touch-typing',
      ],
      faqs: [
        {
          question: 'What is considered an average typing speed?',
          answer:
            'The average touch typist types around 40 words per minute (WPM). Professional typists and programmers often reach 65 to 90+ WPM.',
        },
      ],
    }
  ),

  createTool(
    'cps-test',
    'CPS Test',
    'Measure your mouse clicks per second (CPS) in real time.',
    'Typing & Tests',
    '◉',
    23,
    'cps',
    {
      intro:
        'Measure your mouse click speed. Click as fast as possible to measure your Clicks Per Second (CPS) score for gaming and reflex training.',
      steps: [
        'Click the test pad to begin the timer.',
        'Keep clicking as rapidly as possible.',
        'Review your total clicks and real-time CPS score.',
      ],
      formula: 'CPS = Total Clicks ÷ Elapsed Seconds',
      useCases: [
        'Testing jitter clicking and butterfly clicking techniques for competitive gaming (Minecraft, FPS)',
        'Benchmarking mouse button responsiveness and debounce settings',
      ],
      faqs: [
        {
          question: 'What is a good CPS score?',
          answer:
            'A regular clicking speed is between 5 and 7 CPS. Advanced competitive gamers using jitter or butterfly techniques can achieve 10 to 14+ CPS.',
        },
      ],
    }
  ),

  createTool(
    'keyboard-test',
    'Keyboard Test',
    'Check physical keyboard keys directly in your browser with interactive visualization.',
    'Typing & Tests',
    '⌨',
    24,
    'keyboard',
    {
      intro:
        'Test whether all keys on your keyboard are functioning properly. Press any key to see it highlight on the visual keyboard map in real time.',
      steps: [
        'Focus on the keyboard test area.',
        'Press each key on your keyboard one by one.',
        'Verify that all keys turn green, indicating they are sending keycodes properly.',
      ],
      useCases: [
        'Diagnosing broken or sticky switches on mechanical keyboards and laptops',
        'Testing multi-key rollover (N-key rollover) to ensure no keypresses are ghosted',
      ],
      faqs: [
        {
          question: 'Can this test identify broken laptop keys?',
          answer:
            'Yes. If pressing a specific key fails to highlight the corresponding button on the screen, that key switch or connector may be malfunctioning.',
        },
      ],
    }
  ),

  // 6. QR Tools
  createTool(
    'qr-code-generator',
    'QR Code Generator',
    'Create high-contrast QR codes for websites and text with one click.',
    'QR Tools',
    '▦',
    25,
    'qr',
    {
      intro:
        'Generate high-resolution QR codes directly in your browser. Enter any URL or message to produce a scannable, permanent QR code ready to save or print.',
      steps: [
        'Enter your website address or text message in the input box.',
        'Click Create QR to render the code on the canvas.',
        'Right-click or click download to save the QR code image.',
      ],
      useCases: [
        'Printing QR codes for restaurant menus, business cards, and marketing flyers',
        'Quickly sharing long web links from your computer screen to a mobile phone',
      ],
      faqs: [
        {
          question: 'Do these QR codes ever expire or require a monthly fee?',
          answer:
            'No. These are standard static QR codes encoding the raw URL directly into the pixel pattern. They never expire and work indefinitely.',
        },
      ],
    }
  ),

  createTool(
    'wifi-qr-code',
    'WiFi QR Code',
    'Create a QR code that allows guests to join your WiFi network instantly.',
    'QR Tools',
    '▦',
    26,
    'wifi',
    {
      intro:
        'Generate a specialized Wi-Fi QR code. When guests scan the code with their smartphone camera, they connect to your Wi-Fi network automatically without typing the password.',
      steps: [
        'Enter your Wi-Fi Network Name (SSID).',
        'Enter your Wi-Fi Password.',
        'Click Create QR and print or save the generated code.',
      ],
      formula: 'WIFI:T:WPA;S:NetworkName;P:Password;;',
      useCases: [
        'Displaying an easy connection QR code in guest rooms, Airbnb homes, offices, and coffee shops',
        'Eliminating typos when sharing long, complex Wi-Fi security keys',
      ],
      faqs: [
        {
          question: 'Is my Wi-Fi password sent to ToolAtlas servers?',
          answer:
            'No. The QR code is drawn directly in your local browser canvas. The Wi-Fi credentials never leave your device.',
        },
      ],
    }
  ),

  createTool(
    'barcode-generator',
    'Barcode Generator',
    'Create clean Code 128 barcodes locally for inventory and tracking.',
    'QR Tools',
    '▥',
    27,
    'barcode',
    {
      intro:
        'Generate clean, high-resolution Code 128 barcodes directly in your browser. Enter numbers or alphanumeric characters to render standard linear barcodes.',
      steps: [
        'Enter the alphanumeric code or SKU number.',
        'Choose your barcode format (Code 128, EAN-13, UPC).',
        'Click Generate Barcode and save your image.',
      ],
      useCases: [
        'Generating product SKU tags for inventory management and retail systems',
        'Creating barcode labels for library books, packages, and membership cards',
      ],
      faqs: [
        {
          question: 'Can Code 128 barcodes encode letters and numbers?',
          answer:
            'Yes. Code 128 is a highly versatile high-density linear barcode capable of encoding all 128 ASCII characters.',
        },
      ],
    }
  ),

  // 7. Security Tools
  createTool(
    'password-generator',
    'Password Generator',
    'Generate strong, random, cryptographically secure passwords locally.',
    'Security Tools',
    '⌘',
    28,
    'password',
    {
      intro:
        'Generate strong, unhackable passwords using cryptographically secure random number generators (CSPRNG) directly in your browser.',
      steps: [
        'Choose your desired password length (8 to 128 characters).',
        'Select which character sets to include (uppercase, lowercase, numbers, symbols).',
        'Click Generate Password and copy the result with one click.',
      ],
      useCases: [
        'Creating robust master passwords for password managers, email, and banking accounts',
        'Generating secure API secret keys and database credentials',
      ],
      practicalExample:
        'A 20-character password like `K9#mQ!v7L$xP2@wR4&yT` provides over 120 bits of entropy.',
      faqs: [
        {
          question: 'Are generated passwords saved anywhere?',
          answer:
            'Never. Passwords are generated in transient browser RAM using window.crypto.getRandomValues and vanish when the page is closed.',
        },
      ],
    }
  ),

  // 8. Design Tools
  createTool(
    'color-picker',
    'Color Picker',
    'Pick colors and copy HEX, RGB, and HSL values with live preview.',
    'Design Tools',
    '●',
    29,
    'color',
    {
      intro:
        'Select, inspect, and convert color codes directly in your browser. Copy HEX, RGB, and HSL values with one click for CSS stylesheets and design software.',
      steps: [
        'Click the color box to open the native palette.',
        'Choose or adjust your color shade.',
        'Copy the HEX code, RGB notation, or HSL values directly.',
      ],
      useCases: [
        'Extracting precise color codes for web design and frontend CSS development',
        'Converting hex values to RGB or HSL formats for opacity and gradients',
      ],
      practicalExample:
        'HEX `#6366f1` converts to `rgb(99, 102, 241)` and `hsl(239, 84%, 67%)`.',
      faqs: [
        {
          question: 'What color models are supported?',
          answer:
            'ToolAtlas supports Hexadecimal (HEX), Red-Green-Blue (RGB), and Hue-Saturation-Lightness (HSL) representations.',
        },
      ],
    }
  ),

  // 9. Extra Typing & Tests
  createTool(
    'reaction-time-test',
    'Reaction Time Test',
    'Measure how quickly you react to a visual signal in milliseconds.',
    'Typing & Tests',
    '⚡',
    30,
    'reaction',
    {
      intro:
        'Test your visual reflex speed. Wait for the test area to turn green, then click as fast as you can to measure your reaction time in milliseconds.',
      steps: [
        'Click Start Reaction Test to begin.',
        'Wait patiently while the screen is red. Do not click early!',
        'As soon as the screen turns green, click immediately to record your reaction time.',
      ],
      formula: 'Reaction Time = Click Timestamp − Signal Timestamp (in ms)',
      useCases: [
        'Benchmarking reflex response times for competitive gaming and athletics',
        'Testing alertness and fatigue levels during focused work sessions',
      ],
      practicalExample:
        'Average visual reaction time for healthy adults is approximately 200–250 milliseconds.',
      faqs: [
        {
          question: 'What is considered a fast reaction time?',
          answer:
            'Any score under 200 milliseconds is exceptionally fast. Elite esports athletes frequently achieve reaction times between 150 and 190 ms.',
        },
      ],
    }
  ),
];

export const categories = [...new Set(tools.map((t) => t.category))];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getToolsByCategorySlug(categorySlug: string): Tool[] {
  return tools.filter((t) => t.categorySlug === categorySlug);
}
