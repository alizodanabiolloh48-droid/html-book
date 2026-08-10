const bookData = [
    {
        category: "html",
        title: "<!DOCTYPE>",
        type: "HTML Tag",
        info: "Ба браузер мегӯяд, ки ҳуҷҷат HTML5 мебошад.",
        why: "Барои дуруст кор кардани стандартҳои HTML истифода мешавад.",
        example: "<!DOCTYPE html>"
    },


    {
        category: "html",
        title: "<html>",
        type: "HTML Tag",
        info: "Теги асосии тамоми ҳуҷҷати HTML мебошад.",
        why: "Ҳамаи кодҳои HTML дар дохили он ҷойгир мешаванд.",
        example: "<html>Код</html>"
    },


    {
        category: "html",
        title: "<head>",
        type: "HTML Tag",
        info: "Қисми маълумоти техникии саҳифа мебошад.",
        why: "Барои title, meta, link ва дигар маълумот истифода мешавад.",
        example: "<head><title>Сайт</title></head>"
    },


    {
        category: "html",
        title: "<title>",
        type: "HTML Tag",
        info: "Номи саҳифаро дар болои браузер нишон медиҳад.",
        why: "Барои муайян кардани номи саҳифа истифода мешавад.",
        example: "<title>Web Book</title>"
    },


    {
        category: "html",
        title: "<body>",
        type: "HTML Tag",
        info: "Қисми намоёни саҳифа мебошад.",
        why: "Матн, акс, видео ва элементҳо дар ин ҷо ҷойгир мешаванд.",
        example: "<body>Hello</body>"
    },


    {
        category: "html",
        title: "<h1> - <h6>",
        type: "HTML Tags",
        info: "Сарлавҳаҳо аз калонтарин то хурдтарин мебошанд.",
        why: "Барои сохтани унвонҳо истифода мешаванд.",
        example: "<h1>Сарлавҳа</h1>"
    },


    {
        category: "html",
        title: "<p>",
        type: "HTML Tag",
        info: "Барои сохтани параграф истифода мешавад.",
        why: "Матнҳоро ба қисмҳо ҷудо мекунад.",
        example: "<p>Матн</p>"
    },


    {
        category: "html",
        title: "<div>",
        type: "HTML Tag",
        info: "Блоки умумӣ месозад.",
        why: "Барои гурӯҳбандии элементҳо истифода мешавад.",
        example: "<div>Box</div>"
    },


    {
        category: "html",
        title: "<span>",
        type: "HTML Tag",
        info: "Қисми хурди матнро ҷудо мекунад.",
        why: "Барои тағйири як қисми матн истифода мешавад.",
        example: "<span>Text</span>"
    },


    {
        category: "html",
        title: "<a>",
        type: "HTML Tag",
        info: "Пайванд месозад.",
        why: "Барои гузаштан ба дигар саҳифа истифода мешавад.",
        example: "<a href='site.com'>Link</a>"
    },


    {
        category: "html",
        title: "<img>",
        type: "HTML Tag",
        info: "Аксро дар саҳифа нишон медиҳад.",
        why: "Барои илова кардани тасвир истифода мешавад.",
        example: "<img src='photo.jpg'>"
    },


    {
        category: "html",
        title: "<button>",
        type: "HTML Tag",
        info: "Тугма месозад.",
        why: "Барои иҷрои амалҳо истифода мешавад.",
        example: "<button>Click</button>"
    },


    {
        category: "html",
        title: "<input>",
        type: "HTML Tag",
        info: "Ҷои ворид кардани маълумот месозад.",
        why: "Барои формаҳо истифода мешавад.",
        example: "<input type='text'>"
    },


    {
        category: "html",
        title: "<form>",
        type: "HTML Tag",
        info: "Формаи воридкунии маълумот месозад.",
        why: "Барои сабти ном, ҷустуҷӯ ва фиристодани маълумот истифода мешавад.",
        example: "<form></form>"
    },


    {
        category: "css",
        title: "color",
        type: "CSS Property",
        info: "Ранги матнро тағйир медиҳад.",
        why: "Барои зебо кардани матн истифода мешавад.",
        example: "color:red;"
    },


    {
        category: "css",
        title: "background",
        type: "CSS Property",
        info: "Заминаи элементро муайян мекунад.",
        why: "Барои гузоштани ранг ё акс ба замина истифода мешавад.",
        example: "background:blue;"
    },


    {
        category: "css",
        title: "border-radius",
        type: "CSS Property",
        info: "Кунҷҳои қуттиро гирд мекунад.",
        why: "Барои сохтани дизайнҳои зебо истифода мешавад.",
        example: "border-radius:15px;"
    },


    {
        category: "js",
        title: "let",
        type: "JavaScript",
        info: "Барои сохтани тағйирёбанда истифода мешавад.",
        why: "Барои нигоҳ доштани маълумот лозим аст.",
        example: "let name='Ali';"
    },


    {
        category: "js",
        title: "function",
        type: "JavaScript",
        info: "Гурӯҳи фармонҳо барои иҷрои вазифа мебошад.",
        why: "Барои истифодаи такрории код истифода мешавад.",
        example: "function test(){}"
    },
    {
        category: "html",
        title: "<textarea>",
        type: "HTML Tag",
        info: "Қуттии навиштани матни калон месозад.",
        why: "Барои гирифтани матни дароз аз корбар истифода мешавад.",
        example: "<textarea>Матн</textarea>"
    },


    {
        category: "html",
        title: "<label>",
        type: "HTML Tag",
        info: "Номи элементҳои форма را нишон медиҳад.",
        why: "Барои фаҳмондани input истифода мешавад.",
        example: "<label>Ном</label>"
    },


    {
        category: "html",
        title: "<select>",
        type: "HTML Tag",
        info: "Рӯйхати интихобӣ месозад.",
        why: "Барои интихоби як ё якчанд вариант истифода мешавад.",
        example: "<select><option>HTML</option></select>"
    },


    {
        category: "html",
        title: "<option>",
        type: "HTML Tag",
        info: "Як варианти дохили select мебошад.",
        why: "Барои сохтани интихобҳо истифода мешавад.",
        example: "<option>CSS</option>"
    },


    {
        category: "html",
        title: "<fieldset>",
        type: "HTML Tag",
        info: "Қисмҳои формаҳоро гурӯҳ мекунад.",
        why: "Барои тартиб додани форма истифода мешавад.",
        example: "<fieldset></fieldset>"
    },


    {
        category: "html",
        title: "<legend>",
        type: "HTML Tag",
        info: "Номи гурӯҳи fieldset-ро нишон медиҳад.",
        why: "Барои шарҳи қисми форма истифода мешавад.",
        example: "<legend>Маълумот</legend>"
    },


    {
        category: "html",
        title: "<iframe>",
        type: "HTML Tag",
        info: "Саҳифаи дигарро дар дохили сайт мекушояд.",
        why: "Барои ҷойгир кардани видео ё саҳифаи дигар истифода мешавад.",
        example: "<iframe src='page.html'></iframe>"
    },


    {
        category: "html",
        title: "<audio>",
        type: "HTML Tag",
        info: "Файли садоро дар сайт мегузорад.",
        why: "Барои навохтани мусиқӣ ё овоз истифода мешавад.",
        example: "<audio controls></audio>"
    },


    {
        category: "html",
        title: "<video>",
        type: "HTML Tag",
        info: "Видео дар саҳифа нишон медиҳад.",
        why: "Барои гузоштани видео истифода мешавад.",
        example: "<video controls></video>"
    },


    {
        category: "html",
        title: "<source>",
        type: "HTML Tag",
        info: "Манбаи файл барои audio ва video муайян мекунад.",
        why: "Барои гузоштани форматҳои гуногуни медиа истифода мешавад.",
        example: "<source src='video.mp4'>"
    },


    {
        category: "html",
        title: "<canvas>",
        type: "HTML Tag",
        info: "Ҷой барои кашидани графика месозад.",
        why: "Барои бозиҳо, расмкашӣ ва графика истифода мешавад.",
        example: "<canvas></canvas>"
    },


    {
        category: "html",
        title: "<svg>",
        type: "HTML Tag",
        info: "Графикаи векторӣ месозад.",
        why: "Барои сохтани иконка ва расмҳои тағйирёбанда истифода мешавад.",
        example: "<svg></svg>"
    },


    {
        category: "html",
        title: "<figure>",
        type: "HTML Tag",
        info: "Барои гурӯҳи акс ва шарҳи он истифода мешавад.",
        why: "Барои медиа бо тавсиф истифода мешавад.",
        example: "<figure></figure>"
    },


    {
        category: "html",
        title: "<figcaption>",
        type: "HTML Tag",
        info: "Шарҳи figure мебошад.",
        why: "Барои навиштани номи акс ё тасвир истифода мешавад.",
        example: "<figcaption>Расм</figcaption>"
    },


    {
        category: "html",
        title: "<header>",
        type: "HTML Tag",
        info: "Қисми болоии саҳифа ё бахшро месозад.",
        why: "Барои сарлавҳа ва меню истифода мешавад.",
        example: "<header>Logo</header>"
    },


    {
        category: "html",
        title: "<footer>",
        type: "HTML Tag",
        info: "Қисми поёнии саҳифа мебошад.",
        why: "Барои маълумоти охир, ҳуқуқ ва пайвандҳо истифода мешавад.",
        example: "<footer>2026</footer>"
    },
        {
        category: "html",
        title: "<main>",
        type: "HTML Tag",
        info: "Қисми асосии мундариҷаи саҳифаро муайян мекунад.",
        why: "Барои нишон додани қисми асосии сайт истифода мешавад.",
        example: "<main>Content</main>"
    },


    {
        category: "html",
        title: "<section>",
        type: "HTML Tag",
        info: "Як қисми алоҳидаи саҳифаро месозад.",
        why: "Барои ҷудо кардани мавзӯъҳо ва блокҳо истифода мешавад.",
        example: "<section>About</section>"
    },


    {
        category: "html",
        title: "<article>",
        type: "HTML Tag",
        info: "Мақола ё маълумоти мустақилро нишон медиҳад.",
        why: "Барои блог, хабар ва матни алоҳида истифода мешавад.",
        example: "<article>News</article>"
    },


    {
        category: "html",
        title: "<nav>",
        type: "HTML Tag",
        info: "Қисми пайвандҳои навигатсияро месозад.",
        why: "Барои менюи сайт истифода мешавад.",
        example: "<nav>Menu</nav>"
    },


    {
        category: "html",
        title: "<aside>",
        type: "HTML Tag",
        info: "Маълумоти иловагии паҳлӯиро нишон медиҳад.",
        why: "Барои sidebar ва маълумоти иловагӣ истифода мешавад.",
        example: "<aside>Info</aside>"
    },


    {
        category: "html",
        title: "<details>",
        type: "HTML Tag",
        info: "Қисми пинҳоншаванда месозад.",
        why: "Барои кушодан ва бастани маълумоти иловагӣ истифода мешавад.",
        example: "<details>More</details>"
    },


    {
        category: "html",
        title: "<summary>",
        type: "HTML Tag",
        info: "Сарлавҳаи details мебошад.",
        why: "Барои нишон додани номи қисми пинҳон истифода мешавад.",
        example: "<summary>Click</summary>"
    },


    {
        category: "html",
        title: "<dialog>",
        type: "HTML Tag",
        info: "Равзанаи диалогӣ месозад.",
        why: "Барои popup ва равзанаҳои махсус истифода мешавад.",
        example: "<dialog>Hello</dialog>"
    },


    {
        category: "html",
        title: "<time>",
        type: "HTML Tag",
        info: "Сана ва вақтро нишон медиҳад.",
        why: "Барои маълумоти вақтӣ истифода мешавад.",
        example: "<time>2026</time>"
    },


    {
        category: "html",
        title: "<abbr>",
        type: "HTML Tag",
        info: "Ихтисор ё кӯтоҳнависиро нишон медиҳад.",
        why: "Барои шарҳи калимаҳои кӯтоҳшуда истифода мешавад.",
        example: "<abbr title='HyperText'>HTML</abbr>"
    },


    {
        category: "html",
        title: "<address>",
        type: "HTML Tag",
        info: "Маълумоти тамосро нишон медиҳад.",
        why: "Барои email, адрес ва алоқа истифода мешавад.",
        example: "<address>Email</address>"
    },


    {
        category: "html",
        title: "<cite>",
        type: "HTML Tag",
        info: "Номи асар ё манбаъро нишон медиҳад.",
        why: "Барои ишора ба манбаъ истифода мешавад.",
        example: "<cite>Book</cite>"
    },


    {
        category: "html",
        title: "<bdi>",
        type: "HTML Tag",
        info: "Самти матнро ҷудо мекунад.",
        why: "Барои матнҳои гуногунзабона истифода мешавад.",
        example: "<bdi>Text</bdi>"
    },


    {
        category: "html",
        title: "<bdo>",
        type: "HTML Tag",
        info: "Самти навишти матнро тағйир медиҳад.",
        why: "Барои RTL ва LTR истифода мешавад.",
        example: "<bdo dir='rtl'>Text</bdo>"
    },
        {
        category: "html",
        title: "<picture>",
        type: "HTML Tag",
        info: "Барои нишон додани тасвирҳои гуногун вобаста ба экран истифода мешавад.",
        why: "Барои Responsive Image истифода мешавад.",
        example: "<picture><img src='photo.jpg'></picture>"
    },


    {
        category: "html",
        title: "<source>",
        type: "HTML Tag",
        info: "Манбаи файл барои picture, audio ва video муайян мекунад.",
        why: "Барои додани якчанд варианти файл истифода мешавад.",
        example: "<source src='image.webp'>"
    },


    {
        category: "html",
        title: "<track>",
        type: "HTML Tag",
        info: "Субтитр ё матни ҳамроҳи видеоро илова мекунад.",
        why: "Барои captions ва subtitles истифода мешавад.",
        example: "<track kind='subtitles'>"
    },


    {
        category: "html",
        title: "<map>",
        type: "HTML Tag",
        info: "Харитаи фаъол дар дохили акс месозад.",
        why: "Барои сохтани нуқтаҳои кликшаванда дар тасвир истифода мешавад.",
        example: "<map name='map'></map>"
    },


    {
        category: "html",
        title: "<area>",
        type: "HTML Tag",
        info: "Қисми кликшавандаи map мебошад.",
        why: "Барои муайян кардани минтақаи акс истифода мешавад.",
        example: "<area shape='rect'>"
    },


    {
        category: "html",
        title: "<object>",
        type: "HTML Tag",
        info: "Барои ҷойгир кардани файл ё объект истифода мешавад.",
        why: "Барои PDF, файлҳо ва объектҳои беруна истифода мешавад.",
        example: "<object data='file.pdf'></object>"
    },


    {
        category: "html",
        title: "<embed>",
        type: "HTML Tag",
        info: "Файли берунаро дар саҳифа ҷойгир мекунад.",
        why: "Барои илова кардани медиа ё плагин истифода мешавад.",
        example: "<embed src='file.pdf'>"
    },


    {
        category: "html",
        title: "<meter>",
        type: "HTML Tag",
        info: "Қимати ченшавандаро нишон медиҳад.",
        why: "Барои нишон додани сатҳ, фоиз ё қувва истифода мешавад.",
        example: "<meter value='70'>70%</meter>"
    },


    {
        category: "html",
        title: "<progress>",
        type: "HTML Tag",
        info: "Нишондиҳандаи пешрафт месозад.",
        why: "Барои нишон додани раванди боргирӣ истифода мешавад.",
        example: "<progress value='50' max='100'></progress>"
    },


    {
        category: "html",
        title: "<output>",
        type: "HTML Tag",
        info: "Натиҷаи ҳисоб ё амалро нишон медиҳад.",
        why: "Барои нишон додани натиҷаи формаҳо истифода мешавад.",
        example: "<output>100</output>"
    },


    {
        category: "html",
        title: "<template>",
        type: "HTML Tag",
        info: "Шаблони пинҳонии HTML нигоҳ медорад.",
        why: "Барои сохтани элементҳо бо JavaScript истифода мешавад.",
        example: "<template>HTML</template>"
    },


    {
        category: "html",
        title: "<noscript>",
        type: "HTML Tag",
        info: "Матнеро нишон медиҳад, агар JavaScript хомӯш бошад.",
        why: "Барои дастгирии браузерҳои бе JavaScript истифода мешавад.",
        example: "<noscript>Enable JS</noscript>"
    },


    {
        category: "html",
        title: "<base>",
        type: "HTML Tag",
        info: "URL-и асосии пайвандҳоро муайян мекунад.",
        why: "Барои кӯтоҳ кардани роҳҳои URL истифода мешавад.",
        example: "<base href='https://site.com/'>"
    },


    {
        category: "html",
        title: "<link>",
        type: "HTML Tag",
        info: "Файлҳои берунаро пайваст мекунад.",
        why: "Барои CSS, icon ва дигар файлҳо истифода мешавад.",
        example: "<link rel='stylesheet' href='style.css'>"
    },


    {
        category: "html",
        title: "<meta>",
        type: "HTML Tag",
        info: "Маълумоти иловагӣ дар бораи саҳифа медиҳад.",
        why: "Барои charset, SEO ва responsive истифода мешавад.",
        example: "<meta charset='UTF-8'>"
    },
        {
        category: "html",
        title: "<style>",
        type: "HTML Tag",
        info: "Коди CSS-ро дар дохили HTML ҷойгир мекунад.",
        why: "Барои навиштани дизайн дар дохили саҳифа истифода мешавад.",
        example: "<style>body{color:red;}</style>"
    },


    {
        category: "html",
        title: "<script>",
        type: "HTML Tag",
        info: "Коди JavaScript-ро ба саҳифа пайваст мекунад.",
        why: "Барои илова кардани функсия ва ҳаракат истифода мешавад.",
        example: "<script>alert('Hi')</script>"
    },


    {
        category: "html",
        title: "<noscript>",
        type: "HTML Tag",
        info: "Матнро вақте нишон медиҳад, ки JavaScript фаъол нест.",
        why: "Барои дастгирии браузерҳои бе JavaScript истифода мешавад.",
        example: "<noscript>Enable JS</noscript>"
    },


    {
        category: "html",
        title: "<var>",
        type: "HTML Tag",
        info: "Тағйирёбандаи математикӣ ё барномасозиро нишон медиҳад.",
        why: "Барои нишон додани номи тағйирёбанда истифода мешавад.",
        example: "<var>x</var>"
    },


    {
        category: "html",
        title: "<samp>",
        type: "HTML Tag",
        info: "Натиҷаи барномаи компютериро нишон медиҳад.",
        why: "Барои нишон додани output истифода мешавад.",
        example: "<samp>Result</samp>"
    },


    {
        category: "html",
        title: "<kbd>",
        type: "HTML Tag",
        info: "Вуруди клавиатураро нишон медиҳад.",
        why: "Барои нишон додани тугмаҳои клавиатура истифода мешавад.",
        example: "<kbd>Ctrl</kbd>"
    },


    {
        category: "html",
        title: "<dfn>",
        type: "HTML Tag",
        info: "Истилоҳеро муайян мекунад.",
        why: "Барои шарҳи калимаҳои махсус истифода мешавад.",
        example: "<dfn>HTML</dfn>"
    },


    {
        category: "html",
        title: "<ruby>",
        type: "HTML Tag",
        info: "Шарҳи хурд болои матн нишон медиҳад.",
        why: "Барои талаффузи баъзе забонҳо истифода мешавад.",
        example: "<ruby>漢</ruby>"
    },


    {
        category: "html",
        title: "<rt>",
        type: "HTML Tag",
        info: "Матни шарҳии ruby мебошад.",
        why: "Барои нишон додани талаффуз истифода мешавад.",
        example: "<rt>kan</rt>"
    },


    {
        category: "html",
        title: "<rp>",
        type: "HTML Tag",
        info: "Матни иловагӣ барои браузерҳои кӯҳна мебошад.",
        why: "Барои дастгирии ruby истифода мешавад.",
        example: "<rp>(</rp>"
    },


    {
        category: "html",
        title: "<wbr>",
        type: "HTML Tag",
        info: "Ҷои имконпазири шикастани сатрро нишон медиҳад.",
        why: "Барои калимаҳои дароз истифода мешавад.",
        example: "Super<wbr>LongWord"
    },


    {
        category: "html",
        title: "<center>",
        type: "HTML Tag (obsolete)",
        info: "Матнро дар марказ мегузошт.",
        why: "Ҳоло ба ҷойи он CSS истифода мешавад.",
        example: "<center>Text</center>"
    },


    {
        category: "html",
        title: "<font>",
        type: "HTML Tag (obsolete)",
        info: "Ранг ва андозаи матнро тағйир медод.",
        why: "Ҳоло бо CSS иваз шудааст.",
        example: "<font color='red'>Text</font>"
    },


    {
        category: "html",
        title: "<big>",
        type: "HTML Tag (obsolete)",
        info: "Матнро калон мекард.",
        why: "Ҳоло бо CSS font-size истифода мешавад.",
        example: "<big>Text</big>"
    },
        {
        category:"html",
        title:"<track>",
        type:"HTML Tag",
        info:"Матни ҳамроҳи видео (subtitle) илова мекунад.",
        why:"Барои субтитр ва тавсифи видео истифода мешавад.",
        example:"<track kind='subtitles'>"
    },


    {
        category:"html",
        title:"<colgroup>",
        type:"HTML Tag",
        info:"Гурӯҳи сутунҳои ҷадвалро муайян мекунад.",
        why:"Барои тағйири намуди якчанд сутуни table истифода мешавад.",
        example:"<colgroup></colgroup>"
    },


    {
        category:"html",
        title:"<col>",
        type:"HTML Tag",
        info:"Як сутуни ҷадвалро муайян мекунад.",
        why:"Барои танзими сутунҳои table истифода мешавад.",
        example:"<col span='2'>"
    },


    {
        category:"html",
        title:"<caption>",
        type:"HTML Tag",
        info:"Номи ҷадвалро нишон медиҳад.",
        why:"Барои шарҳи table истифода мешавад.",
        example:"<caption>Users</caption>"
    },


    {
        category:"html",
        title:"<menu>",
        type:"HTML Tag",
        info:"Рӯйхати фармонҳо месозад.",
        why:"Барои меню ва рӯйхат истифода мешавад.",
        example:"<menu></menu>"
    },


    {
        category:"html",
        title:"<search>",
        type:"HTML Tag",
        info:"Қисми ҷустуҷӯи саҳифаро муайян мекунад.",
        why:"Барои сохтори semantic search истифода мешавад.",
        example:"<search></search>"
    },


    {
        category:"html",
        title:"<hgroup>",
        type:"HTML Tag",
        info:"Якҷоя кардани сарлавҳа ва зерсарлавҳа истифода мешавад.",
        why:"Барои гурӯҳи унвонҳо истифода мешавад.",
        example:"<hgroup><h1>Title</h1></hgroup>"
    },


    {
        category:"html",
        title:"<data>",
        type:"HTML Tag",
        info:"Маълумоти намоёнро бо арзиши мошинӣ пайваст мекунад.",
        why:"Барои коркарди маълумот аз тарафи барномаҳо истифода мешавад.",
        example:"<data value='123'>Product</data>"
    },


    {
        category:"html",
        title:"<bdi>",
        type:"HTML Tag",
        info:"Матни дорои самти алоҳидаро ҷудо мекунад.",
        why:"Барои матнҳои гуногунзабон истифода мешавад.",
        example:"<bdi>Text</bdi>"
    },


    {
        category:"html",
        title:"<dialog>",
        type:"HTML Tag",
        info:"Равзанаи махсус месозад.",
        why:"Барои огоҳӣ ва равзанаҳои popup истифода мешавад.",
        example:"<dialog>Message</dialog>"
    },


    {
        category:"html",
        title:"<portal>",
        type:"Experimental Tag",
        info:"Барои ҷойгир кардани саҳифаи дигар истифода мешуд.",
        why:"Теги таҷрибавӣ буда, дар ҳама браузерҳо дастгирӣ намешавад.",
        example:"<portal src='page.html'></portal>"
    },


    {
        category:"html",
        title:"<slot>",
        type:"HTML Web Component Tag",
        info:"Ҷой барои гузоштани мундариҷа дар Web Components мебошад.",
        why:"Барои сохтани компонентҳои такрорӣ истифода мешавад.",
        example:"<slot></slot>"
    },


    {
        category:"html",
        title:"<template>",
        type:"HTML Tag",
        info:"Коди тайёрро бе нишон додан нигоҳ медорад.",
        why:"Барои сохтани элементҳо бо JavaScript истифода мешавад.",
        example:"<template>Box</template>"
    },
        {
        category:"html",
        title:"id",
        type:"HTML Attribute",
        info:"Ба элемент номи ягона медиҳад.",
        why:"Барои CSS, JavaScript ва ёфтани элемент истифода мешавад.",
        example:"<div id='box'>Text</div>"
    },


    {
        category:"html",
        title:"class",
        type:"HTML Attribute",
        info:"Ба элемент як ё якчанд номи гурӯҳӣ медиҳад.",
        why:"Барои додани CSS ва кор бо JavaScript истифода мешавад.",
        example:"<div class='card'>Box</div>"
    },


    {
        category:"html",
        title:"style",
        type:"HTML Attribute",
        info:"CSS-ро бевосита ба элемент менависад.",
        why:"Барои тағйири намуди як элемент истифода мешавад.",
        example:"<p style='color:red'>Text</p>"
    },


    {
        category:"html",
        title:"title",
        type:"HTML Attribute",
        info:"Маълумоти иловагӣ ҳангоми болои элемент бурдани муш нишон медиҳад.",
        why:"Барои шарҳи кӯтоҳ истифода мешавад.",
        example:"<button title='Click'>OK</button>"
    },


    {
        category:"html",
        title:"href",
        type:"HTML Attribute",
        info:"Суроғаи пайвандро муайян мекунад.",
        why:"Барои гузаштан ба дигар саҳифа ё сайт истифода мешавад.",
        example:"<a href='https://google.com'>Google</a>"
    },


    {
        category:"html",
        title:"src",
        type:"HTML Attribute",
        info:"Манбаи файлро нишон медиҳад.",
        why:"Барои акс, видео, JavaScript ва дигар файлҳо истифода мешавад.",
        example:"<img src='photo.jpg'>"
    },


    {
        category:"html",
        title:"alt",
        type:"HTML Attribute",
        info:"Матни ивазкунандаи акс мебошад.",
        why:"Барои SEO ва вақте акс кушода намешавад истифода мешавад.",
        example:"<img src='cat.jpg' alt='Cat'>"
    },


    {
        category:"html",
        title:"width",
        type:"HTML Attribute",
        info:"Паҳноии элементро муайян мекунад.",
        why:"Барои андозаи акс ва баъзе элементҳо истифода мешавад.",
        example:"<img width='300'>"
    },


    {
        category:"html",
        title:"height",
        type:"HTML Attribute",
        info:"Баландии элементро муайян мекунад.",
        why:"Барои андозаи элемент истифода мешавад.",
        example:"<img height='200'>"
    },


    {
        category:"html",
        title:"type",
        type:"HTML Attribute",
        info:"Навъи элементро муайян мекунад.",
        why:"Дар input, button, script ва дигар ҷойҳо истифода мешавад.",
        example:"<input type='text'>"
    },


    {
        category:"html",
        title:"name",
        type:"HTML Attribute",
        info:"Номи элементро муайян мекунад.",
        why:"Барои фиристодани маълумоти форма истифода мешавад.",
        example:"<input name='username'>"
    },


    {
        category:"html",
        title:"value",
        type:"HTML Attribute",
        info:"Қимати пешфарзи элементро медиҳад.",
        why:"Барои input ва option истифода мешавад.",
        example:"<input value='Ali'>"
    },


    {
        category:"html",
        title:"placeholder",
        type:"HTML Attribute",
        info:"Матни роҳнамо дар дохили input нишон медиҳад.",
        why:"Барои фаҳмондани чӣ навиштан лозим аст истифода мешавад.",
        example:"<input placeholder='Search'>"
    },


    {
        category:"html",
        title:"required",
        type:"HTML Attribute",
        info:"Майдонро ҳатмӣ мекунад.",
        why:"Барои санҷиши форма истифода мешавад.",
        example:"<input required>"
    },
        {
        category:"html",
        title:"disabled",
        type:"HTML Attribute",
        info:"Элементро ғайрифаъол мекунад.",
        why:"Барои бастани input ё button истифода мешавад.",
        example:"<button disabled>Send</button>"
    },


    {
        category:"html",
        title:"readonly",
        type:"HTML Attribute",
        info:"Майдонро танҳо барои хондан мекунад.",
        why:"Корбар наметавонад қиматро тағйир диҳад.",
        example:"<input readonly value='Text'>"
    },


    {
        category:"html",
        title:"checked",
        type:"HTML Attribute",
        info:"Checkbox ё radio-ро интихобшуда мекунад.",
        why:"Барои интихоби пешфарз истифода мешавад.",
        example:"<input type='checkbox' checked>"
    },


    {
        category:"html",
        title:"selected",
        type:"HTML Attribute",
        info:"Як option-ро интихобшуда мекунад.",
        why:"Барои интихоби пешфарзи select истифода мешавад.",
        example:"<option selected>HTML</option>"
    },


    {
        category:"html",
        title:"multiple",
        type:"HTML Attribute",
        info:"Ба корбар иҷозаи интихоби якчанд вариант медиҳад.",
        why:"Барои select ва input file истифода мешавад.",
        example:"<select multiple></select>"
    },


    {
        category:"html",
        title:"autoplay",
        type:"HTML Attribute",
        info:"Медиа худкор оғоз мешавад.",
        why:"Барои автоматӣ оғоз кардани audio ё video истифода мешавад.",
        example:"<video autoplay></video>"
    },


    {
        category:"html",
        title:"controls",
        type:"HTML Attribute",
        info:"Тугмаҳои идоракунии audio ё video нишон медиҳад.",
        why:"Барои play, pause ва овоз истифода мешавад.",
        example:"<video controls></video>"
    },


    {
        category:"html",
        title:"loop",
        type:"HTML Attribute",
        info:"Медиаро аз нав такрор мекунад.",
        why:"Барои такрори видео ё аудио истифода мешавад.",
        example:"<audio loop></audio>"
    },


    {
        category:"html",
        title:"muted",
        type:"HTML Attribute",
        info:"Овозро хомӯш мекунад.",
        why:"Барои оғоз кардани видео бе садо истифода мешавад.",
        example:"<video muted></video>"
    },


    {
        category:"html",
        title:"download",
        type:"HTML Attribute",
        info:"Файлро барои зеркашӣ пешниҳод мекунад.",
        why:"Барои сохтани пайванди download истифода мешавад.",
        example:"<a href='file.pdf' download>Download</a>"
    },


    {
        category:"html",
        title:"target",
        type:"HTML Attribute",
        info:"Муайян мекунад, ки пайванд дар куҷо кушода шавад.",
        why:"Барои кушодани саҳифа дар равзанаи нав истифода мешавад.",
        example:"<a target='_blank'>Link</a>"
    },


    {
        category:"html",
        title:"rel",
        type:"HTML Attribute",
        info:"Муносибати байни ҳуҷҷатҳо муайян мекунад.",
        why:"Барои link ва SEO истифода мешавад.",
        example:"<link rel='stylesheet'>"
    },


    {
        category:"html",
        title:"action",
        type:"HTML Attribute",
        info:"Суроғаи фиристодани маълумоти форма мебошад.",
        why:"Барои муайян кардани сервери қабулкунанда истифода мешавад.",
        example:"<form action='/send'>"
    },


    {
        category:"html",
        title:"method",
        type:"HTML Attribute",
        info:"Тарзи фиристодани маълумоти форма мебошад.",
        why:"Барои GET ё POST истифода мешавад.",
        example:"<form method='post'>"
    },


    {
        category:"html",
        title:"for",
        type:"HTML Attribute",
        info:"Label-ро ба input пайваст мекунад.",
        why:"Барои клик кардани label ва интихоби input истифода мешавад.",
        example:"<label for='name'>Name</label>"
    },


    {
        category:"html",
        title:"data-*",
        type:"HTML Attribute",
        info:"Барои нигоҳ доштани маълумоти шахсӣ дар HTML истифода мешавад.",
        why:"JavaScript метавонад ин маълумотро гирад.",
        example:"<div data-id='10'></div>"
    },
        {
        category:"html",
        title:"lang",
        type:"HTML Attribute",
        info:"Забони асосии ҳуҷҷати HTML-ро муайян мекунад.",
        why:"Барои браузер, SEO ва хонандаҳои экран истифода мешавад.",
        example:"<html lang='tg'>"
    },


    {
        category:"html",
        title:"dir",
        type:"HTML Attribute",
        info:"Самти навишти матнро муайян мекунад.",
        why:"Барои матнҳои чап ба рост ё рост ба чап истифода мешавад.",
        example:"<html dir='rtl'>"
    },


    {
        category:"html",
        title:"hidden",
        type:"HTML Attribute",
        info:"Элементро пинҳон мекунад.",
        why:"Барои пинҳон кардани маълумот истифода мешавад.",
        example:"<div hidden>Text</div>"
    },


    {
        category:"html",
        title:"draggable",
        type:"HTML Attribute",
        info:"Муайян мекунад, ки элемент кашида мешавад ё не.",
        why:"Барои Drag and Drop истифода мешавад.",
        example:"<img draggable='true'>"
    },


    {
        category:"html",
        title:"contenteditable",
        type:"HTML Attribute",
        info:"Иҷозаи таҳрири матни элементро медиҳад.",
        why:"Барои сохтани муҳаррири матн истифода мешавад.",
        example:"<div contenteditable='true'>Edit</div>"
    },


    {
        category:"html",
        title:"spellcheck",
        type:"HTML Attribute",
        info:"Санҷиши имлоро фаъол ё хомӯш мекунад.",
        why:"Барои тафтиши дурустии навишт истифода мешавад.",
        example:"<textarea spellcheck='true'></textarea>"
    },


    {
        category:"html",
        title:"translate",
        type:"HTML Attribute",
        info:"Муайян мекунад, ки матн тарҷума шавад ё не.",
        why:"Барои назорати тарҷумаи автоматӣ истифода мешавад.",
        example:"<span translate='no'>HTML</span>"
    },


    {
        category:"html",
        title:"tabindex",
        type:"HTML Attribute",
        info:"Тартиби гузаштан бо тугмаи Tab-ро муайян мекунад.",
        why:"Барои дастрасӣ (Accessibility) истифода мешавад.",
        example:"<button tabindex='1'>OK</button>"
    },


    {
        category:"html",
        title:"accesskey",
        type:"HTML Attribute",
        info:"Тугмаи зуд барои элемент месозад.",
        why:"Барои дастрасии тез истифода мешавад.",
        example:"<button accesskey='s'>Save</button>"
    },


    {
        category:"html",
        title:"autofocus",
        type:"HTML Attribute",
        info:"Ҳангоми кушодани саҳифа ба элемент диққат медиҳад.",
        why:"Барои input-и аввал истифода мешавад.",
        example:"<input autofocus>"
    },


    {
        category:"html",
        title:"min",
        type:"HTML Attribute",
        info:"Қимати минималиро муайян мекунад.",
        why:"Барои input-и рақамӣ ва вақт истифода мешавад.",
        example:"<input type='number' min='1'>"
    },


    {
        category:"html",
        title:"max",
        type:"HTML Attribute",
        info:"Қимати максималиро муайян мекунад.",
        why:"Барои маҳдуд кардани қимат истифода мешавад.",
        example:"<input type='number' max='100'>"
    },


    {
        category:"html",
        title:"step",
        type:"HTML Attribute",
        info:"Қадами тағйири рақамро муайян мекунад.",
        why:"Барои input-и number истифода мешавад.",
        example:"<input type='number' step='5'>"
    },


    {
        category:"html",
        title:"pattern",
        type:"HTML Attribute",
        info:"Қоидаи санҷиши матнро муайян мекунад.",
        why:"Барои тафтиши дурустии воридот истифода мешавад.",
        example:"<input pattern='[0-9]+'>"
    },


    {
        category:"html",
        title:"accept",
        type:"HTML Attribute",
        info:"Навъи файлҳои қабулшавандаро муайян мекунад.",
        why:"Барои input type=file истифода мешавад.",
        example:"<input type='file' accept='image/*'>"
    },


    {
        category:"html",
        title:"capture",
        type:"HTML Attribute",
        info:"Барои гирифтани файл аз камера ё микрофон истифода мешавад.",
        why:"Дар дастгоҳҳои мобилӣ истифода мешавад.",
        example:"<input type='file' capture>"
    },
        {
        category:"html",
        title:"charset",
        type:"HTML Attribute",
        info:"Кодгузории аломатҳои HTML-ро муайян мекунад.",
        why:"Барои дуруст нишон додани ҳарфҳо истифода мешавад.",
        example:"<meta charset='UTF-8'>"
    },


    {
        category:"html",
        title:"http-equiv",
        type:"HTML Attribute",
        info:"Ба браузер маълумоти махсус медиҳад.",
        why:"Барои танзими рафтори саҳифа истифода мешавад.",
        example:"<meta http-equiv='refresh'>"
    },


    {
        category:"html",
        title:"content",
        type:"HTML Attribute",
        info:"Қимати meta маълумотро нигоҳ медорад.",
        why:"Барои SEO ва танзимоти саҳифа истифода мешавад.",
        example:"<meta name='description' content='Website'>"
    },


    {
        category:"html",
        title:"media",
        type:"HTML Attribute",
        info:"Муайян мекунад, ки файл барои кадом дастгоҳ аст.",
        why:"Барои Responsive CSS истифода мешавад.",
        example:"<link media='screen' href='style.css'>"
    },


    {
        category:"html",
        title:"sizes",
        type:"HTML Attribute",
        info:"Андозаи тасвир ё icon-ро муайян мекунад.",
        why:"Барои favicon ва responsive image истифода мешавад.",
        example:"<link sizes='32x32'>"
    },


    {
        category:"html",
        title:"integrity",
        type:"HTML Attribute",
        info:"Амнияти файли берунаро месанҷад.",
        why:"Барои муҳофизат аз тағйир ёфтани файл истифода мешавад.",
        example:"<script integrity='hash'></script>"
    },


    {
        category:"html",
        title:"crossorigin",
        type:"HTML Attribute",
        info:"Иҷозаи гирифтани файл аз домени дигарро муайян мекунад.",
        why:"Барои кор бо ресурсҳои беруна истифода мешавад.",
        example:"<img crossorigin='anonymous'>"
    },


    {
        category:"html",
        title:"nonce",
        type:"HTML Attribute",
        info:"Калиди амниятӣ барои script мебошад.",
        why:"Барои муҳофизати CSP истифода мешавад.",
        example:"<script nonce='abc'></script>"
    },


    {
        category:"html",
        title:"async",
        type:"HTML Attribute",
        info:"Script-ро асинхронӣ бор мекунад.",
        why:"Барои тезтар кушодани саҳифа истифода мешавад.",
        example:"<script async src='app.js'></script>"
    },


    {
        category:"html",
        title:"defer",
        type:"HTML Attribute",
        info:"Иҷрои script-ро то бор шудани HTML ба таъхир мегузорад.",
        why:"Барои беҳтар кардани суръати сайт истифода мешавад.",
        example:"<script defer src='app.js'></script>"
    },


    {
        category:"html",
        title:"open",
        type:"HTML Attribute",
        info:"Элементро кушода нишон медиҳад.",
        why:"Дар details ва dialog истифода мешавад.",
        example:"<details open></details>"
    },


    {
        category:"html",
        title:"start",
        type:"HTML Attribute",
        info:"Рақами оғози рӯйхати рақамдорро муайян мекунад.",
        why:"Барои тағйири оғози ol истифода мешавад.",
        example:"<ol start='5'></ol>"
    },


    {
        category:"html",
        title:"reversed",
        type:"HTML Attribute",
        info:"Рӯйхатро баръакс нишон медиҳад.",
        why:"Барои ҳисобкунии баръакс истифода мешавад.",
        example:"<ol reversed></ol>"
    },


    {
        category:"html",
        title:"colspan",
        type:"HTML Attribute",
        info:"Як ҳуҷайра чанд сутунро ишғол мекунад муайян мекунад.",
        why:"Барои муттаҳид кардани сутунҳои ҷадвал истифода мешавад.",
        example:"<td colspan='2'>Text</td>"
    },


    {
        category:"html",
        title:"rowspan",
        type:"HTML Attribute",
        info:"Як ҳуҷайра чанд сатрро ишғол мекунад муайян мекунад.",
        why:"Барои муттаҳид кардани сатрҳои ҷадвал истифода мешавад.",
        example:"<td rowspan='2'>Text</td>"
    },
        {
        category:"html",
        title:"aria-label",
        type:"HTML Attribute",
        info:"Номи фаҳмондашаванда барои элемент медиҳад.",
        why:"Барои Accessibility ва хонандаҳои экран истифода мешавад.",
        example:"<button aria-label='Close'>X</button>"
    },


    {
        category:"html",
        title:"aria-hidden",
        type:"HTML Attribute",
        info:"Ба хонандаи экран мегӯяд, ки элементро пинҳон кунад.",
        why:"Барои дастрасӣ ва элементҳои ороишӣ истифода мешавад.",
        example:"<span aria-hidden='true'>Icon</span>"
    },


    {
        category:"html",
        title:"aria-describedby",
        type:"HTML Attribute",
        info:"Элементро бо шарҳи дигар пайваст мекунад.",
        why:"Барои додани маълумоти иловагӣ ба корбар истифода мешавад.",
        example:"<input aria-describedby='help'>"
    },


    {
        category:"html",
        title:"role",
        type:"HTML Attribute",
        info:"Нақши элементро муайян мекунад.",
        why:"Барои беҳтар кардани Accessibility истифода мешавад.",
        example:"<div role='button'>Click</div>"
    },


    {
        category:"html",
        title:"tabindex",
        type:"HTML Attribute",
        info:"Тартиби ҳаракат бо клавиатураро муайян мекунад.",
        why:"Барои дастрасии осон истифода мешавад.",
        example:"<div tabindex='0'>Text</div>"
    },


    {
        category:"html",
        title:"form",
        type:"HTML Attribute",
        info:"Input-ро ба форма пайваст мекунад.",
        why:"Барои истифодаи input берун аз form истифода мешавад.",
        example:"<input form='login'>"
    },


    {
        category:"html",
        title:"formaction",
        type:"HTML Attribute",
        info:"URL-и фиристодани форма барои button муайян мекунад.",
        why:"Барои якчанд амал дар як форма истифода мешавад.",
        example:"<button formaction='/save'>Save</button>"
    },


    {
        category:"html",
        title:"formenctype",
        type:"HTML Attribute",
        info:"Тарзи рамзгузории маълумоти форма мебошад.",
        why:"Барои фиристодани файлҳо истифода мешавад.",
        example:"<button formenctype='multipart/form-data'>Upload</button>"
    },


    {
        category:"html",
        title:"formmethod",
        type:"HTML Attribute",
        info:"Методи фиристодани форма барои button муайян мекунад.",
        why:"Барои GET ё POST истифода мешавад.",
        example:"<button formmethod='post'>Send</button>"
    },


    {
        category:"html",
        title:"formnovalidate",
        type:"HTML Attribute",
        info:"Санҷиши автоматии формаро хомӯш мекунад.",
        why:"Барои фиристодани форма бе санҷиш истифода мешавад.",
        example:"<button formnovalidate>Send</button>"
    },


    {
        category:"html",
        title:"formenctype",
        type:"HTML Attribute",
        info:"Навъи рамзгузории маълумоти фиристодашавандаро муайян мекунад.",
        why:"Барои upload кардани файлҳо лозим аст.",
        example:"formenctype='multipart/form-data'"
    },


    {
        category:"html",
        title:"spellcheck",
        type:"HTML Attribute",
        info:"Санҷиши имлоро фаъол мекунад.",
        why:"Барои дуруст навиштани матн истифода мешавад.",
        example:"<input spellcheck='true'>"
    },


    {
        category:"html",
        title:"translate",
        type:"HTML Attribute",
        info:"Ба браузер мегӯяд, ки матн тарҷума шавад ё не.",
        why:"Барои назорати тарҷумаи автоматӣ истифода мешавад.",
        example:"<p translate='no'>Brand</p>"
    },


    {
        category:"html",
        title:"dir",
        type:"HTML Attribute",
        info:"Самти матнро муайян мекунад.",
        why:"Барои забонҳои рост ба чап истифода мешавад.",
        example:"<p dir='rtl'>Матн</p>"
    },
        {
        category:"html",
        title:"poster",
        type:"HTML Attribute",
        info:"Аксро пеш аз оғоз шудани видео нишон медиҳад.",
        why:"Барои видео муқова (thumbnail) истифода мешавад.",
        example:"<video poster='cover.jpg'></video>"
    },


    {
        category:"html",
        title:"preload",
        type:"HTML Attribute",
        info:"Муайян мекунад, ки медиа чӣ гуна бор шавад.",
        why:"Барои идора кардани боркунии audio ва video истифода мешавад.",
        example:"<video preload='auto'></video>"
    },


    {
        category:"html",
        title:"playsinline",
        type:"HTML Attribute",
        info:"Видео дар дохили экран бозӣ мекунад.",
        why:"Асосан дар телефонҳо истифода мешавад.",
        example:"<video playsinline></video>"
    },


    {
        category:"html",
        title:"download",
        type:"HTML Attribute",
        info:"Ба корбар иҷозаи зеркашии файл медиҳад.",
        why:"Барои сохтани пайванди боргирӣ истифода мешавад.",
        example:"<a download href='file.zip'>Download</a>"
    },


    {
        category:"html",
        title:"ismap",
        type:"HTML Attribute",
        info:"Тасвирро ҳамчун image map дар сервер истифода мекунад.",
        why:"Барои кор бо тасвирҳои интерактивӣ истифода мешавад.",
        example:"<img ismap>"
    },


    {
        category:"html",
        title:"usemap",
        type:"HTML Attribute",
        info:"Тасвирро ба map пайваст мекунад.",
        why:"Барои сохтани минтақаҳои кликшаванда истифода мешавад.",
        example:"<img usemap='#map'>"
    },


    {
        category:"html",
        title:"shape",
        type:"HTML Attribute",
        info:"Шакли минтақаи area-ро муайян мекунад.",
        why:"Барои image map истифода мешавад.",
        example:"<area shape='circle'>"
    },


    {
        category:"html",
        title:"coords",
        type:"HTML Attribute",
        info:"Координатаҳои area-ро муайян мекунад.",
        why:"Барои муайян кардани ҷойи кликшаванда истифода мешавад.",
        example:"<area coords='0,0,100,100'>"
    },


    {
        category:"html",
        title:"datetime",
        type:"HTML Attribute",
        info:"Сана ва вақти мошинхонро нигоҳ медорад.",
        why:"Барои time ва del/ins истифода мешавад.",
        example:"<time datetime='2026-08-02'>Today</time>"
    },


    {
        category:"html",
        title:"cite",
        type:"HTML Attribute",
        info:"Суроғаи манбаъро муайян мекунад.",
        why:"Барои нишон додани манбаи маълумот истифода мешавад.",
        example:"<blockquote cite='source.com'>Text</blockquote>"
    },


    {
        category:"html",
        title:"reversed",
        type:"HTML Attribute",
        info:"Рӯйхати рақамдорро аз охир сар мекунад.",
        why:"Барои рӯйхати баръакс истифода мешавад.",
        example:"<ol reversed></ol>"
    },


    {
        category:"html",
        title:"span",
        type:"HTML Attribute",
        info:"Атрибут нест, балки тег аст; барои ҷудокунии матн истифода мешавад.",
        why:"Барои гурӯҳбандии қисми хурди матн истифода мешавад.",
        example:"<span>Text</span>"
    },


    {
        category:"html",
        title:"hidden",
        type:"HTML Attribute",
        info:"Элементро аз намоиш пинҳон мекунад.",
        why:"Барои нигоҳ доштани маълумоти муваққатӣ истифода мешавад.",
        example:"<div hidden>Secret</div>"
    },
        {
        category:"css",
        title:"CSS",
        type:"CSS Basics",
        info:"CSS (Cascading Style Sheets) барои зебо кардани саҳифаи HTML истифода мешавад.",
        why:"Барои тағйир додани ранг, андоза, ҷойгиршавӣ ва намуди элементҳо истифода мешавад.",
        example:"body { color: blue; }"
    },

    {
        category:"css",
        title:"Selector",
        type:"CSS Basics",
        info:"Selector муайян мекунад, ки CSS ба кадом элемент татбиқ шавад.",
        why:"Барои интихоби элементҳои HTML истифода мешавад.",
        example:"p { color:red; }"
    },

    {
        category:"css",
        title:"Universal Selector (*)",
        type:"CSS Selector",
        info:"Ҳамаи элементҳои саҳифаро интихоб мекунад.",
        why:"Барои додани қоида ба тамоми саҳифа истифода мешавад.",
        example:"* { margin:0; padding:0; }"
    },

    {
        category:"css",
        title:"Element Selector",
        type:"CSS Selector",
        info:"Аз рӯи номи тег элементро интихоб мекунад.",
        why:"Барои тағйири ҳамаи элементҳои як намуд истифода мешавад.",
        example:"h1 { color:green; }"
    },

    {
        category:"css",
        title:"Class Selector (.class)",
        type:"CSS Selector",
        info:"Элементҳоро аз рӯи class интихоб мекунад.",
        why:"Барои истифодаи як услуб дар якчанд элемент истифода мешавад.",
        example:".box { background:#eee; }"
    },

    {
        category:"css",
        title:"ID Selector (#id)",
        type:"CSS Selector",
        info:"Элементро аз рӯи id интихоб мекунад.",
        why:"Барои тағйири як элементи махсус истифода мешавад.",
        example:"#header { color:white; }"
    },

    {
        category:"css",
        title:"color",
        type:"CSS Property",
        info:"Ранги матнро муайян мекунад.",
        why:"Барои зебо кардани матн истифода мешавад.",
        example:"color:red;"
    },

    {
        category:"css",
        title:"background-color",
        type:"CSS Property",
        info:"Ранги заминаи элементро муайян мекунад.",
        why:"Барои тағйир додани замина истифода мешавад.",
        example:"background-color:blue;"
    },

    {
        category:"css",
        title:"background-image",
        type:"CSS Property",
        info:"Аксро ҳамчун замина мегузорад.",
        why:"Барои сохтани тарҳи зебо истифода мешавад.",
        example:"background-image:url('bg.jpg');"
    },

    {
        category:"css",
        title:"background-size",
        type:"CSS Property",
        info:"Андозаи акси заминаро муайян мекунад.",
        why:"Барои мувофиқ кардани акс ба элемент истифода мешавад.",
        example:"background-size:cover;"
    },

    {
        category:"css",
        title:"opacity",
        type:"CSS Property",
        info:"Шаффофияти элементро муайян мекунад.",
        why:"Барои сохтани эффектҳои шаффоф истифода мешавад.",
        example:"opacity:0.5;"
    },

    {
        category:"css",
        title:"display",
        type:"CSS Property",
        info:"Навъи намоиши элементро муайян мекунад.",
        why:"Барои block, inline, flex, grid ва ғайра истифода мешавад.",
        example:"display:flex;"
    },
        {
        category:"css",
        title:"font-size",
        type:"CSS Property",
        info:"Андозаи матнро муайян мекунад.",
        why:"Барои калон ё хурд кардани матн истифода мешавад.",
        example:"font-size:20px;"
    },

    {
        category:"css",
        title:"font-family",
        type:"CSS Property",
        info:"Навъи шрифтро муайян мекунад.",
        why:"Барои тағйир додани шакли ҳарфҳо истифода мешавад.",
        example:"font-family:Arial, sans-serif;"
    },

    {
        category:"css",
        title:"font-weight",
        type:"CSS Property",
        info:"Ғафсии матнро муайян мекунад.",
        why:"Барои bold ё normal кардани матн истифода мешавад.",
        example:"font-weight:bold;"
    },

    {
        category:"css",
        title:"font-style",
        type:"CSS Property",
        info:"Услуби матнро муайян мекунад.",
        why:"Барои italic кардани матн истифода мешавад.",
        example:"font-style:italic;"
    },

    {
        category:"css",
        title:"text-align",
        type:"CSS Property",
        info:"Ҷойгиршавии матнро муайян мекунад.",
        why:"Барои чап, рост ё марказ гузоштани матн истифода мешавад.",
        example:"text-align:center;"
    },

    {
        category:"css",
        title:"text-decoration",
        type:"CSS Property",
        info:"Ба матн хат илова ё хориҷ мекунад.",
        why:"Барои underline, overline ва line-through истифода мешавад.",
        example:"text-decoration:none;"
    },

    {
        category:"css",
        title:"text-transform",
        type:"CSS Property",
        info:"Ҳарфҳоро калон ё хурд мекунад.",
        why:"Барои uppercase, lowercase ва capitalize истифода мешавад.",
        example:"text-transform:uppercase;"
    },

    {
        category:"css",
        title:"line-height",
        type:"CSS Property",
        info:"Фосилаи байни сатрҳоро муайян мекунад.",
        why:"Барои осон хондани матн истифода мешавад.",
        example:"line-height:1.8;"
    },

    {
        category:"css",
        title:"letter-spacing",
        type:"CSS Property",
        info:"Фосилаи байни ҳарфҳоро муайян мекунад.",
        why:"Барои беҳтар кардани намуди матн истифода мешавад.",
        example:"letter-spacing:2px;"
    },

    {
        category:"css",
        title:"word-spacing",
        type:"CSS Property",
        info:"Фосилаи байни калимаҳоро муайян мекунад.",
        why:"Барои хондани беҳтари матн истифода мешавад.",
        example:"word-spacing:5px;"
    },

    {
        category:"css",
        title:"margin",
        type:"CSS Property",
        info:"Фосилаи берунии элементро муайян мекунад.",
        why:"Барои дур кардани элемент аз дигар элементҳо истифода мешавад.",
        example:"margin:20px;"
    },

    {
        category:"css",
        title:"padding",
        type:"CSS Property",
        info:"Фосилаи дохилии элементро муайян мекунад.",
        why:"Барои дур кардани матн аз канори элемент истифода мешавад.",
        example:"padding:15px;"
    },

    {
        category:"css",
        title:"border",
        type:"CSS Property",
        info:"Ба элемент хат (сарҳад) илова мекунад.",
        why:"Барои сохтани чорчӯба истифода мешавад.",
        example:"border:2px solid black;"
    },

    {
        category:"css",
        title:"border-radius",
        type:"CSS Property",
        info:"Кунҷҳои элементро гирд мекунад.",
        why:"Барои сохтани дизайнҳои муосир истифода мешавад.",
        example:"border-radius:15px;"
    },

    {
        category:"css",
        title:"width",
        type:"CSS Property",
        info:"Паҳноии элементро муайян мекунад.",
        why:"Барои идора кардани андозаи элемент истифода мешавад.",
        example:"width:300px;"
    },

    {
        category:"css",
        title:"height",
        type:"CSS Property",
        info:"Баландии элементро муайян мекунад.",
        why:"Барои муайян кардани баландии элемент истифода мешавад.",
        example:"height:200px;"
    },
        {
        category:"css",
        title:"position",
        type:"CSS Property",
        info:"Ҷойгиршавии элементро муайян мекунад.",
        why:"Барои идора кардани мавқеи элемент истифода мешавад.",
        example:"position:relative;"
    },

    {
        category:"css",
        title:"top",
        type:"CSS Property",
        info:"Масофаро аз боло муайян мекунад.",
        why:"Бо position истифода мешавад.",
        example:"top:20px;"
    },

    {
        category:"css",
        title:"right",
        type:"CSS Property",
        info:"Масофаро аз тарафи рост муайян мекунад.",
        why:"Бо position истифода мешавад.",
        example:"right:10px;"
    },

    {
        category:"css",
        title:"bottom",
        type:"CSS Property",
        info:"Масофаро аз поён муайян мекунад.",
        why:"Бо position истифода мешавад.",
        example:"bottom:15px;"
    },

    {
        category:"css",
        title:"left",
        type:"CSS Property",
        info:"Масофаро аз тарафи чап муайян мекунад.",
        why:"Бо position истифода мешавад.",
        example:"left:30px;"
    },

    {
        category:"css",
        title:"z-index",
        type:"CSS Property",
        info:"Тартиби болою поёни элементҳоро муайян мекунад.",
        why:"Барои дар боло ё поён нишон додани элемент истифода мешавад.",
        example:"z-index:100;"
    },

    {
        category:"css",
        title:"overflow",
        type:"CSS Property",
        info:"Муайян мекунад, ки мундариҷаи зиёдатӣ чӣ гуна нишон дода шавад.",
        why:"Барои scroll ё пинҳон кардани мундариҷа истифода мешавад.",
        example:"overflow:auto;"
    },

    {
        category:"css",
        title:"overflow-x",
        type:"CSS Property",
        info:"Идоракунии overflow аз рӯи меҳвари X.",
        why:"Барои ҳаракати уфуқӣ истифода мешавад.",
        example:"overflow-x:scroll;"
    },

    {
        category:"css",
        title:"overflow-y",
        type:"CSS Property",
        info:"Идоракунии overflow аз рӯи меҳвари Y.",
        why:"Барои ҳаракати амудӣ истифода мешавад.",
        example:"overflow-y:auto;"
    },

    {
        category:"css",
        title:"float",
        type:"CSS Property",
        info:"Элементро ба чап ё рост мебарад.",
        why:"Дар тарҳҳои кӯҳна истифода мешуд.",
        example:"float:left;"
    },

    {
        category:"css",
        title:"clear",
        type:"CSS Property",
        info:"Таъсири float-ро нест мекунад.",
        why:"Барои қатъ кардани float истифода мешавад.",
        example:"clear:both;"
    },

    {
        category:"css",
        title:"visibility",
        type:"CSS Property",
        info:"Элементро пинҳон ё намоён мекунад.",
        why:"Барои идоракунии намоиши элемент истифода мешавад.",
        example:"visibility:hidden;"
    },

    {
        category:"css",
        title:"cursor",
        type:"CSS Property",
        info:"Намуди нишондиҳандаи мушро муайян мекунад.",
        why:"Барои беҳтар кардани таҷрибаи корбар истифода мешавад.",
        example:"cursor:pointer;"
    },

    {
        category:"css",
        title:"box-shadow",
        type:"CSS Property",
        info:"Ба элемент соя медиҳад.",
        why:"Барои зебо кардани қуттиҳо истифода мешавад.",
        example:"box-shadow:0 5px 15px rgba(0,0,0,.3);"
    },

    {
        category:"css",
        title:"text-shadow",
        type:"CSS Property",
        info:"Ба матн соя медиҳад.",
        why:"Барои зебо кардани матн истифода мешавад.",
        example:"text-shadow:2px 2px 4px gray;"
    },

    {
        category:"css",
        title:"object-fit",
        type:"CSS Property",
        info:"Муайян мекунад, ки акс ё видео чӣ гуна дар контейнер ҷойгир шавад.",
        why:"Барои мувофиқ кардани тасвирҳо истифода мешавад.",
        example:"object-fit:cover;"
    },
        {
        category:"css",
        title:"display: flex",
        type:"CSS Flexbox",
        info:"Элементро ба Flex Container табдил медиҳад.",
        why:"Барои осон ҷойгир кардани элементҳо дар як сатр ё сутун истифода мешавад.",
        example:"display:flex;"
    },

    {
        category:"css",
        title:"flex-direction",
        type:"CSS Flexbox",
        info:"Самти ҷойгиршавии элементҳоро муайян мекунад.",
        why:"Барои ҷойгир кардан ба шакли сатр ё сутун истифода мешавад.",
        example:"flex-direction:row;"
    },

    {
        category:"css",
        title:"flex-wrap",
        type:"CSS Flexbox",
        info:"Муайян мекунад, ки элементҳо ба сатри нав гузаранд ё не.",
        why:"Барои Responsive Design истифода мешавад.",
        example:"flex-wrap:wrap;"
    },

    {
        category:"css",
        title:"flex-flow",
        type:"CSS Flexbox",
        info:"flex-direction ва flex-wrap-ро якҷоя менависад.",
        why:"Барои кӯтоҳ навиштани код истифода мешавад.",
        example:"flex-flow:row wrap;"
    },

    {
        category:"css",
        title:"justify-content",
        type:"CSS Flexbox",
        info:"Элементҳоро аз рӯи меҳвари асосӣ ҷойгир мекунад.",
        why:"Барои center, space-between, space-around ва ғайра истифода мешавад.",
        example:"justify-content:center;"
    },

    {
        category:"css",
        title:"align-items",
        type:"CSS Flexbox",
        info:"Элементҳоро аз рӯи меҳвари дуюм ҷойгир мекунад.",
        why:"Барои марказ ё боло/поён гузоштани элементҳо истифода мешавад.",
        example:"align-items:center;"
    },

    {
        category:"css",
        title:"align-content",
        type:"CSS Flexbox",
        info:"Якчанд сатрҳои Flex-ро ҷойгир мекунад.",
        why:"Ҳангоми flex-wrap истифода мешавад.",
        example:"align-content:space-between;"
    },

    {
        category:"css",
        title:"gap",
        type:"CSS Flexbox",
        info:"Фосилаи байни элементҳои Flex ё Grid-ро муайян мекунад.",
        why:"Ба ҷойи margin истифода мешавад.",
        example:"gap:20px;"
    },

    {
        category:"css",
        title:"row-gap",
        type:"CSS Flexbox",
        info:"Фосилаи байни сатрҳоро муайян мекунад.",
        why:"Барои ҷудо кардани сатрҳо истифода мешавад.",
        example:"row-gap:15px;"
    },

    {
        category:"css",
        title:"column-gap",
        type:"CSS Flexbox",
        info:"Фосилаи байни сутунҳоро муайян мекунад.",
        why:"Барои ҷудо кардани сутунҳо истифода мешавад.",
        example:"column-gap:20px;"
    },

    {
        category:"css",
        title:"flex-grow",
        type:"CSS Flexbox",
        info:"Муайян мекунад, ки элемент чӣ қадар калон шавад.",
        why:"Барои тақсим кардани фазои холӣ истифода мешавад.",
        example:"flex-grow:1;"
    },

    {
        category:"css",
        title:"flex-shrink",
        type:"CSS Flexbox",
        info:"Муайян мекунад, ки элемент чӣ қадар хурд шавад.",
        why:"Ҳангоми кам шудани ҷой истифода мешавад.",
        example:"flex-shrink:1;"
    },

    {
        category:"css",
        title:"flex-basis",
        type:"CSS Flexbox",
        info:"Андозаи ибтидоии элементро муайян мекунад.",
        why:"Пеш аз flex-grow ва flex-shrink истифода мешавад.",
        example:"flex-basis:200px;"
    },

    {
        category:"css",
        title:"flex",
        type:"CSS Flexbox",
        info:"flex-grow, flex-shrink ва flex-basis-ро якҷоя менависад.",
        why:"Барои кӯтоҳ кардани код истифода мешавад.",
        example:"flex:1;"
    },

    {
        category:"css",
        title:"align-self",
        type:"CSS Flexbox",
        info:"Ҷойгиршавии як элементи алоҳидаро тағйир медиҳад.",
        why:"Барои як элемент қоидаи махсус додан истифода мешавад.",
        example:"align-self:flex-end;"
    },
        {
        category:"css",
        title:"display: grid",
        type:"CSS Grid",
        info:"Элементро ба Grid Container табдил медиҳад.",
        why:"Барои сохтани тарҳҳои дученака истифода мешавад.",
        example:"display:grid;"
    },

    {
        category:"css",
        title:"grid-template-columns",
        type:"CSS Grid",
        info:"Шумора ва андозаи сутунҳоро муайян мекунад.",
        why:"Барои сохтани сохтори Grid истифода мешавад.",
        example:"grid-template-columns:1fr 1fr 1fr;"
    },

    {
        category:"css",
        title:"grid-template-rows",
        type:"CSS Grid",
        info:"Баландии сатрҳои Grid-ро муайян мекунад.",
        why:"Барои ҷойгиркунии элементҳо истифода мешавад.",
        example:"grid-template-rows:100px auto;"
    },

    {
        category:"css",
        title:"grid-column",
        type:"CSS Grid",
        info:"Муайян мекунад элемент чанд сутунро ишғол кунад.",
        why:"Барои ҷойгиркунии элемент истифода мешавад.",
        example:"grid-column:1 / 3;"
    },

    {
        category:"css",
        title:"grid-row",
        type:"CSS Grid",
        info:"Муайян мекунад элемент чанд сатрро ишғол кунад.",
        why:"Барои ҷойгиркунии элемент истифода мешавад.",
        example:"grid-row:1 / 3;"
    },

    {
        category:"css",
        title:"grid-area",
        type:"CSS Grid",
        info:"Ҷойгиршавии элементро дар Grid муайян мекунад.",
        why:"Барои кӯтоҳ навиштани grid-row ва grid-column истифода мешавад.",
        example:"grid-area:1 / 1 / 3 / 3;"
    },

    {
        category:"css",
        title:"grid-template-areas",
        type:"CSS Grid",
        info:"Барои номгузорӣ кардани минтақаҳои Grid истифода мешавад.",
        why:"Тарҳи калонро хонданаш осон мекунад.",
        example:"grid-template-areas:'header header' 'main aside';"
    },

    {
        category:"css",
        title:"justify-items",
        type:"CSS Grid",
        info:"Элементҳоро уфуқӣ дар дохили ҳуҷайра ҷойгир мекунад.",
        why:"Барои марказ ё чапу рост гузоштани элемент истифода мешавад.",
        example:"justify-items:center;"
    },

    {
        category:"css",
        title:"align-items",
        type:"CSS Grid",
        info:"Элементҳоро амудӣ дар дохили ҳуҷайра ҷойгир мекунад.",
        why:"Барои боло, марказ ё поён гузоштани элемент истифода мешавад.",
        example:"align-items:center;"
    },

    {
        category:"css",
        title:"justify-content",
        type:"CSS Grid",
        info:"Тамоми Grid-ро уфуқӣ ҷойгир мекунад.",
        why:"Барои ҷойгир кардани Grid дар контейнер истифода мешавад.",
        example:"justify-content:center;"
    },

    {
        category:"css",
        title:"align-content",
        type:"CSS Grid",
        info:"Тамоми Grid-ро амудӣ ҷойгир мекунад.",
        why:"Барои марказ ё боло/поён гузоштани Grid истифода мешавад.",
        example:"align-content:center;"
    },

    {
        category:"css",
        title:"place-items",
        type:"CSS Grid",
        info:"justify-items ва align-items-ро якҷоя менависад.",
        why:"Барои кӯтоҳ кардани код истифода мешавад.",
        example:"place-items:center;"
    },

    {
        category:"css",
        title:"place-content",
        type:"CSS Grid",
        info:"justify-content ва align-content-ро якҷоя менависад.",
        why:"Барои кӯтоҳ кардани код истифода мешавад.",
        example:"place-content:center;"
    },

    {
        category:"css",
        title:"grid-auto-columns",
        type:"CSS Grid",
        info:"Андозаи сутунҳои худкорро муайян мекунад.",
        why:"Барои Grid-и динамикӣ истифода мешавад.",
        example:"grid-auto-columns:150px;"
    },

    {
        category:"css",
        title:"grid-auto-rows",
        type:"CSS Grid",
        info:"Баландии сатрҳои худкорро муайян мекунад.",
        why:"Барои Grid-и динамикӣ истифода мешавад.",
        example:"grid-auto-rows:100px;"
    },

    {
        category:"css",
        title:"grid-auto-flow",
        type:"CSS Grid",
        info:"Муайян мекунад элементҳои нав чӣ гуна ҷойгир шаванд.",
        why:"Барои идора кардани ҷойгиршавии худкор истифода мешавад.",
        example:"grid-auto-flow:row;"
    },
        {
        category:"css",
        title:"transition",
        type:"CSS Animation",
        info:"Гузариши нарм байни ду ҳолати элементро месозад.",
        why:"Барои зебо шудани hover ва дигар тағйирот истифода мешавад.",
        example:"transition:0.3s;"
    },

    {
        category:"css",
        title:"transition-property",
        type:"CSS Animation",
        info:"Муайян мекунад кадом хусусият аниматсия шавад.",
        why:"Барои идора кардани transition истифода мешавад.",
        example:"transition-property:background;"
    },

    {
        category:"css",
        title:"transition-duration",
        type:"CSS Animation",
        info:"Давомнокии transition-ро муайян мекунад.",
        why:"Барои тез ё суст шудани аниматсия истифода мешавад.",
        example:"transition-duration:0.5s;"
    },

    {
        category:"css",
        title:"transition-delay",
        type:"CSS Animation",
        info:"Пеш аз оғоз шудани transition интизор мешавад.",
        why:"Барои таъхири аниматсия истифода мешавад.",
        example:"transition-delay:1s;"
    },

    {
        category:"css",
        title:"transition-timing-function",
        type:"CSS Animation",
        info:"Суръати ҳаракати transition-ро муайян мекунад.",
        why:"Барои ease, linear ва ғайра истифода мешавад.",
        example:"transition-timing-function:ease-in-out;"
    },

    {
        category:"css",
        title:"transform",
        type:"CSS Transform",
        info:"Элементро мегардонад, калон мекунад ё ҷойиваз мекунад.",
        why:"Барои сохтани эффектҳои муосир истифода мешавад.",
        example:"transform:scale(1.1);"
    },

    {
        category:"css",
        title:"rotate()",
        type:"CSS Transform",
        info:"Элементро мегардонад.",
        why:"Барои эффектҳои гардиш истифода мешавад.",
        example:"transform:rotate(45deg);"
    },

    {
        category:"css",
        title:"scale()",
        type:"CSS Transform",
        info:"Элементро калон ё хурд мекунад.",
        why:"Барои hover ва animation истифода мешавад.",
        example:"transform:scale(1.2);"
    },

    {
        category:"css",
        title:"translate()",
        type:"CSS Transform",
        info:"Элементро ҷойиваз мекунад.",
        why:"Барои ҳаракат додани элемент истифода мешавад.",
        example:"transform:translate(20px,10px);"
    },

    {
        category:"css",
        title:"skew()",
        type:"CSS Transform",
        info:"Элементро каҷ мекунад.",
        why:"Барои эффектҳои махсус истифода мешавад.",
        example:"transform:skew(20deg);"
    },

    {
        category:"css",
        title:"@keyframes",
        type:"CSS Animation",
        info:"Марҳилаҳои аниматсияро муайян мекунад.",
        why:"Барои сохтани animation-и шахсӣ истифода мешавад.",
        example:"@keyframes move{}"
    },

    {
        category:"css",
        title:"animation",
        type:"CSS Animation",
        info:"Ҳамаи хусусиятҳои animation-ро дар як сатр менависад.",
        why:"Барои кӯтоҳ кардани код истифода мешавад.",
        example:"animation:move 2s infinite;"
    },

    {
        category:"css",
        title:"animation-duration",
        type:"CSS Animation",
        info:"Давомнокии animation-ро муайян мекунад.",
        why:"Барои тез ё суст шудани animation истифода мешавад.",
        example:"animation-duration:2s;"
    },

    {
        category:"css",
        title:"animation-iteration-count",
        type:"CSS Animation",
        info:"Муайян мекунад animation чанд маротиба такрор шавад.",
        why:"Барои як бор ё беохир иҷро шудан истифода мешавад.",
        example:"animation-iteration-count:infinite;"
    },

    {
        category:"css",
        title:"animation-delay",
        type:"CSS Animation",
        info:"Пеш аз оғози animation интизор мешавад.",
        why:"Барои таъхир додани animation истифода мешавад.",
        example:"animation-delay:1s;"
    },

    {
        category:"css",
        title:"animation-fill-mode",
        type:"CSS Animation",
        info:"Ҳолати элементро пеш ё баъд аз animation нигоҳ медорад.",
        why:"Барои нигоҳ доштани натиҷаи animation истифода мешавад.",
        example:"animation-fill-mode:forwards;"
    },
        {
        category:"css",
        title:"@media",
        type:"Responsive Design",
        info:"Барои тағйир додани CSS вобаста ба андозаи экран истифода мешавад.",
        why:"Барои сохтани сайтҳои мувофиқ ба телефон, планшет ва компютер истифода мешавад.",
        example:"@media (max-width:768px){ body{font-size:14px;} }"
    },

    {
        category:"css",
        title:"max-width",
        type:"Responsive Design",
        info:"Паҳноии максималии элементро муайян мекунад.",
        why:"Барои пешгирии аз ҳад калон шудани элемент истифода мешавад.",
        example:"max-width:1200px;"
    },

    {
        category:"css",
        title:"min-width",
        type:"Responsive Design",
        info:"Паҳноии минималии элементро муайян мекунад.",
        why:"Барои пешгирии аз ҳад хурд шудани элемент истифода мешавад.",
        example:"min-width:300px;"
    },

    {
        category:"css",
        title:"max-height",
        type:"Responsive Design",
        info:"Баландии максималии элементро муайян мекунад.",
        why:"Барои маҳдуд кардани баландӣ истифода мешавад.",
        example:"max-height:500px;"
    },

    {
        category:"css",
        title:"min-height",
        type:"Responsive Design",
        info:"Баландии минималии элементро муайян мекунад.",
        why:"Барои нигоҳ доштани баландии муайян истифода мешавад.",
        example:"min-height:100vh;"
    },

    {
        category:"css",
        title:"vw",
        type:"CSS Unit",
        info:"1vw баробар ба 1%-и паҳноии экран мебошад.",
        why:"Барои Responsive Design истифода мешавад.",
        example:"width:50vw;"
    },

    {
        category:"css",
        title:"vh",
        type:"CSS Unit",
        info:"1vh баробар ба 1%-и баландии экран мебошад.",
        why:"Барои пур кардани экран истифода мешавад.",
        example:"height:100vh;"
    },

    {
        category:"css",
        title:"%",
        type:"CSS Unit",
        info:"Андозаро нисбат ба элементи падар муайян мекунад.",
        why:"Барои сохтани тарҳи чандир истифода мешавад.",
        example:"width:100%;"
    },

    {
        category:"css",
        title:"rem",
        type:"CSS Unit",
        info:"Андоза нисбат ба font-size-и html ҳисоб мешавад.",
        why:"Барои тарҳи мутобиқшаванда истифода мешавад.",
        example:"font-size:1.5rem;"
    },

    {
        category:"css",
        title:"em",
        type:"CSS Unit",
        info:"Андоза нисбат ба font-size-и элементи падар ҳисоб мешавад.",
        why:"Барои андозаи чандир истифода мешавад.",
        example:"padding:2em;"
    },

    {
        category:"css",
        title:"clamp()",
        type:"CSS Function",
        info:"Андозаи минималӣ, асосӣ ва максималиро муайян мекунад.",
        why:"Барои Responsive Typography истифода мешавад.",
        example:"font-size:clamp(16px,2vw,32px);"
    },

    {
        category:"css",
        title:"aspect-ratio",
        type:"CSS Property",
        info:"Таносуби паҳно ва баландии элементро муайян мекунад.",
        why:"Барои тасвирҳо ва видеоҳо истифода мешавад.",
        example:"aspect-ratio:16/9;"
    },

    {
        category:"css",
        title:"object-position",
        type:"CSS Property",
        info:"Ҷойгиршавии акс ё видеоро муайян мекунад.",
        why:"Бо object-fit истифода мешавад.",
        example:"object-position:center;"
    },

    {
        category:"css",
        title:"resize",
        type:"CSS Property",
        info:"Ба корбар иҷозаи тағйир додани андозаи элемент медиҳад.",
        why:"Аксаран барои textarea истифода мешавад.",
        example:"resize:vertical;"
    },

    {
        category:"css",
        title:"scroll-behavior",
        type:"CSS Property",
        info:"Ҳаракати нарми Scroll-ро фаъол мекунад.",
        why:"Барои зеботар шудани гузариш байни қисмҳои саҳифа истифода мешавад.",
        example:"scroll-behavior:smooth;"
    },
        {
        category:"css",
        title:"CSS Variables (--)",
        type:"CSS Advanced",
        info:"Тағйирёбандаҳо барои нигоҳ доштани қиматҳо дар CSS мебошанд.",
        why:"Барои истифодаи такрории рангҳо ва андозаҳо истифода мешаванд.",
        example:":root{--main:#2196f3;} color:var(--main);"
    },

    {
        category:"css",
        title:"var()",
        type:"CSS Function",
        info:"Қимати CSS Variable-ро мегирад.",
        why:"Барои истифодаи тағйирёбандаҳо истифода мешавад.",
        example:"color:var(--main);"
    },

    {
        category:"css",
        title:"calc()",
        type:"CSS Function",
        info:"Ҳисобкуниро дар CSS иҷро мекунад.",
        why:"Барои ҳисоб кардани андозаҳо истифода мешавад.",
        example:"width:calc(100% - 20px);"
    },

    {
        category:"css",
        title:"filter",
        type:"CSS Property",
        info:"Ба тасвир ё элемент эффект медиҳад.",
        why:"Барои blur, grayscale, brightness ва ғайра истифода мешавад.",
        example:"filter:blur(5px);"
    },

    {
        category:"css",
        title:"backdrop-filter",
        type:"CSS Property",
        info:"Ба заминаи пушти элемент эффект медиҳад.",
        why:"Барои сохтани Glass Effect истифода мешавад.",
        example:"backdrop-filter:blur(10px);"
    },

    {
        category:"css",
        title:"linear-gradient()",
        type:"CSS Function",
        info:"Градиенти хаттӣ месозад.",
        why:"Барои заминаҳои зебо истифода мешавад.",
        example:"background:linear-gradient(red,blue);"
    },

    {
        category:"css",
        title:"radial-gradient()",
        type:"CSS Function",
        info:"Градиенти доирашакл месозад.",
        why:"Барои эффектҳои замина истифода мешавад.",
        example:"background:radial-gradient(red,yellow);"
    },

    {
        category:"css",
        title:"conic-gradient()",
        type:"CSS Function",
        info:"Градиенти даврашакл месозад.",
        why:"Барои диаграмма ва дизайнҳои муосир истифода мешавад.",
        example:"background:conic-gradient(red,blue,green);"
    },

    {
        category:"css",
        title:"clip-path",
        type:"CSS Property",
        info:"Элементро ба шакли махсус мебурад.",
        why:"Барои сохтани шаклҳои гуногун истифода мешавад.",
        example:"clip-path:circle(50%);"
    },

    {
        category:"css",
        title:"mask",
        type:"CSS Property",
        info:"Қисме аз элементро пинҳон мекунад.",
        why:"Барои эффектҳои пешрафта истифода мешавад.",
        example:"mask:url(mask.png);"
    },

    {
        category:"css",
        title:"mix-blend-mode",
        type:"CSS Property",
        info:"Тарзи омехта шудани рангҳоро муайян мекунад.",
        why:"Барои эффектҳои графикӣ истифода мешавад.",
        example:"mix-blend-mode:multiply;"
    },

    {
        category:"css",
        title:"isolation",
        type:"CSS Property",
        info:"Муайян мекунад омехташавии рангҳо маҳдуд шавад ё не.",
        why:"Бо mix-blend-mode истифода мешавад.",
        example:"isolation:isolate;"
    },

    {
        category:"css",
        title:"pointer-events",
        type:"CSS Property",
        info:"Фаъол ё ғайрифаъол будани кликро муайян мекунад.",
        why:"Барои бастани клик истифода мешавад.",
        example:"pointer-events:none;"
    },

    {
        category:"css",
        title:"user-select",
        type:"CSS Property",
        info:"Интихоб шудани матнро фаъол ё хомӯш мекунад.",
        why:"Барои муҳофизати матн истифода мешавад.",
        example:"user-select:none;"
    },

    {
        category:"css",
        title:"accent-color",
        type:"CSS Property",
        info:"Ранги checkbox, radio ва progress-ро иваз мекунад.",
        why:"Барои мутобиқ кардани рангҳои форма истифода мешавад.",
        example:"accent-color:#2196f3;"
    },

    {
        category:"css",
        title:"caret-color",
        type:"CSS Property",
        info:"Ранги курсори навиштанро муайян мекунад.",
        why:"Барои зеботар кардани input истифода мешавад.",
        example:"caret-color:red;"
    },
        {
        category:"js",
        title:"JavaScript",
        type:"JavaScript Basics",
        info:"JavaScript забони барномасозии веб мебошад.",
        why:"Барои зинда ва интерактивӣ кардани сайт истифода мешавад.",
        example:"alert('Hello');"
    },

    {
        category:"js",
        title:"var",
        type:"JavaScript Keyword",
        info:"Тағйирёбанда месозад.",
        why:"Барои нигоҳ доштани маълумот истифода мешавад.",
        example:"var name='Ali';"
    },

    {
        category:"js",
        title:"let",
        type:"JavaScript Keyword",
        info:"Тағйирёбандаи тағйирёбанда месозад.",
        why:"Ба ҷойи var бештар истифода мешавад.",
        example:"let age=18;"
    },

    {
        category:"js",
        title:"const",
        type:"JavaScript Keyword",
        info:"Тағйирёбандаи доимӣ месозад.",
        why:"Қимати он дигар карда намешавад.",
        example:"const pi=3.14;"
    },

    {
        category:"js",
        title:"String",
        type:"Data Type",
        info:"Маълумоти матнӣ мебошад.",
        why:"Барои нигоҳ доштани матн истифода мешавад.",
        example:"let text='HTML';"
    },

    {
        category:"js",
        title:"Number",
        type:"Data Type",
        info:"Маълумоти рақамӣ мебошад.",
        why:"Барои ҳисоб истифода мешавад.",
        example:"let x=100;"
    },

    {
        category:"js",
        title:"Boolean",
        type:"Data Type",
        info:"Танҳо true ё false мебошад.",
        why:"Барои шартҳо истифода мешавад.",
        example:"let ok=true;"
    },

    {
        category:"js",
        title:"Null",
        type:"Data Type",
        info:"Ягон қимат вуҷуд надорад.",
        why:"Барои холӣ нишон додани тағйирёбанда истифода мешавад.",
        example:"let user=null;"
    },

    {
        category:"js",
        title:"Undefined",
        type:"Data Type",
        info:"Тағйирёбанда қимат надорад.",
        why:"Ҳангоми қимат надодан худкор пайдо мешавад.",
        example:"let a;"
    },

    {
        category:"js",
        title:"Object",
        type:"Data Type",
        info:"Маълумотро ҳамчун калид ва қимат нигоҳ медорад.",
        why:"Барои нигоҳ доштани маълумоти мураккаб истифода мешавад.",
        example:"let person={name:'Ali',age:18};"
    },

    {
        category:"js",
        title:"Array",
        type:"Data Type",
        info:"Якчанд маълумотро дар як тағйирёбанда нигоҳ медорад.",
        why:"Барои рӯйхатҳо истифода мешавад.",
        example:"let fruits=['Apple','Banana'];"
    },

    {
        category:"js",
        title:"typeof",
        type:"JavaScript Operator",
        info:"Навъи маълумотро муайян мекунад.",
        why:"Барои санҷидани Data Type истифода мешавад.",
        example:"typeof age;"
    },

    {
        category:"js",
        title:"console.log()",
        type:"JavaScript Method",
        info:"Маълумотро дар Console нишон медиҳад.",
        why:"Барои санҷидан ва Debug истифода мешавад.",
        example:"console.log('Hello');"
    },

    {
        category:"js",
        title:"alert()",
        type:"JavaScript Method",
        info:"Паёми хурд нишон медиҳад.",
        why:"Барои огоҳ кардани корбар истифода мешавад.",
        example:"alert('Welcome');"
    },

    {
        category:"js",
        title:"prompt()",
        type:"JavaScript Method",
        info:"Аз корбар маълумот мегирад.",
        why:"Барои ворид кардани маълумот истифода мешавад.",
        example:"let name=prompt('Name');"
    },

    {
        category:"js",
        title:"confirm()",
        type:"JavaScript Method",
        info:"Равзанаи OK ва Cancel нишон медиҳад.",
        why:"Барои гирифтани тасдиқ истифода мешавад.",
        example:"confirm('Delete?');"
    },
        {
        category:"js",
        title:"=",
        type:"Assignment Operator",
        info:"Қиматро ба тағйирёбанда медиҳад.",
        why:"Барои нигоҳ доштани маълумот истифода мешавад.",
        example:"let x = 10;"
    },

    {
        category:"js",
        title:"+",
        type:"Arithmetic Operator",
        info:"Ду адад ё матнро якҷоя мекунад.",
        why:"Барои ҷамъкунӣ ё пайваст кардани матн истифода мешавад.",
        example:"5 + 3"
    },

    {
        category:"js",
        title:"-",
        type:"Arithmetic Operator",
        info:"Аз як адад адади дигарро тарҳ мекунад.",
        why:"Барои ҳисобкунӣ истифода мешавад.",
        example:"10 - 4"
    },

    {
        category:"js",
        title:"*",
        type:"Arithmetic Operator",
        info:"Ду ададро зарб мекунад.",
        why:"Барои ҳисобкунӣ истифода мешавад.",
        example:"6 * 7"
    },

    {
        category:"js",
        title:"/",
        type:"Arithmetic Operator",
        info:"Як ададро ба дигараш тақсим мекунад.",
        why:"Барои ҳисобкунӣ истифода мешавад.",
        example:"20 / 5"
    },

    {
        category:"js",
        title:"%",
        type:"Arithmetic Operator",
        info:"Боқимондаи тақсимро бармегардонад.",
        why:"Барои санҷидани ҷуфт ё тоқ будани рақам истифода мешавад.",
        example:"10 % 3"
    },

    {
        category:"js",
        title:"++",
        type:"Increment Operator",
        info:"Қимати тағйирёбандаро 1 зиёд мекунад.",
        why:"Дар даврҳо (loop) зиёд истифода мешавад.",
        example:"x++;"
    },

    {
        category:"js",
        title:"--",
        type:"Decrement Operator",
        info:"Қимати тағйирёбандаро 1 кам мекунад.",
        why:"Дар даврҳо ва ҳисобкунӣ истифода мешавад.",
        example:"x--;"
    },

    {
        category:"js",
        title:"==",
        type:"Comparison Operator",
        info:"Қиматҳоро муқоиса мекунад.",
        why:"Барои шартҳо истифода мешавад.",
        example:"x == 5"
    },

    {
        category:"js",
        title:"===",
        type:"Comparison Operator",
        info:"Қимат ва навъи маълумотро муқоиса мекунад.",
        why:"Ин усули дурусттарини муқоиса мебошад.",
        example:"x === 5"
    },

    {
        category:"js",
        title:"!=",
        type:"Comparison Operator",
        info:"Санҷида мебинад, ки қиматҳо баробар нестанд.",
        why:"Дар шартҳо истифода мешавад.",
        example:"x != 10"
    },

    {
        category:"js",
        title:">",
        type:"Comparison Operator",
        info:"Бузургтар буданро месанҷад.",
        why:"Барои шартҳо истифода мешавад.",
        example:"x > 10"
    },

    {
        category:"js",
        title:"<",
        type:"Comparison Operator",
        info:"Хурдтар буданро месанҷад.",
        why:"Барои шартҳо истифода мешавад.",
        example:"x < 20"
    },

    {
        category:"js",
        title:"if",
        type:"Conditional Statement",
        info:"Агар шарт дуруст бошад, код иҷро мешавад.",
        why:"Барои қабули қарор истифода мешавад.",
        example:"if(age>=18){alert('OK');}"
    },

    {
        category:"js",
        title:"else",
        type:"Conditional Statement",
        info:"Агар шарт нодуруст бошад, ин қисми код иҷро мешавад.",
        why:"Бо if истифода мешавад.",
        example:"else{alert('No');}"
    },

    {
        category:"js",
        title:"else if",
        type:"Conditional Statement",
        info:"Якчанд шартро пайдарпай месанҷад.",
        why:"Барои санҷидани чанд ҳолат истифода мешавад.",
        example:"else if(score>=50){}"
    },

    {
        category:"js",
        title:"switch",
        type:"Conditional Statement",
        info:"Аз рӯи қимати як тағйирёбанда якчанд ҳолатро месанҷад.",
        why:"Ба ҷойи if...else if... истифода мешавад.",
        example:"switch(day){case 1:break;}"
    },

    {
        category:"js",
        title:"case",
        type:"Switch Statement",
        info:"Як ҳолати switch мебошад.",
        why:"Барои муайян кардани ҳар як интихоб истифода мешавад.",
        example:"case 'red':"
    },

    {
        category:"js",
        title:"default",
        type:"Switch Statement",
        info:"Агар ягон case мувофиқат накунад, иҷро мешавад.",
        why:"Барои ҳолати пешфарз истифода мешавад.",
        example:"default: console.log('Unknown');"
    },
        {
        category:"js",
        title:"for loop",
        type:"JavaScript Loop",
        info:"Даврест, ки кодро чанд маротиба иҷро мекунад.",
        why:"Барои такрори амалҳо истифода мешавад.",
        example:"for(let i=0;i<5;i++){console.log(i);}"
    },

    {
        category:"js",
        title:"while",
        type:"JavaScript Loop",
        info:"То вақте ки шарт дуруст аст, кодро иҷро мекунад.",
        why:"Барои такрор то иҷро шудани шарт истифода мешавад.",
        example:"while(x<10){x++;}"
    },

    {
        category:"js",
        title:"do...while",
        type:"JavaScript Loop",
        info:"Аввал кодро иҷро мекунад, баъд шартро месанҷад.",
        why:"Барои иҷрои ҳатмии як маротиба истифода мешавад.",
        example:"do{a++;}while(a<5);"
    },

    {
        category:"js",
        title:"for...of",
        type:"JavaScript Loop",
        info:"Аз рӯи қиматҳои Array ё дигар iterable мегузарад.",
        why:"Барои кор бо рӯйхатҳо истифода мешавад.",
        example:"for(let item of array){}"
    },

    {
        category:"js",
        title:"for...in",
        type:"JavaScript Loop",
        info:"Аз рӯи калидҳои Object мегузарад.",
        why:"Барои гирифтани property-ҳои объект истифода мешавад.",
        example:"for(let key in object){}"
    },

    {
        category:"js",
        title:"break",
        type:"JavaScript Control",
        info:"Даврро қатъ мекунад.",
        why:"Барои баромадан аз loop истифода мешавад.",
        example:"if(i==5){break;}"
    },

    {
        category:"js",
        title:"continue",
        type:"JavaScript Control",
        info:"Қадами ҳозираро мегузаронад ва давом медиҳад.",
        why:"Барои гузаштани як қисми loop истифода мешавад.",
        example:"if(i==3){continue;}"
    },

    {
        category:"js",
        title:"function",
        type:"JavaScript Function",
        info:"Блоки кодест, ки вазифаи муайянро иҷро мекунад.",
        why:"Барои такроран истифода бурдани код лозим аст.",
        example:"function hello(){}"
    },

    {
        category:"js",
        title:"return",
        type:"JavaScript Function",
        info:"Натиҷаи функсияро бармегардонад.",
        why:"Барои гирифтани қимат аз function истифода мешавад.",
        example:"return value;"
    },

    {
        category:"js",
        title:"Arrow Function",
        type:"JavaScript Function",
        info:"Шакли кӯтоҳи навиштани function мебошад.",
        why:"Барои навиштани функсияҳои кӯтоҳ истифода мешавад.",
        example:"const add=()=>{};"
    },

    {
        category:"js",
        title:"Parameter",
        type:"JavaScript Function",
        info:"Қимате мебошад, ки функсия қабул мекунад.",
        why:"Барои додани маълумот ба function истифода мешавад.",
        example:"function sum(a,b){}"
    },

    {
        category:"js",
        title:"Argument",
        type:"JavaScript Function",
        info:"Қимате мебошад, ки ҳангоми даъвати function дода мешавад.",
        why:"Барои фиристодани маълумот ба function истифода мешавад.",
        example:"sum(5,10);"
    },
        {
        category:"js",
        title:"Array",
        type:"JavaScript Array",
        info:"Маҷмӯи якчанд маълумот дар як тағйирёбанда мебошад.",
        why:"Барои нигоҳ доштани рӯйхатҳо истифода мешавад.",
        example:"let cars=['BMW','Mercedes'];"
    },

    {
        category:"js",
        title:"length",
        type:"Array Property",
        info:"Шумораи элементҳои Array-ро бармегардонад.",
        why:"Барои фаҳмидани дарозии рӯйхат истифода мешавад.",
        example:"cars.length;"
    },

    {
        category:"js",
        title:"push()",
        type:"Array Method",
        info:"Ба охири Array элемент илова мекунад.",
        why:"Барои илова кардани маълумоти нав истифода мешавад.",
        example:"cars.push('Audi');"
    },

    {
        category:"js",
        title:"pop()",
        type:"Array Method",
        info:"Элементи охирини Array-ро хориҷ мекунад.",
        why:"Барои нест кардани элементи охирин истифода мешавад.",
        example:"cars.pop();"
    },

    {
        category:"js",
        title:"shift()",
        type:"Array Method",
        info:"Элементи аввали Array-ро хориҷ мекунад.",
        why:"Барои тағйир додани аввали рӯйхат истифода мешавад.",
        example:"cars.shift();"
    },

    {
        category:"js",
        title:"unshift()",
        type:"Array Method",
        info:"Ба аввали Array элемент илова мекунад.",
        why:"Барои илова кардани элемент дар аввал истифода мешавад.",
        example:"cars.unshift('Toyota');"
    },

    {
        category:"js",
        title:"slice()",
        type:"Array Method",
        info:"Қисми Array-ро нусха мегирад.",
        why:"Барои гирифтани қисми маълумот бе тағйири Array истифода мешавад.",
        example:"cars.slice(0,2);"
    },

    {
        category:"js",
        title:"splice()",
        type:"Array Method",
        info:"Элементҳоро илова, нест ё иваз мекунад.",
        why:"Барои тағйири Array истифода мешавад.",
        example:"cars.splice(1,1);"
    },

    {
        category:"js",
        title:"indexOf()",
        type:"Array Method",
        info:"Ҷойи элементи муайянро меёбад.",
        why:"Барои ҷустуҷӯ дар Array истифода мешавад.",
        example:"cars.indexOf('BMW');"
    },

    {
        category:"js",
        title:"includes()",
        type:"Array Method",
        info:"Месанҷад, ки Array элемент дорад ё не.",
        why:"Барои санҷиши мавҷудияти маълумот истифода мешавад.",
        example:"cars.includes('BMW');"
    },

    {
        category:"js",
        title:"forEach()",
        type:"Array Method",
        info:"Аз болои ҳамаи элементҳои Array мегузарад.",
        why:"Барои иҷро кардани амал ба ҳар элемент истифода мешавад.",
        example:"cars.forEach(car=>console.log(car));"
    },

    {
        category:"js",
        title:"map()",
        type:"Array Method",
        info:"Array-и нав аз рӯи элементҳои кӯҳна месозад.",
        why:"Барои тағйир додани ҳамаи элементҳо истифода мешавад.",
        example:"numbers.map(x=>x*2);"
    },

    {
        category:"js",
        title:"filter()",
        type:"Array Method",
        info:"Танҳо элементҳои мувофиқи шартро мегирад.",
        why:"Барои филтр кардани маълумот истифода мешавад.",
        example:"ages.filter(age=>age>=18);"
    },

    {
        category:"js",
        title:"find()",
        type:"Array Method",
        info:"Элементи аввалини мувофиқро меёбад.",
        why:"Барои ҷустуҷӯи як маълумоти махсус истифода мешавад.",
        example:"users.find(user=>user.id==1);"
    },

    {
        category:"js",
        title:"findIndex()",
        type:"Array Method",
        info:"Индекси элементи ёфтшударо бармегардонад.",
        why:"Барои ёфтани ҷойи элемент истифода мешавад.",
        example:"arr.findIndex(x=>x>5);"
    },

    {
        category:"js",
        title:"reduce()",
        type:"Array Method",
        info:"Ҳамаи элементҳоро ба як қимат ҷамъ мекунад.",
        why:"Барои ҳисобкунӣ ва ҷамъбаст истифода мешавад.",
        example:"numbers.reduce((a,b)=>a+b);"
    },
        {
        category:"js",
        title:"Object",
        type:"JavaScript Object",
        info:"Маълумотро бо шакли key ва value нигоҳ медорад.",
        why:"Барои нигоҳ доштани маълумоти мураккаб истифода мешавад.",
        example:"let user={name:'Ali',age:18};"
    },

    {
        category:"js",
        title:"Object Property",
        type:"JavaScript Object",
        info:"Қисми дохилии Object мебошад, ки дорои калид ва қимат аст.",
        why:"Барои дастрасӣ ба маълумоти объект истифода мешавад.",
        example:"user.name;"
    },

    {
        category:"js",
        title:"Object Method",
        type:"JavaScript Object",
        info:"Функсияе мебошад, ки дар дохили Object ҷойгир аст.",
        why:"Барои иҷро кардани амалҳои объект истифода мешавад.",
        example:"user.sayHello();"
    },

    {
        category:"js",
        title:"this",
        type:"JavaScript Object",
        info:"Ба объекти ҳозира ишора мекунад.",
        why:"Барои дастрасӣ ба property ва method-и объект истифода мешавад.",
        example:"this.name;"
    },

    {
        category:"js",
        title:"Object.keys()",
        type:"JavaScript Object Method",
        info:"Рӯйхати калидҳои Object-ро бармегардонад.",
        why:"Барои гирифтани ҳамаи property-ҳо истифода мешавад.",
        example:"Object.keys(user);"
    },

    {
        category:"js",
        title:"Object.values()",
        type:"JavaScript Object Method",
        info:"Рӯйхати қиматҳои Object-ро бармегардонад.",
        why:"Барои гирифтани маълумоти дохилии объект истифода мешавад.",
        example:"Object.values(user);"
    },

    {
        category:"js",
        title:"Object.entries()",
        type:"JavaScript Object Method",
        info:"Калид ва қиматро ҳамчун Array бармегардонад.",
        why:"Барои кор бо Object ҳамчун рӯйхат истифода мешавад.",
        example:"Object.entries(user);"
    },

    {
        category:"js",
        title:"JSON",
        type:"JavaScript Data Format",
        info:"Формати матнии нигоҳдорӣ ва интиқоли маълумот мебошад.",
        why:"Барои кор бо API ва серверҳо истифода мешавад.",
        example:'{"name":"Ali"}'
    },

    {
        category:"js",
        title:"JSON.stringify()",
        type:"JSON Method",
        info:"Object ё Array-ро ба JSON String табдил медиҳад.",
        why:"Барои нигоҳ доштан ё фиристодани маълумот истифода мешавад.",
        example:"JSON.stringify(user);"
    },

    {
        category:"js",
        title:"JSON.parse()",
        type:"JSON Method",
        info:"JSON String-ро ба Object табдил медиҳад.",
        why:"Барои гирифтани маълумот аз JSON истифода мешавад.",
        example:"JSON.parse(data);"
    },

    {
        category:"js",
        title:"DOM",
        type:"JavaScript DOM",
        info:"Модели объектии ҳуҷҷати HTML мебошад.",
        why:"Барои тағйир додани HTML бо JavaScript истифода мешавад.",
        example:"document.body;"
    },

    {
        category:"js",
        title:"document",
        type:"DOM Object",
        info:"Ба тамоми саҳифаи HTML дастрасӣ медиҳад.",
        why:"Барои ёфтани ва тағйир додани элементҳо истифода мешавад.",
        example:"document.title;"
    },

    {
        category:"js",
        title:"getElementById()",
        type:"DOM Method",
        info:"Элементро бо ID пайдо мекунад.",
        why:"Барои кор бо як элемент истифода мешавад.",
        example:"document.getElementById('box');"
    },

    {
        category:"js",
        title:"querySelector()",
        type:"DOM Method",
        info:"Аввалин элементи мувофиқро пайдо мекунад.",
        why:"Барои CSS selector истифода мешавад.",
        example:"document.querySelector('.btn');"
    },

    {
        category:"js",
        title:"querySelectorAll()",
        type:"DOM Method",
        info:"Ҳамаи элементҳои мувофиқро мегирад.",
        why:"Барои кор бо якчанд элемент истифода мешавад.",
        example:"document.querySelectorAll('p');"
    },
        {
        category:"js",
        title:"innerHTML",
        type:"DOM Property",
        info:"HTML-и дохили элементро мехонад ё иваз мекунад.",
        why:"Барои тағйир додани мундариҷаи саҳифа истифода мешавад.",
        example:"element.innerHTML='Hello';"
    },

    {
        category:"js",
        title:"innerText",
        type:"DOM Property",
        info:"Танҳо матни намоёни элементро мегирад ё иваз мекунад.",
        why:"Барои тағйири матни оддӣ истифода мешавад.",
        example:"element.innerText='Text';"
    },

    {
        category:"js",
        title:"textContent",
        type:"DOM Property",
        info:"Ҳамаи матни дохили элементро мегирад.",
        why:"Барои кор бо матн бе HTML истифода мешавад.",
        example:"element.textContent='Hello';"
    },

    {
        category:"js",
        title:"style",
        type:"DOM Property",
        info:"CSS-и элементро бо JavaScript тағйир медиҳад.",
        why:"Барои тағйир додани намуди элемент истифода мешавад.",
        example:"element.style.color='red';"
    },

    {
        category:"js",
        title:"className",
        type:"DOM Property",
        info:"Номи class-и элементро мегирад ё иваз мекунад.",
        why:"Барои тағйири class истифода мешавад.",
        example:"element.className='box';"
    },

    {
        category:"js",
        title:"classList",
        type:"DOM Property",
        info:"Бо class-ҳои элемент кор мекунад.",
        why:"Барои илова, нест ва санҷиши class истифода мешавад.",
        example:"element.classList.add('active');"
    },

    {
        category:"js",
        title:"classList.add()",
        type:"DOM Method",
        info:"Class-и нав илова мекунад.",
        why:"Барои фаъол кардани дизайн истифода мешавад.",
        example:"box.classList.add('show');"
    },

    {
        category:"js",
        title:"classList.remove()",
        type:"DOM Method",
        info:"Class-ро нест мекунад.",
        why:"Барои хориҷ кардани услуб истифода мешавад.",
        example:"box.classList.remove('hide');"
    },

    {
        category:"js",
        title:"classList.toggle()",
        type:"DOM Method",
        info:"Class-ро илова ё нест мекунад.",
        why:"Барои менюҳо ва режимҳои тағйирёбанда истифода мешавад.",
        example:"menu.classList.toggle('open');"
    },

    {
        category:"js",
        title:"createElement()",
        type:"DOM Method",
        info:"Элементи нави HTML месозад.",
        why:"Барои сохтани элементҳо бо JavaScript истифода мешавад.",
        example:"document.createElement('div');"
    },

    {
        category:"js",
        title:"appendChild()",
        type:"DOM Method",
        info:"Элементро ба дохили элементи дигар илова мекунад.",
        why:"Барои илова кардани HTML бо JavaScript истифода мешавад.",
        example:"box.appendChild(div);"
    },

    {
        category:"js",
        title:"remove()",
        type:"DOM Method",
        info:"Элементро аз саҳифа нест мекунад.",
        why:"Барои хориҷ кардани элемент истифода мешавад.",
        example:"element.remove();"
    },

    {
        category:"js",
        title:"setAttribute()",
        type:"DOM Method",
        info:"Атрибут ба элемент илова ё иваз мекунад.",
        why:"Барои тағйири href, src, id ва дигар атрибутҳо истифода мешавад.",
        example:"img.setAttribute('src','photo.jpg');"
    },

    {
        category:"js",
        title:"getAttribute()",
        type:"DOM Method",
        info:"Қимати атрибутро мегирад.",
        why:"Барои хондани маълумоти атрибут истифода мешавад.",
        example:"img.getAttribute('src');"
    },

    {
        category:"js",
        title:"removeAttribute()",
        type:"DOM Method",
        info:"Атрибутро нест мекунад.",
        why:"Барои хориҷ кардани хусусият аз элемент истифода мешавад.",
        example:"input.removeAttribute('disabled');"
    },

    {
        category:"js",
        title:"addEventListener()",
        type:"DOM Events",
        info:"Ба элемент воқеа (event) пайваст мекунад.",
        why:"Барои иҷро кардани код ҳангоми амалҳои корбар истифода мешавад.",
        example:"btn.addEventListener('click',func);"
    },
        {
        category:"js",
        title:"click",
        type:"JavaScript Event",
        info:"Вақте корбар элементро пахш мекунад, иҷро мешавад.",
        why:"Барои тугмаҳо ва амалҳои клик истифода мешавад.",
        example:"button.onclick=function(){};"
    },

    {
        category:"js",
        title:"dblclick",
        type:"JavaScript Event",
        info:"Ҳангоми ду маротиба пахш кардан иҷро мешавад.",
        why:"Барои амали double click истифода мешавад.",
        example:"element.ondblclick=function(){};"
    },

    {
        category:"js",
        title:"mouseover",
        type:"JavaScript Event",
        info:"Вақте муш ба болои элемент меравад, иҷро мешавад.",
        why:"Барои эффектҳои hover истифода мешавад.",
        example:"box.onmouseover=function(){};"
    },

    {
        category:"js",
        title:"mouseout",
        type:"JavaScript Event",
        info:"Вақте муш аз болои элемент мебарояд, иҷро мешавад.",
        why:"Барои хориҷ шудани эффект истифода мешавад.",
        example:"box.onmouseout=function(){};"
    },

    {
        category:"js",
        title:"mousedown",
        type:"JavaScript Event",
        info:"Ҳангоми пахши тугмаи муш иҷро мешавад.",
        why:"Барои гирифтани вақти пахш истифода мешавад.",
        example:"element.onmousedown=function(){};"
    },

    {
        category:"js",
        title:"mouseup",
        type:"JavaScript Event",
        info:"Ҳангоми раҳо кардани тугмаи муш иҷро мешавад.",
        why:"Барои анҷоми пахш истифода мешавад.",
        example:"element.onmouseup=function(){};"
    },

    {
        category:"js",
        title:"keydown",
        type:"JavaScript Event",
        info:"Ҳангоми пахш кардани клавиатура иҷро мешавад.",
        why:"Барои гирифтани тугмаҳои клавиатура истифода мешавад.",
        example:"document.onkeydown=function(e){};"
    },

    {
        category:"js",
        title:"keyup",
        type:"JavaScript Event",
        info:"Ҳангоми раҳо кардани клавиатура иҷро мешавад.",
        why:"Барои санҷиши навиштан истифода мешавад.",
        example:"input.onkeyup=function(){};"
    },

    {
        category:"js",
        title:"input",
        type:"JavaScript Event",
        info:"Ҳангоми тағйир ёфтани маълумоти input иҷро мешавад.",
        why:"Барои ҷустуҷӯи зинда ва санҷиши матн истифода мешавад.",
        example:"input.addEventListener('input',func);"
    },

    {
        category:"js",
        title:"change",
        type:"JavaScript Event",
        info:"Ҳангоми тағйир ёфтани қимати элемент иҷро мешавад.",
        why:"Барои select ва input истифода мешавад.",
        example:"select.onchange=function(){};"
    },

    {
        category:"js",
        title:"submit",
        type:"JavaScript Event",
        info:"Ҳангоми фиристодани form иҷро мешавад.",
        why:"Барои санҷиши форма истифода мешавад.",
        example:"form.addEventListener('submit',func);"
    },

    {
        category:"js",
        title:"load",
        type:"JavaScript Event",
        info:"Вақте саҳифа пурра кушода мешавад, иҷро мешавад.",
        why:"Барои оғоз кардани код баъд аз боршавӣ истифода мешавад.",
        example:"window.onload=function(){};"
    },

    {
        category:"js",
        title:"scroll",
        type:"JavaScript Event",
        info:"Ҳангоми ҳаракати саҳифа иҷро мешавад.",
        why:"Барои scroll animation ва менюҳо истифода мешавад.",
        example:"window.addEventListener('scroll',func);"
    },

    {
        category:"js",
        title:"resize",
        type:"JavaScript Event",
        info:"Ҳангоми тағйир ёфтани андозаи экран иҷро мешавад.",
        why:"Барои Responsive JavaScript истифода мешавад.",
        example:"window.onresize=function(){};"
    },

    {
        category:"js",
        title:"focus",
        type:"JavaScript Event",
        info:"Вақте input фаъол мешавад, иҷро мешавад.",
        why:"Барои нишон додани ҳолати фаъол истифода мешавад.",
        example:"input.onfocus=function(){};"
    },

    {
        category:"js",
        title:"blur",
        type:"JavaScript Event",
        info:"Вақте input аз ҳолати фаъол мебарояд, иҷро мешавад.",
        why:"Барои санҷиши маълумот баъд аз навиштан истифода мешавад.",
        example:"input.onblur=function(){};"
    },

    {
        category:"js",
        title:"preventDefault()",
        type:"JavaScript Event Method",
        info:"Амали стандартии браузерро қатъ мекунад.",
        why:"Барои боздоштани гузариши link ё фиристодани form истифода мешавад.",
        example:"event.preventDefault();"
    },
        {
        category:"js",
        title:"localStorage",
        type:"Web Storage API",
        info:"Маълумотро дар браузер нигоҳ медорад ва баъд аз бастани сайт ҳам мемонад.",
        why:"Барои нигоҳ доштани танзимот, аккаунт ва маълумоти корбар истифода мешавад.",
        example:"localStorage.setItem('name','Ali');"
    },

    {
        category:"js",
        title:"sessionStorage",
        type:"Web Storage API",
        info:"Маълумотро танҳо то баста шудани ҷадвали браузер нигоҳ медорад.",
        why:"Барои маълумоти муваққатӣ истифода мешавад.",
        example:"sessionStorage.setItem('user','Ali');"
    },

    {
        category:"js",
        title:"setItem()",
        type:"Storage Method",
        info:"Маълумоти навро дар Storage нигоҳ медорад.",
        why:"Барои сабт кардани маълумот истифода мешавад.",
        example:"localStorage.setItem('age','18');"
    },

    {
        category:"js",
        title:"getItem()",
        type:"Storage Method",
        info:"Маълумотро аз Storage мегирад.",
        why:"Барои хондани маълумоти захирашуда истифода мешавад.",
        example:"localStorage.getItem('age');"
    },

    {
        category:"js",
        title:"removeItem()",
        type:"Storage Method",
        info:"Як маълумотро аз Storage нест мекунад.",
        why:"Барои тоза кардани маълумоти муайян истифода мешавад.",
        example:"localStorage.removeItem('age');"
    },

    {
        category:"js",
        title:"clear()",
        type:"Storage Method",
        info:"Ҳамаи маълумоти Storage-ро нест мекунад.",
        why:"Барои пурра тоза кардани маълумот истифода мешавад.",
        example:"localStorage.clear();"
    },

    {
        category:"js",
        title:"key()",
        type:"Storage Method",
        info:"Номи калиди Storage-ро аз рӯи рақам мегирад.",
        why:"Барои гирифтани номи маълумоти захирашуда истифода мешавад.",
        example:"localStorage.key(0);"
    },

    {
        category:"js",
        title:"Storage length",
        type:"Storage Property",
        info:"Шумораи маълумоти дар Storage бударо нишон медиҳад.",
        why:"Барои донистани миқдори маълумот истифода мешавад.",
        example:"localStorage.length;"
    },

    {
        category:"js",
        title:"Cookies",
        type:"Browser Storage",
        info:"Маълумоти хурдест, ки браузер нигоҳ медорад.",
        why:"Барои сессия, танзимот ва идентификатсия истифода мешавад.",
        example:"document.cookie;"
    },

    {
        category:"js",
        title:"document.cookie",
        type:"Browser API",
        info:"Барои хондан ва сохтани Cookie истифода мешавад.",
        why:"Барои кор бо маълумоти хурди браузер истифода мешавад.",
        example:"document.cookie='user=Ali';"
    },

    {
        category:"js",
        title:"IndexedDB",
        type:"Browser Database",
        info:"Пойгоҳи додаи дохилии браузер мебошад.",
        why:"Барои нигоҳ доштани маълумоти калон истифода мешавад.",
        example:"indexedDB.open('Database');"
    },

    {
        category:"js",
        title:"Web Storage API",
        type:"Browser API",
        info:"Маҷмӯи имкониятҳо барои нигоҳ доштани маълумот дар браузер мебошад.",
        why:"Барои сохтани барномаҳои Offline истифода мешавад.",
        example:"localStorage.setItem();"
    },
        {
        category:"js",
        title:"API",
        type:"JavaScript Web API",
        info:"Роҳест барои мубодилаи маълумот байни барномаҳо.",
        why:"Барои гирифтани маълумот аз серверҳо истифода мешавад.",
        example:"fetch('api.com');"
    },

    {
        category:"js",
        title:"Fetch API",
        type:"JavaScript API",
        info:"Барои фиристодан ва гирифтани маълумот аз сервер истифода мешавад.",
        why:"Барои кор бо маълумоти онлайн истифода мешавад.",
        example:"fetch('https://api.com/data');"
    },

    {
        category:"js",
        title:"fetch()",
        type:"Fetch Method",
        info:"Дархост ба сервер мефиристад.",
        why:"Барои гирифтани маълумот аз API истифода мешавад.",
        example:"fetch(url).then(res=>res.json());"
    },

    {
        category:"js",
        title:"Promise",
        type:"JavaScript Async",
        info:"Натиҷаи амали асинхрониро нишон медиҳад.",
        why:"Барои корҳое, ки вақт мегиранд истифода мешавад.",
        example:"new Promise((resolve)=>{});"
    },

    {
        category:"js",
        title:"then()",
        type:"Promise Method",
        info:"Баъд аз иҷро шудани Promise кор мекунад.",
        why:"Барои гирифтани натиҷаи амали асинхронӣ истифода мешавад.",
        example:"promise.then(data=>{});"
    },

    {
        category:"js",
        title:"catch()",
        type:"Promise Method",
        info:"Хатои Promise-ро мегирад.",
        why:"Барои идора кардани хатогиҳо истифода мешавад.",
        example:"promise.catch(error=>{});"
    },

    {
        category:"js",
        title:"finally()",
        type:"Promise Method",
        info:"Ҳамеша баъд аз Promise иҷро мешавад.",
        why:"Барои иҷрои коди охирин истифода мешавад.",
        example:"promise.finally(()=>{});"
    },

    {
        category:"js",
        title:"async",
        type:"JavaScript Async",
        info:"Функсияро асинхронӣ мекунад.",
        why:"Барои истифодаи await лозим аст.",
        example:"async function load(){}"
    },

    {
        category:"js",
        title:"await",
        type:"JavaScript Async",
        info:"Интизори натиҷаи Promise мешавад.",
        why:"Кодро осонтар хондан мекунад.",
        example:"let data=await fetch(url);"
    },

    {
        category:"js",
        title:"response.json()",
        type:"Fetch Method",
        info:"Ҷавоби серверро ба JSON табдил медиҳад.",
        why:"Барои хондани маълумоти API истифода мешавад.",
        example:"response.json();"
    },

    {
        category:"js",
        title:"GET Request",
        type:"HTTP Method",
        info:"Барои гирифтани маълумот аз сервер истифода мешавад.",
        why:"Маълумотро мехонад.",
        example:"fetch(url,{method:'GET'});"
    },

    {
        category:"js",
        title:"POST Request",
        type:"HTTP Method",
        info:"Барои фиристодани маълумот ба сервер истифода мешавад.",
        why:"Барои сабти маълумот истифода мешавад.",
        example:"fetch(url,{method:'POST'});"
    },

    {
        category:"js",
        title:"Headers",
        type:"HTTP",
        info:"Маълумоти иловагӣ дар бораи дархост мебошад.",
        why:"Барои муайян кардани формат ва иҷозатҳо истифода мешавад.",
        example:"headers:{'Content-Type':'application/json'}"
    },

    {
        category:"js",
        title:"XMLHttpRequest",
        type:"JavaScript API",
        info:"Усули кӯҳнаи ирсоли дархост ба сервер мебошад.",
        why:"Пеш аз Fetch API бисёр истифода мешуд.",
        example:"new XMLHttpRequest();"
    },
        {
        category:"js",
        title:"BOM",
        type:"Browser Object Model",
        info:"Барои кор кардан бо браузер истифода мешавад.",
        why:"Барои идора кардани window, history, location ва дигар қисмҳои браузер лозим аст.",
        example:"window.alert('Hello');"
    },

    {
        category:"js",
        title:"window",
        type:"BOM Object",
        info:"Объекти асосии браузер мебошад.",
        why:"Барои дастрасӣ ба имкониятҳои браузер истифода мешавад.",
        example:"window.innerWidth;"
    },

    {
        category:"js",
        title:"window.innerWidth",
        type:"BOM Property",
        info:"Паҳноии равзанаи браузерро нишон медиҳад.",
        why:"Барои Responsive JavaScript истифода мешавад.",
        example:"console.log(window.innerWidth);"
    },

    {
        category:"js",
        title:"window.innerHeight",
        type:"BOM Property",
        info:"Баландии равзанаи браузерро нишон медиҳад.",
        why:"Барои кор бо андозаи экран истифода мешавад.",
        example:"console.log(window.innerHeight);"
    },

    {
        category:"js",
        title:"location",
        type:"BOM Object",
        info:"Маълумоти URL-и саҳифаро нигоҳ медорад.",
        why:"Барои гузаштан ба дигар саҳифа истифода мешавад.",
        example:"location.href;"
    },

    {
        category:"js",
        title:"location.href",
        type:"BOM Property",
        info:"URL-и ҳозираи саҳифаро нишон медиҳад ё иваз мекунад.",
        why:"Барои redirect истифода мешавад.",
        example:"location.href='https://site.com';"
    },

    {
        category:"js",
        title:"location.reload()",
        type:"BOM Method",
        info:"Саҳифаро аз нав бор мекунад.",
        why:"Барои навсозии саҳифа истифода мешавад.",
        example:"location.reload();"
    },

    {
        category:"js",
        title:"history",
        type:"BOM Object",
        info:"Таърихи ҳаракати корбарро нигоҳ медорад.",
        why:"Барои идора кардани гузаштан байни саҳифаҳо истифода мешавад.",
        example:"history.back();"
    },

    {
        category:"js",
        title:"history.back()",
        type:"BOM Method",
        info:"Ба саҳифаи пешина бармегардад.",
        why:"Барои сохтани тугмаи Back истифода мешавад.",
        example:"history.back();"
    },

    {
        category:"js",
        title:"history.forward()",
        type:"BOM Method",
        info:"Ба саҳифаи баъдӣ мегузарад.",
        why:"Барои ҳаракат дар таърих истифода мешавад.",
        example:"history.forward();"
    },

    {
        category:"js",
        title:"navigator",
        type:"BOM Object",
        info:"Маълумот дар бораи браузер ва дастгоҳ медиҳад.",
        why:"Барои гирифтани маълумоти система истифода мешавад.",
        example:"navigator.userAgent;"
    },

    {
        category:"js",
        title:"navigator.language",
        type:"BOM Property",
        info:"Забони браузерро нишон медиҳад.",
        why:"Барои муайян кардани забони корбар истифода мешавад.",
        example:"navigator.language;"
    },

    {
        category:"js",
        title:"navigator.onLine",
        type:"BOM Property",
        info:"Санҷида мебинад, ки интернет ҳаст ё не.",
        why:"Барои барномаҳои Offline истифода мешавад.",
        example:"navigator.onLine;"
    },

    {
        category:"js",
        title:"screen",
        type:"BOM Object",
        info:"Маълумоти экранро медиҳад.",
        why:"Барои донистани андозаи экран истифода мешавад.",
        example:"screen.width;"
    },

    {
        category:"js",
        title:"screen.width",
        type:"BOM Property",
        info:"Паҳноии экранро нишон медиҳад.",
        why:"Барои кор бо экран истифода мешавад.",
        example:"screen.width;"
    },

    {
        category:"js",
        title:"setTimeout()",
        type:"BOM Timer",
        info:"Кодро баъд аз вақти муайян иҷро мекунад.",
        why:"Барои таъхир додани амал истифода мешавад.",
        example:"setTimeout(func,1000);"
    },

    {
        category:"js",
        title:"setInterval()",
        type:"BOM Timer",
        info:"Кодро ҳар як вақти муайян такрор мекунад.",
        why:"Барои соат, таймер ва аниматсия истифода мешавад.",
        example:"setInterval(func,1000);"
    },

    {
        category:"js",
        title:"clearTimeout()",
        type:"BOM Timer",
        info:"setTimeout-ро қатъ мекунад.",
        why:"Барои бекор кардани таймер истифода мешавад.",
        example:"clearTimeout(id);"
    },

    {
        category:"js",
        title:"clearInterval()",
        type:"BOM Timer",
        info:"setInterval-ро қатъ мекунад.",
        why:"Барои боздоштани такрори таймер истифода мешавад.",
        example:"clearInterval(id);"
    },
        {
        category:"js",
        title:"OOP",
        type:"JavaScript Programming",
        info:"Усули барномасозӣ мебошад, ки бо объектҳо кор мекунад.",
        why:"Барои сохтани кодҳои калон ва тартибдодашуда истифода мешавад.",
        example:"class User{}"
    },

    {
        category:"js",
        title:"class",
        type:"JavaScript OOP",
        info:"Шаблон барои сохтани объектҳо мебошад.",
        why:"Барои сохтани объектҳои якхела истифода мешавад.",
        example:"class Car{}"
    },

    {
        category:"js",
        title:"constructor",
        type:"JavaScript Class",
        info:"Функсияест, ки ҳангоми сохтани объект иҷро мешавад.",
        why:"Барои додани қиматҳои аввал ба объект истифода мешавад.",
        example:"constructor(name){this.name=name;}"
    },

    {
        category:"js",
        title:"new",
        type:"JavaScript Operator",
        info:"Объекти нав аз class месозад.",
        why:"Барои истифодаи class лозим аст.",
        example:"let car=new Car();"
    },

    {
        category:"js",
        title:"this",
        type:"JavaScript Class",
        info:"Ба объекти ҳозира ишора мекунад.",
        why:"Барои дастрасӣ ба маълумоти объект истифода мешавад.",
        example:"this.name=name;"
    },

    {
        category:"js",
        title:"method",
        type:"JavaScript Class",
        info:"Функсияи дохили class мебошад.",
        why:"Барои иҷро кардани амалҳои объект истифода мешавад.",
        example:"start(){ }"
    },

    {
        category:"js",
        title:"extends",
        type:"JavaScript OOP",
        info:"Як class аз class-и дигар мерос мегирад.",
        why:"Барои такрор истифода кардани код лозим аст.",
        example:"class BMW extends Car{}"
    },

    {
        category:"js",
        title:"super()",
        type:"JavaScript OOP",
        info:"Constructor-и class-и падарро даъват мекунад.",
        why:"Барои истифодаи property ва method-и падар лозим аст.",
        example:"super(name);"
    },

    {
        category:"js",
        title:"static",
        type:"JavaScript Class",
        info:"Method ё property-ро ба худи class мепайвандад.",
        why:"Бе сохтани объект истифода мешавад.",
        example:"static hello(){}"
    },

    {
        category:"js",
        title:"getter",
        type:"JavaScript Class",
        info:"Барои гирифтани қимати property истифода мешавад.",
        why:"Назорати хондани маълумот медиҳад.",
        example:"get name(){}"
    },

    {
        category:"js",
        title:"setter",
        type:"JavaScript Class",
        info:"Барои тағйир додани қимати property истифода мешавад.",
        why:"Назорати тағйири маълумот медиҳад.",
        example:"set name(value){}"
    },

    {
        category:"js",
        title:"export",
        type:"JavaScript Module",
        info:"Кодро аз як файл барои истифодаи дигар файл мебарорад.",
        why:"Барои тақсим кардани проект ба файлҳо истифода мешавад.",
        example:"export default App;"
    },

    {
        category:"js",
        title:"import",
        type:"JavaScript Module",
        info:"Кодро аз файли дигар ворид мекунад.",
        why:"Барои истифодаи функсия ва объектҳои дигар файлҳо лозим аст.",
        example:"import App from './app.js';"
    },

    {
        category:"js",
        title:"default export",
        type:"JavaScript Module",
        info:"Як қимати асосиро аз файл мебарорад.",
        why:"Барои содда кардани import истифода мешавад.",
        example:"export default function(){}"
    },

    {
        category:"js",
        title:"named export",
        type:"JavaScript Module",
        info:"Якчанд элементро аз файл мебарорад.",
        why:"Барои истифодаи чанд функсия ё объект истифода мешавад.",
        example:"export {sum,minus};"
    },
        {
        category:"html",
        title:"<header>",
        type:"HTML5 Semantic Tag",
        info:"Қисми болоии саҳифа ё блокро муайян мекунад.",
        why:"Барои ҷойгир кардани логотип, сарлавҳа ва меню истифода мешавад.",
        example:"<header>Logo</header>"
    },

    {
        category:"html",
        title:"<nav>",
        type:"HTML5 Semantic Tag",
        info:"Қисми пайвандҳои навигатсионӣ мебошад.",
        why:"Барои сохтани менюи сайт истифода мешавад.",
        example:"<nav><a href='#'>Home</a></nav>"
    },

    {
        category:"html",
        title:"<main>",
        type:"HTML5 Semantic Tag",
        info:"Қисми асосии маълумоти саҳифаро нишон медиҳад.",
        why:"Барои ҷудо кардани мундариҷаи асосӣ истифода мешавад.",
        example:"<main>Content</main>"
    },

    {
        category:"html",
        title:"<section>",
        type:"HTML5 Semantic Tag",
        info:"Як қисми мавзӯии саҳифаро ташкил медиҳад.",
        why:"Барои гурӯҳбандии маълумот истифода мешавад.",
        example:"<section>About</section>"
    },

    {
        category:"html",
        title:"<article>",
        type:"HTML5 Semantic Tag",
        info:"Мақола ё маълумоти мустақилро нишон медиҳад.",
        why:"Барои блог, хабар ва мақолаҳо истифода мешавад.",
        example:"<article>News</article>"
    },

    {
        category:"html",
        title:"<aside>",
        type:"HTML5 Semantic Tag",
        info:"Маълумоти иловагӣ ё канориро нишон медиҳад.",
        why:"Барои sidebar ва реклама истифода мешавад.",
        example:"<aside>Menu</aside>"
    },

    {
        category:"html",
        title:"<footer>",
        type:"HTML5 Semantic Tag",
        info:"Қисми поёнии саҳифаро муайян мекунад.",
        why:"Барои copyright, маълумоти тамос ва пайвандҳо истифода мешавад.",
        example:"<footer>2026</footer>"
    },

    {
        category:"html",
        title:"<figure>",
        type:"HTML5 Semantic Tag",
        info:"Барои гурӯҳи тасвир ва шарҳи он истифода мешавад.",
        why:"Барои нишон додани медиа бо тавсиф истифода мешавад.",
        example:"<figure><img src='a.jpg'></figure>"
    },

    {
        category:"html",
        title:"<figcaption>",
        type:"HTML5 Semantic Tag",
        info:"Шарҳи барои figure мебошад.",
        why:"Барои навиштани номи тасвир истифода мешавад.",
        example:"<figcaption>Photo</figcaption>"
    },

    {
        category:"html",
        title:"<time>",
        type:"HTML5 Semantic Tag",
        info:"Вақт ё сана нишон медиҳад.",
        why:"Барои маълумоти сана ва вақт истифода мешавад.",
        example:"<time>2026-08-02</time>"
    },

    {
        category:"html",
        title:"<mark>",
        type:"HTML5 Tag",
        info:"Матнро ҳамчун қайдшуда нишон медиҳад.",
        why:"Барои равшан кардани қисми муҳим истифода мешавад.",
        example:"<mark>Important</mark>"
    },

    {
        category:"html",
        title:"<details>",
        type:"HTML5 Tag",
        info:"Маълумоти кушодашаванда месозад.",
        why:"Барои FAQ ва маълумоти пинҳон истифода мешавад.",
        example:"<details>Info</details>"
    },

    {
        category:"html",
        title:"<summary>",
        type:"HTML5 Tag",
        info:"Сарлавҳаи details мебошад.",
        why:"Барои нишон додани номи қисми пинҳон истифода мешавад.",
        example:"<summary>Click</summary>"
    },
        {
        category:"html",
        title:"<fieldset>",
        type:"HTML Form Tag",
        info:"Якчанд элементи формаро ба як гурӯҳ ҷамъ мекунад.",
        why:"Барои тартиб додани формаҳои калон истифода мешавад.",
        example:"<fieldset><input></fieldset>"
    },

    {
        category:"html",
        title:"<legend>",
        type:"HTML Form Tag",
        info:"Номи гурӯҳи fieldset-ро нишон медиҳад.",
        why:"Барои шарҳи қисми форма истифода мешавад.",
        example:"<legend>Account</legend>"
    },

    {
        category:"html",
        title:"<label>",
        type:"HTML Form Tag",
        info:"Номи майдони input-ро нишон медиҳад.",
        why:"Барои пайваст кардани матн бо input истифода мешавад.",
        example:"<label>Name</label>"
    },

    {
        category:"html",
        title:"<textarea>",
        type:"HTML Form Tag",
        info:"Ҷои навиштани матни дароз месозад.",
        why:"Барои паёмҳо ва шарҳҳо истифода мешавад.",
        example:"<textarea></textarea>"
    },

    {
        category:"html",
        title:"<select>",
        type:"HTML Form Tag",
        info:"Рӯйхати интихобӣ месозад.",
        why:"Барои интихоби як ё якчанд вариант истифода мешавад.",
        example:"<select><option>HTML</option></select>"
    },

    {
        category:"html",
        title:"<option>",
        type:"HTML Form Tag",
        info:"Як варианти дохили select мебошад.",
        why:"Барои сохтани интихобҳо истифода мешавад.",
        example:"<option>CSS</option>"
    },

    {
        category:"html",
        title:"<optgroup>",
        type:"HTML Form Tag",
        info:"Якчанд option-ро гурӯҳ мекунад.",
        why:"Барои тартиб додани рӯйхати калон истифода мешавад.",
        example:"<optgroup label='Cars'></optgroup>"
    },

    {
        category:"html",
        title:"<datalist>",
        type:"HTML Form Tag",
        info:"Рӯйхати пешниҳодҳо барои input месозад.",
        why:"Барои autocomplete истифода мешавад.",
        example:"<datalist></datalist>"
    },

    {
        category:"html",
        title:"<output>",
        type:"HTML Form Tag",
        info:"Натиҷаи ҳисоб ё амалро нишон медиҳад.",
        why:"Барои нишон додани натиҷаи форма истифода мешавад.",
        example:"<output>100</output>"
    },

    {
        category:"html",
        title:"<table>",
        type:"HTML Table Tag",
        info:"Ҷадвал месозад.",
        why:"Барои нишон додани маълумоти тартибдодашуда истифода мешавад.",
        example:"<table></table>"
    },

    {
        category:"html",
        title:"<caption>",
        type:"HTML Table Tag",
        info:"Номи ҷадвалро нишон медиҳад.",
        why:"Барои шарҳи ҷадвал истифода мешавад.",
        example:"<caption>Users</caption>"
    },

    {
        category:"html",
        title:"<thead>",
        type:"HTML Table Tag",
        info:"Қисми болоии ҷадвалро муайян мекунад.",
        why:"Барои сарлавҳаи ҷадвал истифода мешавад.",
        example:"<thead></thead>"
    },

    {
        category:"html",
        title:"<tbody>",
        type:"HTML Table Tag",
        info:"Қисми асосии маълумоти ҷадвал мебошад.",
        why:"Барои маълумоти дохилии ҷадвал истифода мешавад.",
        example:"<tbody></tbody>"
    },

    {
        category:"html",
        title:"<tfoot>",
        type:"HTML Table Tag",
        info:"Қисми поёнии ҷадвалро муайян мекунад.",
        why:"Барои натиҷа ё ҷамъбасти ҷадвал истифода мешавад.",
        example:"<tfoot></tfoot>"
    },

    {
        category:"html",
        title:"<tr>",
        type:"HTML Table Tag",
        info:"Як сатри ҷадвал месозад.",
        why:"Барои сохтани қаторҳои ҷадвал истифода мешавад.",
        example:"<tr></tr>"
    },

    {
        category:"html",
        title:"<th>",
        type:"HTML Table Tag",
        info:"Ҳуҷайраи сарлавҳаи ҷадвал мебошад.",
        why:"Барои номи сутунҳо истифода мешавад.",
        example:"<th>Name</th>"
    },

    {
        category:"html",
        title:"<td>",
        type:"HTML Table Tag",
        info:"Ҳуҷайраи одии ҷадвал мебошад.",
        why:"Барои нигоҳ доштани маълумоти ҷадвал истифода мешавад.",
        example:"<td>Ali</td>"
    },

    {
        category:"html",
        title:"<ul>",
        type:"HTML List Tag",
        info:"Рӯйхати бе рақам месозад.",
        why:"Барои рӯйхати оддӣ истифода мешавад.",
        example:"<ul><li>HTML</li></ul>"
    },

    {
        category:"html",
        title:"<ol>",
        type:"HTML List Tag",
        info:"Рӯйхати рақамдор месозад.",
        why:"Барои қадамҳо ва тартиб истифода мешавад.",
        example:"<ol><li>Step</li></ol>"
    },

    {
        category:"html",
        title:"<li>",
        type:"HTML List Tag",
        info:"Як элементи рӯйхат мебошад.",
        why:"Дар дохили ul ва ol истифода мешавад.",
        example:"<li>Item</li>"
    },
        {
        category:"html",
        title:"<audio>",
        type:"HTML Media Tag",
        info:"Файли аудиоро дар саҳифа ҷойгир мекунад.",
        why:"Барои илова кардани мусиқӣ ё садо истифода мешавад.",
        example:"<audio controls></audio>"
    },

    {
        category:"html",
        title:"<source>",
        type:"HTML Media Tag",
        info:"Манбаи файл барои audio ва video мебошад.",
        why:"Барои нишон додани формати гуногуни файл истифода мешавад.",
        example:"<source src='music.mp3'>"
    },

    {
        category:"html",
        title:"<track>",
        type:"HTML Media Tag",
        info:"Матни иловагӣ барои video ё audio илова мекунад.",
        why:"Барои subtitle ва caption истифода мешавад.",
        example:"<track kind='subtitles'>"
    },

    {
        category:"html",
        title:"<video>",
        type:"HTML Media Tag",
        info:"Видео дар саҳифа нишон медиҳад.",
        why:"Барои ҷойгир кардани видео истифода мешавад.",
        example:"<video controls></video>"
    },

    {
        category:"html",
        title:"<canvas>",
        type:"HTML Graphics Tag",
        info:"Ҷой барои кашидани графика бо JavaScript мебошад.",
        why:"Барои сохтани бозӣ, графика ва аниматсия истифода мешавад.",
        example:"<canvas></canvas>"
    },

    {
        category:"html",
        title:"<svg>",
        type:"HTML Graphics Tag",
        info:"Графикаи векторӣ месозад.",
        why:"Барои icon, logo ва расмҳои масштабшаванда истифода мешавад.",
        example:"<svg></svg>"
    },

    {
        category:"html",
        title:"<path>",
        type:"SVG Tag",
        info:"Хат ё шаклро дар SVG муайян мекунад.",
        why:"Барои кашидани шаклҳои мураккаб истифода мешавад.",
        example:"<path d='M10 10'></path>"
    },

    {
        category:"html",
        title:"<circle>",
        type:"SVG Tag",
        info:"Доира дар SVG месозад.",
        why:"Барои сохтани шаклҳои графикӣ истифода мешавад.",
        example:"<circle cx='50' cy='50' r='40'/>"
    },

    {
        category:"html",
        title:"<rect>",
        type:"SVG Tag",
        info:"Чоркунҷа дар SVG месозад.",
        why:"Барои сохтани блокҳои графикӣ истифода мешавад.",
        example:"<rect width='100' height='50'/>"
    },

    {
        category:"html",
        title:"<line>",
        type:"SVG Tag",
        info:"Хат дар SVG месозад.",
        why:"Барои кашидани хатҳои графикӣ истифода мешавад.",
        example:"<line x1='0' y1='0' x2='100' y2='100'/>"
    },

    {
        category:"html",
        title:"<polygon>",
        type:"SVG Tag",
        info:"Шакли бисёркунҷа месозад.",
        why:"Барои сохтани шаклҳои геометрӣ истифода мешавад.",
        example:"<polygon points='0,0 50,0 25,50'/>"
    },

    {
        category:"html",
        title:"<iframe>",
        type:"HTML Embed Tag",
        info:"Саҳифаи дигарро дар дохили саҳифа мекушояд.",
        why:"Барои харита, видео ва дигар сайтҳо истифода мешавад.",
        example:"<iframe src='page.html'></iframe>"
    },

    {
        category:"html",
        title:"<embed>",
        type:"HTML Embed Tag",
        info:"Файли берунаро ба саҳифа дохил мекунад.",
        why:"Барои файлҳои махсус истифода мешавад.",
        example:"<embed src='file.pdf'>"
    },

    {
        category:"html",
        title:"<object>",
        type:"HTML Embed Tag",
        info:"Объекти берунаро дар саҳифа ҷойгир мекунад.",
        why:"Барои PDF ва медиа истифода мешавад.",
        example:"<object data='file.pdf'></object>"
    },

    {
        category:"html",
        title:"<picture>",
        type:"HTML Media Tag",
        info:"Барои нишон додани тасвирҳои гуногун истифода мешавад.",
        why:"Барои Responsive Images истифода мешавад.",
        example:"<picture><img src='photo.jpg'></picture>"
    },
        {
        category:"html",
        title:"<meta>",
        type:"HTML Head Tag",
        info:"Маълумоти иловагӣ дар бораи саҳифа медиҳад.",
        why:"Барои SEO, кодировка ва танзимоти браузер истифода мешавад.",
        example:"<meta charset='UTF-8'>"
    },

    {
        category:"html",
        title:"charset",
        type:"HTML Meta Attribute",
        info:"Кодировкаи ҳарфҳои саҳифаро муайян мекунад.",
        why:"Барои дуруст нишон додани матнҳо истифода мешавад.",
        example:"<meta charset='UTF-8'>"
    },

    {
        category:"html",
        title:"viewport",
        type:"HTML Meta Tag",
        info:"Андозаи саҳифаро барои дастгоҳҳои мобилӣ танзим мекунад.",
        why:"Барои Responsive Design истифода мешавад.",
        example:"<meta name='viewport' content='width=device-width'>"
    },

    {
        category:"html",
        title:"description",
        type:"HTML Meta Tag",
        info:"Тавсифи кӯтоҳи саҳифаро нигоҳ медорад.",
        why:"Барои SEO ва натиҷаи ҷустуҷӯ истифода мешавад.",
        example:"<meta name='description' content='Website'>"
    },

    {
        category:"html",
        title:"keywords",
        type:"HTML Meta Tag",
        info:"Калимаҳои асосии саҳифаро муайян мекунад.",
        why:"Барои нишон додани мавзӯи сайт истифода мешавад.",
        example:"<meta name='keywords' content='HTML,CSS'>"
    },

    {
        category:"html",
        title:"author",
        type:"HTML Meta Tag",
        info:"Номи созандаи саҳифаро нишон медиҳад.",
        why:"Барои муайян кардани муаллиф истифода мешавад.",
        example:"<meta name='author' content='Ali'>"
    },

    {
        category:"html",
        title:"robots",
        type:"HTML Meta Tag",
        info:"Ба муҳаррикҳои ҷустуҷӯ дастур медиҳад.",
        why:"Барои идора кардани индексатсияи сайт истифода мешавад.",
        example:"<meta name='robots' content='index'>"
    },

    {
        category:"html",
        title:"<base>",
        type:"HTML Head Tag",
        info:"URL-и асосиро барои пайвандҳо муайян мекунад.",
        why:"Барои идора кардани роҳҳои файлҳо истифода мешавад.",
        example:"<base href='/'>"
    },

    {
        category:"html",
        title:"<link>",
        type:"HTML Head Tag",
        info:"Файлҳои берунаро ба HTML пайваст мекунад.",
        why:"Барои CSS, icon ва дигар ресурсҳо истифода мешавад.",
        example:"<link rel='stylesheet' href='style.css'>"
    },

    {
        category:"html",
        title:"rel",
        type:"HTML Attribute",
        info:"Муносибати байни ҳуҷҷат ва файли пайвастшударо нишон медиҳад.",
        why:"Барои муайян кардани намуди link истифода мешавад.",
        example:"rel='stylesheet'"
    },

    {
        category:"html",
        title:"href",
        type:"HTML Attribute",
        info:"Суроғаи файли ё саҳифаро муайян мекунад.",
        why:"Барои пайваст кардани файл ё сохтани link истифода мешавад.",
        example:"href='style.css'"
    },

    {
        category:"html",
        title:"src",
        type:"HTML Attribute",
        info:"Роҳи файли берунаро нишон медиҳад.",
        why:"Барои акс, JavaScript ва медиа истифода мешавад.",
        example:"src='app.js'"
    },

    {
        category:"html",
        title:"alt",
        type:"HTML Attribute",
        info:"Матни ивазкунандаи тасвир мебошад.",
        why:"Барои дастрасӣ ва SEO истифода мешавад.",
        example:"alt='Photo'"
    },

    {
        category:"html",
        title:"title attribute",
        type:"HTML Attribute",
        info:"Маълумоти иловагиро ҳангоми гузоштани муш нишон медиҳад.",
        why:"Барои шарҳи элемент истифода мешавад.",
        example:"title='Click here'"
    },
        {
        category:"html",
        title:"id",
        type:"HTML Attribute",
        info:"Ба элемент номи ягона медиҳад.",
        why:"Барои CSS ва JavaScript ёфтани элемент истифода мешавад.",
        example:"<div id='box'></div>"
    },

    {
        category:"html",
        title:"class",
        type:"HTML Attribute",
        info:"Ба элемент як ё якчанд номи гурӯҳӣ медиҳад.",
        why:"Барои истифодаи CSS ва JavaScript лозим аст.",
        example:"<div class='card'></div>"
    },

    {
        category:"html",
        title:"style",
        type:"HTML Attribute",
        info:"CSS-ро мустақим ба элемент менависад.",
        why:"Барои додани услуби дохилӣ истифода мешавад.",
        example:"<p style='color:red'>Text</p>"
    },

    {
        category:"html",
        title:"lang",
        type:"HTML Attribute",
        info:"Забони ҳуҷҷати HTML-ро муайян мекунад.",
        why:"Барои браузер ва SEO истифода мешавад.",
        example:"<html lang='tg'>"
    },

    {
        category:"html",
        title:"dir",
        type:"HTML Attribute",
        info:"Самти навиштани матнро муайян мекунад.",
        why:"Барои матни чап ба рост ё рост ба чап истифода мешавад.",
        example:"dir='rtl'"
    },

    {
        category:"html",
        title:"hidden",
        type:"HTML Attribute",
        info:"Элементро пинҳон мекунад.",
        why:"Барои пинҳон кардани маълумот истифода мешавад.",
        example:"<div hidden></div>"
    },

    {
        category:"html",
        title:"contenteditable",
        type:"HTML Attribute",
        info:"Имкон медиҳад матни элемент тағйир дода шавад.",
        why:"Барои сохтани муҳаррири матн истифода мешавад.",
        example:"contenteditable='true'"
    },

    {
        category:"html",
        title:"draggable",
        type:"HTML Attribute",
        info:"Муайян мекунад, ки элемент кашида мешавад ё не.",
        why:"Барои Drag and Drop истифода мешавад.",
        example:"draggable='true'"
    },

    {
        category:"html",
        title:"tabindex",
        type:"HTML Attribute",
        info:"Тартиби гузаштан бо клавиатураро муайян мекунад.",
        why:"Барои дастрасии беҳтар истифода мешавад.",
        example:"tabindex='1'"
    },

    {
        category:"html",
        title:"data-*",
        type:"HTML Attribute",
        info:"Барои нигоҳ доштани маълумоти шахсӣ дар элемент истифода мешавад.",
        why:"JavaScript метавонад ин маълумотро гирад.",
        example:"data-id='25'"
    },

    {
        category:"html",
        title:"disabled",
        type:"HTML Form Attribute",
        info:"Элементро ғайрифаъол мекунад.",
        why:"Барои бастани input ё button истифода мешавад.",
        example:"disabled"
    },

    {
        category:"html",
        title:"checked",
        type:"HTML Form Attribute",
        info:"Checkbox ё radio-ро интихобшуда мекунад.",
        why:"Барои интихоби пешфарз истифода мешавад.",
        example:"checked"
    },

    {
        category:"html",
        title:"selected",
        type:"HTML Form Attribute",
        info:"Option-ро интихобшуда мекунад.",
        why:"Барои интихоби пешфарз дар select истифода мешавад.",
        example:"<option selected>HTML</option>"
    },

    {
        category:"html",
        title:"multiple",
        type:"HTML Form Attribute",
        info:"Ба корбар иҷозат медиҳад чанд интихоб кунад.",
        why:"Барои select ва input истифода мешавад.",
        example:"multiple"
    },

    {
        category:"html",
        title:"placeholder",
        type:"HTML Form Attribute",
        info:"Матни кӯмакӣ дар дохили input нишон медиҳад.",
        why:"Барои фаҳмондани ҷойи навиштан истифода мешавад.",
        example:"placeholder='Name'"
    },

    {
        category:"html",
        title:"required",
        type:"HTML Form Attribute",
        info:"Майдонро ҳатмӣ мекунад.",
        why:"Барои санҷиши форма истифода мешавад.",
        example:"required"
    },

    {
        category:"html",
        title:"readonly",
        type:"HTML Form Attribute",
        info:"Қимати input-ро хонданӣ мекунад, аммо тағйир намедиҳад.",
        why:"Барои маълумоти танҳо хонданӣ истифода мешавад.",
        example:"readonly"
    },

    {
        category:"html",
        title:"autocomplete",
        type:"HTML Form Attribute",
        info:"Пешниҳоди маълумоти пешинаи корбарро фаъол ё хомӯш мекунад.",
        why:"Барои осон кардани пуркунии форма истифода мешавад.",
        example:"autocomplete='on'"
    },
        {
        category:"css",
        title:"CSS",
        type:"Style Language",
        info:"Забон барои ороиш ва тарҳи саҳифаҳои HTML мебошад.",
        why:"Барои тағйири ранг, андоза, ҷойгиршавӣ ва дизайн истифода мешавад.",
        example:"body{color:black;}"
    },

    {
        category:"css",
        title:"Selector",
        type:"CSS Basic",
        info:"Қисми CSS мебошад, ки элементро интихоб мекунад.",
        why:"Барои додани услуб ба элементҳо истифода мешавад.",
        example:"p{}"
    },

    {
        category:"css",
        title:"Universal Selector (*)",
        type:"CSS Selector",
        info:"Ҳамаи элементҳои HTML-ро интихоб мекунад.",
        why:"Барои додани услуби умумӣ истифода мешавад.",
        example:"*{margin:0;}"
    },

    {
        category:"css",
        title:"Element Selector",
        type:"CSS Selector",
        info:"Элементро аз рӯйи номи тег интихоб мекунад.",
        why:"Барои тағйири ҳамаи тегҳои якхела истифода мешавад.",
        example:"h1{color:red;}"
    },

    {
        category:"css",
        title:"Class Selector (.)",
        type:"CSS Selector",
        info:"Элементро аз рӯйи class интихоб мекунад.",
        why:"Барои истифодаи як услуб дар чанд элемент лозим аст.",
        example:".box{padding:10px;}"
    },

    {
        category:"css",
        title:"ID Selector (#)",
        type:"CSS Selector",
        info:"Элементро аз рӯйи id интихоб мекунад.",
        why:"Барои услуб додани як элементи махсус истифода мешавад.",
        example:"#menu{color:blue;}"
    },

    {
        category:"css",
        title:"Group Selector",
        type:"CSS Selector",
        info:"Якчанд селекторро якҷо интихоб мекунад.",
        why:"Барои кам кардани такрори CSS истифода мешавад.",
        example:"h1,p{color:black;}"
    },

    {
        category:"css",
        title:"Descendant Selector",
        type:"CSS Selector",
        info:"Элементи дохили элементи дигарро интихоб мекунад.",
        why:"Барои кор бо сохтори дохилии HTML истифода мешавад.",
        example:"div p{color:red;}"
    },

    {
        category:"css",
        title:"Child Selector (>)",
        type:"CSS Selector",
        info:"Танҳо фарзанди мустақими элементро интихоб мекунад.",
        why:"Барои назорати дақиқи сохтор истифода мешавад.",
        example:"div>p{}"
    },

    {
        category:"css",
        title:"Pseudo Class",
        type:"CSS Selector",
        info:"Ҳолати махсуси элементро интихоб мекунад.",
        why:"Барои hover, focus ва дигар ҳолатҳо истифода мешавад.",
        example:"a:hover{}"
    },

    {
        category:"css",
        title:"Pseudo Element",
        type:"CSS Selector",
        info:"Қисми махсуси элементро тағйир медиҳад.",
        why:"Барои сохтани эффектҳо истифода мешавад.",
        example:"p::first-letter{}"
    },

    {
        category:"css",
        title:"Box Model",
        type:"CSS Layout",
        info:"Тарзи ҳисоб кардани андозаи элемент мебошад.",
        why:"Барои идора кардани қуттиҳои сайт истифода мешавад.",
        example:"margin + border + padding + content"
    },

    {
        category:"css",
        title:"width",
        type:"CSS Property",
        info:"Паҳноии элементро муайян мекунад.",
        why:"Барои андозаи қуттӣ истифода мешавад.",
        example:"width:300px;"
    },

    {
        category:"css",
        title:"height",
        type:"CSS Property",
        info:"Баландии элементро муайян мекунад.",
        why:"Барои танзими андозаи элемент истифода мешавад.",
        example:"height:200px;"
    },

    {
        category:"css",
        title:"margin",
        type:"CSS Property",
        info:"Фосилаи берунии элементро месозад.",
        why:"Барои ҷудо кардани элементҳо истифода мешавад.",
        example:"margin:20px;"
    },

    {
        category:"css",
        title:"padding",
        type:"CSS Property",
        info:"Фосилаи дохилии элементро месозад.",
        why:"Барои ҷой байни матн ва канори қуттӣ истифода мешавад.",
        example:"padding:15px;"
    },

    {
        category:"css",
        title:"border",
        type:"CSS Property",
        info:"Хатти гирди элемент месозад.",
        why:"Барои ороиши қуттиҳо истифода мешавад.",
        example:"border:1px solid black;"
    },

    {
        category:"css",
        title:"box-sizing",
        type:"CSS Property",
        info:"Тарзи ҳисоб шудани андозаи элементро муайян мекунад.",
        why:"Барои дуруст нигоҳ доштани андозаи box истифода мешавад.",
        example:"box-sizing:border-box;"
    },
        {
        category:"css",
        title:"display",
        type:"CSS Property",
        info:"Тарзи нишон додани элементро муайян мекунад.",
        why:"Барои идора кардани ҷойгиршавии элемент истифода мешавад.",
        example:"display:block;"
    },

    {
        category:"css",
        title:"block",
        type:"CSS Display Value",
        info:"Элемент тамоми паҳноиро мегирад ва аз сатри нав сар мешавад.",
        why:"Барои сохтани блокҳо истифода мешавад.",
        example:"display:block;"
    },

    {
        category:"css",
        title:"inline",
        type:"CSS Display Value",
        info:"Элемент танҳо андозаи мундариҷаро мегирад.",
        why:"Барои элементҳои дохили матн истифода мешавад.",
        example:"display:inline;"
    },

    {
        category:"css",
        title:"inline-block",
        type:"CSS Display Value",
        info:"Хусусияти inline ва block-ро якҷо мекунад.",
        why:"Барои сохтани қуттиҳои паҳлӯ ба паҳлӯ истифода мешавад.",
        example:"display:inline-block;"
    },

    {
        category:"css",
        title:"none",
        type:"CSS Display Value",
        info:"Элементро пурра пинҳон мекунад.",
        why:"Барои нест нишон додани элемент истифода мешавад.",
        example:"display:none;"
    },

    {
        category:"css",
        title:"position",
        type:"CSS Property",
        info:"Тарзи ҷойгиршавии элементро муайян мекунад.",
        why:"Барои ҷойгир кардани элементҳо дар саҳифа истифода мешавад.",
        example:"position:absolute;"
    },

    {
        category:"css",
        title:"static",
        type:"CSS Position Value",
        info:"Ҳолати пешфарзи ҷойгиршавии элемент мебошад.",
        why:"Вақте ки position дода нашавад истифода мешавад.",
        example:"position:static;"
    },

    {
        category:"css",
        title:"relative",
        type:"CSS Position Value",
        info:"Элемент нисбат ба ҷойи аслии худ ҳаракат мекунад.",
        why:"Барои ҷой додани absolute element истифода мешавад.",
        example:"position:relative;"
    },

    {
        category:"css",
        title:"absolute",
        type:"CSS Position Value",
        info:"Элемент нисбат ба parent ҷойгир мешавад.",
        why:"Барои ҷойгиркунии дақиқ истифода мешавад.",
        example:"position:absolute;"
    },

    {
        category:"css",
        title:"fixed",
        type:"CSS Position Value",
        info:"Элемент нисбат ба экран собит мемонад.",
        why:"Барои менюҳои доимӣ истифода мешавад.",
        example:"position:fixed;"
    },

    {
        category:"css",
        title:"sticky",
        type:"CSS Position Value",
        info:"Элемент ҳангоми scroll ба ҷой мечаспад.",
        why:"Барои header-ҳои ҳаракаткунанда истифода мешавад.",
        example:"position:sticky;"
    },

    {
        category:"css",
        title:"top",
        type:"CSS Position Property",
        info:"Масофа аз тарафи боло муайян мекунад.",
        why:"Барои ҳаракат додани element истифода мешавад.",
        example:"top:10px;"
    },

    {
        category:"css",
        title:"right",
        type:"CSS Position Property",
        info:"Масофа аз тарафи ростро муайян мекунад.",
        why:"Барои ҷойгиркунии элемент истифода мешавад.",
        example:"right:20px;"
    },

    {
        category:"css",
        title:"bottom",
        type:"CSS Position Property",
        info:"Масофа аз тарафи поёнро муайян мекунад.",
        why:"Барои ҷойгиркунии поёнии элемент истифода мешавад.",
        example:"bottom:0;"
    },

    {
        category:"css",
        title:"left",
        type:"CSS Position Property",
        info:"Масофа аз тарафи чапро муайян мекунад.",
        why:"Барои ҳаракат додани элемент истифода мешавад.",
        example:"left:15px;"
    },

    {
        category:"css",
        title:"z-index",
        type:"CSS Property",
        info:"Тартиби қабатҳои элементҳоро муайян мекунад.",
        why:"Барои дар пеш ё қафо гузоштани элемент истифода мешавад.",
        example:"z-index:10;"
    },

    {
        category:"css",
        title:"overflow",
        type:"CSS Property",
        info:"Ҳангоми зиёд шудани мундариҷа рафторро муайян мекунад.",
        why:"Барои идора кардани матни беруншуда истифода мешавад.",
        example:"overflow:hidden;"
    },

    {
        category:"css",
        title:"overflow-x",
        type:"CSS Property",
        info:"Баромади мундариҷаро аз тарафи уфуқӣ идора мекунад.",
        why:"Барои scroll-и горизонталӣ истифода мешавад.",
        example:"overflow-x:auto;"
    },

    {
        category:"css",
        title:"overflow-y",
        type:"CSS Property",
        info:"Баромади мундариҷаро аз тарафи амудӣ идора мекунад.",
        why:"Барои scroll-и вертикалӣ истифода мешавад.",
        example:"overflow-y:scroll;"
    },
        {
        category:"css",
        title:"Flexbox",
        type:"CSS Layout",
        info:"Системаи ҷойгиркунии элементҳо дар як самт мебошад.",
        why:"Барои сохтани дизайнҳои мутобиқ ва қаторҳо истифода мешавад.",
        example:"display:flex;"
    },

    {
        category:"css",
        title:"display:flex",
        type:"Flexbox Property",
        info:"Flexbox-ро фаъол мекунад.",
        why:"Барои идора кардани ҷойгиршавии фарзандҳо истифода мешавад.",
        example:"container{display:flex;}"
    },

    {
        category:"css",
        title:"flex-direction",
        type:"Flexbox Property",
        info:"Самти ҷойгиршавии элементҳоро муайян мекунад.",
        why:"Барои қатор ё сутун сохтани элементҳо истифода мешавад.",
        example:"flex-direction:row;"
    },

    {
        category:"css",
        title:"row",
        type:"Flexbox Value",
        info:"Элементҳоро аз чап ба рост ҷойгир мекунад.",
        why:"Самти пешфарзи Flexbox мебошад.",
        example:"flex-direction:row;"
    },

    {
        category:"css",
        title:"column",
        type:"Flexbox Value",
        info:"Элементҳоро аз боло ба поён ҷойгир мекунад.",
        why:"Барои сохтани блокҳои амудӣ истифода мешавад.",
        example:"flex-direction:column;"
    },

    {
        category:"css",
        title:"justify-content",
        type:"Flexbox Property",
        info:"Ҷойгиршавии элементҳоро дар меҳвари асосӣ идора мекунад.",
        why:"Барои марказ ё канор гузоштани элементҳо истифода мешавад.",
        example:"justify-content:center;"
    },

    {
        category:"css",
        title:"align-items",
        type:"Flexbox Property",
        info:"Ҷойгиршавии элементҳоро дар меҳвари дуюм идора мекунад.",
        why:"Барои баробар кардани элементҳо истифода мешавад.",
        example:"align-items:center;"
    },

    {
        category:"css",
        title:"align-content",
        type:"Flexbox Property",
        info:"Қаторҳои Flex-ро идора мекунад.",
        why:"Ҳангоми чанд сатр будани элементҳо истифода мешавад.",
        example:"align-content:space-between;"
    },

    {
        category:"css",
        title:"flex-wrap",
        type:"Flexbox Property",
        info:"Муайян мекунад элементҳо ба сатри нав мегузаранд ё не.",
        why:"Барои Responsive Design истифода мешавад.",
        example:"flex-wrap:wrap;"
    },

    {
        category:"css",
        title:"wrap",
        type:"Flexbox Value",
        info:"Элементҳоро ба сатри дигар мегузаронад.",
        why:"Барои нигоҳ доштани андозаи элементҳо истифода мешавад.",
        example:"flex-wrap:wrap;"
    },

    {
        category:"css",
        title:"nowrap",
        type:"Flexbox Value",
        info:"Намегузорад элементҳо ба сатри дигар гузаранд.",
        why:"Барои як сатр нигоҳ доштан истифода мешавад.",
        example:"flex-wrap:nowrap;"
    },

    {
        category:"css",
        title:"gap",
        type:"CSS Flexbox Property",
        info:"Фосилаи байни элементҳои flex месозад.",
        why:"Барои ҷудо кардани қуттиҳо истифода мешавад.",
        example:"gap:20px;"
    },

    {
        category:"css",
        title:"flex-grow",
        type:"Flexbox Property",
        info:"Муайян мекунад элемент чӣ қадар калон шавад.",
        why:"Барои тақсим кардани ҷой истифода мешавад.",
        example:"flex-grow:1;"
    },

    {
        category:"css",
        title:"flex-shrink",
        type:"Flexbox Property",
        info:"Муайян мекунад элемент чӣ қадар хурд шавад.",
        why:"Барои идора кардани камшавии элемент истифода мешавад.",
        example:"flex-shrink:1;"
    },

    {
        category:"css",
        title:"flex-basis",
        type:"Flexbox Property",
        info:"Андозаи ибтидоии элементро муайян мекунад.",
        why:"Барои додани андозаи пешакӣ истифода мешавад.",
        example:"flex-basis:200px;"
    },

    {
        category:"css",
        title:"align-self",
        type:"Flexbox Property",
        info:"Ҷойгиршавии як элементи алоҳидаро иваз мекунад.",
        why:"Барои тағйири як item истифода мешавад.",
        example:"align-self:flex-end;"
    },

    {
        category:"css",
        title:"order",
        type:"Flexbox Property",
        info:"Тартиби нишон додани элементро иваз мекунад.",
        why:"Барои иваз кардани ҷойи item истифода мешавад.",
        example:"order:2;"
    },
        {
        category:"css",
        title:"Grid",
        type:"CSS Layout",
        info:"Системаи ҷойгиркунии элементҳо дар сатру сутун мебошад.",
        why:"Барои сохтани макетҳои мураккаби сайт истифода мешавад.",
        example:"display:grid;"
    },

    {
        category:"css",
        title:"display:grid",
        type:"CSS Grid Property",
        info:"CSS Grid-ро фаъол мекунад.",
        why:"Барои кор бо сатру сутунҳо истифода мешавад.",
        example:"container{display:grid;}"
    },

    {
        category:"css",
        title:"grid-template-columns",
        type:"CSS Grid Property",
        info:"Шумора ва андозаи сутунҳоро муайян мекунад.",
        why:"Барои сохтани сутунҳои дизайн истифода мешавад.",
        example:"grid-template-columns:1fr 1fr;"
    },

    {
        category:"css",
        title:"grid-template-rows",
        type:"CSS Grid Property",
        info:"Андоза ва шумораи сатрҳоро муайян мекунад.",
        why:"Барои идора кардани сатри Grid истифода мешавад.",
        example:"grid-template-rows:100px;"
    },

    {
        category:"css",
        title:"grid-template-areas",
        type:"CSS Grid Property",
        info:"Нақшаи ҷойгиршавии қисмҳои Grid-ро муайян мекунад.",
        why:"Барои сохтани layout-и равшан истифода мешавад.",
        example:"grid-template-areas:'header header';"
    },

    {
        category:"css",
        title:"grid-column",
        type:"CSS Grid Property",
        info:"Ҷойгиршавии элементро дар сутун муайян мекунад.",
        why:"Барои гирифтани чанд сутун истифода мешавад.",
        example:"grid-column:1/3;"
    },

    {
        category:"css",
        title:"grid-row",
        type:"CSS Grid Property",
        info:"Ҷойгиршавии элементро дар сатр муайян мекунад.",
        why:"Барои идора кардани сатри элемент истифода мешавад.",
        example:"grid-row:1/3;"
    },

    {
        category:"css",
        title:"grid-column-gap",
        type:"CSS Grid Property",
        info:"Фосилаи байни сутунҳоро муайян мекунад.",
        why:"Барои ҷудо кардани сутунҳо истифода мешавад.",
        example:"grid-column-gap:20px;"
    },

    {
        category:"css",
        title:"grid-row-gap",
        type:"CSS Grid Property",
        info:"Фосилаи байни сатрҳоро муайян мекунад.",
        why:"Барои ҷудо кардани сатрҳо истифода мешавад.",
        example:"grid-row-gap:20px;"
    },

    {
        category:"css",
        title:"grid-gap",
        type:"CSS Grid Property",
        info:"Фосилаи умумии байни сатр ва сутунро муайян мекунад.",
        why:"Барои осон кардани gap истифода мешавад.",
        example:"grid-gap:15px;"
    },

    {
        category:"css",
        title:"grid-auto-columns",
        type:"CSS Grid Property",
        info:"Андозаи сутунҳои худкорро муайян мекунад.",
        why:"Барои элементҳои автоматӣ истифода мешавад.",
        example:"grid-auto-columns:100px;"
    },

    {
        category:"css",
        title:"grid-auto-rows",
        type:"CSS Grid Property",
        info:"Андозаи сатрҳои худкорро муайян мекунад.",
        why:"Барои сатрҳои сохташудаи автоматӣ истифода мешавад.",
        example:"grid-auto-rows:80px;"
    },

    {
        category:"css",
        title:"place-items",
        type:"CSS Grid Property",
        info:"align-items ва justify-items-ро якҷо мекунад.",
        why:"Барои марказ кардани элементҳо истифода мешавад.",
        example:"place-items:center;"
    },

    {
        category:"css",
        title:"justify-items",
        type:"CSS Grid Property",
        info:"Ҷойгиршавии item-ҳоро аз тарафи уфуқӣ идора мекунад.",
        why:"Барои танзими дохили Grid истифода мешавад.",
        example:"justify-items:center;"
    },

    {
        category:"css",
        title:"grid-area",
        type:"CSS Grid Property",
        info:"Номи минтақаи Grid-ро муайян мекунад.",
        why:"Барои grid-template-areas истифода мешавад.",
        example:"grid-area:header;"
    },
        {
        category:"css",
        title:"background-color",
        type:"CSS Property",
        info:"Ранги заминаи элементро муайян мекунад.",
        why:"Барои додани ранги пасзамина истифода мешавад.",
        example:"background-color:blue;"
    },

    {
        category:"css",
        title:"background-image",
        type:"CSS Property",
        info:"Ба элемент тасвири замина мегузорад.",
        why:"Барои дизайн ва ороиши саҳифа истифода мешавад.",
        example:"background-image:url('img.jpg');"
    },

    {
        category:"css",
        title:"background-size",
        type:"CSS Property",
        info:"Андозаи тасвири заминаро муайян мекунад.",
        why:"Барои мувофиқ кардани тасвир ба қуттӣ истифода мешавад.",
        example:"background-size:cover;"
    },

    {
        category:"css",
        title:"background-position",
        type:"CSS Property",
        info:"Ҷойи тасвири заминаро муайян мекунад.",
        why:"Барои дуруст ҷойгир кардани background истифода мешавад.",
        example:"background-position:center;"
    },

    {
        category:"css",
        title:"background-repeat",
        type:"CSS Property",
        info:"Такрор шудани тасвири заминаро идора мекунад.",
        why:"Барои пешгирии такрори тасвир истифода мешавад.",
        example:"background-repeat:no-repeat;"
    },

    {
        category:"css",
        title:"opacity",
        type:"CSS Property",
        info:"Шаффофияти элементро муайян мекунад.",
        why:"Барои сохтани эффектҳои шаффоф истифода мешавад.",
        example:"opacity:0.5;"
    },

    {
        category:"css",
        title:"font-size",
        type:"CSS Property",
        info:"Андозаи ҳарфҳоро тағйир медиҳад.",
        why:"Барои танзими матн истифода мешавад.",
        example:"font-size:20px;"
    },

    {
        category:"css",
        title:"font-family",
        type:"CSS Property",
        info:"Намуди шрифти матнро муайян мекунад.",
        why:"Барои интихоби услуби навишт истифода мешавад.",
        example:"font-family:Arial;"
    },

    {
        category:"css",
        title:"font-weight",
        type:"CSS Property",
        info:"Ғафсии ҳарфҳоро муайян мекунад.",
        why:"Барои ғафс ё оддӣ кардани матн истифода мешавад.",
        example:"font-weight:bold;"
    },

    {
        category:"css",
        title:"font-style",
        type:"CSS Property",
        info:"Услуби ҳарфҳоро муайян мекунад.",
        why:"Барои italic ва дигар намудҳо истифода мешавад.",
        example:"font-style:italic;"
    },

    {
        category:"css",
        title:"text-align",
        type:"CSS Property",
        info:"Ҷойгиршавии матнро муайян мекунад.",
        why:"Барои рост, чап ё марказ кардани матн истифода мешавад.",
        example:"text-align:center;"
    },

    {
        category:"css",
        title:"text-decoration",
        type:"CSS Property",
        info:"Хатти зери матн ва дигар ороишҳоро идора мекунад.",
        why:"Барои ороиши пайвандҳо истифода мешавад.",
        example:"text-decoration:none;"
    },

    {
        category:"css",
        title:"text-transform",
        type:"CSS Property",
        info:"Ҳарфҳои матнро калон ё хурд мекунад.",
        why:"Барои тағйири шакли матн истифода мешавад.",
        example:"text-transform:uppercase;"
    },

    {
        category:"css",
        title:"text-shadow",
        type:"CSS Property",
        info:"Ба матн соя медиҳад.",
        why:"Барои зебо кардани сарлавҳаҳо истифода мешавад.",
        example:"text-shadow:2px 2px gray;"
    },

    {
        category:"css",
        title:"letter-spacing",
        type:"CSS Property",
        info:"Фосилаи байни ҳарфҳоро тағйир медиҳад.",
        why:"Барои беҳтар кардани намуди матн истифода мешавад.",
        example:"letter-spacing:2px;"
    },

    {
        category:"css",
        title:"line-height",
        type:"CSS Property",
        info:"Баландии байни сатрҳои матнро муайян мекунад.",
        why:"Барои хондан осон кардани матн истифода мешавад.",
        example:"line-height:1.5;"
    },

    {
        category:"css",
        title:"word-spacing",
        type:"CSS Property",
        info:"Фосилаи байни калимаҳоро тағйир медиҳад.",
        why:"Барои танзими матн истифода мешавад.",
        example:"word-spacing:5px;"
    },
        {
        category:"css",
        title:"border-style",
        type:"CSS Property",
        info:"Намуди хатти гирди элементро муайян мекунад.",
        why:"Барои сохтани намудҳои гуногуни border истифода мешавад.",
        example:"border-style:solid;"
    },

    {
        category:"css",
        title:"border-width",
        type:"CSS Property",
        info:"Ғафсии хатти гирди элементро муайян мекунад.",
        why:"Барои танзими андозаи border истифода мешавад.",
        example:"border-width:2px;"
    },

    {
        category:"css",
        title:"border-color",
        type:"CSS Property",
        info:"Ранги border-ро муайян мекунад.",
        why:"Барои тағйири ранги хат истифода мешавад.",
        example:"border-color:red;"
    },

    {
        category:"css",
        title:"border-top",
        type:"CSS Property",
        info:"Танҳо тарафи болоии border-ро танзим мекунад.",
        why:"Барои сохтани хатти боло истифода мешавад.",
        example:"border-top:2px solid blue;"
    },

    {
        category:"css",
        title:"border-bottom",
        type:"CSS Property",
        info:"Танҳо тарафи поёнии border-ро танзим мекунад.",
        why:"Барои сохтани хатти поён истифода мешавад.",
        example:"border-bottom:1px solid black;"
    },

    {
        category:"css",
        title:"border-left",
        type:"CSS Property",
        info:"Танҳо тарафи чапи border-ро танзим мекунад.",
        why:"Барои ороиши қисми чапи элемент истифода мешавад.",
        example:"border-left:4px solid green;"
    },

    {
        category:"css",
        title:"border-right",
        type:"CSS Property",
        info:"Танҳо тарафи рости border-ро танзим мекунад.",
        why:"Барои ороиши қисми рости элемент истифода мешавад.",
        example:"border-right:4px solid orange;"
    },

    {
        category:"css",
        title:"box-shadow",
        type:"CSS Property",
        info:"Ба қуттӣ соя медиҳад.",
        why:"Барои сохтани эффектҳои 3D ва дизайн истифода мешавад.",
        example:"box-shadow:0 4px 10px gray;"
    },

    {
        category:"css",
        title:"filter",
        type:"CSS Property",
        info:"Ба элемент эффектҳои визуалӣ медиҳад.",
        why:"Барои blur, brightness ва дигар эффектҳо истифода мешавад.",
        example:"filter:blur(5px);"
    },

    {
        category:"css",
        title:"transform",
        type:"CSS Property",
        info:"Шакл ё ҷойи элементро тағйир медиҳад.",
        why:"Барои ҳаракат, гардиш ва калонкунии элемент истифода мешавад.",
        example:"transform:scale(1.2);"
    },

    {
        category:"css",
        title:"translate()",
        type:"CSS Transform Function",
        info:"Элементро ба самтҳои X ва Y ҳаракат медиҳад.",
        why:"Барои кӯчонидани элемент истифода мешавад.",
        example:"transform:translate(20px,10px);"
    },

    {
        category:"css",
        title:"rotate()",
        type:"CSS Transform Function",
        info:"Элементро мегардонад.",
        why:"Барои сохтани гардиш истифода мешавад.",
        example:"transform:rotate(45deg);"
    },

    {
        category:"css",
        title:"scale()",
        type:"CSS Transform Function",
        info:"Андозаи элементро калон ё хурд мекунад.",
        why:"Барои zoom ва эффектҳо истифода мешавад.",
        example:"transform:scale(1.5);"
    },

    {
        category:"css",
        title:"skew()",
        type:"CSS Transform Function",
        info:"Элементро каҷ мекунад.",
        why:"Барои сохтани шаклҳои ғайриодӣ истифода мешавад.",
        example:"transform:skew(20deg);"
    },

    {
        category:"css",
        title:"transition",
        type:"CSS Property",
        info:"Гузариши нарми байни ҳолатҳои элементро месозад.",
        why:"Барои аниматсияи мулоими hover ва тағйирот истифода мешавад.",
        example:"transition:0.3s;"
    },

    {
        category:"css",
        title:"transition-property",
        type:"CSS Property",
        info:"Муайян мекунад кадом хусусият аниматсия шавад.",
        why:"Барои назорати transition истифода мешавад.",
        example:"transition-property:color;"
    },

    {
        category:"css",
        title:"transition-duration",
        type:"CSS Property",
        info:"Вақти гузариши эффектро муайян мекунад.",
        why:"Барои танзими суръати аниматсия истифода мешавад.",
        example:"transition-duration:1s;"
    },

    {
        category:"css",
        title:"transition-delay",
        type:"CSS Property",
        info:"Оғози transition-ро ба таъхир мегузорад.",
        why:"Барои дер оғоз шудани эффект истифода мешавад.",
        example:"transition-delay:0.5s;"
    },

    {
        category:"css",
        title:"transition-timing-function",
        type:"CSS Property",
        info:"Суръати тағйирёбии transition-ро муайян мекунад.",
        why:"Барои назорати ҳаракати эффект истифода мешавад.",
        example:"transition-timing-function:ease;"
    },
        {
        category:"css",
        title:"animation",
        type:"CSS Property",
        info:"Барои сохтани ҳаракатҳои автоматии элемент истифода мешавад.",
        why:"Барои эффектҳои зинда ва дизайнҳои муосир истифода мешавад.",
        example:"animation:move 2s;"
    },

    {
        category:"css",
        title:"@keyframes",
        type:"CSS Animation",
        info:"Қадамҳои ҳаракати аниматсияро муайян мекунад.",
        why:"Барои сохтани аниматсияҳои шахсӣ истифода мешавад.",
        example:"@keyframes move{}"
    },

    {
        category:"css",
        title:"animation-name",
        type:"CSS Animation Property",
        info:"Номи keyframes-ро муайян мекунад.",
        why:"Барои пайваст кардани аниматсия истифода мешавад.",
        example:"animation-name:slide;"
    },

    {
        category:"css",
        title:"animation-duration",
        type:"CSS Animation Property",
        info:"Давомнокии аниматсияро муайян мекунад.",
        why:"Барои идора кардани вақти ҳаракат истифода мешавад.",
        example:"animation-duration:3s;"
    },

    {
        category:"css",
        title:"animation-delay",
        type:"CSS Animation Property",
        info:"Пеш аз оғози аниматсия таъхир месозад.",
        why:"Барои дер оғоз шудани эффект истифода мешавад.",
        example:"animation-delay:1s;"
    },

    {
        category:"css",
        title:"animation-iteration-count",
        type:"CSS Animation Property",
        info:"Шумораи такрори аниматсияро муайян мекунад.",
        why:"Барои якчанд маротиба иҷро кардани ҳаракат истифода мешавад.",
        example:"animation-iteration-count:infinite;"
    },

    {
        category:"css",
        title:"animation-direction",
        type:"CSS Animation Property",
        info:"Самти иҷрои аниматсияро муайян мекунад.",
        why:"Барои баръакс иҷро кардани ҳаракат истифода мешавад.",
        example:"animation-direction:alternate;"
    },

    {
        category:"css",
        title:"animation-fill-mode",
        type:"CSS Animation Property",
        info:"Ҳолати элементро пеш ва баъд аз аниматсия муайян мекунад.",
        why:"Барои нигоҳ доштани ҳолати аниматсия истифода мешавад.",
        example:"animation-fill-mode:forwards;"
    },

    {
        category:"css",
        title:"animation-play-state",
        type:"CSS Animation Property",
        info:"Оғоз ё боздоштани аниматсияро идора мекунад.",
        why:"Барои идора кардани ҳаракат истифода мешавад.",
        example:"animation-play-state:paused;"
    },

    {
        category:"css",
        title:"Responsive Design",
        type:"CSS Design",
        info:"Тарҳи сайтро барои ҳамаи экранҳо мувофиқ мекунад.",
        why:"Барои кор кардани сайт дар телефон, планшет ва компютер истифода мешавад.",
        example:"@media(max-width:600px){}"
    },

    {
        category:"css",
        title:"@media",
        type:"CSS Responsive Rule",
        info:"Қоидаҳои CSS-ро барои андозаи муайяни экран истифода мекунад.",
        why:"Барои сохтани тарҳи мутобиқшаванда лозим аст.",
        example:"@media screen and (max-width:768px){}"
    },

    {
        category:"css",
        title:"media query",
        type:"CSS Responsive",
        info:"Шартеро месозад, ки CSS кай фаъол шавад.",
        why:"Барои тағйири дизайн дар экранҳои гуногун истифода мешавад.",
        example:"@media(min-width:900px){}"
    },

    {
        category:"css",
        title:"min-width",
        type:"CSS Media Feature",
        info:"Ҳадди ақали паҳноии экранро муайян мекунад.",
        why:"Барои экранҳои калон истифода мешавад.",
        example:"min-width:800px"
    },

    {
        category:"css",
        title:"max-width",
        type:"CSS Media Feature",
        info:"Ҳадди зиёди паҳноии экранро муайян мекунад.",
        why:"Барои телефонҳо ва экранҳои хурд истифода мешавад.",
        example:"max-width:480px"
    },

    {
        category:"css",
        title:"orientation",
        type:"CSS Media Feature",
        info:"Самти экранро муайян мекунад.",
        why:"Барои landscape ва portrait истифода мешавад.",
        example:"orientation:landscape"
    },

    {
        category:"css",
        title:"rem",
        type:"CSS Unit",
        info:"Воҳиди андоза нисбат ба font-size-и root мебошад.",
        why:"Барои андозаҳои мутобиқ истифода мешавад.",
        example:"font-size:2rem;"
    },

    {
        category:"css",
        title:"em",
        type:"CSS Unit",
        info:"Воҳиди андоза нисбат ба font-size-и parent мебошад.",
        why:"Барои андозаҳои нисбӣ истифода мешавад.",
        example:"padding:1em;"
    },

    {
        category:"css",
        title:"vw",
        type:"CSS Unit",
        info:"Ба як фоизи паҳноии экран вобаста аст.",
        why:"Барои дизайнҳои responsive истифода мешавад.",
        example:"width:50vw;"
    },

    {
        category:"css",
        title:"vh",
        type:"CSS Unit",
        info:"Ба як фоизи баландии экран вобаста аст.",
        why:"Барои андозаи вобаста ба экран истифода мешавад.",
        example:"height:50vh;"
    },
        {
        category:"js",
        title:"JavaScript",
        type:"Programming Language",
        info:"Забони барномасозӣ барои илова кардани ҳаракат ва мантиқ ба сайт мебошад.",
        why:"Барои интерактивӣ кардани саҳифаҳо истифода мешавад.",
        example:"console.log('Hello');"
    },

    {
        category:"js",
        title:"var",
        type:"JavaScript Variable",
        info:"Барои сохтани тағйирёбанда истифода мешавад.",
        why:"Барои нигоҳ доштани маълумот лозим аст.",
        example:"var name='Ali';"
    },

    {
        category:"js",
        title:"const",
        type:"JavaScript Variable",
        info:"Тағйирёбандаи доимиро месозад.",
        why:"Барои маълумоте, ки тағйир намеёбад истифода мешавад.",
        example:"const age=18;"
    },

    {
        category:"js",
        title:"let",
        type:"JavaScript Variable",
        info:"Тағйирёбанда месозад, ки қиматаш иваз шуда метавонад.",
        why:"Барои нигоҳ доштани маълумоти тағйирёбанда истифода мешавад.",
        example:"let count=0;"
    },

    {
        category:"js",
        title:"String",
        type:"JavaScript Data Type",
        info:"Навъи маълумоти матнӣ мебошад.",
        why:"Барои нигоҳ доштани калима ва ҷумлаҳо истифода мешавад.",
        example:"let name='Web';"
    },

    {
        category:"js",
        title:"Number",
        type:"JavaScript Data Type",
        info:"Барои рақамҳо истифода мешавад.",
        why:"Барои ҳисоб ва қиматҳои рақамӣ лозим аст.",
        example:"let age=20;"
    },

    {
        category:"js",
        title:"Boolean",
        type:"JavaScript Data Type",
        info:"Танҳо true ё false нигоҳ медорад.",
        why:"Барои санҷиши шартҳо истифода мешавад.",
        example:"let online=true;"
    },

    {
        category:"js",
        title:"Array",
        type:"JavaScript Data Type",
        info:"Якчанд маълумотро дар як рӯйхат нигоҳ медорад.",
        why:"Барои нигоҳ доштани гурӯҳи маълумот истифода мешавад.",
        example:"let cars=['BMW','Audi'];"
    },

    {
        category:"js",
        title:"Object",
        type:"JavaScript Data Type",
        info:"Маълумотро ҳамчун калид ва қимат нигоҳ медорад.",
        why:"Барои сохтани сохтори маълумот истифода мешавад.",
        example:"let user={name:'Ali'};"
    },

    {
        category:"js",
        title:"typeof",
        type:"JavaScript Operator",
        info:"Навъи маълумотро нишон медиҳад.",
        why:"Барои санҷидани type истифода мешавад.",
        example:"typeof name;"
    },

    {
        category:"js",
        title:"Arithmetic Operators",
        type:"JavaScript Operators",
        info:"Барои амалҳои математикӣ истифода мешаванд.",
        why:"Барои ҳисобкунӣ лозиманд.",
        example:"+ - * /"
    },

    {
        category:"js",
        title:"Assignment Operator (=)",
        type:"JavaScript Operator",
        info:"Қиматро ба тағйирёбанда медиҳад.",
        why:"Барои нигоҳ доштани маълумот истифода мешавад.",
        example:"x=10;"
    },

    {
        category:"js",
        title:"Comparison Operator",
        type:"JavaScript Operator",
        info:"Ду қиматро муқоиса мекунад.",
        why:"Барои санҷиши шартҳо истифода мешавад.",
        example:"x===10"
    },

    {
        category:"js",
        title:"Logical Operator",
        type:"JavaScript Operator",
        info:"Якчанд шартро якҷо месанҷад.",
        why:"Барои сохтани шартҳои мураккаб истифода мешавад.",
        example:"&& || !"
    },

    {
        category:"js",
        title:"if",
        type:"JavaScript Condition",
        info:"Агар шарт дуруст бошад кодро иҷро мекунад.",
        why:"Барои қарор қабул кардан истифода мешавад.",
        example:"if(age>=18){}"
    },

    {
        category:"js",
        title:"else",
        type:"JavaScript Condition",
        info:"Ҳангоми нодуруст будани шарт иҷро мешавад.",
        why:"Барои ҳолати дигар истифода мешавад.",
        example:"else{}"
    },

    {
        category:"js",
        title:"else if",
        type:"JavaScript Condition",
        info:"Шарти иловагӣ месозад.",
        why:"Барои санҷидани чанд ҳолат истифода мешавад.",
        example:"else if(x>5){}"
    },

    {
        category:"js",
        title:"switch",
        type:"JavaScript Condition",
        info:"Якчанд ҳолатро месанҷад.",
        why:"Барои интихоб аз чанд вариант истифода мешавад.",
        example:"switch(day){}"
    },

    {
        category:"js",
        title:"for Loop",
        type:"JavaScript Loop",
        info:"Кодро чанд маротиба такрор мекунад.",
        why:"Барои такрори амалҳо истифода мешавад.",
        example:"for(let i=0;i<5;i++){}"
    },

    {
        category:"js",
        title:"while Loop",
        type:"JavaScript Loop",
        info:"То дуруст будани шарт такрор мешавад.",
        why:"Барои такрори вобаста ба шарт истифода мешавад.",
        example:"while(x<10){}"
    },

    {
        category:"js",
        title:"do while",
        type:"JavaScript Loop",
        info:"Аввал кодро иҷро карда баъд шартро месанҷад.",
        why:"Барои иҷрои ҳатмии як маротиба истифода мешавад.",
        example:"do{}while(x<5);"
    },
        {
        category:"js",
        title:"function",
        type:"JavaScript Function",
        info:"Қисми код мебошад, ки вазифаи муайянро иҷро мекунад.",
        why:"Барои такрор истифода бурдани код лозим аст.",
        example:"function hello(){}"
    },

    {
        category:"js",
        title:"parameter",
        type:"JavaScript Function",
        info:"Маълумоте мебошад, ки ба function дода мешавад.",
        why:"Барои гирифтани қиматҳо дар function истифода мешавад.",
        example:"function add(a,b){}"
    },

    {
        category:"js",
        title:"return",
        type:"JavaScript Function",
        info:"Натиҷаи function-ро бармегардонад.",
        why:"Барои гирифтани натиҷаи ҳисоб истифода мешавад.",
        example:"return value;"
    },

    {
        category:"js",
        title:"Arrow Function",
        type:"JavaScript Function",
        info:"Навъи кӯтоҳи навиштани function мебошад.",
        why:"Барои навиштани коди кӯтоҳ истифода мешавад.",
        example:"const test=()=>{};"
    },

    {
        category:"js",
        title:"Callback Function",
        type:"JavaScript Function",
        info:"Function-е мебошад, ки ба дигар function дода мешавад.",
        why:"Барои иҷрои амал баъд аз анҷоми кор истифода мешавад.",
        example:"setTimeout(callback,1000);"
    },

    {
        category:"js",
        title:"addEventListener",
        type:"JavaScript Event",
        info:"Ба элемент event илова мекунад.",
        why:"Барои ҷавоб додан ба амалҳои корбар истифода мешавад.",
        example:"btn.addEventListener('click',test);"
    },

    {
        category:"js",
        title:"click Event",
        type:"JavaScript Event",
        info:"Ҳангоми зер кардани элемент фаъол мешавад.",
        why:"Барои тугмаҳо ва амалҳои корбар истифода мешавад.",
        example:"click"
    },

    {
        category:"js",
        title:"mouseover Event",
        type:"JavaScript Event",
        info:"Ҳангоми гузоштани муш болои элемент фаъол мешавад.",
        why:"Барои эффектҳои hover истифода мешавад.",
        example:"mouseover"
    },

    {
        category:"js",
        title:"keydown Event",
        type:"JavaScript Event",
        info:"Ҳангоми пахш кардани тугмаи клавиатура фаъол мешавад.",
        why:"Барои кор бо клавиатура истифода мешавад.",
        example:"keydown"
    },

    {
        category:"js",
        title:"submit Event",
        type:"JavaScript Event",
        info:"Ҳангоми фиристодани форма фаъол мешавад.",
        why:"Барои санҷиши маълумоти форма истифода мешавад.",
        example:"submit"
    },

    {
        category:"js",
        title:"DOM",
        type:"JavaScript API",
        info:"Сохтори HTML-ро ҳамчун объект идора мекунад.",
        why:"Барои тағйир додани саҳифа бо JavaScript истифода мешавад.",
        example:"document.body"
    },

    {
        category:"js",
        title:"document",
        type:"DOM Object",
        info:"Ҳуҷҷати HTML-ро нишон медиҳад.",
        why:"Барои дастрасӣ ба элементҳои саҳифа истифода мешавад.",
        example:"document.title"
    },

    {
        category:"js",
        title:"getElementById",
        type:"DOM Method",
        info:"Элементро аз рӯйи id меёбад.",
        why:"Барои гирифтани як элемент истифода мешавад.",
        example:"document.getElementById('box')"
    },

    {
        category:"js",
        title:"querySelector",
        type:"DOM Method",
        info:"Аввалин элементро бо selector меёбад.",
        why:"Барои интихоби элементҳо истифода мешавад.",
        example:"document.querySelector('.btn')"
    },

    {
        category:"js",
        title:"querySelectorAll",
        type:"DOM Method",
        info:"Ҳамаи элементҳои мувофиқро меёбад.",
        why:"Барои кор бо гурӯҳи элементҳо истифода мешавад.",
        example:"document.querySelectorAll('p')"
    },

    {
        category:"js",
        title:"innerHTML",
        type:"DOM Property",
        info:"HTML-и дохили элементро тағйир медиҳад.",
        why:"Барои иваз кардани мундариҷа истифода мешавад.",
        example:"box.innerHTML='Hello';"
    },

    {
        category:"js",
        title:"textContent",
        type:"DOM Property",
        info:"Матни дохили элементро мегирад ё иваз мекунад.",
        why:"Барои кор бо матн истифода мешавад.",
        example:"p.textContent='Text';"
    },

    {
        category:"js",
        title:"style",
        type:"DOM Property",
        info:"CSS-и элементро аз JavaScript тағйир медиҳад.",
        why:"Барои тағйири дизайн ҳангоми кор истифода мешавад.",
        example:"box.style.color='red';"
    },

    {
        category:"js",
        title:"BOM",
        type:"JavaScript API",
        info:"Бо браузер кор мекунад, на танҳо HTML.",
        why:"Барои идора кардани равзанаи браузер истифода мешавад.",
        example:"window.alert()"
    },

    {
        category:"js",
        title:"window",
        type:"BOM Object",
        info:"Объекти асосии браузер мебошад.",
        why:"Барои дастрасӣ ба имкониятҳои браузер истифода мешавад.",
        example:"window.innerWidth"
    },

    {
        category:"js",
        title:"localStorage",
        type:"Web Storage API",
        info:"Маълумотро дар браузер доимӣ нигоҳ медорад.",
        why:"Барои нигоҳ доштани танзимот ва маълумоти корбар истифода мешавад.",
        example:"localStorage.setItem('name','Ali');"
    },

    {
        category:"js",
        title:"sessionStorage",
        type:"Web Storage API",
        info:"Маълумотро то бастани саҳифа нигоҳ медорад.",
        why:"Барои маълумоти муваққатӣ истифода мешавад.",
        example:"sessionStorage.setItem('id','1');"
    },
        {
        category:"js",
        title:"Array Methods",
        type:"JavaScript Array",
        info:"Методҳое мебошанд, ки барои кор бо массивҳо истифода мешаванд.",
        why:"Барои илова, нест ва тағйири маълумоти массив лозиманд.",
        example:"array.push()"
    },

    {
        category:"js",
        title:"push()",
        type:"Array Method",
        info:"Ба охири массив элемент илова мекунад.",
        why:"Барои зиёд кардани маълумоти массив истифода мешавад.",
        example:"arr.push('HTML');"
    },

    {
        category:"js",
        title:"pop()",
        type:"Array Method",
        info:"Элементи охирини массивро нест мекунад.",
        why:"Барои гирифтани элементи охирин истифода мешавад.",
        example:"arr.pop();"
    },

    {
        category:"js",
        title:"shift()",
        type:"Array Method",
        info:"Элементи аввали массивро нест мекунад.",
        why:"Барои тағйири аввали рӯйхат истифода мешавад.",
        example:"arr.shift();"
    },

    {
        category:"js",
        title:"unshift()",
        type:"Array Method",
        info:"Ба аввали массив элемент илова мекунад.",
        why:"Барои илова кардани маълумоти нав истифода мешавад.",
        example:"arr.unshift('CSS');"
    },

    {
        category:"js",
        title:"slice()",
        type:"Array Method",
        info:"Қисми массивро нусха мегирад.",
        why:"Барои гирифтани қисми муайяни массив истифода мешавад.",
        example:"arr.slice(0,2);"
    },

    {
        category:"js",
        title:"splice()",
        type:"Array Method",
        info:"Элементҳоро илова, нест ё иваз мекунад.",
        why:"Барои тағйири дохили массив истифода мешавад.",
        example:"arr.splice(1,1);"
    },

    {
        category:"js",
        title:"map()",
        type:"Array Method",
        info:"Аз ҳар элемент массиви нав месозад.",
        why:"Барои тағйири маълумоти массив истифода мешавад.",
        example:"arr.map(x=>x*2);"
    },

    {
        category:"js",
        title:"filter()",
        type:"Array Method",
        info:"Элементҳоро аз рӯйи шарт интихоб мекунад.",
        why:"Барои ҷудо кардани маълумот истифода мешавад.",
        example:"arr.filter(x=>x>5);"
    },

    {
        category:"js",
        title:"find()",
        type:"Array Method",
        info:"Аввалин элементи мувофиқро меёбад.",
        why:"Барои ҷустуҷӯ дар массив истифода мешавад.",
        example:"arr.find(x=>x.id===1);"
    },

    {
        category:"js",
        title:"forEach()",
        type:"Array Method",
        info:"Ба ҳар элементи массив амал иҷро мекунад.",
        why:"Барои гузаштан аз рӯйи массив истифода мешавад.",
        example:"arr.forEach(item=>{});"
    },

    {
        category:"js",
        title:"Object Methods",
        type:"JavaScript Object",
        info:"Методҳо барои кор бо объектҳо мебошанд.",
        why:"Барои идора кардани маълумоти объект истифода мешаванд.",
        example:"Object.keys(obj);"
    },

    {
        category:"js",
        title:"Object.keys()",
        type:"Object Method",
        info:"Номи калидҳои объектро ҳамчун массив медиҳад.",
        why:"Барои гирифтани калидҳо истифода мешавад.",
        example:"Object.keys(user);"
    },

    {
        category:"js",
        title:"Object.values()",
        type:"Object Method",
        info:"Қиматҳои объектро ҳамчун массив медиҳад.",
        why:"Барои гирифтани маълумоти объект истифода мешавад.",
        example:"Object.values(user);"
    },

    {
        category:"js",
        title:"Object.entries()",
        type:"Object Method",
        info:"Калид ва қиматро якҷо бармегардонад.",
        why:"Барои гузаштан аз объект истифода мешавад.",
        example:"Object.entries(user);"
    },

    {
        category:"js",
        title:"Date Object",
        type:"JavaScript Object",
        info:"Барои кор бо сана ва вақт истифода мешавад.",
        why:"Барои нишон додани вақт ва ҳисоб кардани санаҳо лозим аст.",
        example:"new Date();"
    },

    {
        category:"js",
        title:"getDate()",
        type:"Date Method",
        info:"Рӯзи моҳро мегирад.",
        why:"Барои гирифтани рӯзи сана истифода мешавад.",
        example:"date.getDate();"
    },

    {
        category:"js",
        title:"getMonth()",
        type:"Date Method",
        info:"Моҳро мегирад.",
        why:"Барои кор бо моҳҳо истифода мешавад.",
        example:"date.getMonth();"
    },

    {
        category:"js",
        title:"getFullYear()",
        type:"Date Method",
        info:"Солро мегирад.",
        why:"Барои гирифтани соли ҷорӣ истифода мешавад.",
        example:"date.getFullYear();"
    },

    {
        category:"js",
        title:"Math Object",
        type:"JavaScript Object",
        info:"Барои ҳисобҳои математикӣ истифода мешавад.",
        why:"Барои кор бо рақамҳо ва формулаҳо лозим аст.",
        example:"Math.random();"
    },

    {
        category:"js",
        title:"Math.round()",
        type:"Math Method",
        info:"Рақамро ба наздиктарин адад гирд мекунад.",
        why:"Барои гирдкунии рақамҳо истифода мешавад.",
        example:"Math.round(4.6);"
    },

    {
        category:"js",
        title:"Math.floor()",
        type:"Math Method",
        info:"Рақамро ба поён гирд мекунад.",
        why:"Барои гирифтани қисми пурраи рақам истифода мешавад.",
        example:"Math.floor(4.9);"
    },

    {
        category:"js",
        title:"Math.ceil()",
        type:"Math Method",
        info:"Рақамро ба боло гирд мекунад.",
        why:"Барои зиёд кардани рақам истифода мешавад.",
        example:"Math.ceil(4.1);"
    },

    {
        category:"js",
        title:"Math.random()",
        type:"Math Method",
        info:"Рақами тасодуфӣ месозад.",
        why:"Барои бозиҳо ва интихобҳои тасодуфӣ истифода мешавад.",
        example:"Math.random();"
    },

    {
        category:"js",
        title:"JSON",
        type:"JavaScript Data Format",
        info:"Формати нигоҳдорӣ ва интиқоли маълумот мебошад.",
        why:"Барои кор бо сервер ва API истифода мешавад.",
        example:"JSON.stringify(data);"
    },

    {
        category:"js",
        title:"JSON.stringify()",
        type:"JSON Method",
        info:"Object-ро ба матни JSON табдил медиҳад.",
        why:"Барои фиристодани маълумот истифода мешавад.",
        example:"JSON.stringify(user);"
    },

    {
        category:"js",
        title:"JSON.parse()",
        type:"JSON Method",
        info:"JSON-ро ба Object табдил медиҳад.",
        why:"Барои гирифтани маълумот истифода мешавад.",
        example:"JSON.parse(text);"
    },

    {
        category:"js",
        title:"API",
        type:"Web Technology",
        info:"Роҳи алоқа байни барномаҳо мебошад.",
        why:"Барои гирифтани маълумот аз сервер истифода мешавад.",
        example:"fetch('api.com');"
    },

    {
        category:"js",
        title:"fetch()",
        type:"JavaScript API",
        info:"Барои фиристодан ва гирифтани маълумот аз интернет истифода мешавад.",
        why:"Барои кор бо API ва сервер лозим аст.",
        example:"fetch(url);"
    },
        {
        category:"css",
        title:"Colors",
        type:"CSS Feature",
        info:"Барои додани ранг ба элементҳо истифода мешавад.",
        why:"Барои зебо кардани дизайн лозим аст.",
        example:"color:red;"
    },

    {
        category:"css",
        title:"red",
        type:"CSS Color",
        info:"Ранги сурх мебошад.",
        why:"Барои нишон додани диққат ва ороиш истифода мешавад.",
        example:"#FF0000"
    },

    {
        category:"css",
        title:"blue",
        type:"CSS Color",
        info:"Ранги кабуд мебошад.",
        why:"Барои дизайнҳои ором ва замина истифода мешавад.",
        example:"#0000FF"
    },

    {
        category:"css",
        title:"green",
        type:"CSS Color",
        info:"Ранги сабз мебошад.",
        why:"Барои нишон додани муваффақият истифода мешавад.",
        example:"#008000"
    },

    {
        category:"css",
        title:"black",
        type:"CSS Color",
        info:"Ранги сиёҳ мебошад.",
        why:"Барои матн ва заминаҳои торик истифода мешавад.",
        example:"#000000"
    },

    {
        category:"css",
        title:"white",
        type:"CSS Color",
        info:"Ранги сафед мебошад.",
        why:"Барои заминаҳои равшан истифода мешавад.",
        example:"#FFFFFF"
    },

    {
        category:"css",
        title:"yellow",
        type:"CSS Color",
        info:"Ранги зард мебошад.",
        why:"Барои диққат додан ба элементҳо истифода мешавад.",
        example:"#FFFF00"
    },

    {
        category:"css",
        title:"orange",
        type:"CSS Color",
        info:"Ранги норанҷӣ мебошад.",
        why:"Барои дизайнҳои гарм истифода мешавад.",
        example:"#FFA500"
    },

    {
        category:"css",
        title:"purple",
        type:"CSS Color",
        info:"Ранги бунафш мебошад.",
        why:"Барои дизайнҳои махсус истифода мешавад.",
        example:"#800080"
    },

    {
        category:"css",
        title:"pink",
        type:"CSS Color",
        info:"Ранги гулобӣ мебошад.",
        why:"Барои ороиш истифода мешавад.",
        example:"#FFC0CB"
    },

    {
        category:"css",
        title:"gray",
        type:"CSS Color",
        info:"Ранги хокистарӣ мебошад.",
        why:"Барои матнҳои дуюмдараҷа истифода мешавад.",
        example:"#808080"
    },

    {
        category:"css",
        title:"brown",
        type:"CSS Color",
        info:"Ранги қаҳваранг мебошад.",
        why:"Барои дизайнҳои табиӣ истифода мешавад.",
        example:"#A52A2A"
    },

    {
        category:"css",
        title:"cyan",
        type:"CSS Color",
        info:"Ранги кабуди равшан мебошад.",
        why:"Барои эффектҳои равшан истифода мешавад.",
        example:"#00FFFF"
    },

    {
        category:"css",
        title:"magenta",
        type:"CSS Color",
        info:"Ранги бунафши равшан мебошад.",
        why:"Барои эффектҳои махсус истифода мешавад.",
        example:"#FF00FF"
    },

    {
        category:"css",
        title:"CSS Variables",
        type:"CSS Feature",
        info:"Барои нигоҳ доштани қиматҳои такрорӣ истифода мешаванд.",
        why:"Кодро кӯтоҳ ва идора карданро осон мекунанд.",
        example:":root{--main-color:blue;}"
    },

    {
        category:"css",
        title:"--variable",
        type:"CSS Variable",
        info:"Номи тағйирёбандаи CSS мебошад.",
        why:"Барои нигоҳ доштани ранг, андоза ва дигар қиматҳо истифода мешавад.",
        example:"--primary:#333;"
    },

    {
        category:"css",
        title:"var()",
        type:"CSS Function",
        info:"Қимати CSS Variable-ро мегирад.",
        why:"Барои истифодаи тағйирёбанда лозим аст.",
        example:"color:var(--primary);"
    },

    {
        category:"css",
        title:"linear-gradient()",
        type:"CSS Gradient",
        info:"Гузариши рангҳоро дар як самт месозад.",
        why:"Барои заминаҳои зебо истифода мешавад.",
        example:"background:linear-gradient(red,blue);"
    },

    {
        category:"css",
        title:"radial-gradient()",
        type:"CSS Gradient",
        info:"Гузариши рангро аз марказ месозад.",
        why:"Барои эффектҳои даврашакл истифода мешавад.",
        example:"background:radial-gradient(circle,red,blue);"
    },

    {
        category:"css",
        title:"conic-gradient()",
        type:"CSS Gradient",
        info:"Градиенти даврӣ месозад.",
        why:"Барои диаграмма ва эффектҳои махсус истифода мешавад.",
        example:"background:conic-gradient(red,yellow);"
    },

    {
        category:"css",
        title:"rgba()",
        type:"CSS Color Function",
        info:"Ранг бо шаффофият месозад.",
        why:"Барои рангҳои нимшаффоф истифода мешавад.",
        example:"rgba(0,0,0,0.5)"
    },

    {
        category:"css",
        title:"rgb()",
        type:"CSS Color Function",
        info:"Ранг аз се қимати Red Green Blue месозад.",
        why:"Барои муайян кардани ранг бо рақамҳо истифода мешавад.",
        example:"rgb(255,0,0)"
    },

    {
        category:"css",
        title:"hex color",
        type:"CSS Color Format",
        info:"Ранг бо рамзи 16-рақамӣ навишта мешавад.",
        why:"Яке аз усулҳои асосии навишти ранг мебошад.",
        example:"#3498db"
    },
        {
        category: "js",
        title: "getElementById()",
        type: "DOM Method",
        info: "Элементро аз рӯи ID меёбад.",
        why: "Барои дастрасии зуд ба як элементи мушаххас истифода мешавад.",
        example: "document.getElementById('myId');"
    },

    {
        category: "js",
        title: "querySelector()",
        type: "DOM Method",
        info: "Аввалин элементи мувофиқро бо CSS Selector меёбад.",
        why: "Барои ҷустуҷӯи чандир аз рӯиclass, id ё тег истифода мешавад.",
        example: "document.querySelector('.myClass');"
    },

    {
        category: "js",
        title: "querySelectorAll()",
        type: "DOM Method",
        info: "Ҳамаи элементҳои мувофиқро бо CSS Selector меёбад.",
        why: "Барои кор бо гурӯҳи элементҳо истифода мешавад.",
        example: "document.querySelectorAll('p');"
    },

    {
        category: "js",
        title: "addEventListener()",
        type: "DOM Event",
        info: "Ба элемент амал (ҳодиса) илова мекунад.",
        why: "Барои гу گوش кардани пахшкунии муш, клавиатура ва ғайра истифода мешавад.",
        example: "btn.addEventListener('click', function(){});"
    },

    {
        category: "js",
        title: "innerHTML",
        type: "DOM Property",
        info: "Матн ё коди HTML-и дохили элементро мехонад ё иваз мекунад.",
        why: "Барои тағйир додани мундариҷаи саҳифа истифода мешавад.",
        example: "box.innerHTML = '<h2>New</h2>';"
    },

    {
        category: "js",
        title: "style",
        type: "DOM Property",
        info: "Ба элемент услуби (CSS) бевосита медиҳад.",
        why: "Барои тағйири намуди зоҳирии элемент тавассути JS истифода мешавад.",
        example: "box.style.color = 'red';"
    },
    
    {
        category: "css",
        title: "pointer-events",
        type: "CSS Property",
        info: "Фаъол ё ғайрифаъол будани кликро муайян мекунад.",
        why: "Барои бастани клики муш истифода мешавад.",
        example: "pointer-events:none;"
    },
    
    {
        category: "js",
        title: "const",
        type: "JavaScript",
        info: "Барои сохтани тағйирёбандаи доимӣ истифода мешавад.",
        why: "Қимати онро баъдтар тағйир додан мумкин нест.",
        example: "const PI = 3.14;"
    },

    {
        category: "js",
        title: "var",
        type: "JavaScript",
        info: "Усули кӯҳнаи сохтани тағйирёбанда мебошад.",
        why: "Ҳоло бештар let ва const истифода мешаванд.",
        example: "var age = 20;"
    },

    {
        category: "js",
        title: "console.log()",
        type: "JS Method",
        info: "Маълумотро дар консоли браузер нишон медиҳад.",
        why: "Барои санҷиш ва ёфтани хатогиҳои код истифода мешавад.",
        example: "console.log('Hello World');"
    },

    {
        category: "js",
        title: "alert()",
        type: "JS Method",
        info: "Равзанаи огоҳинома (popup)-ро мекушояд.",
        why: "Барои нишон додани паёми муҳим ба корбар истифода мешавад.",
        example: "alert('Хуш омадед!');"
    },

    {
        category: "js",
        title: "confirm()",
        type: "JS Method",
        info: "Равзанаи тасдиқ бо тугмаҳои OK ва Cancel месозад.",
        why: "Барои гирифтани розигии корбар истифода мешавад.",
        example: "confirm('Оё боварӣ доред?');"
    },

    {
        category: "js",
        title: "prompt()",
        type: "JS Method",
        info: "Равзанае месозад, ки дар он корбар метавонад матн нависад.",
        why: "Барои гирифтани маълумоти кӯтоҳ аз корбар истифода мешавад.",
        example: "let name = prompt('Номи шумо?');"
    },

    {
        category: "js",
        title: "String",
        type: "JS Data Type",
        info: "Навъи маълумоти матнӣ мебошад.",
        why: "Барои нигоҳ доштани ҳарфҳо ва калимаҳо дар дохили нохунак истифода мешавад.",
        example: "let text = 'Матн';"
    },

    {
        category: "js",
        title: "Number",
        type: "JS Data Type",
        info: "Навъи маълумоти рақамӣ мебошад.",
        why: "Барои ҳисобҳои математикӣ ва рақамҳо истифода мешавад.",
        example: "let count = 100;"
    },

    {
        category: "js",
        title: "Boolean",
        type: "JS Data Type",
        info: "Навъи маълумоти мантиқӣ (true ё false).",
        why: "Барои санҷидани шартҳо истифода мешавад.",
        example: "let isOnline = true;"
    },

    {
        category: "js",
        title: "Array",
        type: "JS Data Type",
        info: "Рӯйхати якчанд маълумот дар як тағйирёбанда мебошад.",
        why: "Барои гурӯҳбандии якчанд арзиш истифода мешавад.",
        example: "let colors = ['red', 'green'];"
    },

    {
        category: "js",
        title: "Object",
        type: "JS Data Type",
        info: "Маълумотро ба шакли калид ва қимат (key: value) нигоҳ медорад.",
        why: "Барои сохтани сохторҳои мураккаб истифода мешавад.",
        example: "let user = { name: 'Ali', age: 25 };"
    },

    {
        category: "js",
        title: "if / else",
        type: "JS Condition",
        info: "Шартро месанҷад ва вобаста ба натиҷа код мегардонад.",
        why: "Барои қабули қарорҳо дар код истифода мешавад.",
        example: "if(x > 5) { alert('Калон'); }"
    },

    {
        category: "js",
        title: "switch",
        type: "JS Condition",
        info: "Якчанд шартро пайдарпай месанҷад.",
        why: "Ҷойгузини қулайтар барои if/else-ҳои бисёр мебошад.",
        example: "switch(day) { case 1: console.log('Даншанбе'); break; }"
    },

    {
        category: "js",
        title: "for loop",
        type: "JS Loop",
        info: "Такори кодро то ба аломати муайян расидан иҷро мекунад.",
        why: "Барои гузаштан аз болои массивҳо ва такрори амал истифода мешавад.",
        example: "for(let i=0; i<5; i++) { console.log(i); }"
    },

    {
        category: "js",
        title: "while loop",
        type: "JS Loop",
        info: "То вақте ки шарт درست (true) аст, кодро такрор мекунад.",
        why: "Ҳангоми номаълум будани шумораи такрор истифода мешавад.",
        example: "while(i < 10) { i++; }"
    },
    
    {
        category: "js",
        title: "Arrow Function",
        type: "JS Function",
        info: "Намуди кӯтоҳшуда ва муосири навиштани функсия мебошад.",
        why: "Суръати навиштани кодро тезтар ва фаҳмотар мекунад.",
        example: "const sum = (a, b) => a + b;"
    },

    {
        category: "js",
        title: "return",
        type: "JS Keyword",
        info: "Натиҷаи функсияро мегардонад ва иҷрои онро қатъ мекунад.",
        why: "Барои гирифтани натиҷа аз функсия истифода мешавад.",
        example: "function getAge(){ return 20; }"
    },

    {
        category: "js",
        title: "document.getElementById()",
        type: "JS DOM",
        info: "Элементро аз рӯи ID пайдо мекунад.",
        why: "Барои пайваст кардани JS ба элементи мушаххаси HTML истифода мешавад.",
        example: "document.getElementById('btn');"
    },

    {
        category: "js",
        title: "querySelector()",
        type: "JS DOM",
        info: "Элементи аввалинро бо селектори CSS пайдо мекунад.",
        why: "Барои ёфтани элемент бо class, id ё тег истифода мешавад.",
        example: "document.querySelector('.card');"
    },

    {
        category: "js",
        title: "addEventListener()",
        type: "JS Events",
        info: "Ҳодисаро (монанди click, input, scroll) дар элемент пайгирӣ мекунад.",
        why: "Барои иҷрои код ҳангоми зер кардани тугма ё амали корбар истифода мешавад.",
        example: "btn.addEventListener('click', () => {});"
    },

    {
        category: "js",
        title: "innerHTML",
        type: "JS Property",
        info: "Мӯҳтавои дохили элементи HTML-ро тағйир медиҳад.",
        why: "Барои динамикӣ иваз кардани матн ё коди HTML истифода мешавад.",
        example: "elem.innerHTML = '<h2>Нав</h2>';"
    },

    {
        category: "js",
        title: "classList.toggle()",
        type: "JS Method",
        info: "Классро ба элемент илова ё хориҷ мекунад.",
        why: "Барои сохтани Dark Mode ё фаъол/ғайрифаъол кардани меню истифода мешавад.",
        example: "elem.classList.toggle('active');"
    },

    {
        category: "js",
        title: "map()",
        type: "JS Array Method",
        info: "Барои ҳар як элементи массив функсияро иҷро карда, массиви нав месозад.",
        why: "Барои коркард ва тағйир додани элементҳои массив истифода мешавад.",
        example: "nums.map(x => x * 2);"
    },

    {
        category: "js",
        title: "filter()",
        type: "JS Array Method",
        info: "Элементҳоеро, ки ба шарт мувофиқанд, ҷудо карда массиви нав месозад.",
        why: "Барои ҷустуҷӯ ва филтр кардани маълумот истифода мешавад.",
        example: "items.filter(x => x.price > 100);"
    },

    {
        category: "js",
        title: "forEach()",
        type: "JS Array Method",
        info: "Аз болои ҳамаи элементҳои массив як бор мегузарад.",
        why: "Барои нишон додан ё коркарди ҳар як элемент истифода мешавад.",
        example: "arr.forEach(item => console.log(item));"
    },
    
    {
        category: "js",
        title: "fetch()",
        type: "JS Async",
        info: "Ба сервер дархост (request) мефиристад.",
        why: "Барои гирифтан ё фиристодани маълумот ба API истифода мешавад.",
        example: "fetch('https://api.com/data');"
    },

    {
        category: "js",
        title: "async / await",
        type: "JS Async",
        info: "Коди асинхрониро содда ва ба мисли коди оддӣ мегардонад.",
        why: "Барои кории осонтар бо API ва Promise-ҳо истифода мешавад.",
        example: "async function getData(){ await fetch(); }"
    },

    {
        category: "js",
        title: "localStorage",
        type: "JS Storage",
        info: "Маълумотро дар браузери корбар нигоҳ медорад.",
        why: "Барои сабт кардани созгорӣ (settings) ва маълумот пас аз бастани браузер истифода мешавад.",
        example: "localStorage.setItem('theme', 'dark');"
    },
    {
        category: "py",
        title: "print()",
        type: "Python Function",
        info: "Барои баровардани матн ва маълумот ба экран (консол) истифода мешавад.",
        why: "Барои нишон додани натиҷаи кор ва санҷиши код зарур аст.",
        example: "print('Салом, Дунё!')"
    },
    {
        category: "py",
        title: "Variables (Мутағайирҳо)",
        type: "Python Basics",
        info: "Барои нигоҳдории маълумот (адад, матн ва ғ.) дар хотира истифода мешавад.",
        why: "Барои истифодаи дубораи маълумот дар давоми барнома лозим аст.",
        example: "x = 10\nname = 'Аҳмад'"
    },
    {
        category: "py",
        title: "input()",
        type: "Python Function",
        info: "Барои қабул кардани маълумот аз корбар тавассути клавиатура.",
        why: "Барои интерактивӣ сохтани барнома ва гирифтани воридот лозим аст.",
        example: "name = input('Номи худро дохил кунед: ')"
    },
    {
        category: "py",
        title: "Data Types (Типҳои маълумот)",
        type: "Python Basics",
        info: "Типҳои асосӣ: int (адади бутун), float (адади касрӣ), str (матн), bool (ҳақ/дурӯғ).",
        why: "Барои муайян кардани намуди маълумоте, ки коркард мешавад.",
        example: "age = 25        # int\nprice = 19.99  # float\ntext = 'Код'    # str\nis_active = True # bool"
    },
    {
        category: "py",
        title: "if ... elif ... else",
        type: "Conditional Statement",
        info: "Барои иҷрои код вобаста ба шартҳои гуногун истифода мешавад.",
        why: "Барои қабули қарор дар барнома ва тақсими ҷараёни код.",
        example: "x = 10\nif x > 5:\n    print('Калон')\nelse:\n    print('Хурд')"
    },
    {
        category: "py",
        title: "for loop",
        type: "Python Loop",
        info: "Барои якчанд маротиба такрор кардани код ё гузаштан аз рӯи пайдарпайӣ.",
        why: "Барои автоматиконидани амалҳои такроршаванда.",
        example: "for i in range(5):\n    print(i)"
    },
    {
        category: "py",
        title: "while loop",
        type: "Python Loop",
        info: "Такрори код то он даме, ки шарти додашуда дуруст (True) бошад.",
        why: "Барои такроркунӣ вақте ки миқдори дақиқи такрорҳо пешакӣ маълум нест.",
        example: "count = 0\nwhile count < 3:\n    print(count)\n    count += 1"
    },
    {
        category: "py",
        title: "def (Functions)",
        type: "Python Function",
        info: "Барои сохтани функсияи шахсии худ, ки блоки коди алоҳидаро иҷро мекунад.",
        why: "Барои тақсим кардани код ба қисмҳо ва пешгирӣ аз такрори беҳуда.",
        example: "def salom(name):\n    return f'Салом, {name}!'\n\nprint(salom('Али'))"
    },
    {
        category: "py",
        title: "Lists (Рӯйхатҳо)",
        type: "Data Structure",
        info: "Маҷмӯи тартибдодашуда ва тағйирёбандаи элементҳо.",
        why: "Барои нигоҳдории якчанд қимат дар даруни як мутағайир.",
        example: "meva = ['Олу', 'Себ', 'Банан']\nmeva.append('Нок')"
    },
    {
        category: "py",
        title: "Dictionaries (Луғатҳо)",
        type: "Data Structure",
        info: "Маҷмӯи маълумот дар шакли 'калид: қимат' (key: value).",
        why: "Барои нигоҳдории маълумоти сохторӣ бо дастрасии зуд тавассути калид.",
        example: "user = {'name': 'Аҳмад', 'age': 20}\nprint(user['name'])"
    },
    {
        category: "py",
        title: "Tuples (Кортежҳо)",
        type: "Data Structure",
        info: "Маҷмӯи тартибдодашуда, аммо тағйирнаёбандаи элементҳо.",
        why: "Барои нигоҳдории маълумоте, ки набояд пас аз сохтан тағйир ёбад.",
        example: "point = (10, 20)"
    },
    {
        category: "py",
        title: "Sets (Маҷмӯаҳо)",
        type: "Data Structure",
        info: "Маҷмӯи бетартиби элементҳои бетакрор.",
        why: "Барои нест кардани элементҳои такрорӣ ва иҷрои амалҳои математикии маҷмӯаҳо.",
        example: "numbers = {1, 2, 3, 3, 4}\nprint(numbers) # {1, 2, 3, 4}"
    },
    {
        category: "py",
        title: "try ... except",
        type: "Error Handling",
        info: "Барои доштани хатогиҳо ва пешгирӣ аз вайрон шудани барнома.",
        why: "Барои бехатар ва устувор кор кардани барнома.",
        example: "try:\n    res = 10 / 0\nexcept ZeroDivisionError:\n    print('Ба сифр тақсим кардан мумкин нест!')"
    },
    {
        category: "py",
        title: "import / Modules",
        type: "Python Modules",
        info: "Барои пайваст кардани китобхонаҳо ва файлҳои беруна.",
        why: "Барои истифодаи функсияҳои тайёр (масалан, математика, вақт ва ғ.).",
        example: "import math\nprint(math.sqrt(16)) # Натиҷа: 4.0"
    },
    {
        category: "py",
        title: "class (OOP)",
        type: "Object Oriented",
        info: "Барои сохтани синфҳо (класс) ва объектҳо дар барномасозӣ.",
        why: "Барои сохтани сохторҳои мураккаб ва моделикунонии дунёи ҳақиқӣ.",
        example: "class Car:\n    def __init__(self, model):\n        self.model = model\n\nmy_car = Car('Toyota')"
    },
    {
        category: "py",
        title: "lambda (Anonymous Functions)",
        type: "Python Function",
        info: "Функсияи кӯтоҳи яксатрагӣ бе ном.",
        why: "Барои навиштани функсияҳои оддӣ ва суръат бахшидан ба код.",
        example: "square = lambda x: x * x\nprint(square(5)) # 25"
    },
    {
        category: "py",
        title: "open() (File Handling)",
        type: "Python I/O",
        info: "Барои хондан ва навиштан дар файлҳо.",
        why: "Барои нигоҳ доштани маълумот дар файлҳои беруна (txt ва ғ.).",
        example: "with open('file.txt', 'w') as f:\n    f.write('Салом!')"
    },
        {
        category: "py",
        title: "len()",
        type: "Python Built-in Function",
        info: "Дарозии объектро (шумораи аломатҳо, элементҳои рӯйхат ва ғ.) бармегардонад.",
        why: "Барои донистани теъдоди элементҳо дар рӯйхат ё дарозии матн.",
        example: "text = 'Python'\nprint(len(text)) # 6"
    },
    {
        category: "py",
        title: "type()",
        type: "Python Built-in Function",
        info: "Тип (намуд)-и маълумоти мутағайирро муайян мекунад.",
        why: "Барои санҷидани он ки мутағайир кадом намуди маълумотро нигоҳ медорад.",
        example: "x = 10\nprint(type(x)) # <class 'int'>"
    },
    {
        category: "py",
        title: "str(), int(), float()",
        type: "Type Casting",
        info: "Барои табдил додани як типи маълумот ба типи дигар.",
        why: "Барои мувофиқ сохтани амалҳо (масалан, табдили матни '123' ба адади 123).",
        example: "num_str = '10'\nnum_int = int(num_str)"
    },
    {
        category: "py",
        title: "String Formatting (f-strings)",
        type: "Python Feature",
        info: "Барои осон ҷойгир кардани мутағайирҳо дар даруни матн.",
        why: "Усули қулай ва зудтари кор бо матнҳо.",
        example: "name = 'Али'\nprint(f'Салом, {name}!')"
    },
    {
        category: "py",
        title: "range()",
        type: "Python Built-in Function",
        info: "Пайдарпаии ададҳоро месозад.",
        why: "Истифодаи аъло дар сиклҳои for барои такроркунии ба нақша гирифташуда.",
        example: "numbers = list(range(1, 5)) # [1, 2, 3, 4]"
    },
    {
        category: "py",
        title: "List Comprehension",
        type: "Python Syntax",
        info: "Усули кӯтоҳ ва зебои сохтани рӯйхатҳои нав аз рӯи рӯйхати мавҷуда.",
        why: "Кӯтоҳ ва суръатбахшии навиштани код.",
        example: "squares = [x**2 for x in range(5)] # [0, 1, 4, 9, 16]"
    },
    {
        category: "py",
        title: "slice [start:stop:step]",
        type: "Sequence Operation",
        info: "Барои гирифтани қисми муайяни рӯйхат ё матн.",
        why: "Барои буридани аломатҳо ё элементҳои дилхоҳ.",
        example: "text = 'Python'\nprint(text[0:3]) # 'Pyt'"
    },
    {
        category: "py",
        title: "split() ва join()",
        type: "String Methods",
        info: "split() матнро ба рӯйхат тақсим мекунад ва join() рӯйхатро ба матн табдил медиҳад.",
        why: "Барои коргарди калимаҳо ва сӯҳбатҳо дар матн.",
        example: "words = 'себ, анор'.split(', ')\ntext = '-'.join(words)"
    },
    {
        category: "py",
        title: "min(), max(), sum()",
        type: "Math Functions",
        info: "Барои ёфтани хурдтарин, калонтарин ва ҷамъи ададҳо дар рӯйхат.",
        why: "Барои ҳисобкуниҳои зуди математикӣ.",
        example: "nums = [1, 5, 3]\nprint(max(nums)) # 5\nprint(sum(nums)) # 9"
    },
    {
        category: "py",
        title: "abs() ва round()",
        type: "Math Functions",
        info: "abs() модули ададро медиҳад, round() ададҳои касриро мудаввар (округлять) мекунад.",
        why: "Барои кор бо ададҳои дақиқ ва манфӣ.",
        example: "print(abs(-7)) # 7\nprint(round(3.14159, 2)) # 3.14"
    },
    {
        category: "py",
        title: "map() ва filter()",
        type: "Functional Programming",
        info: "map() функсияро ба ҳама элементҳо татбиқ мекунад, filter() элементҳоро аз шарт мегузаронад.",
        why: "Барои филтратсия ва коркарди зуди маълумот.",
        example: "nums = [1, 2, 3, 4]\neven = list(filter(lambda x: x % 2 == 0, nums))"
    },
    {
        category: "py",
        title: "enumerate()",
        type: "Python Built-in Function",
        info: "Ҳангоми гузариш аз сикл ба ҳар як элемент индекс (рақам)-и онро илова мекунад.",
        why: "Барои донистани рақами тартибии элемент дар сикл.",
        example: "for index, value in enumerate(['a', 'b']):\n    print(index, value)"
    },
    {
        category: "py",
        title: "zip()",
        type: "Python Built-in Function",
        info: "Якчанд рӯйхатҳоро ба ҳам мувофиқ карда мепайвандад.",
        why: "Барои якҷоя кор кардан бо ду ё зиёда рӯйхатҳо дар як вақт.",
        example: "names = ['Али', 'Валӣ']\nages = [20, 22]\ncombined = list(zip(names, ages))"
    },
    {
        category: "py",
        title: "global ва local variables",
        type: "Scope",
        info: "Областҳои намудории мутағайирҳо (дар даруни функсия ё дар берун).",
        why: "Барои дуруст истифода бурдан ва тағйир додани мутағайирҳои беруна.",
        example: "x = 10\ndef change():\n    global x\n    x = 20"
    },
    {
        category: "py",
        title: "*args ва **kwargs",
        type: "Function Arguments",
        info: "Барои қабул кардани миқдори номаълуми аргументҳо ба функсия.",
        why: "Барои чандир ва ҳамаҷониба сохтани функсияҳо.",
        example: "def my_func(*args):\n    for arg in args:\n        print(arg)"
    },
    {
        category: "py",
        title: "decorators (@)",
        type: "Advanced Python",
        info: "Функсияе, ки рафтори функсияи дигарро бе тағйир додани коди он васеъ мекунад.",
        why: "Барои илова кардани логҳо, санҷиши дастрасӣ ё вақти иҷрои функсия.",
        example: "def my_decorator(func):\n    def wrapper():\n        print('Оғоз')\n        func()\n    return wrapper"
    },
    {
        category: "py",
        title: "is vs ==",
        type: "Operators",
        info: "== қиматҳоро муқоиса мекунад, is суроғаи хотираро (identity) муқоиса мекунад.",
        why: "Барои дуруст ва бехатар муқоиса кардани объектҳо (масалан `x is None`).",
        example: "a = [1, 2]\nb = [1, 2]\nprint(a == b) # True\nprint(a is b) # False"
    },
    {
        category: "py",
        title: "pass, break, continue",
        type: "Loop Control",
        info: "break сиклро мешиканад, continue ба қадами дигар мегузарад, pass ҳеҷ кор намекунад (заглушка).",
        why: "Барои идоракунии дақиқи ҷараёни сиклҳо.",
        example: "for i in range(5):\n    if i == 2:\n        continue\n    print(i)"
    },
    {
        category: "py",
        title: "datetime module",
        type: "Standard Library",
        info: "Модул барои кор бо вақт ва сана.",
        why: "Барои гирифтани вақти ҳозира ва ҳисоби фосилаи вақт.",
        example: "from datetime import datetime\nnow = datetime.now()\nprint(now.strftime('%Y-%m-%d'))"
    },
    {
        category: "py",
        title: "random module",
        type: "Standard Library",
        info: "Модул барои сохтани ададҳо ва интихобҳои тасодуфӣ.",
        why: "Барои бозиҳо ва симулятсияҳо.",
        example: "import random\nnum = random.randint(1, 10)\nitem = random.choice(['a', 'b', 'c'])"
    },    {
        category: "py",
        title: "strip(), lstrip(), rstrip()",
        type: "String Methods",
        info: "Пробелҳо ва аломатҳои изофиро аз аввал ва охири матн мебардорад.",
        why: "Барои тоза кардани матни аз корбар гирифташуда зарур аст.",
        example: "text = '   Салом   '\nprint(text.strip()) # 'Салом'"
    },
    {
        category: "py",
        title: "replace()",
        type: "String Method",
        info: "Як қисми матнро ба матни дигар иваз мекунад.",
        why: "Барои тағйир додани калимаҳо ва аломатҳо дар матн.",
        example: "text = 'Салом, Ҷаҳон!'\nprint(text.replace('Ҷаҳон', 'Дунё'))"
    },
    {
        category: "py",
        title: "lower(), upper(), title()",
        type: "String Methods",
        info: "Регистри аломатҳоро тағйир медиҳад (хурд, калон, ё ҳарфи аввал калон).",
        why: "Барои стандартӣ сохтани матнҳо ҳангоми ҷустуҷӯ ва муқоиса.",
        example: "name = 'али'\nprint(name.capitalize()) # 'Али'"
    },
    {
        category: "py",
        title: "startswith() ва endswith()",
        type: "String Methods",
        info: "Месанҷад, ки оё матн бо аломати муайян оғоз ё хатм мешавад.",
        why: "Барои санҷидани формати файлҳо (масалан `.png`, `.pdf`).",
        example: "filename = 'image.png'\nprint(filename.endswith('.png')) # True"
    },
    {
        category: "py",
        title: "pop(), remove(), clear()",
        type: "List Methods",
        info: "pop() аз рӯи индекс, remove() аз рӯи қимат нест мекунад, clear() рӯйхатро холӣ мекунад.",
        why: "Барои идора ва тоза кардани элементҳои рӯйхат.",
        example: "nums = [1, 2, 3]\nnums.pop(0) # [2, 3]\nnums.remove(3) # [2]"
    },
    {
        category: "py",
        title: "sort() ва sorted()",
        type: "List Operations",
        info: "sort() худи рӯйхатро тартиб медиҳад, sorted() рӯйхати нави тартибдодашударо бармегардонад.",
        why: "Барои аз хурд ба калон ё аз A ба Z ҷойгир кардани элементҳо.",
        example: "nums = [4, 1, 3]\nnums.sort()\nprint(nums) # [1, 3, 4]"
    },
    {
        category: "py",
        title: "get() (Dictionary)",
        type: "Dictionary Method",
        info: "Қимати калидро бехатар бармегардонад (бе ба вуҷуд овардани хатогӣ).",
        why: "Агар калид мавҷуд набошад, ба ҷои хатогӣ (Error) `None`-ро бармегардонад.",
        example: "user = {'name': 'Али'}\nprint(user.get('age', 'Маълум нест'))"
    },
    {
        category: "py",
        title: "keys(), values(), items()",
        type: "Dictionary Methods",
        info: "keys() калидҳо, values() қиматҳо ва items() ҷуфтҳои (калид, қимат)-ро бармегардонад.",
        why: "Барои гузаштан аз рӯи луғат дар сикли for.",
        example: "data = {'a': 1, 'b': 2}\nfor k, v in data.items():\n    print(k, v)"
    },
    {
        category: "py",
        title: "json module",
        type: "Standard Library",
        info: "Барои кор бо формати JSON (табдил ба JSON ва аз JSON ба Python).",
        why: "Барои мубодилаи маълумот бо сайтҳо ва серверҳо.",
        example: "import json\ndata = {'name': 'Али'}\njson_str = json.dumps(data)"
    },
    {
        category: "py",
        title: "os module",
        type: "Standard Library",
        info: "Барои кор бо системаи оператсионӣ ва файлҳо.",
        why: "Барои сохтани папкаҳо, гирифтани роҳи файлҳо ва нест кардани онҳо.",
        example: "import os\nprint(os.getcwd()) # Папкаи ҳозираро нишон медиҳад"
    },
    {
        category: "py",
        title: "sys module",
        type: "Standard Library",
        info: "Барои дастрасӣ ба муҳити иҷрои Python.",
        why: "Барои гирифтани аргументҳои хати фармон (command line arguments).",
        example: "import sys\nprint(sys.version) # Версияи Python"
    },
    {
        category: "py",
        title: "math module",
        type: "Standard Library",
        info: "Модул барои амалҳои пешрафтаи математикӣ.",
        why: "Барои ҳисобкунии ҷазр, синус, косинус, логарифм ва адади Pi.",
        example: "import math\nprint(math.pi)\nprint(math.factorial(5)) # 120"
    },
    {
        category: "py",
        title: "re module (RegEx)",
        type: "Standard Library",
        info: "Барои ҷустуҷӯ ва кор бо выраженияҳои регулярӣ (Regular Expressions).",
        why: "Барои санҷидани почтаи электронӣ, рақами телефон ва ҷустуҷӯи қолабҳо дар матн.",
        example: "import re\npattern = r'\\d+' # Ададҳо\nprint(re.findall(pattern, 'Соли 2026'))"
    },
    {
        category: "py",
        title: "__init__()",
        type: "OOP Constructor",
        info: "Конструктори синф (class), ки ҳангоми сохтани объекти нав ба таври худкор иҷро мешавад.",
        why: "Барои бахшидани қиматҳои аввалия ба атрибутҳои объект.",
        example: "class User:\n    def __init__(self, name):\n        self.name = name"
    },
    {
        category: "py",
        title: "__str__()",
        type: "Magic Method",
        info: "Муайян мекунад, ки объект ҳангоми ба print() додан чӣ тавр нишон дода шавад.",
        why: "Барои ба намуди хонданибоб баровардани объект.",
        example: "class User:\n    def __str__(self):\n        return 'Ин объекти User аст'"
    },
    {
        category: "py",
        title: "Inheritance (Ворисият)",
        type: "OOP Concept",
        info: "Қобилияти синфи нав барои гирифтани хосиятҳо ва методҳои синфи мавҷуда.",
        why: "Барои пешгирӣ аз такрори код дар лоиҳаҳои калон.",
        example: "class Animal:\n    def eat(self):\n        print('Хӯрок мехӯрад')\n\nclass Dog(Animal):\n    pass"
    },
    {
        category: "py",
        title: "Polymorphism (Полиморфизм)",
        type: "OOP Concept",
        info: "Истифодаи як номи метод барои синфҳои гуногун.",
        why: "Барои чандир ва ягона сохтани дастрасӣ ба методҳо.",
        example: "class Dog:\n    def speak(self):\n        return 'Вов'\n\nclass Cat:\n    def speak(self):\n        return 'Мияв'"
    },
    {
        category: "py",
        title: "Encapsulation (Инкапсулятсия)",
        type: "OOP Concept",
        info: "Маҳдуд кардани дастрасии мустақим ба баъзе атрибутҳо (бо истифода аз __).",
        why: "Барои ҳифзи маълумоти дарунӣ аз тағйироти номатлуб.",
        example: "class Account:\n    def __init__(self):\n        self.__balance = 100 # Атрибути махфӣ"
    },
    {
        category: "py",
        title: "Generators (yield)",
        type: "Advanced Python",
        info: "Функсияе, ки пайдарпаии қиматҳоро як-як (бо супориши хотира) месозад.",
        why: "Барои кор бо ҳаҷми азими маълумот бе пур кардани хотираи оперативӣ (RAM).",
        example: "def count_up():\n    yield 1\n    yield 2\n\nfor num in count_up():\n    print(num)"
    },
    {
        category: "py",
        title: "Iterators (iter, next)",
        type: "Advanced Python",
        info: "Объекте, ки имкони аз рӯи элементҳо ба тартиб гузаштанро медиҳад.",
        why: "Механизми асосии паси сиклҳои for.",
        example: "nums = [1, 2]\nit = iter(nums)\nprint(next(it)) # 1"
    },
    {
        category: "py",
        title: "assert",
        type: "Debugging Tool",
        info: "Шартро месанҷад ва агар он ғалт (False) бошад, хатогии AssertionError медиҳад.",
        why: "Барои санҷидани дурустии коди худ ҳангоми сохтан ва тестикунонӣ.",
        example: "x = 10\nassert x > 0, 'Адад бояд мусбат бошад'"
    },
    {
        category: "py",
        title: "pip (Package Installer)",
        type: "Python Tool",
        info: "Системаи идоракунии бастаҳо (библиотекаҳо)-и Python.",
        why: "Барои боргирӣ ва насби китобхонаҳои беруна (requests, Django, numpy ва ғ.).",
        example: "# Дар терминал навишта мешавад:\npip install requests"
    },
    {
        category: "py",
        title: "requests module",
        type: "External Library",
        info: "Китобхона барои фиристодани дархостҳои HTTP (GET, POST).",
        why: "Барои пайваст шудан ба API ва гирифтани маълумот аз сайтҳо.",
        example: "import requests\nresponse = requests.get('https://api.github.com')\nprint(response.status_code)"
    },
    {
        category: "py",
        title: "venv (Virtual Environment)",
        type: "Python Environment",
        info: "Муҳити виртуалӣ барои алоҳида нигоҳ доштани китобхонаҳои лоиҳа.",
        why: "Пешгирӣ аз конфликт ва халалдор шудани версиявӣ дар лоиҳаҳои гуногун.",
        example: "# Дар терминал:\npython -m venv myenv"
    },
    {
        category: "py",
        title: "virtualenv ва requirements.txt",
        type: "Deployment Tool",
        info: "Файле, ки ҳамаи китобхонаҳои истифодашударо рӯйхат мекунад.",
        why: "Барои он ки барномасозони дигар бо як фармон ҳама китобхонаҳоро насб кунанд.",
        example: "# Сабти китобхонаҳо:\npip freeze > requirements.txt"
    },
        {
        category: "py",
        title: "enumerate() бо start",
        type: "Python Built-in",
        info: "Индексатсияро аз рақами дилхоҳ (на танҳо аз 0) оғоз мекунад.",
        why: "Барои рақамгузории рӯйхатҳо аз рақами 1 ва ғайра.",
        example: "for i, v in enumerate(['A', 'B'], start=1):\n    print(i, v)"
    },
    {
        category: "py",
        title: "dict.fromkeys()",
        type: "Dictionary Method",
        info: "Луғати нав бо калидҳои додашуда ва қимати якхела месозад.",
        why: "Барои сохтани луғати аввалия бо қиматҳои пешфарз.",
        example: "keys = ['a', 'b']\ndata = dict.fromkeys(keys, 0) # {'a': 0, 'b': 0}"
    },
    {
        category: "py",
        title: "collections.Counter",
        type: "Standard Module",
        info: "Шумораи такроршавии ҳар як элемент дар рӯйхатро мешиморад.",
        why: "Барои баҳисобгирии зуди оморӣ бе сиклҳои иловагӣ.",
        example: "from collections import Counter\ncounts = Counter(['a', 'b', 'a'])\nprint(counts['a']) # 2"
    },
    {
        category: "py",
        title: "collections.defaultdict",
        type: "Standard Module",
        info: "Луғате месозад, ки ҳангоми набудани калид хатогӣ намедиҳад.",
        why: "Барои гурӯҳбандии маълумот бе санҷиши мавҷудияти калид.",
        example: "from collections import defaultdict\nd = defaultdict(list)\nd['a'].append(1)"
    },
    {
        category: "py",
        title: "functools.reduce()",
        type: "Functional Tool",
        info: "Функсияро паиҳам ба элементҳо татбиқ карда, як қимат месозад.",
        why: "Барои зарб ё ҷамъи пайдарпайи ҳамаи элементҳо.",
        example: "from functools import reduce\nnums = [1, 2, 3, 4]\nsum_all = reduce(lambda x, y: x + y, nums) # 10"
    },
    {
        category: "py",
        title: "itertools.permutations()",
        type: "Standard Module",
        info: "Ҳама таркибҳо (перестановка)-и мумкини элементҳоро месозад.",
        why: "Барои масъалаҳои комбинаторика ва ҷустуҷӯи вариантҳо.",
        example: "from itertools import permutations\nprint(list(permutations([1, 2]))) # [(1, 2), (2, 1)]"
    },
    {
        category: "py",
        title: "contextlib.contextmanager",
        type: "Advanced Decorator",
        info: "Барои сохтани контекст-менеҷери шахсӣ (блоги `with`).",
        why: "Барои бехатар кушодан ва бастани ресурсҳо (файлҳо, БД).",
        example: "from contextlib import contextmanager\n@contextmanager\ndef tag():\n    print('start')\n    yield\n    print('end')"
    },
    {
        category: "py",
        title: "type hints (Аннотатсияҳо)",
        type: "Python Feature",
        info: "Муайян кардани типи аргументҳо ва қимати баргардонидашуда.",
        why: "Барои хонданибоб шудан ва ёфтани хатогиҳо дар IDE.",
        example: "def add(x: int, y: int) -> int:\n    return x + y"
    },
    {
        category: "py",
        title: "@staticmethod ва @classmethod",
        type: "OOP Decorators",
        info: "@staticmethod ба объект вобаста нест, @classmethod бо худи класс кор мекунад.",
        why: "Барои сохтани методҳои хизматӣ дар даруни синф.",
        example: "class Math:\n    @staticmethod\n    def add(a, b): return a + b"
    },
    {
        category: "py",
        title: "@property (Getters & Setters)",
        type: "OOP Decorator",
        info: "Методро ба атрибут табдил медиҳад (дастрасӣ бе қавсҳо).",
        why: "Барои назорати хондан ва тағйири маълумот дар объект.",
        example: "class Circle:\n    def __init__(self, r):\n        self._r = r\n    @property\n    def radius(self): return self._r"
    },
    {
        category: "py",
        title: "async / await (Asyncio)",
        type: "Asynchronous Python",
        info: "Иҷрои асинхронӣ ва мувозии код бе афтодани суръат.",
        why: "Барои сохтани ботҳои Telegram ва кор бо веб-серверҳои зуд.",
        example: "import asyncio\nasync def main():\n    await asyncio.sleep(1)\nasyncio.run(main())"
    },
    {
        category: "py",
        title: "dataclass",
        type: "Standard Library",
        info: "Синфи махсус барои автоматикӣ сохтани `__init__` ва `__repr__`.",
        why: "Содда ва кӯтоҳ кардани коди синфҳое, ки танҳо маълумот нигоҳ медоранд.",
        example: "from dataclasses import dataclass\n@dataclass\nclass User:\n    id: int\n    name: str"
    },
    {
        category: "py",
        title: "pathlib (Path)",
        type: "Standard Library",
        info: "Кор бо роҳи файлҳо дар шакли объектҳо (ҷойгузини муосири os.path).",
        why: "Усули бехатар ва қулай барои ҳама системаҳои оператсионӣ.",
        example: "from pathlib import Path\np = Path('data/file.txt')\nprint(p.exists())"
    },
    {
        category: "py",
        title: "logging module",
        type: "Standard Library",
        info: "Сабти рӯйдодҳо ва хатогиҳои барнома дар лог-файл.",
        why: "Ҷоибози беҳтари `print()` барои лоиҳаҳои реалӣ ва серверҳо.",
        example: "import logging\nlogging.basicConfig(level=logging.INFO)\nlogging.info('Оғози барнома')"
    },
    {
        category: "py",
        title: "match ... case (Python 3.10+)",
        type: "Pattern Matching",
        info: "Аналоги `switch-case` барои муқоисаи сохторҳои мураккаб.",
        why: "Ивазкунандаи зебои силсилаи дарози `if-elif-else`.",
        example: "status = 200\nmatch status:\n    case 200: print('OK')\n    case 404: print('Not Found')"
    },
        {
        category: "py",
        title: "collections.deque",
        type: "Data Structure",
        info: "Очередь (Queue)-и дутарафа барои илова ва нест кардани зуди элементҳо аз ду тараф.",
        why: "Аз рӯи суръат нисбат ба list.pop(0) хеле тезтар кор мекунад.",
        example: "from collections import deque\nq = deque([1, 2])\nq.appendleft(0)\nq.pop()"
    },
    {
        category: "py",
        title: "collections.ChainMap",
        type: "Standard Module",
        info: "Якчанд луғатро (dict) ба як намуди зоҳирии ягона муттаҳид мекунад.",
        why: "Барои ҷустуҷӯи пайдарпай дар якчанд луғат бе сохтани луғати нав.",
        example: "from collections import ChainMap\nd1 = {'a': 1}\nd2 = {'b': 2}\ncm = ChainMap(d1, d2)"
    },
    {
        category: "py",
        title: "heapq module",
        type: "Standard Library",
        info: "Алгоритми сохтори маълумотии Куча (Heap Priority Queue).",
        why: "Барои зуд ёфтани N-элементи хурдтарин ё калонтарин дар массив.",
        example: "import heapq\nnums = [5, 1, 8, 3]\nheapq.heapify(nums)\nsmallest = heapq.heappop(nums)"
    },
    {
        category: "py",
        title: "bisect module",
        type: "Standard Library",
        info: "Алгоритми ҷустуҷӯи бинарӣ (Binary Search) барои рӯйхатҳои тартибдодашуда.",
        why: "Барои гузоштани элемент ба рӯйхат бе вайрон кардани тартиби он.",
        example: "import bisect\nnums = [10, 20, 30]\nbisect.insort(nums, 25) # [10, 20, 25, 30]"
    },
    {
        category: "py",
        title: "itertools.product()",
        type: "Standard Module",
        info: "Зарби декартии (Cartesian product) чанд рӯйхатро месозад.",
        why: "Ҷоибози беҳтари сиклҳои дарунбадаруни (nested) for.",
        example: "from itertools import product\nfor x, y in product([1, 2], ['A', 'B']):\n    print(x, y)"
    },
    {
        category: "py",
        title: "itertools.groupby()",
        type: "Standard Module",
        info: "Элементҳои пайдарпайро аз рӯи калид ё шарт гурӯҳбандӣ мекунад.",
        why: "Барои гурӯҳбандии зуди маълумоти тартибдодашуда.",
        example: "from itertools import groupby\ndata = [1, 1, 2, 3, 3]\nfor k, g in groupby(data):\n    print(k, list(g))"
    },
    {
        category: "py",
        title: "functools.lru_cache",
        type: "Optimization",
        info: "Декоратор барои кэшкунии (нигоҳдории) натиҷаи функсия дар хотира.",
        why: "Барои суръатбахшии бениҳоят зиёди функсияҳои мураккаб (масалан Фибоначчи).",
        example: "from functools import lru_cache\n@lru_cache(maxsize=None)\ndef fib(n):\n    return n if n < 2 else fib(n-1) + fib(n-2)"
    },
    {
        category: "py",
        title: "copy.deepcopy()",
        type: "Standard Module",
        info: "Нусхабардории пурра (амиқ)-и объектҳои мураккаби дарунбадарун.",
        why: "Барои он ки тағйири нусха ба объекти аслият таъсир нарасонад.",
        example: "import copy\noriginal = [[1, 2], [3, 4]]\nclone = copy.deepcopy(original)"
    },
    {
        category: "py",
        title: "weakref module",
        type: "Memory Management",
        info: "Ссилкаҳои заиф (Weak References) ба объектҳо месозад.",
        why: "Барои пешгирӣ аз нигоҳдории беҳудаи хотира ва Garbage Collector.",
        example: "import weakref\nclass A: pass\na = A()\nr = weakref.ref(a)"
    },
    {
        category: "py",
        title: "enum.Enum",
        type: "Standard Library",
        info: "Сохтани константаҳои номдор (Перечисления).",
        why: "Барои истифодаи коди хонданибоб ба ҷои ададҳои номафҳум.",
        example: "from enum import Enum\nclass Status(Enum):\n    NEW = 1\n    DONE = 2"
    },
    {
        category: "py",
        title: "sys.getsizeof()",
        type: "System Method",
        info: "Ҳаҷми хотираеро (бо байтҳо), ки объект мегирад, бармегардонад.",
        why: "Барои таҳлил ва оптимизатсияи истифодаи хотираи оперативӣ (RAM).",
        example: "import sys\nnum = 100\nprint(sys.getsizeof(num)) # ба ҳаҷми байт"
    },
    {
        category: "py",
        title: "traceback module",
        type: "Standard Library",
        info: "Барои баровардани пайраҳаи пурраи хатогӣ (Stack Trace).",
        why: "Барои лог кардани хатогиҳои мураккаб бе боздоштани барнома.",
        example: "import traceback\ntry:\n    1 / 0\nexcept Exception:\n    traceback.print_exc()"
    },
    {
        category: "py",
        title: "unittest module",
        type: "Testing Framework",
        info: "Фреймворки дохилии Python барои навиштани тестҳои автоматикӣ (Unit Tests).",
        why: "Барои санҷиши автоматии дурустии функсияҳо ва модулҳо.",
        example: "import unittest\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(1 + 1, 2)"
    },
    {
        category: "py",
        title: "struct module",
        type: "Binary Data",
        info: "Табдил додани маълумот ба формати бинарӣ (C-structs) ва баръакс.",
        why: "Барои кор бо файлҳои бинарӣ ва протоколҳои сетӣ.",
        example: "import struct\npacked = struct.pack('i', 1024)\nunpacked = struct.unpack('i', packed)"
    },
    {
        category: "py",
        title: "argparse module",
        type: "CLI Tool",
        info: "Модул барои коркарди аргументҳои хати фармон (Command Line).",
        why: "Барои сохтани консолӣ скриптҳои касбӣ бо --help ва параметрҳо.",
        example: "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--name')"
    },
    {
        category: "py",
        title: "zipfile module",
        type: "File Compression",
        info: "Барои сохтан, хондан ва кушодани файлҳои архивии ZIP.",
        why: "Барои автоматикӣ архиватсия кардани файлҳо дар Python.",
        example: "import zipfile\nwith zipfile.ZipFile('archive.zip', 'w') as z:\n    z.write('file.txt')"
    },
    {
        category: "py",
        title: "sqlite3 module",
        type: "Database Integration",
        info: "Китобхонаи дохилӣ барои кор бо базаи маълумоти SQLite.",
        why: "Барои нигоҳдории маълумот дар БД бе насб кардани серверҳои иловагӣ.",
        example: "import sqlite3\nconn = sqlite3.connect('db.sqlite')\ncursor = conn.cursor()"
    },
    {
        category: "py",
        title: "gc (Garbage Collector)",
        type: "Memory Management",
        info: "Модул барои идоракунии худкори тозакунии хотира.",
        why: "Барои дастӣ даъват кардан ё хомӯш кардани Garbage Collection.",
        example: "import gc\ngc.collect() # Тоза кардани хотира"
    },
    {
        category: "py",
        title: "__slots__",
        type: "OOP Optimization",
        info: "Маҳдуд кардани атрибутҳои синф танҳо бо номҳои додашуда.",
        why: "Барои кам кардани истифодаи хотира ҳангоми сохтани миллионҳо объект.",
        example: "class Person:\n    __slots__ = ['name', 'age']\n    def __init__(self, name):\n        self.name = name"
    },
    {
        category: "py",
        title: "abc (Abstract Base Classes)",
        type: "OOP Concept",
        info: "Сохтани синфҳои абстрактӣ ва методҳое, ки бояд ҳатман дар синфи ворис иҷро шаванд.",
        why: "Барои сохтани архитектура ва шаблони ягона дар лоиҳа.",
        example: "from abc import ABC, abstractmethod\nclass Shape(ABC):\n    @abstractmethod\n    def area(self): pass"
    },
        {
        category: "py",
        title: "shutil module",
        type: "Standard Library",
        info: "Модул барои амалҳои пурра бо файлҳо ва папкаҳо (нусхабардорӣ, кӯчонидан, нест кардан).",
        why: "Барои нусхабардории пӯшидаҳо (directories) ва файлҳои калон.",
        example: "import shutil\nshutil.copy('file.txt', 'backup.txt')"
    },
    {
        category: "py",
        title: "tempfile module",
        type: "Standard Library",
        info: "Сохтани файлҳо ва папкаҳои вақтӣ (Temporary files/directories).",
        why: "Барои кор бо маълумоти вақтӣ бе пур кардани диски компютер.",
        example: "import tempfile\nwith tempfile.TemporaryFile() as tmp:\n    tmp.write(b'Test')"
    },
    {
        category: "py",
        title: "timeit module",
        type: "Performance Measurement",
        info: "Барои чен кардани вақти дақиқи иҷрои коди Python.",
        why: "Барои муқоисаи суръати алгоритмҳо ва оптимизатсия.",
        example: "import timeit\nprint(timeit.timeit('[x for x in range(100)]', number=1000))"
    },
    {
        category: "py",
        title: "glob module",
        type: "Standard Library",
        info: "Ҷустуҷӯи файлҳо аз рӯи шаблон (Pattern matching) дар диск.",
        why: "Барои ёфтани ҳамаи файлҳои якхела (масалан ҳамаи `.txt`).",
        example: "import glob\nfiles = glob.glob('*.txt')"
    },
    {
        category: "py",
        title: "fnmatch module",
        type: "Standard Library",
        info: "Муқоисаи номи файлҳо бо шаблонҳои шакли Unix (wildcards).",
        why: "Барои филтратсияи зуди номи файлҳо.",
        example: "import fnmatch\nprint(fnmatch.fnmatch('data.csv', '*.csv')) # True"
    },
    {
        category: "py",
        title: "mimetypes module",
        type: "Standard Library",
        info: "Муайян кардани MIME-тип (намуди)-и файл аз рӯи номи он.",
        why: "Барои фиристодани файлҳо дар веб-серверҳо бо типии дуруст.",
        example: "import mimetypes\nprint(mimetypes.guess_type('photo.jpg')) # 'image/jpeg'"
    },
    {
        category: "py",
        title: "urllib.parse",
        type: "Standard Library",
        info: "Коркард ва тақсим кардани истинодҳо (URL).",
        why: "Барои ҷудо кардани домен, параметрҳо ва роҳҳо аз URL.",
        example: "from urllib.parse import urlparse\nres = urlparse('https://site.com/path')"
    },
    {
        category: "py",
        title: "hashlib module",
        type: "Cryptography",
        info: "Модул барои хеш кардани маълумот (MD5, SHA-256 ва ғ.).",
        why: "Барои бехатар нигоҳ доштани паролҳо ва санҷиши якпорчагии файлҳо.",
        example: "import hashlib\nh = hashlib.sha256(b'12345').hexdigest()"
    },
    {
        category: "py",
        title: "hmac module",
        type: "Cryptography",
        info: "Сохтани калидҳои аутентификатсияи паёмҳо (HMAC).",
        why: "Барои ҳифзи мубодилаи маълумот бо API ва криптография.",
        example: "import hmac, hashlib\nmac = hmac.new(b'secret', b'message', hashlib.sha256).hexdigest()"
    },
    {
        category: "py",
        title: "secrets module",
        type: "Cryptography",
        info: "Сохтани ададҳо ва токенҳои тасодуфии баландсифати бехатар.",
        why: "Барои сохтани токенҳои аутентификатсия, паролҳо ва истинодҳо.",
        example: "import secrets\ntoken = secrets.token_hex(16)"
    },
    {
        category: "py",
        title: "uuid module",
        type: "Standard Library",
        info: "Сохтани идентификаторҳои беназири ҷаҳонӣ (UUID).",
        why: "Барои бахшидани ID-и бетакрор ба корбарон ё файлҳо.",
        example: "import uuid\nunique_id = str(uuid.uuid4())"
    },
    {
        category: "py",
        title: "dis module",
        type: "Python Internals",
        info: "Дизассемблер барои таҳлили байткоди (Bytecode) Python.",
        why: "Барои донистани он ки интерпретатор кадом фармонҳоро дар паси парда иҷро мекунад.",
        example: "import dis\ndef my_func(): return 42\ndis.dis(my_func)"
    },
    {
        category: "py",
        title: "ast module",
        type: "Python Internals",
        info: "Кор бо дарахти абстрактии синтаксисӣ (Abstract Syntax Tree).",
        why: "Барои сохтани парсерҳо ва таҳлили коди Python.",
        example: "import ast\ntree = ast.parse('x = 5')"
    },
    {
        category: "py",
        title: "platform module",
        type: "System Information",
        info: "Гирифтани маълумот дар бораи ОС, процессор ва платформа.",
        why: "Барои мувофиқ сохтани барнома ба системаи оператсионии корбар.",
        example: "import platform\nprint(platform.system()) # 'Windows', 'Linux' ё 'Darwin'"
    },
    {
        category: "py",
        title: "site module",
        type: "Python Environment",
        info: "Автоматикӣ илова кардани директорияҳои packages ба sys.path.",
        why: "Барои ёфтани ҷои насби китобхонаҳои глобалӣ.",
        example: "import site\nprint(site.getsitepackages())"
    },
    {
        category: "py",
        title: "threading.Thread",
        type: "Multithreading",
        info: "Иҷрои мувозии чанд кор дар як просесс (Потоки).",
        why: "Барои иҷрои корҳои воридот/баромад (I/O) бе боздоштани интерфейс.",
        example: "import threading\nt = threading.Thread(target=print, args=('Салом',))\nt.start()"
    },
    {
        category: "py",
        title: "multiprocessing.Process",
        type: "Parallel Processing",
        info: "Истифодаи чанд ядрои процессор барои иҷрои мувозии коди Python.",
        why: "Барои ҳисобкуниҳои вазнини математикӣ ва таҳлили маълумот.",
        example: "import multiprocessing\np = multiprocessing.Process(target=print, args=('Тез',))\np.start()"
    },
    {
        category: "py",
        title: "concurrent.futures",
        type: "Parallel Execution",
        info: "Интерфейси сатҳи баланд барои идоракунии потокҳо ва просессҳо (ThreadPoolExecutor).",
        why: "Усули қулай ва муосир барои асинхронизатсия ва параллелизм.",
        example: "from concurrent.futures import ThreadPoolExecutor\nwith ThreadPoolExecutor() as executor:\n    executor.submit(print, 'Hello')"
    },
    {
        category: "py",
        title: "signal module",
        type: "System Events",
        info: "Доштани сигналҳои системавӣ (масалан Ctrl+C ё SIGTERM).",
        why: "Барои дуруст ва бехатар пӯшидани барнома ҳангоми боздошт.",
        example: "import signal\nsignal.signal(signal.SIGINT, signal.SIG_DFL)"
    },
    {
        category: "py",
        title: "locale module",
        type: "Localization",
        info: "Танзими формати сана, вақт ва асъор мувофиқи давлат.",
        why: "Барои нишон додани асъор ва сана мувофиқи забону минтақаи корбар.",
        example: "import locale\nlocale.setlocale(locale.LC_ALL, '')"
    }
];
