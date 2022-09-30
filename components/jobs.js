// import meta  from '../pages/assets/company/meta.png'
// import meta from "../pages/assets/company/meta.png";
import Apply from './ApplyButton';

function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images = importAll(require.context('../pages/assets/company/', false, /\.(png|jpe?g|svg)$/));


export const jobs = [
  {
    logo: images["meta.png"],
    company: "Meta",
    companyWork:"Sass based company",
    hiringStatus:"Actively Hiring",
    growthStatus:"Growing Fast",
    role:"Frontend Engineer",
    location:"Bangalore or Remote",
    salary:"15-20L",
    apply: <Apply/>
  },

  {
    logo: images["apple.png"],
    company: "Apple",
    companyWork:"Sass based company",
    hiringStatus:"Actively Hiring",
    growthStatus:"Sass",
    role:"Machine Learning Engineer",
    location:"New York or Remote",
    salary:"$200-$300k",
    apply: <Apply/>
  },

  {
    logo: images["amazon.png"],
    company: "Amazon",
    companyWork:"Sass based company",
    hiringStatus:"Actively Hiring",
    growthStatus:"Tech Giant",
    role:"Fullstack Engineer",
    location:"Hyderbad",
    salary:"20-25L",
    apply: <Apply/>
  },

  {
    logo: images["amazon.png"],
    company: "Amazon",
    companyWork:"Sass based company",
    hiringStatus:"Actively Hiring",
    growthStatus:"Tech Giant",
    role:"Fullstack Engineer",
    location:"Hyderbad",
    salary:"20-25L",
    apply: <Apply/>
  },
  
  
];
