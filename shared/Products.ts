import { Product, productSchema } from '@/utils/validation'

export interface ProductData {
  [key: number]: Product
}

const normalizeImages = (images: any[], productName: string) =>
  images.map(img => (typeof img === 'string' ? { src: img, alt: productName } : img))

export const validateAndTransformProducts = (rawData: any): ProductData => {
  const validatedData: ProductData = {}

  Object.entries(rawData).forEach(([id, product]: [string, any]) => {
    const productWithId = { ...product, id: parseInt(id) }
    const validation = productSchema.safeParse(productWithId)

    if (validation.success) {
      validatedData[parseInt(id)] = validation.data
    }
  })

  return validatedData
}

let productDataCache: ProductData | null = null

export const getProductData = (): ProductData => {
  if (!productDataCache) {
    const rawProductData = {
      1: {
        name: 'Шуба из меха норки',
        furType: ['каракуль'],
        price: '1 640 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/0158cc7596ef5a9a0f0318bbd143324c/width/763/i/89/c2/21/ac/8a763147-febc-11ef-b80d-b4969139ea48.jpg',
            alt: 'Шуба из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/a693490193ee74af260d9d2d4adb0053/width/763/i/89/c2/21/ac/00d6e8c0-5779-4cc2-8e6c-be8796e4ecba.jpg',
            alt: 'Шуба из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/0541a3a712d59cf550a6b9a5b46e2a6a/width/763/i/89/c2/21/ac/8a81cd35-febc-11ef-b80d-b4969139ea48.jpg',
            alt: 'Шуба из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/917ef953c86e91fb1186c6f26dbc462b/width/763/i/89/c2/21/ac/8aa10718-febc-11ef-b80d-b4969139ea48.jpg',
            alt: 'Шуба из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/f496244208dc7c3e89f47279316046ab/width/763/i/89/c2/21/ac/8aab02bd-febc-11ef-b80d-b4969139ea48.jpg',
            alt: 'Шуба из меха норки'
          }
        ],
        description:
          'Длинную шубу сшили из перфорированного меха норки. На нем вручную сымитировали арановую вязку, искусно вырезав детали из меха американской норки по эскизам художников. Модель на шелковом подкладе застегивается потайными крючками.',
        details: [
          'Материал: Мех/норка/: 100%',
          'Подкладка: Шелковая подкладка',
          'Происхождение: Россия',
          'Размеры: 42-54',
          'Уход: Профессиональная чистка'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00905744-shuba-iz-mekha-norki-sablefur-kremovyi/'
      },
      2: {
        name: 'Шуба из свакары',
        furType: ['каракуль'],
        additionalMaterial: 'Подкладка-шелк',
        price: '2 780 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/6168ff404853299e35ab4cf75e9c3dc8/width/763/i/78/73/6b/bc/92920923-fdbc-478f-973b-65c9394db7d4.jpg',
            alt: 'Шуба из свакары'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/72f8c4aece9d719471ef42db8d09fcef/width/763/i/78/73/6b/bc/8a2e994d-60af-40e5-a58e-7a6bd3371af1.jpg',
            alt: 'Шуба из свакары'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/60b14cc0951569aecae6a0854b106c69/width/763/i/78/73/6b/bc/67fa5c9d-0cb4-47ae-9026-662bf372a720.jpg',
            alt: 'Шуба из свакары'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/5f747e18a44a9b6055848b54c444a2ae/width/763/i/78/73/6b/bc/2825a947-36be-4061-818a-adf4b54a2583.jpg',
            alt: 'Шуба из свакары'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/2c9655663184db3d8b74fc19285b4a91/width/763/i/78/73/6b/bc/0fce7537-e0cd-4ed5-9fef-0fb1382416ac.jpg',
            alt: 'Шуба из свакары'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/6709fce377f7b808b04363d6e9712514/width/763/i/78/73/6b/bc/30154c06-7c75-4096-a9fe-e5823cbf180c.jpg',
            alt: 'Шуба из свакары'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/d464a09db4c4c081c42931264de9bc38/width/763/i/78/73/6b/bc/aad6aebc-8e9e-4edd-a54b-46f03320cb12.jpg',
            alt: 'Шуба из свакары'
          }
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
        purchaseLink:
          'https://www.tsum.ru/product/he00905743-shuba-iz-svakary-sablefur-svetlo-seryi/'
      },
      3: {
        name: 'Шуба из меха норки',
        furType: ['норка'],
        additionalMaterial: 'Подкладка-шелк',
        price: '1 640 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/1b61d32937a2c1d1ffd66b5f5e08109d/width/763/i/ba/f4/9a/ae/96c3b72f-d448-4798-9ff1-e339edd87002.jpg',
            alt: 'Шуба из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/a9d9d7206f585af850b5179a29dfa6f4/width/763/i/ba/f4/9a/ae/82d606ba-71b9-42bf-a90f-7746792d407d.jpg',
            alt: 'Шуба из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/84de3414d3fa1d7c8d0db4309524560f/width/763/i/ba/f4/9a/ae/c117161d-6ef4-4505-8643-73d03619690e.jpg',
            alt: 'Шуба из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/97711de90494b3571a5305489bfc6c53/width/763/i/ba/f4/9a/ae/1293ebec-40c6-4fd6-84c7-a4bba29073d2.jpg',
            alt: 'Шуба из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/546c5d710f9c1eb76c58657c86e958c2/width/763/i/ba/f4/9a/ae/e1e1a15d-e144-4501-808c-f6a3adae432a.jpg',
            alt: 'Шуба из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/9afb3e1e38b6e9c531d01b7f256b75ee/width/763/i/ba/f4/9a/ae/2be0578f-a205-40e8-9e56-04975209e25e.jpg',
            alt: 'Шуба из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/89e346a55c6bb75a2ab7b188ce234f36/width/763/i/ba/f4/9a/ae/7c4cec49-9b5d-45c8-8f39-e0abbaf17342.jpg',
            alt: 'Шуба из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/2b08d5ae90921fe4340aab8d147ef629/width/763/i/ba/f4/9a/ae/5bc11a87-47ae-4b26-88fa-4be194cd95c4.jpg',
            alt: 'Шуба из меха норки'
          }
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
      },
      4: {
        name: 'Шуба из меха оцелота и соболя',
        furType: ['оцелот', 'соболь'],
        additionalMaterial: 'Подкладка-шелк',
        price: '1 350 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/a0ff57e25a984dfa744b25ab7af62634/width/763/i/25/2c/b9/6a/1b83f2a4-ae3d-4682-bc67-dec039b73643.jpg',
            alt: 'Шуба из меха оцелота и соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/00df97cdd867aca860ad1bd09879bcae/width/763/i/25/2c/b9/6a/fcd348a7-af06-4f73-84ba-8c230a5658b5.jpg',
            alt: 'Шуба из меха оцелота и соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/a9b23e51e52bd9a7ffd13f53097c8fbb/width/763/i/25/2c/b9/6a/626c53bc-18a5-4e01-aaed-288fe32c639e.jpg',
            alt: 'Шуба из меха оцелота и соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/08105bda0e5281ec2d8629e78a6d5c2d/width/763/i/25/2c/b9/6a/787899c4-aed4-48ea-8c61-a42618f48ae1.jpg',
            alt: 'Шуба из меха оцелота и соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/a5f1d447ed505590521d8d8e38ee1d7b/width/763/i/25/2c/b9/6a/adbc54c0-008b-42a8-911b-8e6ce6cf7acb.jpg',
            alt: 'Шуба из меха оцелота и соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/d32c583a41824161b6f53828b713a6fe/width/763/i/25/2c/b9/6a/3165b737-de9e-40cc-a171-8c776b396156.jpg',
            alt: 'Шуба из меха оцелота и соболя'
          }
        ],
        description:
          'Шубу со спущенной линией плеч и супатной застежкой сшили из тонко выделанного вручную меха оцелота. Модель с шелковистым подкладом дополнили манжетами и съемным воротником из меха соболя.',
        details: {
          material: 'Мех/оцелот/соболь/: 100%',
          lining: 'Подкладка-шелк: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Леопардовый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00798294-shuba-iz-mekha-otcelota-i-sobolya-sablefur-leopardovyi/'
      },
      5: {
        name: 'Шуба из меха лисы',
        furType: ['лиса'],
        additionalMaterial: 'Подкладка-шелк',
        price: '1 312 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/06c99012d250569120e4911e098f067f/width/763/i/20/77/23/d7/5583010c-9577-4e55-a08f-14205148ffdd.jpg',
            alt: 'Шуба из меха лисы'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/954cca37fe936430f872807f98897cbf/width/763/i/20/77/23/d7/e922eae2-22ea-424a-8789-682b60e136d1.jpg',
            alt: 'Шуба из меха лисы'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/7039505a1ab08e07a086ee9e8406c3ee/width/763/i/20/77/23/d7/ceb2cf75-dd66-46fe-8c0a-204a720765fe.jpg',
            alt: 'Шуба из меха лисы'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/ca632c16448c15f4b19822eb26455ec9/width/763/i/20/77/23/d7/4915742f-a22b-46f4-91a3-88baf04aa07a.jpg',
            alt: 'Шуба из меха лисы'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/f16aa84e4aa8e4bc251f9698d93fc2fb/width/763/i/20/77/23/d7/4ea4a842-30f0-4e07-a0f4-0cb56a5ed3de.jpg',
            alt: 'Шуба из меха лисы'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/83543218aff5ccc84d174f4d09cdc531/width/763/i/20/77/23/d7/d8f831ca-bfbd-45ea-bade-e1ca4e5b3a80.jpg',
            alt: 'Шуба из меха лисы'
          }
        ],
        description:
          'Шубу с абстрактным узором изготовили из стриженого меха лисы. Модель с широким английским воротником и атласным подкладом застегивается потайными крючками.',
        details: {
          material: 'Мех/лиса/: 100%',
          lining: 'Подкладка-шелк: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Бежевый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00897330-shuba-iz-mekha-lisy-sablefur-bezhevyi/'
      },
      6: {
        name: 'Шуба из каракульчи',
        furType: ['каракуль'],
        additionalMaterial: 'Подкладка-шелк',
        price: '1 650 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/1d8f43d0a18a41a3b59bb510773fdca3/width/763/i/f0/9b/f7/c4/44932dd8-4b01-4848-9b16-20c576003d56.jpg',
            alt: 'Шуба из каракульчи'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/3c03c356444d74ef8dd334ce02693ce5/width/763/i/f0/9b/f7/c4/801cd0d5-1f3f-4755-bebe-f8a993d1efb7.jpg',
            alt: 'Шуба из каракульчи'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/35d51aa52095d5eb14c7d5ca460a8f7f/width/763/i/f0/9b/f7/c4/15997765-2bc0-4928-9e1d-2465ef7b1040.jpg',
            alt: 'Шуба из каракульчи'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/1c3211496f7102e8dc7ef8b3ee758c6d/width/763/i/f0/9b/f7/c4/0c785d4a-67fd-4497-9c03-828709fcb9b1.jpg',
            alt: 'Шуба из каракульчи'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/6be3f5537e0467e5599968834f1cffed/width/763/i/f0/9b/f7/c4/7136679c-78bf-4d18-b684-095f978128b7.jpg',
            alt: 'Шуба из каракульчи'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/fd0d7dd532bb1f322db86c84a349ec0b/width/763/i/f0/9b/f7/c4/7eee5c7f-9bbb-4e86-87cc-f85aa9eb5bbf.jpg',
            alt: 'Шуба из каракульчи'
          }
        ],
        description:
          'Прямую шубу с отложным воротником сшили из каракульчи с естественным муаровым рисунком. Модель с шелковым подкладом застегивается пуговицами в тон.',
        details: {
          material: 'Мех/каракульча/: 100%',
          lining: 'Подкладка-шелк: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Бордовый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00897329-shuba-iz-karakulchi-sablefur-bordovyi/'
      },
      7: {
        name: 'Шуба из меха соболя',
        furType: ['соболь'],
        additionalMaterial: null,
        price: '3 410 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/174730c95b5d095ed1cfdbabc9199d46/width/763/i/61/e1/ce/68/61e1ce68-26a6-3cce-a3c2-93f521b9fc1f.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/f6bffa16ebb2e2359bd320381e45e26c/width/763/i/fc/65/ff/c2/fc65ffc2-0125-3754-9502-b34c706e38f3.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/7a35e1266fe8f0e6642e2f2c9e568db2/width/763/i/c5/1c/2d/d2/c51c2dd2-14fa-3e31-b672-0853bb22f6b0.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/d745eb2e020659bfb03d586b1f4b5cff/width/763/i/b3/93/4e/cb/b3934ecb-77b8-375b-a95f-31c4c170dd62.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/06fb7532aa9a0dc8bdc92fffe483d28c/width/763/i/97/ce/9d/07/97ce9d07-f484-36ee-b656-7e886c0d7fd6.jpg',
            alt: 'Шуба из меха соболя'
          }
        ],
        description:
          'Для пошива шубы с широкими лацканами использовали пушистый мех баргузинского соболя с характерной густой подпушью и длинным остом, искрящимся в лучах света. Этот материал тонкой выделки согревает в русские морозы и слегка тянется, не ограничивая движений. Из шелковистой пушнины двух оттенков сложили шевронный узор, украсивший всю поверхность модели. В комплекте &mdash; пояс-лента.',
        details: {
          material: 'Мех/соболь/: 100%',
          lining: null,
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Коричневый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00804436-shuba-iz-mekha-sobolya-sablefur-korichnevyi/'
      },
      8: {
        name: 'Шуба из меха оцелота',
        furType: ['оцелот'],
        additionalMaterial: null,
        price: '1 350 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/34b26d7200de81cdef6acdff9884593e/width/763/i/c9/e8/7a/69/c9e87a69-ec25-37dd-9e4f-6249166198f4.jpg',
            alt: 'Шуба из меха оцелота'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/dd70c4add5fb3cb0a6c30295a73dd51e/width/763/i/12/bf/b6/fa/12bfb6fa-02ce-36be-a11f-c9674922633d.jpg',
            alt: 'Шуба из меха оцелота'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/255e5ee5fbad7c4e3c9a43a42e073219/width/763/i/1a/fa/14/fd/1afa14fd-5729-36e5-ba99-557171f0fc98.jpg',
            alt: 'Шуба из меха оцелота'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/73ddcaa4c95796f17a0aa612f7551bf4/width/763/i/fb/9a/58/e3/fb9a58e3-492d-32fd-9615-5cf0e1a9b3a5.jpg',
            alt: 'Шуба из меха оцелота'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/9cbfe47cbfc39a16d5a3995920f3e3ec/width/763/i/63/f6/f7/ff/63f6f7ff-e84d-382b-965b-6833e7a1b328.jpg',
            alt: 'Шуба из меха оцелота'
          }
        ],
        description:
          'Для пошива шубы мастера бренда использовали легкий мягкий мех оцелота, тщательно подобрав шкурки с ворсом одинаковой длины и плотности. Природный пятнистый рисунок каждой из них уникален, поэтому двух одинаковых изделий не существует. Из такого же драгоценного материала выполнен и длинный съемный пояс-лента, которым можно подчеркнуть приталенный силуэт. В комплекте – отстегивающийся однотонный воротник темно-коричневого цвета.',
        details: {
          material: 'Мех/оцелот/: 100%',
          lining: null,
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Леопардовый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00804437-shuba-iz-mekha-otcelota-sablefur-leopardovyi/'
      },
      9: {
        name: 'Шуба из меха соболя',
        furType: ['соболь'],
        additionalMaterial: null,
        price: '3 410 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/4258d374e18234f8a459f83bd47213f8/width/763/i/07/19/57/f7/071957f7-c89e-3874-902f-c1359d1f7d0d.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/41f671cdfd2621725d2c7ecd8bf9ba5d/width/763/i/c2/4c/11/47/c24c1147-a526-35c1-b1fd-04cd25d469fd.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/ec27f49c84f7541efb90c66fcc65f017/width/763/i/eb/41/51/ed/eb4151ed-484d-35c8-9689-84b4f635cf75.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/1b69671b00c1eb6ad2e66b7896e2059d/width/763/i/f7/0e/70/a1/f70e70a1-4924-3ee1-b68d-9205a0053d44.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/3c0e9ca158069ad917e38ee14712ebee/width/763/i/4a/97/d1/e7/4a97d1e7-1a95-37b7-a612-5ec690673193.jpg',
            alt: 'Шуба из меха соболя'
          }
        ],
        description:
          'Для создания шубы с высоким воротом и объемными рукавами использовали ценный мех баргузинского соболя. Тщательно отобранные по густоте, длине ворса и блеску шкурки тонко выделали, чтобы они стали легче и пластичнее, но не потеряли свою природную прочность. Из пушнины двух оттенков сформировали фактурный шевронный мотив.',
        details: {
          material: 'Мех/соболь/: 100%',
          lining: null,
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Коричневый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00804002-shuba-iz-mekha-sobolya-sablefur-korichnevyi/'
      },
      10: {
        name: 'Шуба из меха оцелота и соболя',
        furType: ['оцелот', 'соболь'],
        additionalMaterial: 'Подкладка-шелк',
        price: '1 350 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/55a48123dbb0717aca52a77436a4e985/width/763/i/f3/3c/25/35/f33c2535-04b1-34b4-beac-410c79c73713.jpg',
            alt: 'Шуба из меха оцелота и соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/9602903c424c5d0f5a4a1cde8836b909/width/763/i/a9/45/de/f1/a945def1-875c-3f71-9abe-7cde919559b5.jpg',
            alt: 'Шуба из меха оцелота и соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/2dd92d2189e004aa736738e076938c6d/width/763/i/63/14/ef/c8/6314efc8-4500-3fa8-a3c8-50995142f28d.jpg',
            alt: 'Шуба из меха оцелота и соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/fcc6e103fac231b37b6659199a7839d4/width/763/i/66/fb/ea/55/66fbea55-8765-36f3-abae-76f394dc07a1.jpg',
            alt: 'Шуба из меха оцелота и соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/5d9d20c1ea6e1d3ed4399022064c62e0/width/763/i/bc/f7/20/01/bcf72001-5e27-380c-91d4-22f5e0f87ffd.jpg',
            alt: 'Шуба из меха оцелота и соболя'
          }
        ],
        description:
          'В дизайне этой шубы команда марки вывела на первый план естественный рисунок на коротком мехе оцелота. Двух диких кошек с одинаковым окрасом найти невозможно, поэтому динамичные полосы и пятна на каждом изделии складываются в неповторимый узор. С его черным цветом рифмуются широкие манжеты и длинный съемный воротник, выполненные из шелковистого баргузинского соболя с характерной сединой.',
        details: {
          material: 'Мех/оцелот/соболь/: 100%',
          lining: 'Подкладка-шелк: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Коричневый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00798294-shuba-iz-mekha-otcelota-i-sobolya-sablefur-korichnevyi/'
      },
      11: {
        name: 'Шуба из меха соболя',
        furType: ['соболь', 'каракуль'],
        additionalMaterial: 'Подкладка-шелк',
        price: '1 860 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/1dd5255ddcd0c89311bf2fbcc1ca51ba/width/763/i/82/13/7e/e8/82137ee8-0d36-3693-945d-301ed94a34bf.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/fb613a90cb74b367dbc11a8b44b9134f/width/763/i/e1/13/26/a6/e11326a6-ba76-3115-b429-8aac1cd37297.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/a164690017de51e8b072797580638b0e/width/763/i/07/a9/f6/89/07a9f689-e341-3cc1-99cc-a4cabf26d0c5.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/db73918eaeecf2c12a51f1c8ab0f70ce/width/763/i/6d/3d/38/98/6d3d3898-431d-35ef-9de6-226953bef19e.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/81a81dcafeb366f80dca1eb27f915552/width/763/i/17/5e/d0/bd/175ed0bd-3ba5-3ecb-a7ae-c463f05673f3.jpg',
            alt: 'Шуба из меха соболя'
          }
        ],
        description:
          'Крупный шевронный узор на укороченной шубе на первый взгляд кажется сформированным стрижкой. Вблизи графичный рисунок оборачивается полотном, выполненным в технике пэчворк из двух материалов. Мастера марки раскроили длинный мех баргузинского соболя на симметричные отрезы и соединили их не друг с другом, а с узкими полосами из каракуля. Волнистое руно повторяет темно-коричневый оттенок более пышного материала, поэтому остается почти незаметным.',
        details: {
          material: 'Мех/соболь/каракуль: 100%',
          lining: 'Подкладка-шелк: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Темно-коричневый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00798300-shuba-iz-mekha-sobolya-sablefur-temno-korichnevyi/'
      },
      12: {
        name: 'Шуба из меха соболя',
        furType: ['соболь', 'каракуль'],
        additionalMaterial: 'Подкладка-шелк',
        price: '3 600 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/561c6a2aa401426f7348a904cf221aa4/width/763/i/8e/52/8d/52/8e528d52-7edb-331d-a4b6-9b32c878b70e.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/c9273735c0eea0ccc7a800ee5e692523/width/763/i/a4/d6/46/67/a4d64667-a65d-3c74-bac9-b74cee46854f.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/595c4a72c9f4bdac802de99f70445528/width/763/i/58/dc/f3/51/58dcf351-dd63-396d-840d-554947929b3b.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/5a162b793fee51dea295311d88986d15/width/763/i/ee/05/84/44/ee058444-6923-32ff-a2d8-30a17b41049b.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/414dadcdd7e435685ca577474bae1d4b/width/763/i/86/f9/2f/46/86f92f46-711e-3b9f-9786-2f03ff91125f.jpg',
            alt: 'Шуба из меха соболя'
          }
        ],
        description:
          'Свободная шуба с коротким воротником сшита из баргузинского соболя, который ценится больше других подвидов. У животных родом с берегов Байкала мех не только особенно пышный и мягкий, но и окрашен в настолько темные оттенки коричневого, что кажется черным. За длинной остью и плотной подпушью нежного материала скрываются узкие вставки из волнистого каракуля в тон, сформировавшие рельефный шевронный узор.',
        details: {
          material: 'Мех/соболь/каракуль: 100%',
          lining: 'Подкладка-шелк: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Темно-коричневый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00798299-shuba-iz-mekha-sobolya-sablefur-temno-korichnevyi/'
      },
      13: {
        name: 'Шуба из меха соболя',
        furType: ['соболь'],
        additionalMaterial: 'Подкладка-шелк',
        price: '1 400 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/0fcbf24bd4c28001fef02f49ebdff926/width/763/i/6b/80/27/e7/6b8027e7-d6eb-34e0-b0e2-6e3b0d701374.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/5ea9fb103820cde7ca90624ebddeb98a/width/763/i/a7/3f/b7/c6/a73fb7c6-a45c-35ac-b5e5-fe0752153d7a.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/c06012251e13eecab33786ac3b2dba45/width/763/i/18/12/60/0d/1812600d-551e-3cc9-b0f5-05ba85a4d398.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/943867020fd60cd124528923a5431978/width/763/i/5a/ea/07/a1/5aea07a1-4d40-3746-a43f-191043046ce9.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/6efe27463b19d9071380cdfb321628f1/width/763/i/79/9c/dd/22/799cdd22-06db-31bc-a465-c900ca94705a.jpg',
            alt: 'Шуба из меха соболя'
          }
        ],
        description:
          'Мастера марки скроили свободную укороченную шубу по лекалам пончо и наделили ее такой же легкостью. С тканями в весе спорит неокрашенный мех самого ценного из соболей – баргузинского. Особую густоту и нежность благородного материала подчеркнули узкие ленты цветочного кружева, под которыми скрыт текстильный подклад. Связующим звеном между ажурными и меховыми полосами стал темно-коричневый оттенок.',
        details: {
          material: 'Мех/соболь/: 100%',
          lining: 'Подкладка-шелк: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Темно-коричневый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00798295-shuba-iz-mekha-sobolya-sablefur-temno-korichnevyi/'
      },
      14: {
        name: 'Кашемировое пальто с отделкой из меха соболя',
        furType: ['кашемир'],
        additionalMaterial: 'Отделка-мех/соболь',
        price: '1 254 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/08805e64d368907530d7573c60d1102a/width/763/i/eb/5c/8f/4f/5184140d-8966-4a9a-9f2e-e9cf450df074.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/88f466b6d55426d12a77003dd63468ee/width/763/i/eb/5c/8f/4f/24281d05-4688-498f-91aa-a5c1a3c7198d.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/639260f665bedf82013c6c352b7487b4/width/763/i/eb/5c/8f/4f/ad0ac5d4-faad-4a6f-944f-00e8ff07d97d.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/6ae2faa3494abcaf1fb6e747e3ed8b52/width/763/i/eb/5c/8f/4f/be55e122-8698-44a3-b92c-a437db76fe03.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/b74f4b7be92adcb67fb37b3271758dc7/width/763/i/eb/5c/8f/4f/74e3d6bf-8ec5-4d4d-95f2-cb5227fe3b57.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          }
        ],
        description:
          'Кашемировое пальто с узким кожаным кантом на манжетах и по краям накладных карманов дополнили поясом, продетым в кулиску на спинке. Спереди модель отделали тонко выделанным мехом соболя.',
        details: {
          material: 'Кашемир: 100%',
          lining: 'Отделка-мех/соболь/: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Фиолетовый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00897331-kashemirovoe-palto-s-otdelkoi-iz-mekha-sobolya-sablefur-fioletovyi/?sizeId=14231154'
      },
      15: {
        name: 'Кашемировое пальто с отделкой из меха норки',
        furType: ['кашемир'],
        additionalMaterial: 'Отделка-мех/норка',
        price: '1 112 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/3fd1951ac0a27c99c495a8ac18f08a1b/width/763/i/e9/0b/1e/e3/0f9a7af4-6139-4e26-99cc-303eeb7fa487.jpg',
            alt: 'Кашемировое пальто с отделкой из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/08cbf70abd79de5285b69c1d1470f89e/width/763/i/e9/0b/1e/e3/c768c6ec-b0ad-4c7a-915f-06981f173c57.jpg',
            alt: 'Кашемировое пальто с отделкой из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/ffb5ebfe118300040cf844b109d073d1/width/763/i/e9/0b/1e/e3/ae1ef955-3902-4718-a2fe-302b2db72c25.jpg',
            alt: 'Кашемировое пальто с отделкой из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/88257b91d5b52094e5ea6aadf01080b9/width/763/i/e9/0b/1e/e3/7ec32b72-5c81-4d65-b34e-29fa17a14176.jpg',
            alt: 'Кашемировое пальто с отделкой из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/f9af11aa2fc5352dc2822b3352f64139/width/763/i/e9/0b/1e/e3/dacd9216-8881-4f38-af0c-a7c0f54d2838.jpg',
            alt: 'Кашемировое пальто с отделкой из меха норки'
          }
        ],
        description:
          'Пальто с рукавами реглан и боковыми карманами сшили из плотного кашемира. Спереди модель дополнили отделкой с диагональным узором, выполненной из тонко выделанного меха соболя. В комплекте &mdash; пояс-лента.',
        details: {
          material: 'Кашемир: 100%',
          lining: 'Отделка-мех/норка/: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Бежевый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00897333-kashemirovoe-palto-s-otdelkoi-iz-mekha-norki-sablefur-bezhevyi/?sizeId=14231167'
      },
      16: {
        name: 'Кашемировое пальто с отделкой из меха соболя',
        furType: ['кашемир'],
        additionalMaterial: 'Отделка-мех/соболь',
        price: '1 254 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/5c0a08050244cd33ec8048ea784b4565/width/763/i/d2/0f/97/22/10aaede5-e2af-424f-a7d8-0bf2db42a439.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/3c3722e909b20dcd59d0e51ec6544b39/width/763/i/d2/0f/97/22/dd640019-9ed0-4bc9-ab89-516a736c2afd.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/b1c7625fd4df33e58036eef3693bb7c1/width/763/i/d2/0f/97/22/feb87ceb-487e-4089-8f49-85223fbe6cef.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/af538393838fe23558b08180618eecbf/width/763/i/d2/0f/97/22/bcaf4b6b-fcdb-494c-9ef8-9ea03bab332c.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/98ac9685ca22a7455d980a5823a0d536/width/763/i/d2/0f/97/22/49a0fcef-b599-484f-be75-0ffd7cd24f1f.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          }
        ],
        description:
          'Кашемировое пальто с двумя накладными карманами дополнили поясом с кисточками, продетым в кулиску на спинке. Отделку полочек выполнили из меха соболя породы «Черный» из собственного зверохозяйства марки.',
        details: {
          material: 'Кашемир: 100%',
          lining: 'Отделка-мех/соболь/: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Кремовый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00900280-kashemirovoe-palto-s-otdelkoi-iz-mekha-sobolya-sablefur-kremovyi/?sizeId=14231166'
      },
      17: {
        name: 'Кашемировое пальто с отделкой из меха соболя',
        furType: ['кашемир'],
        additionalMaterial: 'Отделка-мех/соболь',
        price: '1 254 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/2cc2c4ec0508c3ac75c3a3a81991e614/width/763/i/c1/b8/aa/5c/80e99af4-aa05-447a-b397-3c1de745853c.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/1c8afaf2c67169ee3c705d341d23b61f/width/763/i/c1/b8/aa/5c/bf11172a-14bb-4664-b910-fa53ce062e53.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/11c2d4ccde5e7e5151a6166a97084cab/width/763/i/c1/b8/aa/5c/072d9fa0-bb1c-446b-b180-c788e10d7c10.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/4162a791cd1578abc4208a622ade17b4/width/763/i/c1/b8/aa/5c/26f580d5-893a-4e4f-a33d-8097584dd227.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/9ae9fef1ef6be7e8b18ff4759543bef1/width/763/i/c1/b8/aa/5c/6f7b49e9-7528-49bf-bfad-72a8f0e05480.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          }
        ],
        description:
          'Пальто с накладными карманами и узким кожаным поясом, продетым кулиску на спинке, сшили из кашемировой ткани с диагональным плетением. Края полочек дополнили отделкой, выполненной из выделанного вручную меха черного соболя.',
        details: {
          material: 'Кашемир: 100%',
          lining: 'Отделка-мех/соболь/: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Темно-синий'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00900281-kashemirovoe-palto-s-otdelkoi-iz-mekha-sobolya-sablefur-temno-sinii/?sizeId=14231169'
      },
      18: {
        name: 'Кашемировая парка с подкладкой из меха соболя и норки',
        furType: ['кашемир'],
        additionalMaterial: 'Отделка-мех/соболь; Подкладка-мех/норка',
        price: '1 920 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/b9722f81b5a06cfbebb586ee3f09312e/width/763/i/cb/fa/e6/09/69817f53-1d72-42db-925e-d740c610e9a9.jpg',
            alt: 'Кашемировая парка с подкладкой из меха соболя и норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/a90d3a0e8d57043a48fd1ea40ca05bc6/width/763/i/cb/fa/e6/09/3bd8f952-26f4-45a1-ac9b-ba70a8358d53.jpg',
            alt: 'Кашемировая парка с подкладкой из меха соболя и норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/97433681eadf25e5c5c5c2e174f0e734/width/763/i/cb/fa/e6/09/ceb5bfad-edae-40e1-8fb1-bfb9384c7464.jpg',
            alt: 'Кашемировая парка с подкладкой из меха соболя и норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/ed5736bee091aa35cd49faa773a27df5/width/763/i/cb/fa/e6/09/a7177d5c-6eb5-4771-bf93-1372cde3b767.jpg',
            alt: 'Кашемировая парка с подкладкой из меха соболя и норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/8ac53779f13a1ec586a64dc2ca5a477d/width/763/i/cb/fa/e6/09/e6c43e12-320c-48ae-b624-b8fcf00a4fb0.jpg',
            alt: 'Кашемировая парка с подкладкой из меха соболя и норки'
          }
        ],
        description:
          'Парку из кашемира с шевронным узором утеплили мехом норки, а для отделки капюшона и манжет с молниями использовали неокрашенного соболя. Проймы рукавов реглан и боковые карманы укреплены кожей. Приталенный силуэт сформировали с помощью пояса-ленты, пропущенного сквозь кулиску.',
        details: {
          material: 'Кашемир: 100%',
          lining: 'Подкладка-мех/соболь/: 100%; Подкладка-мех/норка/: 100%;',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Серый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00900279-kashemirovaya-parka-s-podkladkoi-iz-mekha-sobolya-i-norki-sablefur-seryi/?sizeId=14229867'
      },
      19: {
        name: 'Жилет из меха соболя',
        furType: ['соболь'],
        additionalMaterial: 'Подкладка-вискоза',
        price: '1 067 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/f762763a5cfb88a49932b71aee1b983c/width/763/i/d4/b9/3c/79/2458a104-2bce-46e2-a450-20124a01de54.jpg',
            alt: 'Жилет из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/96e93b53af5c9f0ccdace18d6a3e38a9/width/763/i/d4/b9/3c/79/9f981068-398b-4984-85e7-059857d30842.jpg',
            alt: 'Жилет из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/207aa4c6ba5e1db8c5c57cce38c80a96/width/763/i/d4/b9/3c/79/2c5b5351-5d18-4afe-8cd2-9b84e4a14352.jpg',
            alt: 'Жилет из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/d34c0c6d2a5c9f99168138b316d253bd/width/763/i/d4/b9/3c/79/364fbf92-57b9-4ef2-bbb3-23fae839999b.jpg',
            alt: 'Жилет из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/341dfaac2bc489ff23d13a5b1456f29f/width/763/i/d4/b9/3c/79/1caf5018-6ce3-4e68-99dc-0a0ec9e4af99.jpg',
            alt: 'Жилет из меха соболя'
          }
        ],
        description:
          'Жилет благородного кофейного оттенка выполнили из мягкого меха соболя, который славится своей способностью сохранять тепло. Чтобы изделие комфортно садилось по фигуре и не утяжеляло силуэт, пушнину тонко выделали, сделав ее легче и пластичнее. Бежевый подклад, чуть более длинный, чем основная часть, сшили из шелковистой вискозы.',
        details: {
          material: 'Мех соболь: 100%',
          lining: 'Подкладка-вискоза: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Темно-коричневый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00860972-zhilet-iz-mekha-sobolya-sablefur-temno-korichnevyi/?sizeId=13724910'
      },
      20: {
        name: 'Кашемировое пальто',
        furType: ['соболь'],
        additionalMaterial: 'Подкладка-кашемир',
        price: '1 254 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/e45daae2df4186d57263b800717fd56b/width/763/i/10/03/68/1a/8329c640-8fa2-4557-bd8b-c004ea7e7983.jpg',
            alt: 'Кашемировое пальто'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/cac937e3367c653156a772f4dda5e510/width/763/i/10/03/68/1a/118d8b1f-07ce-4d75-bf05-1d3881c096a9.jpg',
            alt: 'Кашемировое пальто'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/ce3b4b472e44a8de1cdae3879f40fb82/width/763/i/10/03/68/1a/609ff5c4-b9db-4515-8965-df313ad559f7.jpg',
            alt: 'Кашемировое пальто'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/491f92c4a9d0050ead17f7a98fa9508e/width/763/i/10/03/68/1a/6d97d978-43d1-431c-9da0-2ca54a9acb6f.jpg',
            alt: 'Кашемировое пальто'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/1706b40a25783a3b8e84236cb894a766/width/763/i/10/03/68/1a/82e0a6cb-4a0b-4731-9361-3e756ccd9c49.jpg',
            alt: 'Кашемировое пальто'
          }
        ],
        description:
          'Для изготовления кремового пальто выбрали мягкий, приятный на ощупь кашемир, созданный из почти невесомого пуха высокогорных коз. Благодаря суровым климатическим условиям, в которых обитают эти животные, такой материал приобретает способность поддерживать оптимальную терморегуляцию. Отделку выполнили из густого шелковистого меха благородного шоколадного оттенка. В комплекте — узкий пояс.',
        details: {
          material: 'Мех/соболь/: 100%',
          lining: 'Подкладка-кашемир/: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Кремовый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00860973-kashemirovoe-palto-sablefur-kremovyi/?sizeId=13660936'
      },
      21: {
        name: 'Кашемировое пальто',
        furType: ['кашемир'],
        additionalMaterial: null,
        price: '1 254 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/b9ffc7676904675719526ad10e8d5f9c/width/763/i/4c/94/9a/bb/a8bcfa29-bb51-4b5e-8cdf-572b464a7d14.jpg',
            alt: 'Кашемировое пальто'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/506392c5482495a36b0ea1f196d0a359/width/763/i/4c/94/9a/bb/3d6b439c-854a-45f2-bd67-1ea47a86854e.jpg',
            alt: 'Кашемировое пальто'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/9fb3763c0c863297321302d0873016a4/width/763/i/4c/94/9a/bb/318cfd62-5a34-45e6-a711-f29afcbf8398.jpg',
            alt: 'Кашемировое пальто'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/e5ee5beabe7e219b63a33ee3e4609038/width/763/i/4c/94/9a/bb/681de8a2-6bf8-4110-812a-3b54de6222fa.jpg',
            alt: 'Кашемировое пальто'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/6832a9cdf4f88fd8c81932812d563ad7/width/763/i/4c/94/9a/bb/258e45a2-1d85-49cd-bc76-ba9ce5031dbc.jpg',
            alt: 'Кашемировое пальто'
          }
        ],
        description:
          'Коричневое пальто с двумя накладными карманами поможет выглядеть элегантно даже в ненастную погоду. Модель с цельнокроеными рукавами выполнили из почти невесомого, но при этом исключительно теплого кашемира. Для широкой опушки использовали безупречно выделанный мех соболя, выведенного в собственном зверохозяйстве. Линию талии подчеркивает узкий кожаный пояс, продетый в кулиску.',
        details: {
          material: 'Кашемир: 100%; Мех: 100%;',
          lining: null,
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Коричневый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00860974-kashemirovoe-palto-sablefur-korichnevyi/?sizeId=13715435'
      },
      22: {
        name: 'Кашемировое пальто',
        furType: ['кашемир'],
        additionalMaterial: 'Отделка-мех/соболь',
        price: '1 254 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/c67a920553b89022933e3bf573f75cdd/width/763/i/75/97/93/9a/7597939a-f0af-3f39-8c17-f221ec0cebb8.jpg',
            alt: 'Кашемировое пальто'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/99e23cc53e9597b3a56d79ee127cd77e/width/763/i/54/13/3e/c3/54133ec3-65b5-3ed7-b2e5-a61428e94759.jpg',
            alt: 'Кашемировое пальто'
          },

          {
            src: 'https://st-cdn.tsum.com/sig/1137b565ad445019020ae5699a1a2178/width/763/i/fb/83/9a/72/fb839a72-40b2-3c2d-b8b5-b87c2bf3f2aa.jpg',
            alt: 'Кашемировое пальто'
          },

          {
            src: 'https://st-cdn.tsum.com/sig/560961abec4d0cbd6dd6a0dc3d1aeee3/width/763/i/bc/02/4d/48/bc024d48-2bbf-3d34-b42f-9e7c3d18d5c3.jpg',
            alt: 'Кашемировое пальто'
          },

          {
            src: 'https://st-cdn.tsum.com/sig/5a0f52ce33bff5fab61e31be8b0c9d94/width/763/i/92/25/df/35/9225df35-4228-383a-b683-2c3ca8cfbf66.jpg',
            alt: 'Кашемировое пальто'
          }
        ],
        description:
          'Бежевое пальто с клетчатой жаккардовой фактурой делает максимально комфортным мягкий нежный кашемир, который хорошо удерживает тепло. Отделку воротника, плавно переходящую в кант по краю полочек, выполнили из пушистого меха баргузинского соболя, тщательно подобранного по цвету и длине остевого волоса. Детали кропотливо собрали вручную, сформировав полосатый узор. Посадка на талии регулируется кожаным шнуром, продетым в кулиску.',
        details: {
          material: 'Кашемир: 100%',
          lining: 'Отделка-мех/соболь/: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Бежевый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00850720-kashemirovoe-palto-sablefur-bezhevyi/?sizeId=13527331'
      },
      23: {
        name: 'Кашемировый кейп',
        furType: ['кашемир'],
        additionalMaterial: 'Отделка-мех/соболь',
        price: '925 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/311f94d75f9c81f3da595d0c76ea6b0e/width/763/i/e7/93/a5/d6/e793a5d6-d405-379a-85f6-fdde490a6c40.jpg',
            alt: 'Кашемировый кейп'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/6c137d306d0b2c6bb3e42c7786577e82/width/763/i/10/57/bf/a4/1057bfa4-4f6f-39f8-af77-26857da7862f.jpg',
            alt: 'Кашемировый кейп'
          },

          {
            src: 'https://st-cdn.tsum.com/sig/5f1b7c1f84615c512a29624353085162/width/763/i/06/65/25/d6/066525d6-4b47-33de-b8a5-a0d3b74bb351.jpg',
            alt: 'Кашемировый кейп'
          },

          {
            src: 'https://st-cdn.tsum.com/sig/63d8a42ef651c41c5bb7679cd6356951/width/763/i/39/09/a8/fc/3909a8fc-0b93-3439-8ec4-ba8fcec1a317.jpg',
            alt: 'Кашемировый кейп'
          },

          {
            src: 'https://st-cdn.tsum.com/sig/c43ba23f923dfddcd50ceebb482317eb/width/763/i/f0/63/4e/55/f0634e55-0991-3885-b894-0d2a9278f952.jpg',
            alt: 'Кашемировый кейп'
          }
        ],
        description:
          'Терракотовый оттенок делает кейп акцентной деталью образа. За комфорт отвечает мягкий нежный кашемир, который почти ничего не весит и при этом поддерживает оптимальный микроклимат. Отделку отложного воротника, трансформирующегося в стойку, выполнили из шелковистого меха баргузинского соболя, искрящегося в лучах света. Длинный пояс-лента из тонкой кожи в тон поможет акцентировать талию.',
        details: {
          material: 'Кашемир: 100%',
          lining: 'Отделка-мех/соболь/: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Терракотовый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00850721-kashemirovyi-keip-sablefur-terrakotovyi/?sizeId=13527335'
      },
      24: {
        name: 'Кашемировое пальто с отделкой из меха соболя',
        furType: ['кашемир'],
        additionalMaterial: 'Отделка-мех/соболь; Подкладка-шёлк',
        price: '1 140 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/c6bc11391e70e74c43c60e512a520be6/width/763/i/f8/a4/de/73/f8a4de73-2db2-3540-8b0c-50a3e31dd441.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/9a48fb8ad3afe0e572d3feeabec1112c/width/763/i/fb/73/eb/c2/fb73ebc2-6718-3559-baa5-e81aa5a9aae6.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/3746d7905ea2bee3c2682dafb833d000/width/763/i/4c/09/43/9c/4c09439c-9c3b-320a-add3-e370bee80ebd.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/e65230681e2e7636aa9eea154fa452cc/width/763/i/19/19/df/96/1919df96-4352-3c43-ad43-baedb26023de.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/7ad2fa201b433cd37d7056a21af79181/width/763/i/4e/29/0d/d2/4e290dd2-bcee-3ed5-a8ed-c9719ccbfa9b.jpg',
            alt: 'Кашемировое пальто с отделкой из меха соболя'
          }
        ],
        description:
          'Команда марки сделала длинное пальто максимально комфортным и при этом эффектным. Модель сшили из нежного плотного кашемира, хорошо удерживающего тепло, а для отделки использовали сияющий мех баргузинского соболя характерного шоколадного оттенка. Длинный шнур, продетый в пояс-кулиску, формирует приталенный силуэт. Его, как и узкий кант, подчеркивающий отвороты манжет, выполнили из тонкой кожи.',
        details: {
          material: 'Кашемир: 100%',
          lining: 'Отделка-мех/соболь/: 100%; Подкладка-шелк: 100%;',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Темно-синий'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00798296-kashemirovoe-palto-s-otdelkoi-iz-mekha-sobolya-sablefur-temno-sinii-id13622869/?sizeId=13527330'
      },
      25: {
        name: 'Кашемировый кейп',
        furType: ['кашемир'],
        additionalMaterial: 'Отделка-мех/соболь',
        price: '925 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/fdf2213c2eeb363a17526003f158b37d/width/763/i/c6/f8/b7/07/c6f8b707-68c1-35f3-adf0-c33a755f38cb.jpg',
            alt: 'Кашемировый кейп'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/ade0d9320c142cd708dee680677a22f1/width/763/i/08/c5/f1/56/08c5f156-85ed-3151-a53f-e3cbd96ace79.jpg',
            alt: 'Кашемировый кейп'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/ec5da5b365a78c72ffde04bb89603f65/width/763/i/3e/c1/97/aa/3ec197aa-0f30-3f8d-b124-780267dcc6a8.jpg',
            alt: 'Кашемировый кейп'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/7a540b409d676246e45d7e32793bbd49/width/763/i/d3/e4/a0/5b/d3e4a05b-501d-3898-807e-c8b5ae65c76d.jpg',
            alt: 'Кашемировый кейп'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/caa2271322a74007e474b272630870ff/width/763/i/da/ef/07/f3/daef07f3-13e0-33b5-aced-2773cfaa6a6b.jpg',
            alt: 'Кашемировый кейп'
          }
        ],
        description:
          'Коричневый кейп сшили из мягкого нежного кашемира. Модель из такого материала почти ничего не весит и при этом мягко окутывает теплом. Отделку воротника выполнили из шелковистого меха баргузинского соболя, искрящегося в лучах света. Изделие, застегивающееся потайными пуговицами, дополнили длинным поясом-лентой, формирующим приталенный силуэт.',
        details: {
          material: 'Кашемир: 100%',
          lining: 'Отделка-мех/соболь/: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Коричневый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00850722-kashemirovyi-keip-sablefur-korichnevyi/?sizeId=13527333'
      },
      26: {
        name: 'Кашемировый кейп с воротником из меха рыси',
        furType: ['кашемир'],
        additionalMaterial: 'Отделка-мех/рысь',
        price: '315 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/2db3f4fe3c6b1951ef02e34d3be4027a/width/763/i/41/42/f4/3d/4142f43d-a6e2-3337-9df3-53751513062b.jpg',
            alt: 'Кашемировый кейп с воротником из меха рыси'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/e8c72b63229f8240ed3aae5233116ded/width/763/i/64/b2/93/d7/64b293d7-8693-31c1-b56d-f2e9639d3f07.jpg',
            alt: 'Кашемировый кейп с воротником из меха рыси'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/55a5ded3aef79619685cd388fb097a5c/width/763/i/f0/dc/3a/1d/f0dc3a1d-4b07-30c1-a480-a40519e48c42.jpg',
            alt: 'Кашемировый кейп с воротником из меха рыси'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/e8b1c53b8e1edb0b9dd7cecef86f2515/width/763/i/9a/35/ca/50/9a35ca50-1ed6-336e-81e4-8fa1c4ba2d4d.jpg',
            alt: 'Кашемировый кейп с воротником из меха рыси'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/92e455a6418ae29f083c375d4432fa78/width/763/i/ac/b5/b7/eb/acb5b7eb-7689-3cfa-b80f-6e60fc60c188.jpg',
            alt: 'Кашемировый кейп с воротником из меха рыси'
          }
        ],
        description:
          'Кейп деликатного кремового оттенка предлагает не выбирать между комфортом и элегантностью. Поставить знак равенства помогает съемный воротник из пушистого меха рыси с густым шелковистым подпушком. Для пошива модели с бахромой дизайнеры марки выбрали нежнейший кашемир, который не только мягче обычной шерсти, но и лучше согревает, оставаясь почти невесомым.',
        details: {
          material: 'Кашемир: 100%',
          lining: 'Отделка-мех/рысь/: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Кремовый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00816653-kashemirovyi-keip-s-vorotnikom-iz-mekha-rysi-sablefur-kremovyi/?sizeId=13164726'
      },
      27: {
        name: 'Кашемировый кейп с воротником из меха рыси',
        furType: ['кашемир'],
        additionalMaterial: 'Отделка-мех/рысь',
        price: '315 000 ₽',
        category: 'Премиум',
        images: [
          {
            src: 'https://st-cdn.tsum.com/sig/4f2aa106ad3ed37479b5cacf79a69dcb/width/763/i/80/97/97/cd/809797cd-2741-3ad2-97b2-f2b13569ec77.jpg',
            alt: 'Кашемировый кейп с воротником из меха рыси'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/303c56f2fbb4efe30e2859851a7df784/width/763/i/66/c6/f5/52/66c6f552-0453-35a4-9179-887057cad399.jpg',
            alt: 'Кашемировый кейп с воротником из меха рыси'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/f71b094b791ae0f163172245e8ab73a9/width/763/i/e4/03/b2/be/e403b2be-999d-3733-9674-9b530232f14b.jpg',
            alt: 'Кашемировый кейп с воротником из меха рыси'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/848fec26d391a032e159efeb2fe6b57d/width/763/i/ec/70/c7/cc/ec70c7cc-c592-3b2e-adfd-e98731f7c092.jpg',
            alt: 'Кашемировый кейп с воротником из меха рыси'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/284d38d4565ee50964e0adb37a702536/width/763/i/51/67/40/69/51674069-0360-3ca9-8750-aa7661eab765.jpg',
            alt: 'Кашемировый кейп с воротником из меха рыси'
          }
        ],
        description:
          'Для пошива кейпа с большими накладными карманами и бахромой использовали исключительно мягкий и приятный на ощупь кашемир с муаровым мотивом. Отборные длинные волокна этого материала сформировали изолирующий слой, который хорошо сохраняет тепло, но не перегревает. Акцентной деталью модели цвета кофе с молоком сделали широкий съемный воротник из нежнейшего меха рыси с выразительным природным рисунком.',
        details: {
          material: 'Кашемир: 100%',
          lining: 'Отделка-мех/рысь/: 100%',
          origin: 'Россия',
          sizes: '42-74',
          colors: ['Коричневый'],
          care: 'Профессиональная чистка'
        },
        features: [
          '100% натуральный мех высочайшего качества',
          'Ручная работа мастеров с многолетним опытом',
          'Эксклюзивный дизайн',
          'Индивидуальная подгонка по фигуре'
        ],
        purchaseLink:
          'https://www.tsum.ru/product/he00816654-kashemirovyi-keip-s-vorotnikom-iz-mekha-rysi-sablefur-korichnevyi/?sizeId=13164729'
      }
    }

    Object.values(rawProductData).forEach((product: any) => {
      if (Array.isArray(product.images)) {
        product.images = normalizeImages(product.images, product.name)
      }
    })

    Object.values(rawProductData).forEach((product: any) => {
      if (product.details && !Array.isArray(product.details)) {
        product.details = Object.entries(product.details).map(([key, value]) => `${key}: ${value}`)
      }
    })

    productDataCache = validateAndTransformProducts(rawProductData)
  }

  return productDataCache
}

export const productData: ProductData = getProductData()

export const getProductById = (id: number): Product | null => {
  return productData[id] || null
}

export const getAllProducts = (): Product[] => {
  return Object.values(productData)
}

export const getProductsByCategory = (category: string): Product[] => {
  return getAllProducts().filter(product => product.category === category)
}

export const getProductsByFurType = (furType: string): Product[] => {
  return getAllProducts().filter(product =>
    product.furType.some(type => type.toLowerCase().includes(furType.toLowerCase()))
  )
}
