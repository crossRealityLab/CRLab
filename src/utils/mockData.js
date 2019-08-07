import testImage from '../images/test.png';


var dataCreate = () => {
  let datas = {};
  let data = {
    uuid: "3e485bbe-4a66-4dd0-9a84-093705bf22b9",
    showTitle: 'testShowTitle',
    title: 'Digital Fabrication of Soft Actuated Objects by Machine Knitting',
    year: '2018',
    authors: ['Aaron', 'Ricky'],
    cover: [{
      name: 'test cover image',
      url: testImage,
    }],
    imgs: [
      {
        name: 'test image',
        caption: 'image caption description hey hey',
        url: testImage,
      },
      {
        name: 'test image2',
        caption: 'image2 caption description hey hey',
        url: testImage,
      },
      {
        name: 'test image2',
        caption: 'image2 caption description hey hey',
        url: testImage,
      },
    ],
    videos: [testImage, testImage, testImage], 
    abstract: 'With recent interest in shape-changing interfaces, material- driven design, wearable technologies, and soft robotics, digital fabrication of soft actuatable material is increasingly in demand. Much of this research focuses on elastomers or non-stretchy air bladders. Computationally-controlled machine knitting offers an alternative fabrication technology which can rapidly produce soft textile objects that have a very different character: breathable, lightweight, and pleasant to the touch. These machines are well established and optimized for the mass production of garments, but compared to other digital fabrication techniques such as CNC machining or 3D printing, they have received much less attention as general purpose fabrication devices. In this work, we explore new ways to employ machine knitting for the creation of actuated soft objects. We describe the basic operation of this type of machine, then show new techniques for knitting tendon-based actuation into objects. We explore a series of design strategies for integrating tendons with shaping and anisotropic texture design. Finally, we investigate different knit material properties, including considerations for motor control and sensing.',
    descriptions: ['123', '1232323234234', '23224323424'], // 用 array 來分段
    tags: ['interface', 'materials', 'vr'],
    createdTimestamp: 20180705,
    timestamp: 20190714, // last update time

    // If is accepted by conference
    publication: 'UIST', // e.g. CHI UIST
    acceptedYear: "2018",
    pdf: 'http://morphingmatter.cs.cmu.edu/~morphin5/wp-content/uploads/2019/04/soft_actuated_objects.pdf', // url
    doi: 'https://dl.acm.org/citation.cfm?doid=3290605.3300414', 
  };
  for (let i = 0; i < 15; i ++) {
    let new_data = Object.assign({}, data);
    if(i > 8) {
      new_data.authors = ['Aaron Yang', 'Liwei Chan']
    }
    if(i === 10){
      new_data.tags = ['Ar', 'Xr']
    }
    if(i === 11){
      new_data.tags = ['Xr', 'haptic']
    }
    datas[i] = new_data;
  }
  return datas;
}
export const data_project = dataCreate();

let dataCreate_team = () => {
  let datas = {};
  let data = {
    uuid: 123,
    fullName: 'Aaron Yang',
    avatar: [{
      name: 'aaron',
      url: testImage,
    }],
    title: 'master student',
    focusOn: ['VR', 'AR', 'Girl', 'heyhey'],
    email: 'aaron@gmail.com',
    website: 'http://www.openhci.com/',
    about: 'Guanyun Wang (王冠云) is a postdoctoral fellow in HCII and MFI at CMU. His research revolves around design and fabrication. As a designer, he has sought emerging interaction methods from nature. As a researcher, he has worked on designing and fabricating smart materials that are responsive, adaptive, and tunable. His works have been published and exhibited across science, engineering, design, and art. He was awarded by Reddot Award, iF Award, A Design Award, Ars Electronica STARTS Prize, etc. Prior to CMU, he received a Ph.D. in Digital Arts and Design from Zhejiang University and worked at MIT Media Lab as a visiting researcher from 2014 to 2015. He holds a Bachelor’s degree from Industrial Design from Zhejiang University',
    publications: [
      {
        title: 'test publication 1',
        conference: 'UIST',
        year: '2017',
        link: 'http://www.openhci.com/',
      },
      {
        title: 'test publication 2',
        conference: 'CHI',
        year: '2018',
        link: 'http://www.openhci.com/',
      },
      {
        title: 'bioPrint: A Liquid Deposition Printing System for Natural Actuators',
        conference: 'SCI',
        year: '2015',
        link: 'http://www.openhci.com/',
      },
      {
        title: 'Trainer: A Motion-Based Interactive Game for Balance Rehabilitation Training',
        conference: 'UIST',
        year: '2014',
        link: 'http://www.openhci.com/',
      },
    ],
    awards: [
      {
        title: 'Manufacturing Futures Initiative (MFI) Postdoctoral Fellowship',
        year: '2019',
      },
      {
        title: 'Printed Paper Actuator, Ars Electronica STARTS PRIZE Award',
        year: '2018',
      },
      {
        title: 'Manufacturing Futures Initiative (MFI) Postdoctoral Fellowship',
        year: '2018',
      },
      {
        title: 'DIY Weave, reddot award',
        year: '2017',
      },
      {
        title: 'Baby Safety, Reddot Award',
        year: '2014',
      },
      {
        title: 'Air-Bar, iF Special Award “Hansgrohe Preis”',
        year: '2013',
      },
    ], 
    timestamp: 20190714, // last update time
    graduateYear: ''
  };
  for (let i = 0; i < 15; i ++) {
    let new_data = Object.assign({}, data);
    if(i === 2 || i === 3){
      new_data.title = 'phd student'
    }
    if(i === 4 || i === 10){
      new_data.graduateYear = '2018'
    }
    datas[i] = new_data;
  }
  return datas;
}
export const data_team = dataCreate_team();
export let data_member = {
  uuid: 123,
  fullName: 'Aaron Yang',
  avatar: [{
    name: 'aaron',
    url: testImage,
  }],
  title: 'master student',
  focusOn: ['VR', 'AR', 'Girl', 'heyhey'],
  email: 'aaron@gmail.com',
  website: 'http://www.openhci.com/',
  about: 'Guanyun Wang (王冠云) is a postdoctoral fellow in HCII and MFI at CMU. His research revolves around design and fabrication. As a designer, he has sought emerging interaction methods from nature. As a researcher, he has worked on designing and fabricating smart materials that are responsive, adaptive, and tunable. His works have been published and exhibited across science, engineering, design, and art. He was awarded by Reddot Award, iF Award, A Design Award, Ars Electronica STARTS Prize, etc. Prior to CMU, he received a Ph.D. in Digital Arts and Design from Zhejiang University and worked at MIT Media Lab as a visiting researcher from 2014 to 2015. He holds a Bachelor’s degree from Industrial Design from Zhejiang University',
  publications: [
    {
      title: 'test publication 1',
      conference: 'UIST',
      year: '2017',
      link: 'http://www.openhci.com/',
    },
    {
      title: 'test publication 2',
      conference: 'CHI',
      year: '2018',
      link: 'http://www.openhci.com/',
    },
    {
      title: 'bioPrint: A Liquid Deposition Printing System for Natural Actuators',
      conference: 'SCI',
      year: '2015',
      link: 'http://www.openhci.com/',
    },
    {
      title: 'Trainer: A Motion-Based Interactive Game for Balance Rehabilitation Training',
      conference: 'UIST',
      year: '2014',
      link: 'http://www.openhci.com/',
    },
    {
      title: 'test publication 4',
      conference: 'Apec',
      year: '2018',
      link: 'http://www.openhci.com/',
    },
    {
      title: 'test publication 5',
      conference: 'Apec',
      year: '2018',
      link: 'http://www.openhci.com/',
    },
  ],
  awards: [
    {
      title: 'Manufacturing Futures Initiative (MFI) Postdoctoral Fellowship',
      year: '2019',
    },
    {
      title: 'Printed Paper Actuator, Ars Electronica STARTS PRIZE Award',
      year: '2018',
    },
    {
      title: 'Manufacturing Futures Initiative (MFI) Postdoctoral Fellowship',
      year: '2018',
    },
    {
      title: 'DIY Weave, reddot award',
      year: '2017',
    },
    {
      title: 'Baby Safety, Reddot Award',
      year: '2014',
    },
    {
      title: 'Air-Bar, iF Special Award “Hansgrohe Preis”',
      year: '2013',
    },
  ], 
  timestamp: 20190714, // last update time
  graduateYear: ''
};

const news_data_func = () => {
  let datas = {};
  let data = {
    uuid: 123,
    title: 'Prof. Lining Yao was appointed as an instructor by United Nation Industrial Development Organization. ',
    description: 'Today meating Time is ........, you can find me after 3 p.m. hahahah',
    date: '2019/03/02',
    timestamp: 20190714, // last update time
    graduateYear: ''
  };
  for (let i = 0; i < 15; i ++) {
    let new_data = Object.assign({}, data);
    if(i === 3 || i === 5) {
      new_data.title = "test year 20190504"
      new_data.date = '2019/05/04';
      new_data.description= '開放約時間討論, 今天下午四點以後到晚上,明天下午三點以後到晚上';
    }
    if(i === 4 || i === 9) {
      new_data.title = "test year 20181221"
      new_data.date = '2018/12/21';
      new_data.description= '進入暑假期間 也正式進入投稿準備期,希望大家多利用白天時間工作 把研究進度推進 基本禁止大家在實驗室待超過晚上十二點';
    }
    if(i === 10) {
      new_data.title = "test year 20190715"
      new_data.date = '2019/07/15';
    }

    datas[i] = new_data;
  }
  return datas;
}
export const news_data = news_data_func();

export const labData = {
  title: 'soft reality lab',
  subTitle: 'soft reality lab develops materials, tools, and applications of adaptive, dynamic and intelligent morphing matter from nano to macro scales. We turn fictional future into the present.',
  vision: ['By developing transformative and adaptive materials, we design interfaces that redefine the interactive relationship between human, other living organisms, environment, objects and intangible data. We challenge the definition of traditional human computer interface which was constrained on a computer screen, and encode information and interactivity into physical materials. We call such interactive material as "morphing matter"!','We design for the myrid of life experiences, including clothes we wear, objects we use, environment we habitate, robots and AI we rely on, and even food we eat:','hihihihi hihihihihihihih ihihihihih ihihihihihihihihihihihi hihihihihihih ihihihih ihihihihihihi hihihihihih ihihihihihihih '],
  timestamp: 20190714, // last update time
  graduateYear: ''
}
export const contactData = {
  name: 'Aaron Yang',
  email: 'aroe86267@gmail.com',
  office: 'EC423',
  officeHours: '10:00am -12:00am',
  lab: 'EC636',
  description: ['if you are a maker/designer/artist, please include: a CV and digital portfolio. Demonstrating processes such as sketching, model making, CAD, 3D and rendering are as important as showing a final piece. Radical concepts and beliefs are highly appreciated.','if you are a maker/designer/artist, please include: a CV and digital portfolio. Demonstrating processes such as sketching, model making, CAD, 3D and rendering are as important as showing a final piece. Radical concepts and beliefs are highly appreciated.', 'if you are a maker/designer/artist, please include: a CV and digital portfolio. Demonstrating processes such as sketching, model making, CAD, 3D and rendering are as important as showing a final piece. Radical concepts and beliefs are highly appreciated.'],
  banner: testImage,
  timestamp: '',
}