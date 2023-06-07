import { BsCheck, BsChevronRight } from 'react-icons/bs'

import { ICourse, IFact, IPrice } from './interfaces'

export const facts: IFact[] = [
  {
    startNumber: 1,
    endNumber: 5,
    unit: '',
    title: 'Years of Experience',
    desc: 'We are 5 years of experienced in this yoga field. Giving the best instructions.'
  },
  {
    startNumber: 1,
    endNumber: 5,
    unit: 'K',
    title: 'Happy Clients',
    desc: 'We have over five thousand clients all over the world. They are very satisfied.'
  },
  {
    startNumber: 1,
    endNumber: 15,
    unit: '',
    title: 'Experienced Trainers',
    desc: 'We have over fifteen dedicated and experienced trainer for yoga and meditation.'
  },
  {
    startNumber: 1,
    endNumber: 24,
    unit: '',
    title: 'Monthly Classes',
    desc: 'Yoga is a physical, mental and spritual practice discipline. We provide 24+ classes monthly.'
  }
]

export const courses: ICourse[] = [
  {
    image: 'img/courses/course-1.png',
    title: 'Resortive Yoga Training & Immersion',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: 600
  },
  {
    image: 'img/courses/course-2.png',
    title: 'Resortive Yoga Training & Immersion',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: 800
  },
  {
    image: 'img/courses/course-3.png',
    title: 'Resortive Yoga Training & Immersion',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: 900
  }
]

export const pricing: IPrice[] = [
  {
    title: 'Single yoga class',
    price: 15,
    list: [
      {
        Icon: BsCheck,
        name: 'Pay as you go'
      },
      {
        Icon: BsCheck,
        name: 'Perfect for non-residence'
      },
      {
        Icon: BsCheck,
        name: 'Acces to all classes'
      }
    ],
    buttonText: 'Book now',
    ButtonIcon: BsChevronRight,
    delay: 600
  },
  {
    title: 'Single yoga class',
    price: 60,
    list: [
      {
        Icon: BsCheck,
        name: 'Pay as you go'
      },
      {
        Icon: BsCheck,
        name: 'Perfect for non-residence'
      },
      {
        Icon: BsCheck,
        name: 'Acces to all classes'
      },
      {
        Icon: BsCheck,
        name: 'Acces to all mentors'
      }
    ],
    buttonText: 'Book now',
    ButtonIcon: BsChevronRight,
    delay: 800
  },
  {
    title: 'Single yoga class',
    price: 150,
    list: [
      {
        Icon: BsCheck,
        name: 'Pay as you go'
      },
      {
        Icon: BsCheck,
        name: 'Perfect for non-residence'
      },
      {
        Icon: BsCheck,
        name: 'Acces to all classes'
      },
      {
        Icon: BsCheck,
        name: 'Acces to all mentors'
      }
    ],
    buttonText: 'Book now',
    ButtonIcon: BsChevronRight,
    delay: 900
  }
]
