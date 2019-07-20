import testImage from '../images/test.png';


var dataCreate = () => {
  let datas = {};
  let data = {
    uuid: 123,
    showTitle: 'testShowTitle',
    title: 'test title ',
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
    abstract: 'abstract test hahahahahahahah',
    descriptions: ['123', '1232323234234', '23224323424'], // 用 array 來分段
    tags: ['interface', 'materials', 'vr'],
    createdTimestamp: 20180705,
    timestamp: 20190714, // last update time

    // If is accepted by conference
    publication: 'UIST', // e.g. CHI UIST
    acceptedYear: "2018",
    pdf: '', // url
    doi: '', 
  };
  for (let i = 0; i < 15; i ++) {
    let new_data = Object.assign({}, data);
    if(i == 10){
      new_data.tags = ['Ar', 'Xr']
    }
    if(i == 11){
      new_data.tags = ['haptic']
    }
    datas[i] = new_data;
  }
  return datas;
}

export const data = dataCreate();