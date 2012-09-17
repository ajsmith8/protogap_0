#TSA
Topic.create(
  title: 'TSA nude-body scanners', 
  score: 4,
  is_approved: true)
  
Fact.create(
  topic_id: 1,
  title: 'The cost of one TSA nude-body scanner is up to $200k',
  score: 5,
  has_quiz: true,
  is_approved: true,
  question: 'Approximately how much does one TSA nude-body scanner cost?',
  correct: 'Up to $200,000',
  wrong1: 'Less than $10,000',
  wrong2: '$50,000',
  wrong3: 'More than $1 million',
  type: 'intro',
  image: 'http://momentfeed.com/wp-content/uploads/2012/07/business_insider_logo.png')
  
Fact.create(
  topic_id: 1,
  title: 'The theoretical radiation output of a TSA scanner is relatively tiny',
  description: 'One backscatter scan emits 1/200,000th of the radiation of one typical CT scan.  The amount of radiation from a x-ray security scanner is equivalent to at most 42 minutes of natural background radiation in the US.  A person would have to be screened more than 1,000 times in one year to exceed recommended radiation dose limits',

  has_quiz: true,
  score: 20,
  is_approved: true,
  question: 'In terms of theoretically emitted radiation, one CT scan is equal to approximately how many TSA nude-body scans?',
  correct: '200,000 TSA scans',
  wrong1: '5,000 TSA scans',
  wrong2: '4 TSA scans',
  wrong3: '600 TSA scans',
  type: 'pro',
  image: 'http://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/220px-Wikipedia-logo-v2.svg.png')

Fact.create(
  topic_id: 1,
  title: 'TSA employees are not allowed to wear radiation-detecting dosimeter badges',
  description: "These badges change color when exposed to radiation.  Employees of other industries wear these to be alerted if they are being exposed to excess radiation.  According to the TSA blog, the TSA did not allow employees to wear badges because they didn't want to alarm passengers and the expected levels were considered negligible.  As of January 2012, the TSA is planning to start having some TSA employees wear dosimeter badges in light of recent radiation output concerns.",


  has_quiz: true,
  score: 13,
  is_approved: true,
  question: 'True/False: TSA employees wear radiation-detecting dosimeter badges.  ',
  correct: 'False',
  wrong1: 'True',
  type: 'con',
  image: 'http://orlandolocal.com/ol/wp-content/uploads/2012/06/tsa-logo.jpg')

Fact.create(
  topic_id: 1,
  title: 'TSA employees in are suing the TSA for cancer issues related to the scanners',

  score: 11,
  is_approved: true,
  type: 'con',
  image: 'http://www.technobuffalo.com/wp-content/uploads/2012/08/new-york-times-logo.jpeg')
  
Fact.create(
  topic_id: 1,
  title: "A TSA nude body scanner creates an image of the passenger's naked body",

  score: 4,
  is_approved: true,
  type: 'intro',
  image: 'http://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/220px-Wikipedia-logo-v2.svg.png')
  
Fact.create(
  topic_id: 1,
  title: 'TSA nude-body scans take about 30 seconds on average',
  has_quiz: true,
  score: 3,
  is_approved: true,
  question: 'Approximately how long does an average TSA nude-body scan take?',
  correct: '30 seconds',
  wrong1: '2 seconds',
  wrong2: '3 minutes',
  wrong3: '10 minutes',
  type: 'pro',
  image: 'http://www.studentnewsdaily.com/wp-content/uploads/2011/09/globe.png')

Fact.create(
  topic_id: 1,
  title: 'The cost of the TSA is approximately $8 billion per year',
  has_quiz: true,
  score: 6,
  is_approved: true,
  question: 'Approximately how large is the annual TSA budget?',
  correct: '$8 billion',
  wrong1: '$800 million',
  wrong2: '$80 billion',
  wrong3: '$800 billion',
  type: 'intro',
  image: 'http://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/220px-Wikipedia-logo-v2.svg.png')

Fact.create(
  topic_id: 1,
  title: 'The TSA directly employs nearly 60,000 people',
  has_quiz: true,
  score: 7,
  is_approved: true,
  question: 'Approximately how many people does the TSA directly employ?',
  correct: '60,000',
  wrong1: '300,000',
  wrong2: '1,500,000',
  wrong3: '12,000',
  type: 'intro',
  image: 'http://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/220px-Wikipedia-logo-v2.svg.png')
  
Fact.create(
  topic_id: 1,
  title: 'A blogger successfully snuck metal objects through TSA nude-body scanners at multiple airports',
  has_quiz: true,
  score: 17,
  is_approved: true,
  question: "At multiple locations, a blogger successfully snuck metal objects past which federal agency's scanners?",
  correct: 'TSA',
  wrong1: 'Secret Service',
  wrong2: 'CIA',
  wrong3: 'FBI',
  type: 'con',
  image: 'http://www-deadline-com.vimg.net/wp-content/uploads/2010/04/BGR-logo-300x171.jpg')
  
Fact.create(
  topic_id: 1,
  title: 'When the TSA scanners were actually tested, they were emitting 10 times more radiation than they were supposed to',
  has_quiz: true,
  score: 9,
  is_approved: true,
  question: 'When TSA nude-body scanners were tested for radiation output, how much radiation were they actually emitting relative to their theoretical output?',
  correct: '10 times more',
  wrong1: '500 times more',
  wrong2: '10 times less',
  wrong3: '500 times less',
  type: 'con',
  image: 'http://sportsmediamasters.com/smm/wp-content/uploads/2012/05/USA-Today-logo.bmp')
  
Fact.create(
  topic_id: 1,
  title: 'The TSA will perform enhanced pat-downs on children',
  has_quiz: true,
  score: 19,
  is_approved: true,
  question: 'True/False: The TSA will NOT perform enhanced pat-downs on children under the age of 7',
  correct: 'True',
  wrong1: 'False',
  type: 'con',
  image: 'http://sportsmediamasters.com/smm/wp-content/uploads/2012/05/USA-Today-logo.bmp')
  
Fact.create(
  topic_id: 1,
  title: 'According to a 2012 Gallup poll, 54% of Americans say the TSA is doing a good or excellent job',
  has_quiz: true,
  score: 21,
  is_approved: true,
  question: 'According to a 2012 Gallup poll, approximately what % of Americans said that the TSA is doing a good or excellent job?',
  correct: '54%',
  wrong1: '92%',
  wrong2: '9%',
  wrong3: '27%',
  type: 'pro',
  image: 'http://www.userlogos.org/files/logos/jumpordie/politico_01.png')
  
Fact.create(
  topic_id: 1,
  title: 'TSA has nearly $200M worth of equipment sitting unused in a Texas warehouse',
  has_quiz: true,
  score: 7,
  is_approved: true,
  question: 'The TSA is storing approximately how much unused security equipment in a Texas warehouse?',
  correct: '$200 million',
  wrong1: '$1.5 billion',
  wrong2: '$11 billion',
  wrong3: '$30 million',
  type: 'con',
  image: 'http://www.dcmetrochocolatetours.com/wp-content/uploads/washington_post_logo.jpg')
    
Fact.create(
  topic_id: 1,
  title: 'Rapiscan and L-3 Communications manufacture the TSA scanners',

  score: 1,
  is_approved: true,
  type: 'intro',
  image: 'http://www.addictinginfo.org/wp-content/uploads/2011/05/fox-news-logo.jpg')
  
Fact.create(
  topic_id: 1,
  title: 'TSA scanners are exempt from state radiation inspections',
  has_quiz: true,
  score: 15,
  is_approved: true,
  question: 'True/False: TSA nude-body scanners are exempt from state radiation exemptions',
  correct: 'True',
  wrong1: 'False',
  type: 'con',
  image: 'http://sportsmediamasters.com/smm/wp-content/uploads/2012/05/USA-Today-logo.bmp')
  
Fact.create(
  topic_id: 1,
  title: 'Employees in most other industries that involve radiation exposure are required to wear dosimeter badges, which are closely monitored',


  score: 12,
  is_approved: true,
  type: 'con',
  image: 'http://www.ctdeepstore.com/images/deepcirclejpeg(2).jpg')
  
Fact.create(
  topic_id: 1,
  title: 'Adam Savage from Mythbusters claims that the TSA screenings did not detect his 12" razor blades',

  score: 11,
  is_approved: true,
  type: 'con',
  image: 'http://upload.wikimedia.org/wikipedia/en/0/03/Ars_Technica_logo.png')

Fact.create(
  topic_id: 1,
  title: 'TSA employees have claimed that filming checkpoints is terrorism',

  score: 10,
  is_approved: true,
  type: 'intro',
  image: 'http://ocoathkeepers.files.wordpress.com/2011/04/infowars-box-logo.png?w=620')


Source.create(
  fact_id: 1,
  url: "http://articles.businessinsider.com/2012-05-10/politics/31650296_1_tsa-to-advanced-imaging-technology-scanners"
)
  
Source.create(
  fact_id: 2,
  url: "http://en.wikipedia.org/wiki/Full_body_scanner#Backscatter_X-ray_scanners"
)

Source.create(
  fact_id: 2,
  url: "http://en.wikipedia.org/wiki/Backscatter_X-ray#Health_effects"
)

Source.create(
  fact_id: 3,
  url: "http://blog.tsa.gov/2011/06/tsa-cancer-cluster-myth-buster.html"
)

Source.create(
  fact_id: 3,
  url: "http://www.scientificamerican.com/article.cfm?id=airport-screeners-to-be-monitored"
)

Source.create(
  fact_id: 3,
  url: "http://intransit.blogs.nytimes.com/2011/07/12/airport-body-scanners-and-health/?src=twr"
)

Source.create(
  fact_id: 4,
  url: "http://intransit.blogs.nytimes.com/2011/07/12/airport-body-scanners-and-health/?src=twr"
)

Source.create(
  fact_id: 5,
  url: "http://en.wikipedia.org/wiki/Full_body_scanner"
)

Source.create(
  fact_id: 6,
  url: "http://www.studentnewsdaily.com/daily-news-article/scanners-and-probing-pat-downs-upset-airline-passengers/"
)

Source.create(
  fact_id: 7,
  url: "http://en.wikipedia.org/wiki/Transportation_Security_Administration"
)

Source.create(
  fact_id: 8,
  url: "http://en.wikipedia.org/wiki/Transportation_Security_Administration"
)

Source.create(
  fact_id: 9,
  url: "http://www.bgr.com/2012/03/08/blogger-shows-the-world-how-to-sneak-anything-past-tsas-nude-body-scanners-video/"
)

Source.create(
  fact_id: 10,
  url: "http://www.usatoday.com/news/washington/2011-03-11-tsa-scans_N.htm"
)

Source.create(
  fact_id: 11,
  url: "http://travel.usatoday.com/flights/post/2011/04/tsa-screening-controversy/155793/1"
)

Source.create(
  fact_id: 12,
  url: "http://www.politico.com/news/stories/0812/79499.html?hp=r8"
)

Source.create(
  fact_id: 13,
  url: "http://www.washingtonpost.com/local/trafficandcommuting/tsa-equipment-gathering-dust-house-investigators-say/2012/05/08/gIQAaG9WBU_story.html"
)

Source.create(
  fact_id: 14,
  url: "http://www.foxnews.com/politics/2010/11/23/tsa-body-scanners-spend-millions-lobbying-reap-large-rewards/"
)

Source.create(
  fact_id: 15,
  url: "http://www.usatoday.com/news/washington/2011-03-11-tsa-scans_N.htm"
)

Source.create(
  fact_id: 16,
  url: "http://www.stanforddosimetry.com/Badge_Service/badge_service_FAQs.html"
)

Source.create(
  fact_id: 16,
  url: "http://www.ct.gov/dep/cwp/view.asp?a=2713&q=324816&depNav_GID=1639"
)

Source.create(
  fact_id: 17,
  url: "http://arstechnica.com/tech-policy/2010/11/adam-savage-tsa-saw-my-junk-missed-12-razor-blades/"
)

Source.create(
  fact_id: 18,
  url: "http://www.infowars.com/tsa-filming-checkpoints-is-terrorism/"
)