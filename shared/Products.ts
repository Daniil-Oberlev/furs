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
            src: 'https://st-cdn.tsum.com/sig/a693490193ee74af260d9d2d4adb0053/width/763/i/89/c2/21/ac/00d6e8c0-5779-4cc2-8e6c-be8796e4ecba.jpg',
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
            src: 'https://st-cdn.tsum.com/sig/72f8c4aece9d719471ef42db8d09fcef/width/763/i/78/73/6b/bc/8a2e994d-60af-40e5-a58e-7a6bd3371af1.jpg',
            alt: 'Шуба из свакары'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/6168ff404853299e35ab4cf75e9c3dc8/width/763/i/78/73/6b/bc/92920923-fdbc-478f-973b-65c9394db7d4.jpg',
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
            src: 'https://st-cdn.tsum.com/sig/a9d9d7206f585af850b5179a29dfa6f4/width/763/i/ba/f4/9a/ae/82d606ba-71b9-42bf-a90f-7746792d407d.jpg',
            alt: 'Шуба из меха норки'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/1b61d32937a2c1d1ffd66b5f5e08109d/width/763/i/ba/f4/9a/ae/96c3b72f-d448-4798-9ff1-e339edd87002.jpg',
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
            src: 'https://st-cdn.tsum.com/sig/00df97cdd867aca860ad1bd09879bcae/width/763/i/25/2c/b9/6a/fcd348a7-af06-4f73-84ba-8c230a5658b5.jpg',
            alt: 'Шуба из меха оцелота и соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/a0ff57e25a984dfa744b25ab7af62634/width/763/i/25/2c/b9/6a/1b83f2a4-ae3d-4682-bc67-dec039b73643.jpg',
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
            src: 'https://st-cdn.tsum.com/sig/954cca37fe936430f872807f98897cbf/width/763/i/20/77/23/d7/e922eae2-22ea-424a-8789-682b60e136d1.jpg',
            alt: 'Шуба из меха лисы'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/06c99012d250569120e4911e098f067f/width/763/i/20/77/23/d7/5583010c-9577-4e55-a08f-14205148ffdd.jpg',
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
            src: 'https://st-cdn.tsum.com/sig/3c03c356444d74ef8dd334ce02693ce5/width/763/i/f0/9b/f7/c4/801cd0d5-1f3f-4755-bebe-f8a993d1efb7.jpg',
            alt: 'Шуба из каракульчи'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/1d8f43d0a18a41a3b59bb510773fdca3/width/763/i/f0/9b/f7/c4/44932dd8-4b01-4848-9b16-20c576003d56.jpg',
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
            src: 'https://st-cdn.tsum.com/sig/f6bffa16ebb2e2359bd320381e45e26c/width/763/i/fc/65/ff/c2/fc65ffc2-0125-3754-9502-b34c706e38f3.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/174730c95b5d095ed1cfdbabc9199d46/width/763/i/61/e1/ce/68/61e1ce68-26a6-3cce-a3c2-93f521b9fc1f.jpg',
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
            src: 'https://st-cdn.tsum.com/sig/dd70c4add5fb3cb0a6c30295a73dd51e/width/763/i/12/bf/b6/fa/12bfb6fa-02ce-36be-a11f-c9674922633d.jpg',
            alt: 'Шуба из меха оцелота'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/34b26d7200de81cdef6acdff9884593e/width/763/i/c9/e8/7a/69/c9e87a69-ec25-37dd-9e4f-6249166198f4.jpg',
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
            src: 'https://st-cdn.tsum.com/sig/41f671cdfd2621725d2c7ecd8bf9ba5d/width/763/i/c2/4c/11/47/c24c1147-a526-35c1-b1fd-04cd25d469fd.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/4258d374e18234f8a459f83bd47213f8/width/763/i/07/19/57/f7/071957f7-c89e-3874-902f-c1359d1f7d0d.jpg',
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
            src: 'https://st-cdn.tsum.com/sig/9602903c424c5d0f5a4a1cde8836b909/width/763/i/a9/45/de/f1/a945def1-875c-3f71-9abe-7cde919559b5.jpg',
            alt: 'Шуба из меха оцелота и соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/55a48123dbb0717aca52a77436a4e985/width/763/i/f3/3c/25/35/f33c2535-04b1-34b4-beac-410c79c73713.jpg',
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
            src: 'https://st-cdn.tsum.com/sig/fb613a90cb74b367dbc11a8b44b9134f/width/763/i/e1/13/26/a6/e11326a6-ba76-3115-b429-8aac1cd37297.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/1dd5255ddcd0c89311bf2fbcc1ca51ba/width/763/i/82/13/7e/e8/82137ee8-0d36-3693-945d-301ed94a34bf.jpg',
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
            src: 'https://st-cdn.tsum.com/sig/c9273735c0eea0ccc7a800ee5e692523/width/763/i/a4/d6/46/67/a4d64667-a65d-3c74-bac9-b74cee46854f.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/561c6a2aa401426f7348a904cf221aa4/width/763/i/8e/52/8d/52/8e528d52-7edb-331d-a4b6-9b32c878b70e.jpg',
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
            src: 'https://st-cdn.tsum.com/sig/5ea9fb103820cde7ca90624ebddeb98a/width/763/i/a7/3f/b7/c6/a73fb7c6-a45c-35ac-b5e5-fe0752153d7a.jpg',
            alt: 'Шуба из меха соболя'
          },
          {
            src: 'https://st-cdn.tsum.com/sig/0fcbf24bd4c28001fef02f49ebdff926/width/763/i/6b/80/27/e7/6b8027e7-d6eb-34e0-b0e2-6e3b0d701374.jpg',
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
