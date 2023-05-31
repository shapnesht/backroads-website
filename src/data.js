import image1 from './images/tour-1.jpeg'
import image2 from './images/tour-2.jpeg'
import image3 from './images/tour-3.jpeg'
import image4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', name: 'Home' },
  { id: 2, href: '#about', name: 'About' },
  { id: 3, href: '#services', name: 'Services' },
  { id: 4, href: '#tours', name: 'Tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    title: 'saving money',
    icon: 'fas fa-wallet fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    title: 'endless hiking',
    icon: 'fas fa-tree fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    title: 'amazing comfort',
    icon: 'fas fa-socks fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    date: 'august 26th, 2020',
    location: 'china',
    duration: '10 days',
    cost: 2100,
    image: image1,
  },
  {
    id: 2,
    title: 'Best of java',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    date: 'october 1th, 2020',
    location: 'indonesia',
    duration: '11 days',
    cost: 2400,
    image: image2,
  },
  {
    id: 3,
    title: 'Explore Hong Kong',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    date: 'september 15th, 2020',
    location: 'hong kong',
    duration: '8 days',
    cost: 5000,
    image: image3,
  },
  {
    id: 4,
    title: 'Kenya Highlights',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    date: 'december 5th, 2019',
    location: 'kenya',
    duration: '20 days',
    cost: 3300,
    image: image4,
  },
]
