import image1 from '../img/Image1.png';
import image2 from '../img/Image2.png';
import image3 from '../img/Image3.png';
import image4 from '../img/Image4.png';
import image5 from '../img/Image5.png';
import image6 from '../img/Image6.png';
import image7 from '../img/Image7.png';
import image8 from '../img/Image8.png';
import image9 from '../img/Image9.png';
import image10 from '../img/Image10.png';
import image11 from '../img/Image11.png';
import image12 from '../img/Image12.png';
import image13 from '../img/Image13.png';
import image14 from '../img/Image14.png';
import image15 from '../img/Image15.png';
import image16 from '../img/Image16.png';
import image17 from '../img/Image17.png';
import image18 from '../img/Image18.png';
import image19 from '../img/Image19.png';
import image20 from '../img/Image20.png';
import image21 from '../img/Image21.png';
import image22 from '../img/Image22.png';

var quizQuestions = [
  {
      question: "Let's Get This Over With",
      answers: [
          {
              type: "Start",
              content: "Start"
          }
      ],
      result: [
        {
          type: "",
          image: "",
          link: "",
          item: ""
        },
        {
          type: "",
          image: "",
          link: "",
          item: ""
        }
      ]
  },{
      question: "Spending Limit?",
      answers: [
          {
              type: "Under20",
              content: "Under $20"
          },
          {
              type: "Over20",
              content: "Over $20"
          }
      ],
      result: [
        {
          type: "",
          image: "",
          link: "",
          item: ""
        },
        {
          type: "",
          image: "",
          link: "",
          item: ""
        }
      ]
  },
  {
      question: "Does this person frequently start happy hour a few hours early?",
      answers: [
          {
              type: "Gift",
              content: "Yes"
          },
          {
              type: "Next",
              content: "No"
          }
      ],
      result: [
        {
          type: "Under20",
          image: image1,
          link: "https://www.amazon.com/Coffee-Mug-Posts-Novelty-11-Ounce/dp/B076Z1573C/ref=sr_1_13?dd=kRXIPLnZeKJ0jxcP_fSZnQ%2C%2C&ddc_refnmnt=pfod&ie=UTF8&qid=1513009075&sr=8-13&keywords=might+be+vodka&refinements=p_97%3A11292772011",
          item: "Bottoms Up!",
          description: "The ideal gift for someone who can't resist adding a little bit of holiday joy to their afternoon cup of coffee."
        },
        {
          type: "Over20",
          image: image2,
          link: "https://www.amazon.com/dp/B071F96TND/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B071F96TND&pd_rd_wg=S2FOi&pd_rd_r=46DW9YCHTQ6PWCYM0RWK&pd_rd_w=gUWcG",
          item: '"Classy and Functional Bracelet Flask!"',
          description: " ...according to the amazon description. Business casual just got a lot more ratchet. "
        }
      ]
  },
  {
      question: "Is this person constantly late to meetings?",
      answers: [
          {
              type: "Gift",
              content: "Yes"
          },
          {
              type: "Next",
              content: "No"
          }
      ],
      result: [
        {
          type: "Under20",
          image: image3,
          link: "https://www.amazon.com/Silent-Vibrating-Personal-Alarm-Shake-N-Wake/dp/B0027A573Q/ref=sr_1_1?s=home-garden&ie=UTF8&qid=1513212700&sr=1-1&keywords=shock+alarm",
          item: "A completely worthless gift",
          description: "The most passive agreesive way to tall your secret santa you need to show up to their meetings on time."
        },
        {
          type: "Over20",
          image: image4,
          link: "https://www.amazon.com/Brief-History-Time-Other-Essays/dp/0553109537/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1513207589&sr=8-1",
          item: "The Basics",
          description: "They probably wont even have time to read it."
        }
      ]
  },
  {
      question: "Is this person vegan?",
      answers: [
          {
              type: "Gift",
              content: "Yes"
          },
          {
              type: "Next",
              content: "No"
          }
      ],
      result: [
        {
          type: "Under20",
          image: image5,
          link: "https://www.amazon.com/MCM-Group-Pw1P_Pu-Banana-Passionate/dp/B005P0S3WC/ref=sr_1_23?s=home-garden&ie=UTF8&qid=1513211863&sr=1-23&keywords=banana+protector",
          item: "Batteries not Included",
          description: "Not that you would need them. This is just a stylish banana holder."
        },
        {
          type: "Over20",
          image: image6,
          link: "https://www.amazon.com/Unisex-Funny-Kale-Sleeve-Heather/dp/B0779M54KV/ref=sr_1_24?s=apparel&ie=UTF8&qid=1513212035&sr=1-24&nodeID=7141123011&psd=1&keywords=kale+yeah",
          item: "Kale Yeah!",
          description: "The gift that keeps on... telling us they're vegan."
        }
      ]
  },
  {
      question: "Does your co-worker listen to music just a little too loud?",
      answers: [
          {
              type: "Gift",
              content: "Yes"
          },
          {
              type: "Next",
              content: "No"
          }
      ],
      result: [
        {
          type: "Under20",
          image: image7,
          link: "https://www.amazon.com/Feed-Machine-Nickelback/dp/B01N3A5XWQ/ref=sr_1_1?s=music&rps=1&ie=UTF8&qid=1513210169&sr=1-1&keywords=nickelback&refinements=p_85%3A2470955011",
          item: "Don't give them a gift receipt",
          description: "Just another way to tell someone they have terrible taste in music. "
        },
        {
          type: "Over20",
          image: image8,
          link: "https://www.amazon.com/Bluetooth-Music-Beard-Beanie-Halloween/dp/B075R64HGY/ref=sr_1_16?s=electronics&rps=1&ie=UTF8&qid=1513210059&sr=1-16&keywords=funny+headphones&refinements=p_85%3A2470955011",
          item: "Hipster chic.",
          description: "For the Ariana Grande lover amongst the non-Ariana Grande lovers in the room."
        }
      ]
  },
  {
      question: "Does this person reheat smelly food in the microwave?",
      answers: [
          {
              type: "Gift",
              content: "Yes"
          },
          {
              type: "Next",
              content: "No"
          }
      ],
      result: [
        {
          type: "Under20",
          image: image9,
          link: "https://seamless.cashstar.com/gift-card/buy/?utm_source=www.seamless.com/giftcards&utm_medium=content_owned&utm_campaign=landingpage_purchasecard_cta",
          item: "No more leftovers",
          description: "The gift that keeps the office smelling a whole lot better."
        },
        {
          type: "Over20",
          image: image10,
          link: "https://seamless.cashstar.com/gift-card/buy/?utm_source=www.seamless.com/giftcards&utm_medium=content_owned&utm_campaign=landingpage_purchasecard_cta",
          item: "Grubs Up",
          description: "The gift for the whole office, really. "
        }
      ]
  },
  {
      question: "Is this person constantly hanging out by the water cooler?",
      answers: [
          {
              type: "Gift",
              content: "Yes"
          },
          {
              type: "Next",
              content: "No"
          }
      ],
      result: [
        {
          type: "Under20",
          image: image11,
          link: "https://www.amazon.com/Fine-Art-Small-Talk-conversation-ebook/dp/B00HR8QTLW/ref=sr_1_2?s=digital-text&ie=UTF8&qid=1513213635&sr=1-2&keywords=small+talk+book",
          item: "Small Talk",
          description: "So you don't have to just talk about the weather."
        },
        {
          type: "Over20",
          image: image12,
          link: "https://www.amazon.com/Artland-67008A-Pedestal-Beverage-Jar/dp/B001CS4T1A/ref=sr_1_40?s=home-garden&ie=UTF8&qid=1513269618&sr=1-40&keywords=countertop+water+jug",
          item: "Artisinal Hydration System for Their Desk",
          description: "Throw in some free-range, organic, artisinal cucumbers to take their water game to the next level."
        }
      ]
  },
  {
      question: "Is this person into #fitness?",
      answers: [
          {
              type: "Gift",
              content: "Yes"
          },
          {
              type: "Next",
              content: "No"
          }
      ],
      result: [
        {
          type: "Under20",
          image: image13,
          link: "https://www.amazon.com/Kingyee-Flexible-Bluetooth-Universal-Cellphone/dp/B074FZJ66S/ref=sr_1_3?s=electronics&ie=UTF8&qid=1513210313&sr=1-3&keywords=hands+free+tripod",
          item: "Help them launch their Insta-Career",
          description: "#fitfam #eatclean #fitspo #transformationtuesday #nevergiveup #nodaysoff"
        },
        {
          type: "Over20",
          image: image14,
          link: "https://www.amazon.com/Portable-Pedal-Exerciser-Vive-Equipment/dp/B01G8ZU2N0/ref=sr_1_2_sspa?ie=UTF8&qid=1513009787&sr=8-2-spons&keywords=desk+exercise&psc=1",
          item: "So They Never Skip Leg Day",
          description: "The best way to keep the cardio-guru in their optimal fat-burning zone at all times."
        }
      ]
  },
  {
      question: "Does this person constantly tag you in memes?",
      answers: [
          {
              type: "Gift",
              content: "Yes"
          },
          {
              type: "Next",
              content: "No"
          }
      ],
      result: [
        {
          type: "Under20",
          image: image15,
          link: "https://www.amazon.com/CreepyParty-Deluxe-Novelty-Halloween-Costume/dp/B017OZL1CY/ref=sr_1_1?s=apparel&ie=UTF8&qid=1513279748&sr=1-1&nodeID=7141123011&psd=1&keywords=doge+mask",
          item: "Much Wow",
          description: "Because they like memes and you want everyone to know it with this completely useless gift."
        },
        {
          type: "Over20",
          image: image16,
          link: "https://www.amazon.com/Christmas-Sweater-Black-Adult-Sweatshirt/dp/B016YPYV9U",
          item: "Much Wow",
          description: "Because they like memes and you want everyone to know it."
        }
      ]
  },
  {
      question: "Is this person always the first to attack the leftover meeting food?",
      answers: [
          {
              type: "Gift",
              content: "Yes"
          },
          {
              type: "Next",
              content: "No"
          }
      ],
      result: [
        {
          type: "Under20",
          image: image17,
          link: "https://www.amazon.com/Telescopic-Extendable-Barbecue-Toasting-Dessert/dp/B01MY6DJLE/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1513211215&sr=1-4&keywords=long+fork",
          item: "They won't even have to leave their desk",
          description: '"According to the only amazon review your Secret Santa will , "Enjoy Eating Again"'
        },
        {
          type: "Over20",
          image: image18,
          link: "https://www.graze.com/us",
          item: "Stop them from stealing all the good snacks",
          description: "The most thoughtful way to stop the office snacker from eating all the free chips."
        }
      ]
  },
  {
      question: "Does this person want to take down the patriarchy?",
      answers: [
          {
              type: "Gift",
              content: "Yes"
          },
          {
              type: "Next",
              content: "No"
          }
      ],
      result: [
        {
          type: "Under20",
          image: image19,
          link: "https://www.amazon.com/What-Happened-Hillary-Rodham-Clinton/dp/1501175564/ref=sr_1_1?s=music&ie=UTF8&qid=1513211664&sr=8-1&keywords=what+happened+hillary+clinton",
          item: "In HRC we trust",
          description: "For the one who can't get over it."
        },
        {
          type: "Over20",
          image: image20,
          link: "https://shop.the-wing.com/products/no-days-off-pins",
          item: "No Days Off",
          description: "Pinning it to The Man 24/7"
        }
      ]
  },
        {
            question: "-",
            answers: [],
            result: [
              {
                type: "Under20",
                image: image21,
                link: "https://www.amazon.com/Chia-0090710906-Kitten/dp/B000WJ55MW/ref=sr_1_2_sspa?ie=UTF8&qid=1513010623&sr=8-2-spons&keywords=chia+pet&psc=1",
                item: "We've run out of questions, like you've run out of hope.",
                description: "Sounds like you don't know this person very well. It's impossible to hate a Chia Pet."
              },
              {
                type: "Over20",
                image: image21,
                link: "https://www.amazon.com/Chia-0090710906-Kitten/dp/B000WJ55MW/ref=sr_1_2_sspa?ie=UTF8&qid=1513010623&sr=8-2-spons&keywords=chia+pet&psc=1",
                item: "We've run out of questions, like you've run out of hope.",
                description: "Sounds like you don't know this person very well. It's impossible to hate a Chia Pet."
              }
            ]
        },
        {
            question: "-",
            answers: [],
            result: [
              {
                type: "Under20",
                image: image22,
                link: "https://www.amazon.com/Lump-Coal-Glacial-Blue-Gift/dp/B00R28HW8Q/ref=sr_1_2_sspa?ie=UTF8&qid=1513010639&sr=8-2-spons&keywords=lump+of+coal&psc=1",
                item: "We've run out of questions, like you've run out of hope.",
                description: "You don't know them very well, but let's just assume they're on the naughty list."
              },
              {
                type: "Over20",
                image: image22,
                link: "https://www.amazon.com/Lump-Coal-Glacial-Blue-Gift/dp/B00R28HW8Q/ref=sr_1_2_sspa?ie=UTF8&qid=1513010639&sr=8-2-spons&keywords=lump+of+coal&psc=1",
                item: "We've run out of questions, like you've run out of hope.",
                description: "You don't know them very well, but let's just assume they're on the naughty list."
              }
            ]
        }
      ];

export default quizQuestions;
