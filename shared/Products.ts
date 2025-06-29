import { IProduct } from '@/@types'

export interface IProductData {
  [key: number]: IProduct
}

export const productData: IProductData = {
  1: {
    name: 'Шуба из меха норки',
    furType: 'каракуль',
    additionalMaterial: 'Подкладка-шелк',
    price: '1 640 000 ₽',
    category: 'Премиум',
    images: [
      'https://st-cdn.tsum.com/sig/a693490193ee74af260d9d2d4adb0053/width/763/i/89/c2/21/ac/00d6e8c0-5779-4cc2-8e6c-be8796e4ecba.jpg',
      'https://st-cdn.tsum.com/sig/0158cc7596ef5a9a0f0318bbd143324c/width/763/i/89/c2/21/ac/8a763147-febc-11ef-b80d-b4969139ea48.jpg',
      'https://st-cdn.tsum.com/sig/0541a3a712d59cf550a6b9a5b46e2a6a/width/763/i/89/c2/21/ac/8a81cd35-febc-11ef-b80d-b4969139ea48.jpg',
      'https://st-cdn.tsum.com/sig/917ef953c86e91fb1186c6f26dbc462b/width/763/i/89/c2/21/ac/8aa10718-febc-11ef-b80d-b4969139ea48.jpg',
      'https://st-cdn.tsum.com/sig/f496244208dc7c3e89f47279316046ab/width/763/i/89/c2/21/ac/8aab02bd-febc-11ef-b80d-b4969139ea48.jpg',
      'https://st-cdn.tsum.com/sig/fab07936c3665e0abd2aaffa6da7e66b/width/763/i/89/c2/21/ac/8abd444f-febc-11ef-b80d-b4969139ea48.jpg',
      'https://st-cdn.tsum.com/sig/4a664304134cc6cf6483c8d6b2d1def0/width/763/i/89/c2/21/ac/8acc64ac-febc-11ef-b80d-b4969139ea48.jpg'
    ],
    description:
      'Длинную шубу сшили из перфорированного меха норки. На нем вручную сымитировали арановую вязку, искусно вырезав детали из меха американской норки по эскизам художников. Модель на шелковом подкладе застегивается потайными крючками.',
    details: {
      material: 'Мех/норка/: 100%',
      lining: 'Шелковая подкладка',
      origin: 'Россия',
      sizes: '42-54',
      colors: ['Кремовый'],
      care: 'Профессиональная чистка'
    },
    features: [
      '100% натуральный мех высочайшего качества',
      'Ручная работа мастеров с многолетним опытом',
      'Эксклюзивный дизайн',
      'Индивидуальная подгонка по фигуре'
    ],
    purchaseLink: 'https://www.tsum.ru/product/he00905744-shuba-iz-mekha-norki-sablefur-kremovyi/'
  },
  2: {
    name: 'Шуба из свакары',
    furType: 'каракуль',
    additionalMaterial: 'Подкладка-шелк',
    price: '2 780 000 ₽',
    category: 'Премиум',
    images: [
      'https://st-cdn.tsum.com/sig/72f8c4aece9d719471ef42db8d09fcef/width/763/i/78/73/6b/bc/8a2e994d-60af-40e5-a58e-7a6bd3371af1.jpg',
      'https://st-cdn.tsum.com/sig/6168ff404853299e35ab4cf75e9c3dc8/width/763/i/78/73/6b/bc/92920923-fdbc-478f-973b-65c9394db7d4.jpg',
      'https://st-cdn.tsum.com/sig/60b14cc0951569aecae6a0854b106c69/width/763/i/78/73/6b/bc/67fa5c9d-0cb4-47ae-9026-662bf372a720.jpg',
      'https://st-cdn.tsum.com/sig/5f747e18a44a9b6055848b54c444a2ae/width/763/i/78/73/6b/bc/2825a947-36be-4061-818a-adf4b54a2583.jpg',
      'https://st-cdn.tsum.com/sig/2c9655663184db3d8b74fc19285b4a91/width/763/i/78/73/6b/bc/0fce7537-e0cd-4ed5-9fef-0fb1382416ac.jpg',
      'https://st-cdn.tsum.com/sig/6709fce377f7b808b04363d6e9712514/width/763/i/78/73/6b/bc/30154c06-7c75-4096-a9fe-e5823cbf180c.jpg',
      'https://st-cdn.tsum.com/sig/d464a09db4c4c081c42931264de9bc38/width/763/i/78/73/6b/bc/aad6aebc-8c9e-4edd-a54b-46f03320cb12.jpg'
    ],
    description:
      'Для пошива шубы с потайной застежкой использовали каракуль скавара с характерным муаровым рисунком и деликатным блеском. Внутри – подклад из шелкового атласа в тон. По бокам предусмотрели карманы и высокие разрезы.',
    details: {
      material: 'Мех/каракуль/: 100%',
      lining: 'Подкладка-шелк: 100%',
      origin: 'Россия',
      sizes: '42-74',
      colors: ['Светло-серый'],
      care: 'Профессиональная чистка'
    },
    features: [
      '100% натуральный мех высочайшего качества',
      'Ручная работа мастеров с многолетним опытом',
      'Эксклюзивный дизайн',
      'Индивидуальная подгонка по фигуре'
    ],
    purchaseLink: 'https://www.tsum.ru/product/he00905743-shuba-iz-svakary-sablefur-svetlo-seryi/'
  },
  3: {
    name: 'Шуба из меха норки',
    furType: 'норка',
    additionalMaterial: 'Подкладка-шелк',
    price: '1 640 000 ₽',
    category: 'Премиум',
    images: [
      'https://st-cdn.tsum.com/sig/a9d9d7206f585af850b5179a29dfa6f4/width/763/i/ba/f4/9a/ae/82d606ba-71b9-42bf-a90f-7746792d407d.jpg',
      'https://st-cdn.tsum.com/sig/1b61d32937a2c1d1ffd66b5f5e08109d/width/763/i/ba/f4/9a/ae/96c3b72f-d448-4798-9ff1-e339edd87002.jpg',
      'https://st-cdn.tsum.com/sig/84de3414d3fa1d7c8d0db4309524560f/width/763/i/ba/f4/9a/ae/c117161d-6ef4-4505-8643-73d03619690e.jpg',
      'https://st-cdn.tsum.com/sig/97711de90494b3571a5305489bfc6c53/width/763/i/ba/f4/9a/ae/1293ebec-40c6-4fd6-84c7-a4bba29073d2.jpg',
      'https://st-cdn.tsum.com/sig/546c5d710f9c1eb76c58657c86e958c2/width/763/i/ba/f4/9a/ae/e1e1a15d-e144-4501-808c-f6a3adae432a.jpg',
      'https://st-cdn.tsum.com/sig/9afb3e1e38b6e9c531d01b7f256b75ee/width/763/i/ba/f4/9a/ae/2be0578f-a205-40e8-9e56-04975209e25e.jpg',
      'https://st-cdn.tsum.com/sig/89e346a55c6bb75a2ab7b188ce234f36/width/763/i/ba/f4/9a/ae/7c4cec49-9b5d-45c8-8f39-e0abbaf17342.jpg',
      'https://st-cdn.tsum.com/sig/2b08d5ae90921fe4340aab8d147ef629/width/763/i/ba/f4/9a/ae/5bc11a87-47ae-4b26-88fa-4be194cd95c4.jpg'
    ],
    description:
      'Клетчатую шубу со спущенной линией плеч и круглым вырезом сшили из меха норки, которому придали рифленую фактуру. Модель с потайной застежкой и боковыми карманами дополнили широким парным шарфом с длинной бахромой на концах.',
    details: {
      material: 'Мех/норка/: 100%',
      lining: 'Подкладка-шелк: 100%',
      origin: 'Россия',
      sizes: '42-74',
      colors: ['Разноцветный'],
      care: 'Профессиональная чистка'
    },
    features: [
      '100% натуральный мех высочайшего качества',
      'Ручная работа мастеров с многолетним опытом',
      'Эксклюзивный дизайн',
      'Индивидуальная подгонка по фигуре'
    ],
    purchaseLink:
      'https://www.tsum.ru/product/he00905745-shuba-iz-mekha-norki-sablefur-raznotcvetnyi/'
  }
}
