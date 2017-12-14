import image1 from '../img/test.png';
import image2 from '../img/test2.jpg';

var quizQuestions = [
  {
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
          imageKey: 1,
          link: "http://www.seanwilkinson.me",
          item: "Happy Hour - Under 20",
          description: "Lorem ipsum sonar dolar words words"
        },
        {
          type: "Over20",
          image: image1,
          imageKey: 2,
          link: "http://www.seanwilkinson.me",
          item: "Happy Hour - Over 20",
          description: "Lorem ipsum sonar dolar words words"
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
          image: image1,
          imageKey: 3,
          link: "http://www.seanwilkinson.me",
          item: "Late Meetings - Under 20",
          description: "Lorem ipsum sonar dolar words words"
        },
        {
          type: "Over20",
          image: image1,
          imageKey: 4,
          link: "http://www.seanwilkinson.me",
          item: "Late Meetings - Over 20",
          description: "Lorem ipsum sonar dolar words words"
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
          image: image1,
          imageKey: 5,
          link: "http://www.seanwilkinson.me",
          item: "Vegan - Under 20",
          description: "Lorem ipsum sonar dolar words words"
        },
        {
          type: "Over20",
          image: image1,
          imageKey: 6,
          link: "http://www.seanwilkinson.me",
          item: "Vegan - Over 20",
          description: "Lorem ipsum sonar dolar words words"
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
          image: image1,
          imageKey: 7,
          link: "http://www.seanwilkinson.me",
          item: "Music - Under 20",
          description: "Lorem ipsum sonar dolar words words"
        },
        {
          type: "Over20",
          image: image1,
          imageKey: 8,
          link: "http://www.seanwilkinson.me",
          item: "Music - Over 20",
          description: "Lorem ipsum sonar dolar words words"
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
          image: image1,
          imageKey: 9,
          link: "http://www.seanwilkinson.me",
          item: "Microwave - Under 20",
          description: "Lorem ipsum sonar dolar words words"
        },
        {
          type: "Over20",
          image: image1,
          imageKey: 10,
          link: "http://www.seanwilkinson.me",
          item: "Microwave - Over 20",
          description: "Lorem ipsum sonar dolar words words"
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
          image: image1,
          imageKey: 11,
          link: "http://www.seanwilkinson.me",
          item: "Water - Under 20",
          description: "Lorem ipsum sonar dolar words words"
        },
        {
          type: "Over20",
          image: image1,
          imageKey: 12,
          link: "http://www.seanwilkinson.me",
          item: "Water - Over 20",
          description: "Lorem ipsum sonar dolar words words"
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
          image: image1,
          imageKey: 13,
          link: "http://www.seanwilkinson.me",
          item: "#fitness - Under 20",
          description: "Lorem ipsum sonar dolar words words"
        },
        {
          type: "Over20",
          image: image1,
          imageKey: 14,
          link: "http://www.seanwilkinson.me",
          item: "#fitness - Over 20",
          description: "Lorem ipsum sonar dolar words words"
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
          image: image1,
          imageKey: 15,
          link: "http://www.seanwilkinson.me",
          item: "Memes - Under 20",
          description: "Lorem ipsum sonar dolar words words"
        },
        {
          type: "Over20",
          image: image1,
          imageKey: 16,
          link: "http://www.seanwilkinson.me",
          item: "Memes - Over 20",
          description: "Lorem ipsum sonar dolar words words"
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
          image: image1,
          imageKey: 17,
          link: "http://www.seanwilkinson.me",
          item: "Attack - Under 20",
          description: "Lorem ipsum sonar dolar words words"
        },
        {
          type: "Over20",
          image: image1,
          imageKey: 18,
          link: "http://www.seanwilkinson.me",
          item: "Attack - Over 20",
          description: "Lorem ipsum sonar dolar words words"
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
          image: image1,
          imageKey: 19,
          link: "http://www.seanwilkinson.me",
          item: "Patriarchy - Under 20",
          description: "Lorem ipsum sonar dolar words words"
        },
        {
          type: "Over20",
          image: image1,
          imageKey: 20,
          link: "http://www.seanwilkinson.me",
          item: "Patriarchy - Over 20",
          description: "Lorem ipsum sonar dolar words words"
        }
      ]
  }
];

export default quizQuestions;
