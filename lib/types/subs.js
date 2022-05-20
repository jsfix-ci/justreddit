"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUBS = void 0;
const TEXT_LIST = "r/100yearsago r/1200isplenty r/13or30 r/1500isplenty r/2007scape r/2healthbars r/2meirl42meirl4meirl r/2meirl4meirl r/30ROCK r/3amjokes r/3Dprinting r/3DS r/3dshacks r/40kLore r/49ers r/4chan r/4PanelCringe r/5050 r/90DayFiance r/AbandonedPorn r/ableton r/ABoringDystopia r/ABraThatFits r/absolutelynotme_irl r/absolutelynotmeirl r/AbsoluteUnits r/AccidentalComedy r/AccidentalRacism r/AccidentalRenaissance r/accidentalswastika r/AccidentalWesAnderson r/Accounting r/ActLikeYouBelong r/actuallesbians r/Addons4Kodi r/ADHD r/AdPorn r/AdrenalinePorn r/AdvancedFitness r/adventuretime r/advertising r/Advice r/AdviceAnimals r/afkarena r/AfterEffectsr/AgainstHateSubreddits r/agedlikemilk r/ainbow r/AionNetwork r/AirForce r/airsoft r/AlbumArtPorn r/alcohol r/alexandradaddario r/AlexisRen r/algorithms r/algotrading r/AlienBlue r/aliens r/AliensAmongUs r/AlisonBrie r/Allsvenskan r/altcoin r/alternativeart r/AMA r/AMADisasters r/AmateurRoomPorn r/amazon r/amazonecho r/Amd r/americandad r/AmericanHorrorStory r/amibeingdetained r/amiibo r/Amish r/AmItheAsshole r/amiugly r/Amoledbackgrounds r/analog r/Anarchism r/Anarcho_Capitalism r/Android r/androidapps r/androiddev r/AndroidGaming r/AndroidQuestions r/androidthemes r/AndroidWear r/angularjs r/AnimalCrossing r/AnimalPorn r/AnimalsBeingBros r/AnimalsBeingDerps r/AnimalsBeingJerks r/AnimalsBeingMoms r/animalsdoingstuff r/Animalsthatlovemagic r/AnimalTextGifs r/animation r/anime r/anime_irl r/animegifs r/Animemes r/animenocontext r/Animesuggest r/Animewallpaper r/announcements r/ANormalDayInRussia r/answers r/AnthemTheGame r/Anthropology r/Anticonsumption r/AntiJokes r/antiMLM r/Anxiety r/aoe2 r/apexlegends r/apolloapp r/AppalachianTrailr/AppHookup r/apple r/AppleWatch r/ApplyingToCollege r/Aquariums r/ar15 r/arabfunny r/araragi r/Archaeology r/ArcherFX r/Archery r/architecture r/ArchitecturePorn r/archlinux r/arduino r/argentina r/ArianaGrande r/ARK r/arma r/army r/arresteddevelopment r/arrow r/Art r/ArtefactPorn r/ArtFundamentals r/artificial r/ArtisanVideos r/ArtPorn r/AryaWinsTheThrone r/AsianBeauty r/asiangirlsbeingcute r/asianpeoplegifs r/AskAcademia r/AskAnAmerican r/AskAnthropology r/AskCulinary r/AskDocs r/AskElectronics r/AskEngineers r/askgaybros r/AskHistorians r/AskMen r/AskMenOver30 r/AskNetsec r/AskOuija r/askphilosophy r/AskReddit r/asksciencer /AskScienceFiction r/AskSocialScience r/asktransgender r/asktrp r/AskTrumpSupporters r/AskUK r/AskWomen r/askwomenadvice r/asmr r/asoiaf r/aSongOfMemesAndRage r/aspergers r/assassinscreed r/assholedesign r/assholetax r/Assistance r/AstralProjection r/astrology r/Astronomy r/astrophotography r/ATBGE r/AteTheOnion r/atheism r/Atlanta r/attackontitan r/Audi r/audiobooks r/audioengineering r/audiophile r/Austin r/australia r/Austria r/AutoDetailing r/Autos r/Avengers r/aves r/aviation r/awakened r/AwardSpeechEdits r/awesome r/AwesomeCarMods r/awfuleverything r/awfuleyebrows r/aws r/aww r/Awwducational r/awwnime r/Awww r/awwwtf r/AyyMD r/babybigcatgifs r/BabyBumps r/BabyCorgis r/babyelephantgifs r/backpacking r/baconit r/baconreader r/Bad_Cop_No_Donut r/Badfaketexts r/badhistory r/badtattoos r/badwomensanatomy r/Baking r/Bandnames r/bangtan r/bannedfromclubpenguin r/barkour r/barstoolsports r/bartenders r/baseball r/BasicIncome r/Bass r/batman r/Battlecars r/Battlefield r/battlefield_4 r/battlefield_one r/BattlefieldV r/battlestations r/bayarea r/BBQ r/BDSMAdvice r/BeAmazed r/beards r/bearsdoinghumanthings r/beatles r/beauty r/BeautyBoxes r/BeautyGuruChatter r/Beekeeping r/beer r/beermoney r/beerporn r/beetlejuicing r/BeforeNAfterAdoption r/behindthegifs r/beholdthemasterrace r/belgium r/Berserk r/bertstrips r/bestof r/bestoflegaladvice r/bestofnetflix r/BestOfOutrageCulture r/BestOfReports r/beta r/bettafish r/betterCallSaul r/BetterEveryLoop r/beyondthebump r/bicycling r/bidenbro r/bigboobproblems r/bigboye r/BigBrother r/BigCatGifs r/bigdickproblems r/bikecommuting r/BikiniBottomTwitter r/binance r/bindingofisaac r/bingbongtheorem r/biology r/Bioshock r/bipolar r/Birbs r/BirdsArentReal r/BirdsBeingDicks r/birdswitharms r/bisexual r/bitchimabus r/Bitcoin r/BitcoinBeginners r/BitcoinMarkets r/bizarrebuildings r/bjj r/blackcats r/blackdesertonline r/blackhat r/blackmagicfuckery r/blackmirror r/blackops3 r/Blackops4 r/blackpeoplegifs r/BlackPeopleTwitter r/Blacksmith r/bleach r/blender r/Blep r/blessedimages r/BlockChain r/blog r/bloodborne r/blop r/BlueMidterm2018 r/blunderyears r/blursedimages r/BMW r/boardgamesr/BobsBurgers r/bodybuilding r/bodyweightfitness r/bois r/BoJackHorseman r/BokuNoHeroAcademia r/BollywoodRealism r/BoneAppleTea r/bonehurtingjuice r/Bonsai r/bookclub r/bookporn r/books r/booksuggestions r/boop r/boottoobig r/Borderlands r/Borderlands2 r/borderlands3 r/Bossfight r/boston r/bostonceltics r/Botchedsurgeries r/bouldering r/bourbon r/Boxing r/BoxingStreams r/boxoffice r/BPD r/BrandNewSentence r/brasil r/Brawlstars r/Breadit r/BreadStapledToTrees r/BreadTube r/breakingbad r/BreakUps r/Breath_of_the_Wild r/breathinginformation r/brisbane r/britishproblems r/BritishSuccess r/brockhampton r/Brogress r/brokengifs r/brooklynninenine r/Browns r/brushybrushy r/brutalism r/btc r/Buddhism r/BudgetAudiophile r/budgetfood r/buildapc r/buildapcforme r/buildapcsales r/buildapcsalesuk r/bulletjournal r/Bundesliga r/Bushcraft r/business r/BuyItForLife r/C25K r/CabinPorn r/cableporn r/Calgary r/California r/Calligraphy r/CallOfDuty r/calvinandhobbes r/camping r/CampingandHiking r/CampingGear r/canada r/CanadaPolitics r/cannabis r/CannabisExtracts r/cardano r/cardistry r/cardsagainsthumanity r/careerguidance r/carporn r/cars r/Cartalk r/castiron r/castles r/CasualConversation r/casualiama r/CasualUK r/CatastrophicFailure r/catbellies r/Catculations r/CatGifs r/Catholicism r/Catloaf r/catpictures r/catpranks r/cats r/CatsAreAssholes r/catsareliquid r/CatsISUOTTATFO r/CatSlaps r/catsonglass r/CatsStandingUp r/Catswhoyell r/Catswithjobs r/CatTaps r/CBD r/CBDOilReviews r/ccna r/CCW r/Celebhub r/Celebs r/cemu r/CFB r/CFBStreams r/CGPGrey r/chairsunderwater r/changemyview r/chaoticgood r/ChapoTrapHouse r/characterdrawing r/Cheap_Meals r/CheeseandRiceReddit r/chelseafc r/chemicalreactiongifs r/chemistry r/chess r/CHIBears r/chicago r/chicagobulls r/childfree r/ChildrenFallingOver r/chile r/China r/Chonkers r/ChoosingBeggars r/Christianity r/chrome r/Chromecast r/chromeos r/churning r/cigars r/Cinemagraphs r/cinematography r/circlejerk r/CircleofTrust r/CitiesSkylines r/CityPorn r/civ r/ClashOfClans r/ClashRoyale r/classic4chan r/classicalmusic r/classiccars r/classicwow r/ClassyPornstars r/cleanjokes r/clevelandcavs r/clevercomebacks r/climbing r/Coachella r/coaxedintoasnafu r/cocktails r/CoDCompetitive r/coding r/CODZombies r/Coffee r/cogsci r/collapse r/college r/CollegeBasketball r/Colorado r/coloringcorruptions r/Colorization r/ColorizedHistory r/CombatFootage r/combinedgifsr/comedy r/ComedyCemetery r/comedyheaven r/comedyhomicide r/comedynecromancy r/ComedyNecrophilia r/comicbookmovies r/comicbooks r/comics r/CommercialCuts r/communism r/communism101 r/community r/CompanyBattles r/CompetitiveHS r/Competitiveoverwatch r/COMPLETEANARCHY r/compsci r/computers r/computerscience r/confession r/confessions r/confidence r/confusing_perspective r/CongratsLikeImFive r/Conservative r/conspiracy r/conspiracytheories r/conspiratard r/consulting r/ContagiousLaughter r/continuityporn r/controllablewebcams r/ConvenientCop r/Cooking r/cookingforbeginners r/coolguides r/copypasta r/cordcutters r/corgi r/CorporateFacepalm r/cosplay r/cosplaybabes r/cosplaygirls r/coupons r/cowboys r/CowChop r/CozyPlaces r/cpp r/CrackWatch r/crafts r/CrappyDesign r/crappyoffbrands r/CrazyIdeas r/creepy r/creepyasterisks r/creepyencounters r/creepypasta r/creepyPMs r/CreepyWikipedia r/CrewsCrew r/Cricket r/cringe r/cringepics r/Cringetopia r/criticalrole r/crochet r/crossdressing r/crossfit r/CrossStitch r/CruciblePlaybook r/CrusaderKings r/crypto r/Crypto_Currency_News r/CryptoCurrencies r/CryptoCurrency r/CryptoCurrencyTrading r/CryptoMarkets r/cscareerquestions r/csgo r/csharp r/css r/Cubers r/curledfeetsies r/curlyhair r/Cursed_Images r/cursedcomments r/cursedimages r/cursedvideos r/customhearthstone r/CyanideandHappiness r/Cyberpunk r/cyberpunkgame r/cybersecurity r/cycling r/Cynicalbrit";
exports.SUBS = TEXT_LIST.split(" ").map(word => word.replace("r/", ""));