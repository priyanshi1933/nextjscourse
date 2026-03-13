import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  description: string;
  location: string;
};
const wondersImages:WonderImage[]=[
    {
        id:"1",
        name:"The Colosseum",
        src:photo1,
        description:"The Colosseum is the great oval amphitheater in the center of Rome where gladiators once fought for their lives and the pleasure of the crowd",
        location:"Italy",
    },
    {
        id:"2",
        name:"The Great Wall of China",
        src:photo2,
        description:"The Great Wall of China is a huge barrier that spans thousands of miles along China’s historic northern border",
        location:"China",
    },
    {
        id:"3",
        name:"The Taj Mahal",
        src:photo3,
        description:"India’s renowned Taj Mahal (Persian for Crown of Palaces) is the stunning white marble mausoleum on the bank of the Yamuna River in the city of Agra",
        location:"India",
    },
    {
        id:"4",
        name:"Christ the Redeemer",
        src:photo4,
        description:"The totemic statue of Christ the Redeemer stands over Rio de Janeiro on the top of Mount Corcovado",
        location:"Brazil",
    },
    {
        id:"5",
        name:"Machu Picchu",
        src:photo5,
        description:"Machu Picchu is a lost treasure of the 15th century and a rare citadel discovered high in the Andes mountains above the Peruvian Sacred Valley",
        location:"Peru",
    },
    {
        id:"6",
        name:"Chichén Itzá",
        src:photo6,
        description:"Deep in the Mexican state of Yucatán lies Chichen Itza, a historic Mayan city built between the 9th and 12th centuries",
        location:"Mexico",
    },
    {
        id:"7",
        name:"Petra",
        src:photo7,
        description:"Petra, the ancient city in southern Jordan, is also known as the “rose city” for its golden hue",
        location:"Jordan",
    },

]
export default wondersImages;