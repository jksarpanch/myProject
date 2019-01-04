import { Component } from '@angular/core';

@Component({
  templateUrl: './aboutUs.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutUsComponent {
  imageCollection = [];
  singleImage: any = {};
  constructor() {
    for (let i = 0; i < 4; i++) {
      const url = '../assets/aboutUs/WorkshopNo5Branding-' + (i + 1) + '.jpg';

      this.imageCollection[i] = {
        url: url,
        title : this.getContactInfo(i).title,
        name : this.getContactInfo(i).name,
        description : this.getContactInfo(i).description,
        additionalDescription : this.getContactInfo(i).additionalDescription,
        show: false
      };
    }
    this.singleImage = {
      url : '../assets/aboutUs/WorkshopNo5Branding-31.jpg',
      show: false
    };
  }

  getContactInfo(i): any {
    let info = {};
    switch (i) {
      case 0 :
        info = {
          title : 'FOUNDER',
          name: 'Bhavani Singal',
          description : 'Bhavani holds a Bachelor of Architecture and a Bachelor of Science in Environmental Design from the University' +
            ' of Houston and is affiliated with AIA Austin, NCARB, Rice Design Alliance, and USGBC.' +
            ' Her strong work ethic, active listening skills and passion for telling people\'s’ story through creative design ' +
            'allow her to go above and beyond her client\'s expectations. Bhavani is well-versed in both residential and commercial ' +
            'design. Although passionate about both, she loves that commercial projects present the opportunity to have a lasting, ' +
            'positive impact on the community. She was awarded the 2009 AIA Austin Design Award and has been published in the Texas ' +
            'Architect in 2009 and 2013 for her exceptional architectural work on the Ella Wooten Neighborhood Park, Met Retail,' +
            ' and Rackspace.',
          additionalDescription : 'Outside of work, she loves cooking, traveling and painting with her two boys, Liam and Oliver.' +
            ' You can also find her at the movies with her husband, Bryon.'
        };
        break;
      case 1 :
        info = {
          title : 'Designer',
          name: 'Sarah Wigfield',
          description : 'Sarah graduated from Texas State University with a Bachelor of Family and Consumer Science in Interior Design' +
            ' and is an Associate Member of IIDA. Her passion for design stems from her love of inspiring others with functional yet' +
            ' thoughtfully crafted spaces. Attentive, curious and highly collaborative, Sarah has a way of making clients an active part' +
            ' of the team which enables her deliver impeccable design. Her remarkable work with Stanley Studios on the John Gaines Park' +
            ' Swim Center has been recognized with the 2018 AIA Austin Design Award and has been showcased in a 2017 publication' +
            ' of Texas Architect.',
          additionalDescription :  'In her spare time, Sarah loves to garden, spend time with her husband, William and her son, Kyle,' +
            ' and tend to her chickens. '
        };
        break;
      case 2 :
        info = {
          title : 'Architect and Interior Designer',
          name: 'Chelsea Scharbach',
          description : 'Chelsea received her Bachelors of Architecture from Oklahoma State University in 2009 and is a part of the ' +
            'NCARB. Hardworking, visual and detailed-oriented, Chelsea was made for the world of architecture. Chelsea finds ' +
            'solutions that exceed client expectations through her attentive listening and thorough research. Her previous construction' +
            ' experience gives her further insight on how to best execute designs in the real world.  \n' +
            '\n' +
            'With her keen design eye, Chelsea loves to work with artisans to produce custom-designed pieces for her clients.' +
            ' Chelsea’s most notable recent work includes the John Gaines Park Swim Center with Stanley Studio, which received the 2018' +
            ' AIA Austin Design Award.',
          additionalDescription :  'When not in the office, Chelsea can be found with her spouse, John and dog, Ulli, at her church or ' +
            'lifting weights at Atomic Athlete.'
        };
        break;
      case 3 :
        info = {
          title : 'Marketing and Social Media',
          name: 'Angelina Casillas',
          description : 'Angelina manages digital marketing for Workshop No. 5 with the help of her business partner, Jennifer Lo.' +
            ' Her Psychology and Sociology degrees from UT Austin have taught her to approach situations with various perspectives,' +
            ' making her excellent at finding common ground.  \n' +
            '\n' +
            'At work, Angelina enjoys showcasing inspirational female architects and flexing her creative muscles by photographing ' +
            'Workshop No. 5’s sites.',
          additionalDescription :  'Kind, comedic and fiercely loyal, Angelina loves furry creatures, traveling the world and hitting the' +
            ' trails, especially the national parks.'
        };
        break;
    }
    return info;
  }
}
