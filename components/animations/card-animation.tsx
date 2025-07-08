import * as motion from 'motion/react-client';
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Variants } from 'motion/react';

const CardAnimation = () => {
  return (
    <div style={container}>
      {data.map((card, idx) => (
        <CustomCard key={idx} i={card[0]} text={card[1]} />
      ))}
    </div>
  );
};

interface CardProps {
  i: number;
  text: string;
}

function CustomCard({ i, text }: CardProps) {
  return (
    <motion.div
      className=""
      style={cardContainer}
      initial="offscreen"
      animate=""
      whileInView="onscreen"
      viewport={{ amount: 0.4 }}
    >
      <motion.div style={card} variants={cardVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Card no {i}</CardTitle>
          </CardHeader>
          <CardContent className="bg-amber-400">
            <div>CARD CONTENT: {text}</div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}
const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const data: [number, string][] = [
  [1, 'hello 1'],
  [2, 'hello 2'],
  [3, 'hello 3'],
  [4, 'hello 4'],
  [5, 'hello 5'],
  [6, 'hello 6'],
  [7, 'hello 7'],
];

const container: React.CSSProperties = {
  margin: '100px auto',
  maxWidth: 500,
  paddingBottom: 100,
  width: '100%',
};

const cardContainer: React.CSSProperties = {
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  paddingTop: 100,
  marginBottom: 0,
};

const card: React.CSSProperties = {
  fontSize: 50,
  width: 1000,
  height: 400,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  background: '#f5f5f5',
  boxShadow:
    '0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)',
  transformOrigin: '10% 60%',
};

export default CardAnimation;
