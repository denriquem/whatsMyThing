import React, { useState } from "react";
import { 
  WhatsTheirThingContainer,
  ThingImage,
  ThingOptionsContainer,
  ThingOption
} from './WhatsTheirThingElements';
import ExampleThing from '../../images/ExampleThing.JPG'
import ExampleThing2 from '../../images/ExampleThing2.JPG' 

const Thangs = [
  {
    image: ExampleThing,
    answerOptions: [
      { answerText: 'Dulce de Lece', isCorrect: false },
      { answerText: 'The blood of my robot ancesters', isCorrect: false },
      { answerText: 'Dried adhesive', isCorrect: false },
      { answerText: 'Rust juice', isCorrect: true },
    ],
  },
  {
    image: ExampleThing2,
    answerOptions: [
      { answerText: 'Trash, just like us, its all fucking trash.', isCorrect: false },
      { answerText: 'Flower wrapper', isCorrect: false },
      { answerText: 'The shimmering bridge between this world and the next', isCorrect: false },
      { answerText: 'The remnants of a baked good time (all meanings implied)', isCorrect: true },
    ],
  }
];

  const WhatsTheirThing = () => {

    const [currentThang, setCurrentThang] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {
      if (isCorrect) {
        alert("You clearly are an astute fucker, aren't you? That's CORRECT!")
      } else {
        alert("You FOOL, you know nothing of the world around you.")
      }

      const nextThang = currentThang + 1;
      if (nextThang < Thangs.length) {
        setCurrentThang(nextThang);
      } else {
        alert('there be no more mysteries for you in this life.')
      }
    }

    return (
      <WhatsTheirThingContainer>
        <ThingImage src={Thangs[currentThang].image} />
        <ThingOptionsContainer>
          {Thangs[currentThang].answerOptions.map((answerOption, index) => (
            <ThingOption onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</ThingOption>
          ))}
        </ThingOptionsContainer> 
      </WhatsTheirThingContainer>
    )
  }

export default WhatsTheirThing;
