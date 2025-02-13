import { boolean } from 'yup';

export const DUMMY_QUIZ_DATA = [
  {
    category: 'General knowledge',
    question: 'What gas is usually used to make balloons float?',
    correctAnswer: '3',
    options: [
      { option: 'Oxygen', id: '1' },
      { option: 'Helium', id: '2' },
      { option: 'Nitrogen', id: '3' },
      { option: 'Carbon dioxide', id: '4' },
    ],
  },
  {
    category: 'General knowledge',
    question: 'Which country is known for the first rubber balloons?',
    correctAnswer: '3',
    options: [
      { option: 'USA', id: '1' },
      { option: 'Germany', id: '2' },
      { option: 'UK', id: '3' },
      { option: 'France', id: '4' },
    ],
  },
  {
    category: 'General knowledge',
    question: 'What happens to a helium balloon when you release it?',
    correctAnswer: '2',
    options: [
      { option: 'It falls immediately', id: '1' },
      { option: 'It floats up and eventually bursts', id: '2' },
      { option: 'It stays in the air forever', id: '3' },
      { option: 'It changes color', id: '4' },
    ],
  },
  {
    category: 'General knowledge',
    question:
      'What is the world record for the longest time a balloon has stayed inflated?',
    correctAnswer: '4',
    options: [
      { option: '1 week', id: '1' },
      { option: '1 month', id: '2' },
      { option: '3 years', id: '3' },
      { option: '10 years', id: '4' },
    ],
  },
  {
    category: 'General knowledge',
    question: 'What are most modern balloons made of?',
    correctAnswer: '2',
    options: [
      { option: 'Plastic', id: '1' },
      { option: 'Rubber or latex', id: '2' },
      { option: 'Paper', id: '3' },
      { option: 'Metal', id: '4' },
    ],
  },
];
